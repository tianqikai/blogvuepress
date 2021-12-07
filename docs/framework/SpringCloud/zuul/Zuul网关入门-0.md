# 1. Zuul网关入门

## 1.1 什么是 Zuul

Zuul 是从设备和网站到应用程序后端的所有请求的前门。作为边缘服务应用程序，**Zuul 旨在实现动态路由，监视，弹性和安全性**。Zuul 包含了对请求的<font color='red'><strong>路由和过滤</strong></a>两个最主要的功能。

Zuul 是 Netflix 开源的微服务网关，它可以和 Eureka、Ribbon、Hystrix 等组件配合使用。Zuul 的核心是一系
列的过滤器，这些过滤器可以完成以下功能：

1. <font color='red'><strong>身份认证与安全</strong></a>：识别每个资源的验证要求，并拒绝那些与要求不符的请求
2. <font color='red'><strong>审查与监控</strong></a>：在边缘位置追踪有意义的数据和统计结果，从而带来精确的生产试图
3. <font color='red'><strong>动态路由</strong></a>：动态地将请求路由到不同的后端集群
4. <font color='red'><strong>压力测试</strong></a>：逐渐增加只想集群的流量，以了解性能
5. <font color='red'><strong>负载分配</strong></a>：为每一种负载类型分配对应容量，并弃用超出限定值的请求
6. <font color='red'><strong>静态响应处理</strong></a>：在边缘位置直接建立部份响应，从而避免其转发到内部集群\
7. <font color='red'><strong>多区域弹性</strong></a>：跨越AWS Region进行请求路由，旨在实现ELB（Elastic Load Balancing）使用的多样化，以及让系统的边缘更贴近系统的使用者

## 1.2 Zuul入门案例

### 1.2.1 环境准备

1. Eureka-ClusterServer01 ：注册中心
2. Eureka-ClusterServer02 ：注册中心
3. Service-Consumer ：服务消费者
4. Service-Consumer-Feign ：服务消费者
5. Service-Provider01：服务提供者


### 1.2.2 添加依赖

```xml
<!-- spring cloud netflix zuul 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
</dependency>
```

### 1.2.3 启动类

启动类需要开启 @EnableZuulProxy 注解。

```java
/**
 * @author tianqikai
 */
@SpringBootApplication
//todo 开启 Zuul 注解
@EnableZuulProxy
public class ConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerApplication.class,args);
    }
}

```
