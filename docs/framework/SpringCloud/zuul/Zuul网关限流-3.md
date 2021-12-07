# 4. Zuul网关限流

## 4.1 全局限流配置

使用全局限流配置，Zuul 会对代理的所有服务提供限流保护

### 4.1.1 全局限流配置文件
```yml
spring:
  application:
    name: zuul-server # 应用名称
  # redis 缓存
  redis:
    timeout: 10000        # 连接超时时间
    host: 49.233.34.168 # Redis服务器地址
    port: 6400           # Redis服务器端口
    #    password: root        # Redis服务器密码
    database: 0           # 选择哪个库，默认0库
    lettuce:
      pool:
        max-active: 1024  # 最大连接数，默认 8
        max-wait: 10000   # 最大连接阻塞等待时间，单位毫秒，默认 -1
        max-idle: 200     # 最大空闲连接，默认 8
        min-idle: 5       # 最小空闲连接，默认 0

server:
  port: 9000          # 端口

zuul:
  # 服务限流
  ratelimit:
    # 开启限流保护
    enabled: true
    # 限流数据存储方式
    repository: REDIS
    # default-policy-list 默认配置，全局生效
    default-policy-list:
      - limit: 3
        refresh-interval: 60    # 60s 内请求超过 3 次，服务端就抛出异常，60s 后可以恢复正常请求
        quota: 30               # 请求时间总和不得超过 30 秒
        type:
          - origin
          - url
          - user
```

### 4.1.2 依赖文件

<font color='red'><strong>注意：该种方式依赖于redis方式，一定注意redis依赖是否加载成功</strong></font>
```xml
        <!--        限流依赖 start-->
        <!-- spring cloud zuul ratelimit 依赖 -->
        <dependency>
            <groupId>com.marcosbarbero.cloud</groupId>
            <artifactId>spring-cloud-zuul-ratelimit</artifactId>
            <version>2.3.0.RELEASE</version>
        </dependency>
        <!-- spring boot data redis 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <!-- commons-pool2 对象池依赖 -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>
        <!--        限流依赖 end-->
```

### 4.1.2  Zuul-RateLimiter 基本配置项

<table>
    <tr>
        <th colspan="6">配置项</th>
        <th colspan="6">可选值</th>
        <th colspan="6">说明</th>
    </tr>
    <tr>
        <td colspan="6">enabled</td>
        <td colspan="6">true/false</td>
        <td colspan="6">是否启用限流</td>
    </tr>
    <tr>
        <td colspan="6">repository</td>
        <td colspan="6">
            REDIS：基于 Redis，使用时必须引入 Redis 相关依赖  <br>
            CONSUL：基于 Consul  <br> 
            JPA：基于 SpringDataJPA，需要用到数据库<br>  
            使用 Java 编写的基于令牌桶算法的限流库：<br>  
            BUCKET4J_JCACHE   <br>
            BUCKET4J_HAZELCAST <br>  
            BUCKET4J_IGNITE  <br> 
            BUCKET4J_INFINISPAN</td>
        <td colspan="6">限流数据的存储方式，无默认值必填项</td>
    </tr>
    <tr>
        <td colspan="6">key-prefix</td>
        <td colspan="6"> String</td>
        <td colspan="6">限流 key 前缀</td>
    </tr>
    <tr>
        <td colspan="6">default-policy-list</td>
        <td colspan="6">List of Policy</td>
        <td colspan="6">默认策略</td>
    </tr>
    <tr>
        <td colspan="6">policy-list</td>
        <td colspan="6">Map of Lists of Policy</td>
        <td colspan="6">自定义策略</td>
    </tr>
    <tr>
        <td colspan="6">post-filter-order</td>
        <td colspan="6">-</td>
        <td colspan="6">postFilter 过滤顺序</td>
    </tr>
    <tr>
        <td colspan="6">pre-filter-order</td>
        <td colspan="6">-</td>
        <td colspan="6">preFilter 过滤顺序</td>
    </tr>  
</table>


__________

### 4.1.3  Policy 限流策略配置项

<table>
    <tr>
        <th colspan="6">配置项</th>
        <th colspan="6">说明</th>
    </tr>
    <tr>
        <td colspan="6">limit</td>
        <td colspan="6">单位时间内请求次数限制</td>
    </tr>
    <tr>
        <td colspan="6">quota</td>
        <td colspan="6"> 单位时间内累计请求时间限制（秒），非必要参数</td>
    </tr>
    <tr>
        <td colspan="6">refresh-interval</td>
        <td colspan="6">单位时间（秒），默认 60 秒</td>
    </tr>
    <tr>
        <td colspan="6">type</td>
        <td colspan="6">限流方式：<br>
            ORIGIN：访问 IP 限流<br>
            URL：访问 URL 限流<br>
            USER：特定用户或用户组限流（比如：非会员用户限制每分钟只允许下载一个文件）<br>
            URL_PATTERN <br>
            ROLE <br>
            HTTP_METHOD
        </td>
    </tr>
</table>


### 4.1.4  访问测试

访问：[http://192.168.0.105:9000/api/Service-Consumer/order/1?token=abc123]  控制台结果如下

## 4.2 局部限流配置

使用局部限流配置，Zuul 仅针对配置的服务提供限流保护

<font color='red'><strong>注意：限流服务名称</strong></font>  

<a data-fancybox title=" 局部限流配置" href="./image/zuul08.jpg">![局部限流配置](./image/zuul08.jpg)</a>

---------------------

```yml
spring:
  application:
    name: zuul-server # 应用名称
  # redis 缓存
  redis:
    timeout: 10000        # 连接超时时间
    host: 49.233.34.168 # Redis服务器地址
    port: 6400           # Redis服务器端口
    #    password: root        # Redis服务器密码
    database: 0           # 选择哪个库，默认0库
    lettuce:
      pool:
        max-active: 1024  # 最大连接数，默认 8
        max-wait: 10000   # 最大连接阻塞等待时间，单位毫秒，默认 -1
        max-idle: 200     # 最大空闲连接，默认 8
        min-idle: 5       # 最小空闲连接，默认 0

server:
  port: 9000          # 端口

zuul:
  prefix: /api
  routes:
    product-service: # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      #url: http://localhost:7071/ # 映射路径对应的微服务地址
      serviceId: service-provider # 根据 serviceId 自动从注册中心获取服务地址并转发请求
    service-provider:
      path: /service-provider/**
      serviceId: service-provider
      strip-prefix: true
    Service-Consumer:
      path: /Service-Consumer/**
      serviceId: Service-Consumer
      strip-prefix: true
  # 禁用 Zuul 默认的异常处理 filter
  SendErrorFilter:
    error:
      disable: true
  # 服务限流
  ratelimit:
    # 开启限流保护
    enabled: true
    # 限流数据存储方式
    repository: REDIS
    # policy-list 自定义配置，局部生效
    policy-list:
      # 指定需要被限流的服务名称
      Service-Consumer:
        - limit: 5
          refresh-interval: 60  # 60s 内请求超过 5 次，服务端就抛出异常，60s 后可以恢复正常请求
          quota: 30             # 请求时间总和不得超过 30 秒
          type:
            - origin
            - url
            - user
  # 开启 Zuul 网关重试
  retryable: true

# 配置 Eureka Server 注册中心
eureka:
  instance:
    prefer-ip-address: true       # 是否使用 ip 地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
  client:
    service-url:                  # 设置服务注册中心地址
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/

# 度量指标监控与健康检查
management:
  endpoints:
    web:
      exposure:
        include: hystrix.stream
```

### 访问测试

访问：[http://192.168.0.105:9000/api/Service-Consumer/order/1?token=abc123]  控制台结果如下

```log
com.netflix.zuul.exception.ZuulException: 429 TOO_MANY_REQUESTS
```

## 4.3 自定义限流(接口限流)

### 4.3.1 消费服务添加接口


修改商品服务控制层代码如下，添加 /order/single ：

```java
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * 根据主键查询订单
     * 方式一
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Order selectOrderById(@PathVariable("id") Integer id) throws InterruptedException {
//        Thread.sleep(2000);
        return orderService.selectOrderById(id);
    }
    @GetMapping("/single")
    public Order selectOrderByIdSingle(Integer id) throws InterruptedException {
//        Thread.sleep(2000);
        return orderService.selectOrderById(id);
    }
}
```

### 4.3.2 自定义限流策略类

```java
package com.tqk.ratelimit;

import com.marcosbarbero.cloud.autoconfigure.zuul.ratelimit.config.RateLimitUtils;
import com.marcosbarbero.cloud.autoconfigure.zuul.ratelimit.config.properties.RateLimitProperties;
import com.marcosbarbero.cloud.autoconfigure.zuul.ratelimit.support.DefaultRateLimitKeyGenerator;
import org.springframework.cloud.netflix.zuul.filters.Route;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * 自定义限流策略
 */
@Component
public class RateLimitKeyGenerator extends DefaultRateLimitKeyGenerator {

    public RateLimitKeyGenerator(RateLimitProperties properties, RateLimitUtils rateLimitUtils) {
        super(properties, rateLimitUtils);
    }

    /**
     * 限流逻辑
     *
     * @param request
     * @param route
     * @param policy
     * @return
     */
    @Override
    public String key(HttpServletRequest request, Route route, RateLimitProperties.Policy policy) {
        // 对请求参数中相同的 token 值进行限流
        // return super.key(request, route, policy) + ":" + request.getParameter("token");

        //todo 对请求参数中相同的 id 值进行限流
        return super.key(request, route, policy) + ":" + request.getParameter("id");
    }

}

```

访问：[http://192.168.0.105:9000/api/Service-Consumer/order/single?token=abc123&id=1]  控制台结果如下

**这个访问id=2时还是能够访问的**  
[http://192.168.0.105:9000/api/Service-Consumer/order/single?token=abc123&id=2]  



## 4.4 超时重试优化

使用 Zuul 的 Spring Cloud 微服务结构图

<a data-fancybox title=" 微服务结构图" href="./image/zuul09.jpg">![微服务结构图](./image/zuul09.jpg)</a>

从上图中可以看出。整体请求逻辑还是比较复杂的，在没有 Zuul 网关的情况下，client 请求 service 的时候，也有请求超时的可能。那么当增加了 Zuul 网关的时候，请求超时的可能就更明显了。


当请求通过 Zuul 网关路由到服务，并等待服务返回响应，这个过程中 Zuul 也有超时控制。Zuul 的底层使用的是 Hystrix + Ribbon 来实现请求路由。

<a data-fancybox title=" 微服务结构图" href="./image/zuul10.jpg">![微服务结构图](./image/zuul10.jpg)</a>

 Zuul 中的 Hystrix 内部使用线程池隔离机制提供请求路由实现，其默认的超时时长为 1000 毫秒。Ribbon 底层
默认超时时长为 5000 毫秒。

**如果 Hystrix 超时，直接返回超时异常。如果 Ribbon 超时，同时 Hystrix 未超时，Ribbon 会自动进行服务集群轮询重试，直到 Hystrix 超时为止。如果 Hystrix 超时时长小于 Ribbon 超时时长，Ribbon 不会进行服务集群轮询重试**

### 4.4.1 添加依赖

Spring Cloud Netflix Zuul 网关重试机制需要使用 spring-retry 组件。

```xml
    <!-- spring retry 依赖 -->
    <dependency>
        <groupId>org.springframework.retry</groupId>
        <artifactId>spring-retry</artifactId>
    </dependency>
```
### 4.4.2 启动类

启动类需要开启 @EnableRetry 重试注解。

```java
```

### 4.4.3 配置文件
Zuul 中可配置的超时时长有两个位置：Hystrix 和 Ribbon。具体配置如下：

```yml
## Hystrix 超时时间设置
hystrix:
  command:
    default:
      execution:
        isolation:
          thread:
            timeoutInMilliseconds: 10000  # 线程池隔离，默认超时时间 1000ms

# Ribbon 超时时间设置：建议设置小于 Hystrix
ribbon:
  ConnectTimeout: 6000                    # 请求连接的超时时间: 默认 5000ms
  ReadTimeout: 6000                       # 请求处理的超时时间: 默认 5000ms
  # 重试次数
  MaxAutoRetries: 2                       # MaxAutoRetries 表示访问服务集群下原节点（同路径访问）
  MaxAutoRetriesNextServer: 1             # MaxAutoRetriesNextServer表示访问服务集群下其余节点（换台服务器）
  # Ribbon 开启重试
  OkToRetryOnAllOperations: true
```

### 4.4.4 模拟测试

商品服务模拟超时--5s

```java
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * 根据主键查询订单
     * 方式一
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Order selectOrderById(@PathVariable("id") Integer id) throws InterruptedException {
        Thread.sleep(5000);
        return orderService.selectOrderById(id);
    }
    @GetMapping("/single")
    public Order selectOrderByIdSingle(Integer id) throws InterruptedException {
//        Thread.sleep(2000);
        return orderService.selectOrderById(id);
    }
}
```

访问：[http://192.168.0.105:9000/api/Service-Consumer/order/1?token=abc123] 结果如下

```json
{"id":1,"orderNo":"order-001","orderAddress":"中国","totalPrice":31994.0,"productList":[{"id":1,"productName":"华为手机","productNum":2,"productPrice":5888.0},{"id":2,"productName":"联想笔记本","productNum":1,"productPrice":6888.0},{"id":3,"productName":"小米平板","productNum":5,"productPrice":2666.0}]}
```
