# 2. Eureka原理与使用

## 2.1 Eureka架构原理

<a data-fancybox title="Eureka架构原理" href="./image/eureka04.jpg">![Eureka架构原理](./image/eureka04.jpg)</a>

:::tip Eureka架构原理
1. Register(服务注册)：把自己的 IP 和端口注册给 Eureka。
2. Renew(服务续约)：发送心跳包，每 30 秒发送一次，告诉 Eureka 自己还活着。如果 90 秒还未发送心跳，宕机。
3. Cancel(服务下线)：当 Provider 关闭时会向 Eureka 发送消息，把自己从服务列表中删除。防止 Consumer 调用到不存在的服务。
4. Get Registry(获取服务注册列表)：获取其他服务列表。
5. Replicate(集群中数据同步)：Eureka 集群中的数据复制与同步。
6. Make Remote Call(远程调用)：完成服务的远程调用。
:::


<a data-fancybox title="Eureka架构原理" href="./image/eureka05.jpg">![Eureka架构原理](./image/eureka05.jpg)</a>


## 2.2 CAP 原则

<a data-fancybox title="CAP 原则" href="./image/eureka06.jpg">![CAP 原则](./image/eureka06.jpg)</a>

CAP 原则又称 CAP 定理，指的是在一个分布式系统中具有以下其中两个特性：

:::tip CAP原则
1. **Consistency （一致性）**

也叫做数据原子性，系统在执行某项操作后仍然处于一致的状态。在分布式系统中，更新操作
执行成功后所有的用户都应该读到最新的值，这样的系统被认为是具有强一致性的。等同于所
有节点访问同一份最新的数据副本。

2. **Availability （可用性）**

每一个操作总是能够在一定的时间内返回结果，这里需要注意的是"一定时间内"和"返回结
果"。一定时间内指的是，在可以容忍的范围内返回结果，结果可以是成功或者是失败。

3. **Partition tolerance（分区容错性）**

在网络分区的情况下，被分隔的节点仍能正常对外提供服务(分布式集群，数据被分布存储在不
同的服务器上，无论什么情况，服务器都能正常被访问)。
:::

### 2.2.1 取舍策略

CAP 三个特性只能满足其中两个，那么取舍的策略就共有三种：
1. **CA without P**：如果不要求P（不允许分区），则C（强一致性）和A（可用性）是可以保证的。但放弃 P 的同
时也就意味着放弃了系统的扩展性，也就是分布式节点受限，没办法部署子节点，这是违背分布式系统设计的
初衷的。
2. **CP without A**：如果不要求A（可用），相当于每个请求都需要在服务器之间保持强一致，而P（分区）会导致
同步时间无限延长（也就是等待数据同步完才能正常访问服务），一旦发生网络故障或者消息丢失等情况，就
要牺牲用户的体验，等待所有数据全部一致了之后再让用户访问系统。设计成 CP 的系统其实不少，最典型的就
是分布式数据库，如 Redis、HBase 等。对于这些分布式数据库来说，数据的一致性是最基本的要求，因为如
果连这个标准都达不到，那么直接采用关系型数据库就好，没必要再浪费资源来部署分布式数据库。

3. **AP without C**：要高可用并允许分区，则需放弃一致性。一旦分区发生，节点之间可能会失去联系，为了高可
用，每个节点只能用本地数据提供服务，而这样会导致全局数据的不一致性。典型的应用就如某米的抢购手机
场景，可能前几秒你浏览商品的时候页面提示是有库存的，当你选择完商品准备下单的时候，系统提示你下单
失败，商品已售完。这其实就是先在 A（可用性）方面保证系统可以正常的服务，然后在数据的一致性方面做
了些牺牲，虽然多少会影响一些用户体验，但也不至于造成用户购物流程的严重阻塞。

## 2.3 Eureka单价版

### 2.3.1 pom.xml添加依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>Eureka</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <modelVersion>4.0.0</modelVersion>

    <groupId>org.tqk</groupId>
    <artifactId>Eureka-Server</artifactId>


    <!-- 项目依赖 -->
    <dependencies>
        <!-- netflix eureka server 依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <!-- spring boot web 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- spring boot test 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>

</project>
```

### 2.3.2 配置文件-application.yml
```yml
server:
  port: 8761

spring:
  application:
    name: Eureka-Server # 应用名称--单机版
  freemarker:
    prefer-file-system-access: false #该属性表示是否优先从文件系统加载template，以支持热加载，默认值为true，改成false后可成功访问

# 配置 Eureka Server 注册中心  单机版
eureka:
  instance:
    hostname: localhost            # 主机名，不配置的时候将根据操作系统的主机名来获取
  client:
    register-with-eureka: false   # 是否将自己注册到注册中心，默认为 true,单机版本改为false
    fetch-registry: false  # 是否从注册中心获取服务注册信息，默认为 true
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/

```

### 2.3.3 启动类-EurekaApplication
```java
package com.tqk;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @author tianqikai
 *开启 EurekaServer注解(不加也可以)
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}

```

### 2.3.4 访问

<a href='http://localhost:8761/'>访问：http://localhost:8761/</a>

## 2.4 集群版

### 2.4.1 集群配置文件

```yml
server:
  port: 8762

spring:
  application:
    name: Eureka-Server # 应用名称--集群版
  freemarker:
    prefer-file-system-access: false #该属性表示是否优先从文件系统加载template，以支持热加载，默认值为true，改成false后可成功访问

# 配置 Eureka Server 注册中心  集群版
eureka:
  instance:
    hostname: Eureka01            # 主机名，不配置的时候将根据操作系统的主机名来获取
  client:
    # 设置服务注册中心地址，指向另一个注册中心
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://localhost:8763/eureka/

```

---------------------------

```yml
server:
  port: 8763

spring:
  application:
    name: Eureka-Server # 应用名称--集群版
  freemarker:
    prefer-file-system-access: false #该属性表示是否优先从文件系统加载template，以支持热加载，默认值为true，改成false后可成功访问

# 配置 Eureka Server 注册中心  集群版
eureka:
  instance:
    hostname: Eureka01            # 主机名，不配置的时候将根据操作系统的主机名来获取
  client:
    # 设置服务注册中心地址，指向另一个注册中心
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://localhost:8762/eureka/

```


### 2.4.2  访问

<a href='http://localhost:8762/'>访问：http://localhost:8762/</a>  
<a href='http://localhost:8763/'>访问：http://localhost:8763/</a>  


### 2.4.3 显示 IP + 端口

一个普通的 Netflix Eureka 实例注册的 ID 等于其主机名（即，每个主机仅提供一项服务）。 Spring Cloud
Eureka 提供了合理的默认值，定义如下：
```java
${spring.cloud.client.hostname}:${spring.application.name}:${spring.application.instance_id:${server.port}}} 
```
也就是：**主机名：应用名：应用端口**
我们也可以可以自定义进行修改
```yml
eureka:
  instance:
    hostname: Eureka01       # 主机名，不配置的时候将根据操作系统的主机名来获取
    prefer-ip-address: true  # 是否使用 ip地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
```

### 2.4.4 服务提供者-Service-Provider

#### 添加依赖--pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>Eureka</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>Service-Provider</artifactId>

    <!-- 项目依赖 -->
    <dependencies>
        <!-- netflix eureka client 依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <!-- spring boot web 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- lombok 依赖 -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>
        <!-- spring boot actuator 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!-- spring boot test 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>

</project>
```

#### 配置文件--application.yml


```yml
server:
  port: 7070

spring:
  application:
    name:  service-provider # 应用名称(集群下相同)

# 配置 Eureka Server 注册中心  集群版
eureka:
  instance:
    prefer-ip-address: true  # 是否使用 ip 地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
  client:
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/

```

### 2.4.4 服务消费者-Service-Consumer

#### 添加依赖--pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>Eureka</artifactId>
        <groupId>org.example</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <modelVersion>4.0.0</modelVersion>

    <groupId>org.tqk</groupId>
    <artifactId>Eureka-ClusterServer02</artifactId>


    <!-- 项目依赖 -->
    <dependencies>
        <!-- netflix eureka server 依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <!-- spring boot web 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- spring boot security 安全认证 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <!-- spring boot test 依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
</project>
```

#### 配置文件--application.yml


```yml
server:
  port: 9090
spring:
  application:
    name: Service-Consumer


eureka:
  client:
    register-with-eureka: false  # 是否将自己注册到注册中心，默认为 true
    registry-fetch-interval-seconds: 10  # 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒
    service-url:
      defaultZone: http://root:12345tqk@localhost:8762/eureka/,http://root:12345tqk@localhost:8763/eureka/

```

### 2.4.5 消费者三种获取服务地址方式

#### DiscoveryClient

```java
package com.tqk.service.impl;

import com.tqk.pojo.Order;
import com.tqk.pojo.Product;
import com.tqk.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private LoadBalancerClient loadBalancerClient; // Ribbon 负载均衡器

    /**
     * 根据主键查询订单
     *
     * @param id
     * @return
     */
    @Override
    public Order selectOrderById(Integer id) {
       return new Order(id, "order-001", "中国", 31994D, selectProductListByDiscoveryClient());
    }

    /**
     * 获取服务列表方式一DiscoveryClient
     * @return
     */
    private List<Product> selectProductListByDiscoveryClient() {
        StringBuffer sb = null;

        // 获取服务列表
        List<String> serviceIds = discoveryClient.getServices();
        if (CollectionUtils.isEmpty(serviceIds)) {
            return null;
        }

        // 根据服务名称获取服务
        List<ServiceInstance> serviceInstances = discoveryClient.getInstances("service-provider");
        if (CollectionUtils.isEmpty(serviceInstances)) {
            return null;
        }

        System.out.println("根据服务名称获取服务ServiceInstance:"+serviceInstances.toString());
        ServiceInstance si = serviceInstances.get(0);
        sb = new StringBuffer();
        sb.append("http://" + si.getHost() + ":" + si.getPort() + "/product/list");

        // ResponseEntity: 封装了返回数据
        ResponseEntity<List<Product>> response = restTemplate.exchange(
                sb.toString(),
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Product>>() {});
        return response.getBody();
    } 
```

#### LoadBalancerClient

```java
package com.tqk.service.impl;

import com.tqk.pojo.Order;
import com.tqk.pojo.Product;
import com.tqk.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private LoadBalancerClient loadBalancerClient; // Ribbon 负载均衡器

    /**
     * 根据主键查询订单
     *
     * @param id
     * @return
     */
    @Override
    public Order selectOrderById(Integer id) {
       return new Order(id, "order-001", "中国", 31994D, selectProductListByLoadBalancerClient());
    }

  

    /**
     * 获取服务列表方式二 LoadBalancerClient
     * @return
     */
    private List<Product> selectProductListByLoadBalancerClient() {
        StringBuffer sb = null;

        // 根据服务名称获取服务
        ServiceInstance si = loadBalancerClient.choose("service-provider");
        if (null == si) {
            return null;
        }
        System.out.println("ServiceInstance"+si.toString());
        sb = new StringBuffer();
        sb.append("http://" + si.getHost() + ":" + si.getPort() + "/product/list");

        // ResponseEntity: 封装了返回数据
        ResponseEntity<List<Product>> response = restTemplate.exchange(
                sb.toString(),
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Product>>() {});
        return response.getBody();
    }
}
```

####  @LoadBalanced

启动类注入 RestTemplate 时添加 @LoadBalanced 负载均衡注解，表示这个 RestTemplate 在请求时拥有客
户端负载均衡的能力

```java
package com.tqk.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * @author tianqikai
 */
@ComponentScan
@Configuration
public class AppConfig {

    @Bean
    @LoadBalanced // 负载均衡注解
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
```

________________

```java
package com.tqk.service.impl;

import com.tqk.pojo.Order;
import com.tqk.pojo.Product;
import com.tqk.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private LoadBalancerClient loadBalancerClient; // Ribbon 负载均衡器

    /**
     * 根据主键查询订单
     *
     * @param id
     * @return
     */
    @Override
    public Order selectOrderById(Integer id) {
       return new Order(id, "order-001", "中国", 31994D, selectProductListByDiscoveryClient());
    }

    /**
     * 获取服务列表方式三 @LoadBalanced
     * @return
     */
    private List<Product> selectProductListByLoadBalancerAnnotation() {
        // ResponseEntity: 封装了返回数据
        ResponseEntity<List<Product>> response = restTemplate.exchange(
                "http://service-provider/product/list",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Product>>() {});
        return response.getBody();
    }

}
```

## 2.5 Eureka 自我保护

一般情况下，服务在 Eureka 上注册后，会每 30 秒发送心跳包，Eureka 通过心跳来判断服务是否健康，同时会定期删除超过 90 秒没有发送心跳的服务

**为什么要启动自我保护？**
1. 因为同时保留"好数据"与"坏数据"总比丢掉任何数据要更好，当网络故障恢复后，这个 Eureka 节点会退出"自我保护模式"。
2. Eureka 还有客户端缓存功能（也就是微服务的缓存功能）。即使 Eureka 集群中所有节点都宕机失效，微服务的 Provider 和 Consumer 都能正常通信。
3. 微服务的负载均衡策略会自动剔除死亡的微服务节点。


```yml
# 配置 Eureka Server 注册中心  集群版
eureka:
  server:
    enable-self-preservation: false # true：开启自我保护模式，false：关闭自我保护模式
    eviction-interval-timer-in-ms: 10000 # 清理间隔（单位：毫秒，默认是 60*1000）
```

## 2.6 Eureka 优雅停服

配置了优雅停服以后，将不需要 Eureka Server 中配置关闭自我保护。本文使用 actuator 实现。

作用就是服务下线后，主动告诉Eureka服务已下线，Eureka注册中心马上把服务从注册列表中剔除掉；

**项目中可以写一个心跳服务openconsole，检测控制应用服务，如果应用服务有问题马上发送请求，通知Eureka服务下线**

### 2.6.1 添加依赖

```xml
<!-- spring boot actuator 依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
### 2.6.2 配置文件

```yml
# 度量指标监控与健康检查
management:
  endpoints:
    web:
      exposure:
        include: shutdown         # 开启 shutdown 端点访问
  endpoint:
    shutdown:
      enabled: true               # 开启 shutdown 实现优雅停服
```

### 2.6.3 请求访问

使用 <font color='red'>***POST***</font> 请求访问：http://localhost:7070/actuator/shutdown 效果如下


## 2.7 Eureka 安全认证

### 2.7.1 添加依赖

```xml
<!-- spring boot security 依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 2.7.2 配置文件

#### 注册中心配置安全认证
```yml
spring:
  # 安全认证
 security:
   user:
     name: root
     password: 12345tqk

# 配置 Eureka Server 注册中心
eureka:
 instance:
   hostname: eureka01            # 主机名，不配置的时候将根据操作系统的主机名来获取
   prefer-ip-address: true       # 是否使用 ip 地址注册
   instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
 client:
    # 设置服务注册中心地址，指向另一个注册中心
   service-url:                  # 注册中心对外暴露的注册地址
     defaultZone: http://root:123456@localhost:8762/eureka/
```


#### 服务提供者的配置文件

```yml
# 配置 Eureka Server 注册中心
eureka:
 instance:
   prefer-ip-address: true       # 是否使用 ip 地址注册
   instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
 client:
   service-url:                  # 设置服务注册中心地址
     defaultZone: 
http://root:123456@localhost:8761/eureka/,http://root:123456@localhost:8762/eureka/
```
#### 服务消费者的配置文件

```yml
# 配置 Eureka Server 注册中心
eureka:
 client:
   register-with-eureka: false         # 是否将自己注册到注册中心，默认为 true
   registry-fetch-interval-seconds: 10 # 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为
30 秒
   service-url:                        # 设置服务注册中心地址
     defaultZone: 
http://root:123456@localhost:8761/eureka/,http://root:123456@localhost:8762/eureka/
```

### 2.7.3 过滤 CSRF

Eureka 会自动化配置 CSRF 防御机制，Spring Security 认为 POST, PUT, and DELETE http methods 都是有风
险的，如果这些 method 发送过程中没有带上 CSRF token 的话，会被直接拦截并返回 403 forbidden。
 官方给出了解决的方法，具体可以参考 spring cloud issue 2754，里面有大量的讨论，这里提供两种解决方
案。
 首先注册中心配置一个 @EnableWebSecurity 配置类，继承
org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
，然后重写 configure 方法。


```java
package com.tqk.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * 安全认证配置类
 */
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //todo 加这句是为了访问 eureka 控制台和 /actuator 时能做安全控制
        super.configure(http);
        //todo 忽略 /eureka/** 的所有请求
        http.csrf().ignoringAntMatchers("/eureka/**");
    }

}
```

-------------------------


```java
package com.example.config;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import
org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapt
er;
/**
* 安全认证配置类
*/
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 注意，如果直接 disable 的话会把安全验证也禁用掉
        http.csrf().disable().authorizeRequests()
               .anyRequest()
               .authenticated()
               .and()
               .httpBasic();
   }
}
```

### 2.7.4 访问

<a data-fancybox title="访问" href="./image/eureka08.jpg">![访问](./image/eureka08.jpg)</a>
