# 3. Feign性能调优

## 3.1 Gzip 压缩

**gzip 介绍**：gzip 是一种数据格式，采用 deflate 算法压缩数据；gzip 是一种流行的文件压缩算法，应用十分广泛，尤其是在 Linux 平台。

**gzip 能力**：当 Gzip 压缩一个纯文本文件时，效果是非常明显的，大约可以减少 70％ 以上的文件大小。

**gzip 作用**：网络数据经过压缩后实际上降低了网络传输的字节数，最明显的好处就是可以加快网页加载的速度。

网页加载速度加快的好处不言而喻，除了节省流量，改善用户的浏览体验外，另一个潜在的好处是 Gzip 与搜索引擎的抓取工具有着更好的关系。例如 Google 就可以通过直接读取 gzip 文件来比普通手工抓取更快地检索网页。

### HTTP协议关于压缩传输的规定

1. 客户端向服务器请求中带有： **Accept-Encoding:gzip ， deflate 字段**，向服务器表示客户端支持的压缩格式
（gzip 或者 deflate），如果不发送该消息头，服务端默认是不会压缩的。

2. 服务端在收到请求之后，如果发现请求头中含有 Accept-Encoding 字段，并且支持该类型压缩，就会对响应
报文压缩之后返回给客户端，并且携带 C**ontent-Encoding:gzip** 消息头，表示响应报文是根据该格式进行压
缩的。

3. 客户端接收到请求之后，先判断是否有 **Content-Encoding 消息头**，如果有，按该格式解压报文。否则按正常
报文处理。

### 3.1.1 Gzip压缩案例局部

只配置 Consumer 通过 Feign 到 Provider 的请求与相应的 Gzip 压缩。

#### 服务消费者 application.yml

```yml
# Feign gzip 压缩
feign:
  compression:
    request:
      # 配置压缩支持的 MIME TYPE
      mime-types: application/json,application/xml,text/html,text/xml,text/plain
      # 配置压缩数据大小的最小阈值，默认2048
      min-request-size: 256
      # 请求是否开启 gzip 压缩
      enabled: true
    response:
      # 响应是否开启 gzip 压缩
      enabled: true
```

### 3.1.2 Gzip压缩案例全局

对客户端浏览器的请求以及 Consumer 对 Provider 的请求与响应都实现 Gzip 压缩。

#### 服务消费者 application.yml

```yml
server:
 port: 9090 # 端口
 compression:
    # 是否开启压缩
   enabled: true
    # 配置压缩支持的 MIME TYPE
   mime-types: application/json,application/xml,text/html,text/xml,text/plain
```

<a data-fancybox title=" Feign" href="./image/Feign03.jpg">![Feign](./image/Feign03.jpg)</a>

## 3.2 HTTP 连接池

### 3.2.1 为什么要使用HTTP 连接池
1. 两台服务器建立 HTTP 连接的过程是很复杂的一个过程，涉及到多个数据包的交换，很耗时间。
2. HTTP 连接需要的 3 次握手 4 次挥手开销很大，这一开销对于大量的比较小的 HTTP 消息来说更大。

### 3.2.2 解决方案

采用 HTTP 连接池，可以节约大量的 3 次握手 4 次挥手，这样能大大提升吞吐量。

Feign 的 HTTP 客户端支持 3 种框架： HttpURLConnection 、 HttpClient 、 OkHttp ；默认是HttpURLConnection 。

可以通过查看源码
**org.springframework.cloud.openfeign.ribbon.FeignRibbonClientAutoConfiguration.java**得知。

传统的 HttpURLConnection 是 JDK 自带的，并不支持连接池，如果要实现连接池的机制，还需要自己来管理
连接对象。对于网络请求这种底层相对复杂的操作，如果有可用的其他方案，没有必要自己去管理连接对象。

**HttpClient** 相比传统 JDK 自带的 HttpURLConnection，它封装了访问 HTTP 的请求头，参数，内容体，响应等
等；
它不仅使客户端发送 HTTP 请求变得容易，而且也方便了开发人员测试接口（基于 HTTP 协议的），既提
高了开发的效率，又提高了代码的健壮性；另外高并发大量的请求网络的时候，也是用“连接池”提升吞吐量。

### 3.2.3  Feign的http客户端修改

**将 Feign 的 Http 客户端工具修改为 HttpClient。**

#### 添加依赖

修改 Consumer 项目，添加两个依赖，因为本文中使用的 Spring CLoud 版本已经默认集成了 apache
httpclient 依赖，所以只需要添加一个依赖即可。

```xml
    <!-- 当前版本已经默认集成了 apache httpclient 依赖 -->
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <version>4.5.11</version>
    </dependency>
    <!-- feign apache httpclient 依赖 -->
    <dependency>
            <groupId>io.github.openfeign</groupId>
            <artifactId>feign-httpclient</artifactId>
            <version>10.7.4</version>
    </dependency>
```

#### 配置文件

```yml
feign:
  httpclient:
    enabled: true # 开启 httpclient
```


**如果使用 HttpClient 作为 Feign 的客户端工**具。那么在定义接口上的注解是需要注意的，如果传递的参数
是一个自定义的对象（对象会使用 JSON 格式来专递），需要配置参数类型，例如：

```java
 @GetMapping(value ="/single/pojo", consumes = MediaType.APPLICATION_JSON_VALUE) 。
```
本文中使用的 Spring CLoud 版本，已无需手动配置。并且使用了 HttpClient 客户端以后，我们还可以通过 GET 请求传递对象参数。

### 3.2.4 测试

访问： http://localhost:9090/product/pojo?id=6&productName=耳机&productNum=1&productPrice=288

<a data-fancybox title=" Feign" href="./image/Feign04.jpg">![Feign](./image/Feign04.jpg)</a>


## 3.3 日志查看

浏览器发起的请求我们可以借助 F12 Devtools 中的 Network 来查看请求和响应信息。对于微服务中每个接口
我们又该如何查看 URL，状态码和耗时信息？我们可以使用配置日志的方式进行查看。



### 3.3.2 全局配置

 Consumer 项目启动类中注入 Feign 的 Logger 对象。

```java
    /**
     *    NONE：不记录任何信息，默认值
     *     BASIC：记录请求方法、请求 URL、状态码和用时
     *     HEADERS：在 BASIC 基础上再记录一些常用信息
     *     FULL：记录请求和相应的所有信息
     */
    @Bean
    public Logger.Level getLog() {
        return Logger.Level.FULL;
    }
```

### 3.3.3 局部配置
Consumer 项目 application.yml 中指定服务开启状态查看。

```yml
feign:
 client:
   config:
     service-provider: # 需要调用的服务名称
       loggerLevel: FULL
```

### 3.3.4 测试

访问：http://localhost:9090/order/1 核心日志信息如下：


```log
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> GET /product/5 HTTP/1.1
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Accept-Encoding: gzip
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Accept-Encoding: deflate
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Accept: */*
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Content-Length: 0
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Host: 192.168.0.105:7071
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> Connection: Keep-Alive
2021-12-04 19:26:59.912 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 >> User-Agent: Apache-HttpClient/4.5.11 (Java/1.8.0_144)
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "GET /product/5 HTTP/1.1[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Accept-Encoding: gzip[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Accept-Encoding: deflate[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Accept: */*[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Content-Length: 0[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Host: 192.168.0.105:7071[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "Connection: Keep-Alive[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "User-Agent: Apache-HttpClient/4.5.11 (Java/1.8.0_144)[\r][\n]"
2021-12-04 19:26:59.913 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 >> "[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "HTTP/1.1 200 [\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "Content-Type: application/json[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "Transfer-Encoding: chunked[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "Date: Sat, 04 Dec 2021 11:26:59 GMT[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "Keep-Alive: timeout=60[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "Connection: keep-alive[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "44[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.wire                     : http-outgoing-0 << "{"id":5,"productName":"[0xe5][0x86][0xb0][0xe7][0xae][0xb1]","productNum":1,"productPrice":2666.0}[\r][\n]"
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << HTTP/1.1 200 
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << Content-Type: application/json
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << Transfer-Encoding: chunked
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << Date: Sat, 04 Dec 2021 11:26:59 GMT
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << Keep-Alive: timeout=60
2021-12-04 19:26:59.916 DEBUG 9020 --- [nio-9090-exec-1] org.apache.http.headers                  : http-outgoing-0 << Connection: keep-alive
```

## 3.4 请求超时

Feign 的负载均衡底层用的就是 Ribbon，所以这里的请求超时配置其实就是配置 Ribbon。

分布式项目中，服务压力比较大的情况下，可能处理服务的过程需要花费一定的时间，而**默认情况下请求超时的配置是 1s** 所以我们需要调整该配置延长请求超时时间。

### 3.4.1 全局配置

Consumer 项目中配置请求超时的处理。

```yml
ribbon:
 ConnectTimeout: 5000 # 请求连接的超时时间 默认的时间为 1 秒
 ReadTimeout: 5000    # 请求处理的超时时间
```

### 3.4.2 局部配置

一般我们会根据服务的压力大小配置不同的服务超时处理，使用局部配置。

```yml
# service-provider 是需要调用的服务名称
service-provider:
 ribbon:
   OkToRetryOnAllOperations: true  # 对所有请求都进行重试
   MaxAutoRetries: 2               # 对当前实例的重试次数
   MaxAutoRetriesNextServer: 0     # 切换实例的重试次数
   ConnectTimeout: 3000            # 请求连接的超时时间
   ReadTimeout: 3000               # 请求处理的超时时间
```

### 3.4.3 测试

```java
    /**
     * 根据主键查询商品
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Product selectProductById(@PathVariable("id") Integer id) {
        //todo 模拟业务超时
        try {
            Thread.sleep(2000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return productService.selectProductById(id);
    }
```

<a data-fancybox title=" Feign" href="./image/Feign05.jpg">![Feign](./image/Feign05.jpg)</a>


## 3.5 消费者完整配置文件

```yml
server:
  port: 9090 # 端口
  compression:
    # 是否开启压缩
    enabled: true
    # 配置压缩支持的 MIME TYPE
    mime-types: application/json,application/xml,text/html,text/xml,text/plain,application/xhtml+xml

spring:
  application:
    name: Service-Consumer


eureka:
  client:
    register-with-eureka: false  # 是否将自己注册到注册中心，默认为 true
    registry-fetch-interval-seconds: 10  # 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒
    service-url:
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/
      
# Feign gzip 压缩
feign:
  compression:
    request:
      # 配置压缩支持的 MIME TYPE
      mime-types: application/json,application/xml,text/html,text/xml,text/plain,application/xhtml+xml
      # 配置压缩数据大小的最小阈值，默认2048
      min-request-size: 256
      # 请求是否开启 gzip 压缩
      enabled: true
    response:
      # 响应是否开启 gzip 压缩
      enabled: true

  #配置feign使用httpclient
  httpclient:
    enabled: true # 开启 httpclient

  # Consumer 项目 application.yml 中指定服务开启状态查看
  client:
    config:
      service-provider: # 需要调用的服务名称
        loggerLevel: FULL


#ribbon:
#  ConnectTimeout: 5000 # 请求连接的超时时间 默认的时间为 1 秒
#  ReadTimeout: 5000    # 请求处理的超时时间

# 负载均衡策略
# service-provider 为调用的服务的名称
service-provider:
  ribbon:
    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule
    OkToRetryOnAllOperations: true  # 对所有请求都进行重试
    MaxAutoRetries: 2               # 对当前实例的重试次数
    MaxAutoRetriesNextServer: 0     # 切换实例的重试次数
    ConnectTimeout: 3000            # 请求连接的超时时间
    ReadTimeout: 3000               # 请求处理的超时时间
```