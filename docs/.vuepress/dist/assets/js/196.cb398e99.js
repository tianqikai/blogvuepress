(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1353:function(a,t,i){a.exports=i.p+"assets/img/01.c7da52d1.png"},1666:function(a,t,i){"use strict";i.r(t);var r=i(26),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"_5-开发框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-开发框架"}},[a._v("#")]),a._v(" 5. 开发框架")]),a._v(" "),r("h2",{attrs:{id:"一、什么是spring-谈谈你对ioc和aop的理解。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是spring-谈谈你对ioc和aop的理解。"}},[a._v("#")]),a._v(" 一、什么是Spring？谈谈你对IOC和AOP的理解。")]),a._v(" "),r("p",[a._v("Spring： 是一个企业级java应用框架，他的作用主要是简化软件的开发以及配置过程，简化项目部署环境。\nSpring的有点：\n1、Spring低侵入设计，对业务代码的污染非常低。\n2、Spring的DI机制将对象之间的关系交由框架处理，减少组件的耦合。\n3、Spring提供了AOP技术，支持将一些通用的功能进行集中式管理，从而提供更好的复用。\n4、Spring对于主流框架提供了非常好的支持。\n"),r("code",[a._v("IOC就是控制反转，指创建对象的控制权转移给Spring来进行管理。简单来说，就是应用不用去new对象了，而全部交由Spring自动生产。")])]),a._v(" "),r("p",[r("code",[a._v("IOC有三种注入方式：1、 构造器注入 2、setter方法注入 3、根据注解注入")])]),a._v(" "),r("p",[r("code",[a._v("AOP 面向切面")]),a._v("。用于将那些与业务无关，但却对多个对象产生影响的公共行为。抽取并封装成一个可重用的模块。AOP的核心就是动态代理。")]),a._v(" "),r("p",[r("code",[a._v("JDK的动态代理 CGLIB动态代理")])]),a._v(" "),r("h2",{attrs:{id:"什么是bean的自动装配-有哪些方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是bean的自动装配-有哪些方式"}},[a._v("#")]),a._v(" 什么是bean的自动装配，有哪些方式？")]),a._v(" "),r("p",[a._v("开启自动装配，只需要在xml配置文件中定义“autowire”属性。\nautowire属性有五种装配的方式：")]),a._v(" "),r("p",[a._v("no – 缺省情况下，自动配置是通过“ref”属性手动设定 。")]),a._v(" "),r("p",[a._v("byName-根据bean的属性名称进行自动装配。")]),a._v(" "),r("p",[a._v("byType-根据bean的类型进行自动装配。")]),a._v(" "),r("p",[a._v("constructor-类似byType，不过是应用于构造器的参数。如果一个bean与构造器参数的类型形同，则进行自动装配，否则导致异常。")]),a._v(" "),r("p",[a._v("autodetect-如果有默认的构造器，则通过constructor方式进行自动装配，否则使用byType方式进行自动装配。\n"),r("code",[a._v("@Autowired自动装配bean，可以在字段、setter方法、构造函数上使用")]),a._v("。")]),a._v(" "),r("h2",{attrs:{id:"如何理解-spring-boot-中的-starter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-spring-boot-中的-starter"}},[a._v("#")]),a._v(" 如何理解 Spring Boot 中的 Starter")]),a._v(" "),r("p",[a._v("使用spring + springmvc使用，如果需要引入mybatis等框架，需要到xml中定义mybatis需要的bean\nstarter就是定义一个starter的jar包，写一个@Configuration配置类、将这些bean定义在里面，然后在\nstarter包的META-INF/spring.factories中写入该配置类，springboot会按照约定来加载该配置类")]),a._v(" "),r("p",[a._v("开发人员只需要将相应的starter包依赖进应用，进行相应的属性配置（使用默认配置时，不需要配置），就可以直接进行代码开发，使用对应的功能了，比如mybatis-spring-boot--starter，spring-boot-starter-redis")]),a._v(" "),r("h2",{attrs:{id:"_5-1-spring中的bean创建的生命周期有哪些步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-spring中的bean创建的生命周期有哪些步骤"}},[a._v("#")]),a._v(" 5.1 Spring中的Bean创建的⽣命周期有哪些步骤")]),a._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("Spring中⼀个Bean的创建⼤概分为以下⼏个步骤：")]),a._v(" "),r("ol",[r("li",[a._v("推断构造⽅法")]),a._v(" "),r("li",[a._v("实例化")]),a._v(" "),r("li",[a._v("填充属性， 也就是依赖注⼊")]),a._v(" "),r("li",[a._v("处理Aware回调")]),a._v(" "),r("li",[a._v("初始化前， 处理@PostConstruct注解")]),a._v(" "),r("li",[a._v("初始化， 处理InitializingBean接⼝")]),a._v(" "),r("li",[a._v("初始化后， 进⾏AOP")])])]),a._v(" "),r("p",[a._v("当然其实真正的步骤更加细致， 可以看下⾯的流程图")]),a._v(" "),r("h2",{attrs:{id:"_5-2-spring中bean是线程安全的吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-spring中bean是线程安全的吗"}},[a._v("#")]),a._v(" 5.2 Spring中Bean是线程安全的吗")]),a._v(" "),r("p",[a._v("Spring本身并没有针对Bean做线程安全的处理：")]),a._v(" "),r("ol",[r("li",[a._v("如果Bean是⽆状态的， 那么Bean则是线程安全的")]),a._v(" "),r("li",[a._v("如果Bean是有状态的， 那么Bean则不是线程安全的")])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("另外， Bean是不是线程安全， 跟Bean的作⽤域没有关系， Bean的作⽤域只是表示Bean的⽣命周期范围， 对于任何⽣命周期的Bean都是⼀个对象， 这个对象是不是线程安全的， 还是得看这个Bean对象本 身。")]),a._v(" "),r("h2",{attrs:{id:"_5-3-applicationcontext和beanfactory有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-applicationcontext和beanfactory有什么区别"}},[a._v("#")]),a._v(" 5.3 ApplicationContext和BeanFactory有什么区别")]),a._v(" "),r("p",[a._v("BeanFactory是Spring中⾮常核⼼的组件， 表示Bean⼯⼚， 可以⽣成Bean， 维护Bean， ⽽ApplicationContext继承了BeanFactory， 所以ApplicationContext拥有BeanFactory所有的特点， 也是⼀个Bean⼯⼚， 但是ApplicationContext除开继承了BeanFactory之外， 还继承了诸如EnvironmentCapable、MessageSource、ApplicationEventPublisher等接⼝， 从⽽ApplicationContext还有获取系统环境变量、国际化、事件发布等功能， 这是BeanFactory所不具备的")]),a._v(" "),r("h2",{attrs:{id:"_5-4-spring中的事务是如何实现的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-spring中的事务是如何实现的"}},[a._v("#")]),a._v(" 5.4 Spring中的事务是如何实现的")]),a._v(" "),r("ol",[r("li",[a._v("Spring事务底层是基于数据库事务和AOP机制的")]),a._v(" "),r("li",[a._v("⾸先对于使⽤了@Transactional注解的Bean， Spring会创建⼀个代理对象作为Bean")]),a._v(" "),r("li",[a._v("当调⽤代理对象的⽅法时， 会先判断该⽅法上是否加了@Transactional注解")]),a._v(" "),r("li",[a._v("如果加了， 那么则利⽤事务管理器创建⼀个数据库连接")]),a._v(" "),r("li",[a._v("并且修改数据库连接的autocommit属性为false， 禁⽌此连接的⾃动提交， 这是实现Spring事务⾮ 常重要的⼀步")]),a._v(" "),r("li",[a._v("然后执⾏当前⽅法， ⽅法中会执⾏sql")]),a._v(" "),r("li",[a._v("执⾏完当前⽅法后， 如果没有出现异常就直接提交事务")]),a._v(" "),r("li",[a._v("如果出现了异常， 并且这个异常是需要回滚的就会回滚事务， 否则仍然提交事务")]),a._v(" "),r("li",[a._v("Spring事务的隔离级别对应的就是数据库的隔离级别")]),a._v(" "),r("li",[a._v("Spring事务的传播机制是Spring事务⾃⼰实现的， 也是Spring事务中最复杂的")]),a._v(" "),r("li",[a._v("Spring事务的传播机制是基于数据库连接来做的， ⼀个数据库连接⼀个事务， 如果传播机制配置为 需要新开⼀个事务， 那么实际上就是先建⽴⼀个数据库连接， 在此新数据库连接上执⾏sql")])]),a._v(" "),r("h2",{attrs:{id:"_5-5-spring中什么时候-transactional会失效"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-spring中什么时候-transactional会失效"}},[a._v("#")]),a._v(" 5.5 Spring中什么时候@Transactional会失效")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("因为Spring事务是基于"),r("code",[a._v("代理来实现的")]),a._v("， 所以某个加了"),r("code",[a._v("@Transactional的⽅法只有是被代理对象调⽤时， 那么这个注解才会⽣效")]),a._v("， 所以如果是被代理对象来调⽤这个⽅法， 那么@Transactional是不会失效的。")])]),a._v(" "),r("li",[r("p",[a._v("同时如果某个⽅法是"),r("code",[a._v("private的")]),a._v("， 那么@Transactional也会失效， 因为底层cglib是基于⽗⼦类来实现的， "),r("code",[a._v("⼦类是不能重载⽗类的private⽅法的")]),a._v("， 所以⽆法很好的利⽤代理， 也会导致@Transactianal失效")])])]),a._v(" "),r("h2",{attrs:{id:"_5-6-spring容器启动流程是怎样的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-spring容器启动流程是怎样的"}},[a._v("#")]),a._v(" 5.6 Spring容器启动流程是怎样的")]),a._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("在创建Spring容器， 也就是启动Spring时：")]),a._v(" "),r("ol",[r("li",[a._v("⾸先会进⾏扫描， 扫描得到所有的BeanDefinition对象， 并存在⼀个Map中")]),a._v(" "),r("li",[a._v("然后筛选出"),r("code",[a._v("⾮懒加载的单例BeanDefinition")]),a._v("进⾏创建Bean， 对于"),r("code",[a._v("多例Bean不需要在启动过程中去进⾏创建")]),a._v("， 对于多例Bean会在每次获取Bean时利⽤BeanDefinition去创建")]),a._v(" "),r("li",[a._v("利⽤BeanDefinition创建Bean就是Bean的创建⽣命周期， 这期间包括了合并"),r("code",[a._v("BeanDefinition、推断构造⽅法、实例化、属性填充、初始化前、初始化、初始化后")]),a._v("等步骤， 其中AOP就是发⽣在初始化后这⼀步骤中")])]),a._v(" "),r("hr"),a._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[a._v("单例Bean创建完了之后， Spring会发布⼀个容器启动事件")]),a._v(" "),r("li",[a._v("Spring启动结束")]),a._v(" "),r("li",[a._v("在源码中会更复杂， ⽐如源码中会提供⼀些模板⽅法， 让⼦类来实现， ⽐如源码中还涉及到⼀些 BeanFactoryPostProcessor和BeanPostProcessor的注册， Spring的扫描就是通过BenaFactoryPostProcessor来实现的， 依赖注⼊就是通过BeanPostProcessor来实现的")]),a._v(" "),r("li",[a._v("在Spring启动过程中还会去处理@Import等注解")])]),a._v(" "),r("h2",{attrs:{id:"_5-7-spring用到了哪些设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-spring用到了哪些设计模式"}},[a._v("#")]),a._v(" 5.7 Spring⽤到了哪些设计模式")]),a._v(" "),r("p",[r("img",{attrs:{src:i(1353),alt:"./01.png"}})]),a._v(" "),r("h2",{attrs:{id:"_5-8-springmvc的底层工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-springmvc的底层工作流程"}},[a._v("#")]),a._v(" 5.8 SpringMVC的底层⼯作流程")]),a._v(" "),r("ol",[r("li",[a._v("⽤户发送请求⾄前端控制器DispatcherServlet。")]),a._v(" "),r("li",[a._v("DispatcherServlet 收到请求调⽤  HandlerMapping 处理器映射器。")]),a._v(" "),r("li",[a._v("处理器映射器找到具体的处理器(可以根据 xml 配置、注解进⾏查找)， ⽣成处理器及处理器拦截器 (如果有则⽣成)⼀并返回给 DispatcherServlet。")]),a._v(" "),r("li",[a._v("DispatcherServlet 调⽤  HandlerAdapter 处理器适配器。")]),a._v(" "),r("li",[a._v("HandlerAdapter 经过适配调⽤具体的处理器(Controller， 也叫后端控制器)")]),a._v(" "),r("li",[a._v("Controller 执⾏完成返回 ModelAndView。")]),a._v(" "),r("li",[a._v("HandlerAdapter 将 controller 执⾏结果 ModelAndView 返回给 DispatcherServlet。")]),a._v(" "),r("li",[a._v("DispatcherServlet 将 ModelAndView 传给 ViewReslover 视图解析器。")]),a._v(" "),r("li",[a._v("ViewReslover 解析后返回具体 View。")]),a._v(" "),r("li",[a._v("DispatcherServlet 根据 View 进⾏渲染视图 （即将模型数据填充⾄视图中）  。")]),a._v(" "),r("li",[a._v("DispatcherServlet 响应⽤户。")])]),a._v(" "),r("h2",{attrs:{id:"_5-9-springboot中常用注解及其底层实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-springboot中常用注解及其底层实现"}},[a._v("#")]),a._v(" 5.9 SpringBoot中常⽤注解及其底层实现")]),a._v(" "),r("ol",[r("li",[a._v("@SpringBootApplication注解： 这个注解标识了⼀个SpringBoot⼯程， 它实际上是另外三个注解 的组合， 这三个注解是：\n"),r("ul",[r("li",[a._v("@SpringBootConfiguration： 这个注解实际就是⼀个@Configuration， 表示启动类也是⼀个 配置类")]),a._v(" "),r("li",[a._v("@EnableAutoConfiguration： 向Spring容器中导⼊了⼀个Selector， ⽤来加载ClassPath下 SpringFactories中所定义的⾃动配置类， 将这些⾃动加载为配置Bean")]),a._v(" "),r("li",[a._v("@ComponentScan： 标识扫描路径， 因为默认是没有配置实际扫描路径， 所以SpringBoot扫 描的路径是启动类所在的当前⽬录")])])]),a._v(" "),r("li",[a._v("@Bean注解： ⽤来定义Bean， 类似于XML中的"),r("bean",[a._v("标签， Spring在启动时， 会对加了@Bean注 解的⽅法进⾏解析， 将⽅法的名字做为beanName， 并通过执⾏⽅法得到bean对象")])],1),a._v(" "),r("li",[a._v("@Controller、@Service、@ResponseBody、@Autowired都可以说")])]),a._v(" "),r("h2",{attrs:{id:"_5-10-springboot是如何启动tomcat的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-springboot是如何启动tomcat的"}},[a._v("#")]),a._v(" 5.10 SpringBoot是如何启动Tomcat的")]),a._v(" "),r("ol",[r("li",[a._v("⾸先， SpringBoot在启动时会先创建⼀个Spring容器")]),a._v(" "),r("li",[a._v("在创建Spring容器过程中， 会利⽤"),r("code",[a._v("@ConditionalOnClass")]),a._v("技术来判断当前classpath中是否存在"),r("code",[a._v("Tomcat依赖")]),a._v("， 如果存在则会⽣成⼀个"),r("code",[a._v("启动Tomcat的Bean")])]),a._v(" "),r("li",[a._v("Spring容器创建完之后， 就会获取启动Tomcat的Bean， 并创建Tomcat对象， 并绑定端⼝等， 然后启动Tomcat")])]),a._v(" "),r("h2",{attrs:{id:"_5-11-springboot中配置文件的加载顺序是怎样的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-11-springboot中配置文件的加载顺序是怎样的"}},[a._v("#")]),a._v(" 5.11 SpringBoot中配置⽂件的加载顺序是怎样的？")]),a._v(" "),r("p",[a._v("优先级从⾼到低， ⾼优先级的配置覆盖低优先级的配置， 所有配置会形成互补配置。")]),a._v(" "),r("ol",[r("li",[a._v("命令⾏参数 。所有的配置都可以在命令⾏上进⾏指定；")]),a._v(" "),r("li",[a._v("Java系统属性 （System.getProperties()） ；")]),a._v(" "),r("li",[a._v("操作系统环境变量 ；")]),a._v(" "),r("li",[a._v("jar包外部的application-{profile}.properties或application.yml(带spring.profile)配置⽂件")]),a._v(" "),r("li",[a._v("jar包内部的application-{profile}.properties或application.yml(带spring.profile)配置⽂件 再来加 载不带profile")]),a._v(" "),r("li",[a._v("jar包外部的application.properties或application.yml(不带spring.profile)配置⽂件")]),a._v(" "),r("li",[a._v("jar包内部的application.properties或application.yml(不带spring.profile)配置⽂件")]),a._v(" "),r("li",[a._v("@Configuration注解类上的@PropertySource")])]),a._v(" "),r("h2",{attrs:{id:"_5-12-mybatis存在哪些优点和缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-12-mybatis存在哪些优点和缺点"}},[a._v("#")]),a._v(" 5.12 Mybatis存在哪些优点和缺点")]),a._v(" "),r("blockquote",[r("p",[r("strong",[a._v("优点：")])])]),a._v(" "),r("ol",[r("li",[a._v("基于 SQL 语句编程， 相当灵活， 不会对应⽤程序或者数据库的现有设计造成任何影响， SQL单独写， 解除 sql 与程序代码的耦合， 便于统⼀管理。")]),a._v(" "),r("li",[a._v("与 JDBC 相⽐， 减少了50%以上的代码量， 消除了JDBC⼤量冗余的代码， 不需要⼿动开关连接；")]),a._v(" "),r("li",[a._v("很好的与各种数据库兼容 （ 因为 MyBatis 使⽤ JDBC 来连接数据库， 所以只要JDBC ⽀持的数据 库MyBatis 都⽀持）  。")]),a._v(" "),r("li",[a._v("能够与 Spring 很好的集成；")]),a._v(" "),r("li",[a._v("提供映射标签， ⽀持对象与数据库的 ORM 字段关系映射；  提供对象关系映射标签， ⽀持对象关 系组件维护。")])]),a._v(" "),r("blockquote",[r("p",[r("strong",[a._v("缺点：")])])]),a._v(" "),r("ol",[r("li",[a._v("SQL 语句的编写⼯作量较⼤， 尤其当字段多、关联表多时， 对开发⼈员编写SQL 语句的功底有⼀定要求。")]),a._v(" "),r("li",[a._v("SQL 语句依赖于数据库， 导致数据库移植性差， 不能随意更换数据库")])]),a._v(" "),r("h2",{attrs:{id:"_5-13-mybatis中-和-的区别是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-13-mybatis中-和-的区别是什么"}},[a._v("#")]),a._v(" 5.13 Mybatis中#{}和${}的区别是什么？")]),a._v(" "),r("ol",[r("li",[r("code",[a._v("#{}是预编译处理、是占位符")]),a._v("，"),r("code",[a._v("${}是字符串替换 、是拼接符")])]),a._v(" "),r("li",[a._v("Mybatis 在处理#{}时， 会将 sql 中的#{}替换为?号， 调⽤  PreparedStatement 来赋值")]),a._v(" "),r("li",[a._v("Mybatis 在处理${}时， 就是把${}替换成变量的值， 调⽤ Statement 来赋值")]),a._v(" "),r("li",[a._v("使⽤"),r("code",[a._v("#{}可以有效的防⽌SQL注⼊")]),a._v("， 提⾼系统安全性")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);