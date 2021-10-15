# 3. nginx负载均衡

## 3.1 nginx负载均衡介绍

负载均衡的意思是在服务器集群中，需要有一台服务器作为调度者，客户端所有的请求都由调度者接收，调度者再根据每台服务器的负载情况，将请求分配给对应的服务器去处理；

在这个过程中，调度者如何合理分配任务，保证所有服务器将性能充分发挥，从而保持服务器集群的整体性能最优，这就是负载均衡的问题了。

## 3.2 nginx负载均衡的方式 

### 3.2.1 轮询方式      

轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除，如下配置后轮训10001服务和10002服务。

```cpp
    upstream  tqk001-server {
        server    127.0.0.1:5557;
        server    127.0.0.1:5555;
    }
    server {
        listen       9090;
        server_name  122.51.156.245;
        location / {
          proxy_pass http://tqk001-server;
          proxy_redirect default;
        }
    }

```

### 3.2.2 权重比例

指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能，如下配置后10002服务的访问比率会是10001服务的二倍。



```cpp
    upstream  tqk001-server {
        server    127.0.0.1:5557 weight=1;
        server    127.0.0.1:5555 weight=2;
    }
    server {
        listen       9090;
        server_name  122.51.156.245;
        location / {
          proxy_pass http://tqk001-server;
          proxy_redirect default;
        }
    }
```

### 3.2.3 ip_hash--请求ip的hash结果分配

每个请求都根据访问ip的hash结果分配，经过这样的处理，**每个访客固定访问一个后端服务**，如下配置（ip_hash可以和weight配合使用）。

```cpp
upstream  tqk001-server {
    ip_hash; 
    server    127.0.0.1:5557 weight=1;
    server    127.0.0.1:5555 weight=2;
}
```

### 3.2.4 least_conn--最少连接

**将请求分配到连接数最少的服务上**。

```cpp
upstream  tqk001-server {
    least_conn;
    server    127.0.0.1:5557 weight=1;
    server    127.0.0.1:5555 weight=2;
}
```

### 3.2.5 fair--响应时间

**按后端服务器的响应时间来分配请求，响应时间短的优先分配**。 需要插件来帮我们实现  

<a title="" href='https://github.com/gnosek/nginx-upstream-fair'>下载地址：https://github.com/gnosek/nginx-upstream-fair</a>


```sh
#下载安装包并解压处理

#安装
./configure --with-http_ssl_module --with-http_stub_status_module  --with-http_gzip_static_module  --add-module=/mydata/nginx-upstream-fair-master

#完成后直接make,注意不要make install
make
```

https://www.cnblogs.com/alca0126/articles/14040879.html
目录一定和本地文件对应好,之前有加入其它模块也要同时加入。完成后直接make,注意不要make install。

此步骤可能出现异常：

nginx-upstream-fair/ngx_http_upstream_fair_module.c:543:28: error: ‘ngx_http_upstream_srv_conf_t’ has no member named ‘default_port’ if (us->port == 0 && us->default_port == 0) 

解决方案：

我们在nginx的编译目录下找到ngx_http_upstream.h配置文件的ngx_http_upstream_srv_conf_s模块，新增一个default_port即可。

./build/nginx-1.17.8/src/http/ngx_http_upstream.h

在编译完成后，旧的nginx执行文件先备份，然后拷贝新的

cp objs/nginx /usr/local/default_port/nginx/sbin/nginx

```sh
# 重新加载配置文件
# nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

#  重启
/usr/local/nginx/sbin/nginx  -s reload

# 查看即可看到新增加的模块
nginx -V 

```
--------------------------------

```cpp
upstream  tqk001-server {
    server    127.0.0.1:5557 weight=1;
    server    127.0.0.1:5555 weight=2;
    fair;  
}
```
./configure   --prefix=/usr/local/openresty/nginx  --with-http_image_filter_module=dynamic

### 3.2.6 Nginx完整配置

**以轮询为例，如下是nginx.conf完整代码**

```cpp
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    upstream  tqk001-server {
        server    127.0.0.1:5557 weight=1;
        server    127.0.0.1:5555 weight=2;
    }
    server {
        listen       9090;
        server_name  122.51.156.245;
        location / {
          proxy_pass http://tqk001-server;
          proxy_redirect default;
        }
    }
}
```

