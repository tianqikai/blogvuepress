# 6. Zuul整合Sentinel

## 6.1 添加依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>ZuulDemo</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>Zuul-Sentinel-Server</artifactId>

    <!-- 项目依赖 -->
    <dependencies>
        <!-- spring cloud netflix zuul 依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
        </dependency>
        <!-- netflix eureka client 依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>

        <!-- 单独使用 -->
        <!-- sentinel zuul adapter 依赖 -->
        <dependency>
            <groupId>com.alibaba.csp</groupId>
            <artifactId>sentinel-zuul-adapter</artifactId>
        </dependency>

        <!-- 和 Sentinel Starter 配合使用 -->
<!--        <dependency>-->
<!--            <groupId>com.alibaba.cloud</groupId>-->
<!--            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>-->
<!--        </dependency>-->
<!--        <dependency>-->
<!--            <groupId>com.alibaba.cloud</groupId>-->
<!--            <artifactId>spring-cloud-alibaba-sentinel-gateway</artifactId>-->
<!--        </dependency>-->

    </dependencies>

</project>
```
## 6.2 配置文件

```yml
spring:
  application:
    name: zuul-server-sentinel # 应用名称
  cloud:
    sentinel:
      filter:
        enabled: false

server:
  port: 7777          # 端口

# 配置 Eureka Server 注册中心
eureka:
  instance:
    prefer-ip-address: true       # 是否使用 ip 地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
  client:
    service-url:                  # 设置服务注册中心地址
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/

## 约定大于配置，最好配一下
zuul:
  prefix: /api
  routes:
    service-provider:
      path: /service-provider/**
      serviceId: service-provider
      strip-prefix: true
    Service-Consumer:
      path: /Service-Consumer/**
      serviceId: Service-Consumer
      strip-prefix: true
```

## 6.3 项目代码

### 6.3.1 启动类
```java
package com.tqk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
// 开启 Zuul 注解
@EnableZuulProxy
// 开启 EurekaClient 注解，目前版本如果配置了 Eureka 注册中心，默认会开启该注解
//@EnableEurekaClient
public class ZuulServerSentinelApplication {

    public static void main(String[] args)
    {
        SpringApplication.run(ZuulServerSentinelApplication.class, args);
    }

}

```
### 6.3.2 网关服务配置类
```java
package com.tqk.config;

import com.alibaba.csp.sentinel.adapter.gateway.common.rule.GatewayFlowRule;
import com.alibaba.csp.sentinel.adapter.gateway.common.rule.GatewayRuleManager;
import com.alibaba.csp.sentinel.adapter.gateway.zuul.fallback.ZuulBlockFallbackManager;
import com.alibaba.csp.sentinel.adapter.gateway.zuul.filters.SentinelZuulErrorFilter;
import com.alibaba.csp.sentinel.adapter.gateway.zuul.filters.SentinelZuulPostFilter;
import com.alibaba.csp.sentinel.adapter.gateway.zuul.filters.SentinelZuulPreFilter;
import com.netflix.zuul.ZuulFilter;
import com.tqk.fullback.OrderBlockFallbackProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

/**
 * 网关服务配置类
 */
@Configuration
public class ZuulConfig {

    //todo 底层继承了 ZuulFilter
    @Bean
    public ZuulFilter sentinelZuulPreFilter() {
        // We can also provider the filter order in the constructor.
        return new SentinelZuulPreFilter();
    }

    //todo 底层继承了 ZuulFilter
    @Bean
    public ZuulFilter sentinelZuulPostFilter() {
        return new SentinelZuulPostFilter();
    }

    //todo 底层继承了 ZuulFilter
    @Bean
    public ZuulFilter sentinelZuulErrorFilter() {
        return new SentinelZuulErrorFilter();
    }

    //todo Spring 容器初始化的时候执行该方法
    @PostConstruct
    public void doInit() {
        //todo 注册 FallbackProvider
        ZuulBlockFallbackManager.registerProvider(new OrderBlockFallbackProvider());
        //todo 加载网关限流规则
        initGatewayRules();
    }

    /**
     * 网关限流规则
     */
    private void initGatewayRules() {
        Set<GatewayFlowRule> rules = new HashSet<>();
        /**
            resource：资源名称，可以是网关中的 route 名称或者用户自定义的 API 分组名称
            count：限流阈值
            intervalSec：统计时间窗口，单位是秒，默认是 1 秒
         */
        rules.add(new GatewayFlowRule("Service-Consumer")
                //todo  限流阈值
                .setCount(3)
                //todo 统计时间窗口，单位是秒，默认是 1 秒
                .setIntervalSec(60));
        //todo  加载网关限流规则
        GatewayRuleManager.loadRules(rules);
    }

}

```
### 6.3.3 限流异常处理类
```java
package com.tqk.fullback;

import com.alibaba.csp.sentinel.adapter.gateway.zuul.fallback.BlockResponse;
import com.alibaba.csp.sentinel.adapter.gateway.zuul.fallback.ZuulBlockFallbackProvider;
import com.alibaba.csp.sentinel.slots.block.BlockException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 对订单服务做服务容错处理
 */
public class OrderBlockFallbackProvider implements ZuulBlockFallbackProvider {

    private Logger logger = LoggerFactory.getLogger(OrderBlockFallbackProvider.class);

    @Override
    public String getRoute() {
        return "Service-Consumer"; // 服务名称
    }

    @Override
    public BlockResponse fallbackResponse(String route, Throwable cause) {
        logger.error("{} 服务触发限流", route);
        if (cause instanceof BlockException) {
            return new BlockResponse(429, "服务访问压力过大，请稍后再试。", route);
        } else {
            return new BlockResponse(500, "系统错误，请联系管理员。", route);
        }
    }

}

```

## 6.4 测试访问

[http://192.168.0.105:7777/api/Service-Consumer/order/1]