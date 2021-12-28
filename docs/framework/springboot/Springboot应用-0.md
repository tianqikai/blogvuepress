# 1. Springboot应用

## 1.1 Spring 5.X 应用零配置开发

Spring 框架从5.x版本推荐使用注解形式来对java应用程序进行开发与配置,并且可以完全替代原始
的XML+注解形式的开发,在使用注解形式进行项目开发与环境配置时，Spring 框架提供了针对环境配置
与业务bean开发相关注解。

### 1.1.1 注解

#### 声明Bean 注解

```java
@Component:组件  没有明确规定其角色，作用在类级别上声明当前类为一个业务组件，被Spring Ioc 容器维护;
@Service:在业务逻辑层（Service 层）类级别进行声明;
@Repository:在数据访问层(dao 层) 类级别声明;
@Controller:在展现层(MVC) 使用 标注当前类为一个控制器
```

#### 注入Bean 注解

```java
@AutoWired:Spring 官方提供注解
@Inject:JSR-330 提供注解（标准制定方）
@Resource:JSR-250 提供注解
```

以上三种注解在Set 方法或属性上声明，一般情况下通用一般开发中更习惯声明在属性上，代码简洁清晰。基于5.x 注解配置方式简化了xml 配置，应用程序开发与xml 环境配置均通过相应注解来实现。


#### Spring5.x 中配置与获取Bean注解

```java
 @Configuration:作用与类上，将当前类声明为一个配置类，相当于一个xml 配置文件
 @ComponentScan:自动扫描指定包下标注有@Repository,@Service,@Controller
 @Component:注解的类并由Ioc 容器进行实例化和维护
 @Bean::作用于方法上,相当于xml 文件中<bean> 声明当前方法返回值为一个bean
 @Value:获取properties 文件指定key value值
 ```

 ### 1.1.2 Ioc中Bean的实例化与获取