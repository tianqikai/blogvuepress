
# 4. Eureka完整的配置

## 4.1 注册中心

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
    <artifactId>Eureka-ClusterServer01</artifactId>


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

```yml
server:
  port: 8762

spring:
  application:
    name: Eureka-Server # 应用名称--集群版
  # 安全认证
  security:
    user:
      name: root
      password: 12345tqk
  freemarker:
    prefer-file-system-access: false #该属性表示是否优先从文件系统加载template，以支持热加载，默认值为true，改成false后可成功访问

# 配置 Eureka Server 注册中心  集群版
eureka:
  server:
    enable-self-preservation: false # true：开启自我保护模式，false：关闭自我保护模式
    eviction-interval-timer-in-ms: 10000 # 清理间隔（单位：毫秒，默认是 60*1000）
  instance:
    hostname: Eureka01            # 主机名，不配置的时候将根据操作系统的主机名来获取
    prefer-ip-address: true  # 是否使用 ip 地址注册
    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
  client:
    # 设置服务注册中心地址，指向另一个注册中心
    service-url:                  # 注册中心对外暴露的注册地址
      defaultZone: http://root:12345tqk@localhost:8763/eureka/

```

## 4.2 服务生产者

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

    <artifactId>Service-Provider01</artifactId>

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
__________________

```yml
server:
  port: 7071

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

## 4.3 服务消费者


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

    <artifactId>Service-Consumer</artifactId>
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
    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

</project>
```
__________________

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