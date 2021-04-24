# SpringCloud 微服务工具集v1.1

- **版本: Hoxton SR6**

## 1.什么是微服务

- 官网: https://www.martinfowler.com/articles/microservices.html

In short, the microservice architectural style is an approach to developing a single application as `a suite of small services`, each `running in its own process` and communicating with lightweight mechanisms, often an HTTP resource API. These services are `built around business capabilities` and `independently deployable` by fully automated deployment machinery. `There is a bare minimum of centralized management of these services`, which may be written in different programming languages and use different data storage technologies.                        -----[摘自官网]

```markdown
- a suite of small services                      				--一系列微小服务
- running in its own process                                    --运行在自己的进程里
- built around business capabilities                            --围绕自己的业务开发
- independently deployable                                      --独立部署
- bare minimum of centralized management of these services      --基于分布式管理
```

- 官方定义:**微服务就是由一系列围绕自己业务开发的微小服务构成,他们独立部署运行在自己的进程里,基于分布式的管理**

  App 应学项目  分类模块   视频模块 评论模块  用户模块  统计模块...    单体应用

  

  分类服务     独立应用  ---> 计算进程里面 --->  独立部署   

  视频服务                                                                                     基于分布式服务管理

  评论服务

  用户服务

  ....服务

- 通俗定义:**微服务是一种架构，这种架构是将单个的整体应用程序分割成更小的项目关联的独立的服务。一个服务通常实现一组独立的特性或功能，包含自己的业务逻辑和适配器。各个微服务之间的关联通过暴露api来实现。这些独立的微服务不需要部署在同一个虚拟机，同一个系统和同一个应用服务器中。**

---

## 2.为什么是微服务?

### 单体应用

![image-20200708224716035](./SpringCloudImage/image-20200708224716035.png)
SpringCloud 微服务工具集v1.1.assets
SpringCloudImage
```markdown
# 1.优点
-	单一架构模式在项目初期很小的时候开发方便，测试方便，部署方便，运行良好。

# 2.缺点
- 应用随着时间的推进，加入的功能越来越多，最终会变得巨大，一个项目中很有可能数百万行的代码，互相之间繁琐的jar包。
- 久而久之，开发效率低，代码维护困难
- 还有一个如果想整体应用采用新的技术，新的框架或者语言，那是不可能的。
- 任意模块的漏洞或者错误都会影响这个应用，降低系统的可靠性
```