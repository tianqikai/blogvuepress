# 1. Feign简介

Feign 是 Spring Cloud Netflix 组件中的一个**轻量级 RESTful 的 HTTP 服务客户端**，实现了负载均衡和 Rest 调用的开源框架，封装了 Ribbon 和 RestTemplate，实现了 WebService 的面向接口编程，进一步降低了项目的耦合度。

1. **Feign 内置了 Ribbon**，用来做客户端负载均衡调用服务注册中心的服务。

2. Feign 本身并不支持 Spring MVC 的注解，它有一套自己的注解，为了更方便的使用，Spring Cloud 孵化了OpenFeign。

3. Feign 是一种声明式、模板化的 HTTP 客户端（仅在 Consumer 中使用）。
4. Feign 支持的注解和用法请参考官方文档：https://github.com/OpenFeign/feign 或 spring.io 官网文档
5. Feign 的使用方式是：使用 Feign 的注解定义接口，调用这个接口，就可以调用服务注册中心的服务。


## 1.1 Feign 解决什么问题

Feign 旨在使编写 JAVA HTTP 客户端变得更加容易，Feign 简化了 RestTemplate 代码，实现了 Ribbon 负载均衡，使代码变得更加简洁，也少了客户端调用的代码，**使用 Feign 实现负载均衡是首选方案**。

**只需要你创建一个接口，然后在上面添加注解即可**

Feign 是声明式服务调用组件，其核心就是：像调用本地方法一样调用远程方法，**无感知远程 HTTP 请求**。

1. 它解决了让开发者调用远程接口就跟调用本地方法一样的体验，开发者完全感知不到这是远程方法，更感知不到这是个 HTTP 请求。无需关注与远程的交互细节，更无需关注分布式环境开发。

2. 它像 Dubbo 一样，Consumer 直接调用 Provider 接口方法，而不需要通过常规的 Http Client 构造请求再解析返回数据。


## 1.2  OpenFeign简介

OpenFeign 是 Spring Cloud 在 Feign 的基础上支持了 Spring MVC 的注解，如 @RequesMapping 、
@Pathvariable 等等。

OpenFeign 的 @FeignClient 可以解析 SpringMVC 的 @RequestMapping 注解下的接口，并通过动态代理的方式产生实现类，实现类中做负载均衡并调用服务。