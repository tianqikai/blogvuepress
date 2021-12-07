# 2. Zuul路由功能

## 2.1 URL 地址路由

### 2.1.1 配置文件

```yml
zuul:
  routes:
    product-service:       # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      url: http://localhost:7071/ # 映射路径对应的微服务地址
# http://192.168.0.105:9000/product-service/product/list
# ->跳转到
# http://localhost:7071/product-service/product/list
```
### 2.1.2 通配符

<a data-fancybox title=" zuul通配符" href="./image/zuul01.jpg">![zuul通配符](./image/zuul01.jpg)</a>

### 2.1.3 测试

<a data-fancybox title=" zuul通配符" href="./image/zuul02.jpg">![zuul通配符](./image/zuul02.jpg)</a>


## 2.2 服务名称路由
微服务一般是由几十、上百个服务组成，对于 URL 地址路由的方式，如果对每个服务实例手动指定一个唯一访问地址，这样做显然是不合理的。

Zuul 支持与 Eureka 整合开发，根据 serviceId 自动从注册中心获取服务地址并转发请求，这样做的好处不仅可以通过单个端点来访问应用的所有服务，而且在添加或移除服务实例时不用修改 Zuul 的路由配置。

**必须依ip地址注册方式 注册到注册中心**

**应用服务配置文件**
```yml
# 配置 Eureka Server 注册中心  集群版
eureka:
  instance:
    prefer-ip-address: true  # 是否使用 ip 地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
  client:
    registry-fetch-interval-seconds: 10  # 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/
```

### 2.2.1 配置文件

**zuul-server服务配置文件**

```yml
server:
  port: 9000
spring:
  application:
    name: zuul-server # 应用名称
eureka:
  client:
    register-with-eureka: false  # 是否将自己注册到注册中心，默认为 true
    registry-fetch-interval-seconds: 10  # 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒
    service-url:
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/

zuul:
  routes:
    product-service:       # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      #url: http://localhost:7071/ # 映射路径对应的微服务地址
      serviceId: service-provider # 根据 serviceId 自动从注册中心获取服务地址并转发请求
```
### 2.2.2 启动类

```java
@SpringBootApplication
// 开启 Zuul 注解
@EnableZuulProxy
// 开启 EurekaClient 注解，目前版本如果配置了 Eureka 注册中心，默认会开启该注解
@EnableEurekaClient
public class ZuulServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZuulServerApplication.class, args);
    }

}

```
### 2.2.3 测试
<a data-fancybox title=" zuul通配符" href="./image/zuul02.jpg">![zuul通配符](./image/zuul02.jpg)</a>


## 2.3 URL 地址排除

```yml
# 路由规则
zuul:
  ignored-patterns: /**/order/**  # URL 地址排除，排除所有包含 /order/ 的路径
  # 不受路由排除影响
  routes:
    product-service:       # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      serviceId: service-provider # 根据 serviceId 自动从注册中心获取服务地址并转发请求
```

http://192.168.0.105:9000/product-service/product/order/1

## 2.4 服务名称排除

```yml
# 路由规则
zuul:
 ignored-services: order-service # 服务名称排除，多个服务逗号分隔，'*' 排除所有
 # 不受路由排除影响
 routes:
   product-service:              # 路由 id 自定义
     path: /product-service/**   # 配置请求 url 的映射路径
     serviceId: product-service  # 根据 serviceId 自动从注册中心获取服务地址并转发请求
```

## 2.5 路由前缀

```yml
# 路由规则
zuul:
   #路由前缀 不要使用关键字/zuul
  prefix: /api
  routes:
    product-service:       # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      serviceId: service-provider # 根据 serviceId 自动从注册中心获取服务地址并转发请求
```

http://192.168.0.105:9000/api/product-service/product/list


## 2.6 分组路由

```yml
# 路由规则
zuul:
  #ignored-patterns: /**/order/**  # URL 地址排除，排除所有包含 /order/ 的路径
  #分组前缀 不要使用关键字/zuul
  prefix: /api
  routes:
    product-service:       # 路由 id 自定义
      path: /product-service/**  # 配置请求 url 的映射路径
      #url: http://localhost:7071/ # 映射路径对应的微服务地址
      serviceId: service-provider # 根据 serviceId 自动从注册中心获取服务地址并转发请求
    microservice1:
      path: /service-provider/**
      serviceId: service-provider
      strip-prefix: true
    microservice2:
      path: /Service-Consumer/**
      serviceId: Service-Consumer
      strip-prefix: true
```
http://192.168.0.105:9000/api/product-service/product/list

http://192.168.0.105:9000/api/service-provider/product/list

http://192.168.0.105:9000/api/Service-Consumer/order/1