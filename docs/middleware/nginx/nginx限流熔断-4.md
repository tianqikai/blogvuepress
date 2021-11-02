# 5. Nginx限流熔断
[[toc]]
## 5.1 令牌桶算法

![令牌桶算法](https://images2018.cnblogs.com/blog/802666/201805/802666-20180502140242681-53841293.jpg)

:::tip 算法思想:
- 令牌以固定速率产生，并缓存到令牌桶中；
- 令牌桶放满时，多余的令牌被丢弃；
- 请求要消耗等比例的令牌才能被处理；
- 令牌不够时，请求被缓存。
:::

## 5.2 漏桶算法

![漏桶算法](https://images2018.cnblogs.com/blog/802666/201805/802666-20180502140248838-284301317.png)

:::tip 算法思想 
- 水（请求）从上方倒入水桶，从水桶下方流出（被处理）；
- 来不及流出的水存在水桶中（缓冲），以固定速率流出；
- 水桶满后水溢出（丢弃）。
- 这个算法的核心是：缓存请求、匀速处理、多余的请求直接丢弃。
**相比漏桶算法，令牌桶算法不同之处在于它不但有一只“桶”，还有个队列，这个桶是用来存放令牌的，队列才是用来存放请求的。**

:::

从作用上来说，漏桶和令牌桶算法最明显的区别就是是否允许突发流量(burst)的处理，漏桶算法能够强行限制数据的实时传输（处理）速率，对突发流量不做额外处理；而令牌桶算法能够在限制数据的平均传输速率的同时允许某种程度的突发传输。

Nginx按请求速率限速模块使用的是**漏桶算法**，即能够强行保证请求的实时处理速度不会超过设置的阈值。

---------------------------------------------------------------------

## 5.3 Nginx限流案例

<a title='通过查看nginx官方文档' href='https://www.nginx.cn/doc/'>通过查看nginx官方文档，https://www.nginx.cn/doc/</a>


### 5.3.1 控制速率正常限流

**ngx_http_limit_req_module**模块提供限制请求处理速率能力，使用了**漏桶算法(leaky bucket)**

下面例子使用 nginx limit_req_zone 和 limit_req 两个指令，限制单个IP的请求处理速率。

在 nginx.conf http 中添加限流配置：

```sh
http{
    #限流配置
    limit_req_zone $binary_remote_addr zone=myRateLimit:10m rate=10r/s;

    server {
        listen       80;
        server_name  localhost;

        location / {
          limit_req zone=myRateLimit;
          proxy_pass http://122.51.156.245;
          index  index.html index.htm;
        }
    }
}
```

:::tip 限流参数
<font color='red'><strong>key</strong></font> ：定义限流对象，binary_remote_addr 是一种key，表示基于 remote_addr(客户端IP) 来做限流，binary_ 的目的是压缩内存占用量。

<font color='red'><strong>zone</strong></font>：定义共享内存区来存储访问信息， myRateLimit:10m 表示一个大小为10M，名字为myRateLimit的内存区域。1M能存储16000 IP地址的访问信息，10M可以存储16W IP地址访问信息。

<font color='red'><strong>rate</strong></font> 用于设置最大访问速率，rate=10r/s 表示每秒最多处理10个请求。Nginx 实际上以毫秒为粒度来跟踪请求信息，因此 10r/s 实际上是限制：每100毫秒处理一个请求。这意味着，自上一个请求处理完后，若后续100毫秒内又有请求到达，将拒绝处理该请求。
:::

### 5.3.2 处理突发流量

上面例子限制 10r/s，如果有时正常流量突然增大，超出的请求将被拒绝，无法处理突发流量，可以结合 <font color='red'><strong>burst</strong></font> 参数使用来解决该问题。

```sh
server {
    location / {
		limit_req zone=myRateLimit burst=20;
        proxy_pass http://122.51.156.245;
        index  index.html index.htm;
    }
}
```

burst 译为突发、爆发，表示在超过设定的处理速率后能额外处理的请求数。当 rate=10r/s 时，将1s拆成10份，即每100ms可处理1个请求。

此处，**burst=20**，若同时有21个请求到达，Nginx 会处理第一个请求，剩余20个请求将放入队列，然后每隔100ms从队列中获取一个请求进行处理。若请求数大于21，将拒绝处理多余的请求，直接返回503.

不过，单独使用 burst 参数并不实用。假设 burst=50 ，rate依然为10r/s，排队中的50个请求虽然每100ms会处理一个，但第50个请求却需要等待 50 * 100ms即 5s，这么长的处理时间自然难以接受。

因此，burst 往往结合 <font color='red'><strong>nodelay</strong></font> 一起使用。

```sh
server {
    location / {
		limit_req zone=myRateLimit burst=20 nodelay;
        proxy_pass http://122.51.156.245;
        index  index.html index.htm;
    }
}
```

nodelay 针对的是 burst 参数，burst=20 nodelay 表示**这20个请求立马处理，不能延迟，相当于特事特办**。不过即使这20个突发请求立马处理结束，后续来了请求也不会立马处理。burst=20 相当于缓存队列中占了20个坑，即使请求被处理了，这20个位置这只能按 100ms一个来释放。---**相当于是突发流量可以按最快的速率处理掉，但是后续超出的请求会被丢弃掉，直到burst坑位释放出来**

这就达到了速率稳定，但突然流量也能正常处理的效果。

### 5.3.3 限制连接数

ngx_http_limit_conn_module 提供了限制连接数的能力，利用 limit_conn_zone 和 limit_conn 两个指令即可。下面是 Nginx 官方例子：

```sh
limit_conn_zone $binary_remote_addr zone=perip:10m;
limit_conn_zone $server_name zone=perserver:10m;

server {
    ...
    limit_conn perip 10;
    limit_conn perserver 100;
}
```
:::tip 参数说明
limit_conn perip 10 作用的key 是 $binary_remote_addr，表示限制单个IP同时最多能持有10个连接。

limit_conn perserver 100 作用的key是 $server_name，表示虚拟主机(server) 同时能处理并发连接的总数。

需要注意的是：只有当 request header 被后端server处理后，这个连接才进行计数。
:::

### 5.3.4 设置白名单

限流主要针对外部访问，内网访问相对安全，可以不做限流，通过设置白名单即可。利用 Nginx ngx_http_geo_module 和 ngx_http_map_module 两个工具模块即可搞定。
在 nginx.conf 的 http 部分中配置白名单：

```sh
geo $limit {
    default 1;
    10.0.0.0/8 0;
    192.168.0.0/24 0;
    122.51.156.245 0;
}

map $limit $limit_key {
    0 "";
    1 $binary_remote_addr;
}

limit_req_zone $limit_key zone=myRateLimit:10m rate=10r/s;
```

geo 对于白名单(子网或IP都可以) 将返回0，其他IP将返回1。

map 将 **limit**转换为**limit_key**，如果是 $limit 是0(白名单)，则返回空字符串；如果是1，则返回客户端实际IP。

limit_req_zone 限流的key不再使用**binary_remote_addr**，而是**limit_key**动态获取值。

如果是白名单，limit_req_zone的限流key则为空字符串，将不会限流；  
若不是白名单，将会对客户端真实IP进行限流。  


### 5.3.5 ab测试安装结果

```sh
[root@VM-16-5-centos conf]# ab -c 1 -n 100   http://49.233.34.168/
This is ApacheBench, Version 2.3 <$Revision: 1430300 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 49.233.34.168 (be patient).....done


Server Software:        nginx/1.16.0
Server Hostname:        49.233.34.168
Server Port:            80

Document Path:          /
Document Length:        11228 bytes

Concurrency Level:      1
Time taken for tests:   8.407 seconds
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      1136200 bytes
HTML transferred:       1122800 bytes
Requests per second:    11.90 [#/sec] (mean)
Time per request:       84.066 [ms] (mean)
Time per request:       84.066 [ms] (mean, across all concurrent requests)
Transfer rate:          131.99 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.0      0       1
Processing:    48   84  39.3     65     174
Waiting:       47   56   8.6     53      81
Total:         48   84  39.3     65     174

Percentage of the requests served within a certain time (ms)
  50%     65
  66%    100
  75%    129
  80%    132
  90%    141
  95%    149
  98%    173
  99%    174
 100%    174 (longest request)
```