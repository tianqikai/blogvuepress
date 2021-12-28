# 2. SpringMVC使用

`Idea + Maven + Jdk1.8 +Jetty`
## 2.1 SpringMVC环境搭建

### 2.1.1 pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>SpringMvc</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <!-- spring web -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>4.3.2.RELEASE</version>
        </dependency>
        <!-- spring mvc -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>4.3.2.RELEASE</version>
        </dependency>
        <!-- web servlet -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.0.1</version>
        </dependency>

        <!-- 添加json 依赖jar包 -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.7.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.7.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.7.0</version>
        </dependency>
    </dependencies>
    <build>
        <finalName>springmvc</finalName>
        <plugins>
            <!-- 编译环境插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>2.3.2</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.mortbay.jetty</groupId>
                <artifactId>maven-jetty-plugin</artifactId>
                <version>6.1.25</version>
                <configuration>
                    <scanIntervalSeconds>10</scanIntervalSeconds>
                    <contextPath>/springmvc</contextPath>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

### 2.1.2 配置web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="WebApp_ID" version="3.0"
         xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
    http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">

  <!-- 编码过滤 utf-8 -->
  <filter>
    <description>char encoding filter</description>
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
  </filter>
  <filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
  </filter-mapping>

  <!-- servlet请求分发器 DispatcherServlet -->
  <servlet>
    <servlet-name>springMvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:servlet-context.xml</param-value>
    </init-param>
    <!-- 表示启动容器时初始化该Servlet -->
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>springMvc</servlet-name>
    <!-- 这是拦截请求, /代表拦截所有请求,拦截所有.do请求 -->
    <url-pattern>*.do</url-pattern>
  </servlet-mapping>
</web-app>
```

### 2.1.3 servlet-context.xml配置

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
        http://www.springframework.org/schema/mvc
        http://www.springframework.org/schema/mvc/spring-mvc.xsd
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.tqk.springmvc.controller"/>

    <mvc:annotation-driven>
        <mvc:message-converters>
            <bean class="org.springframework.http.converter.StringHttpMessageConverter" />
            <!--json -->
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter" />
        </mvc:message-converters>
    </mvc:annotation-driven>


    <!--配置视图解析器  默认的视图解析器- -->
    <bean id="defaultViewResolver"
          class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="viewClass" value="org.springframework.web.servlet.view.JstlView" />
        <property name="contentType" value="text/html" />
        <property name="prefix" value="/WEB-INF/jsp/" />
        <property name="suffix" value=".jsp" />
    </bean>
</beans>
```

### 2.1.4 页面控制器的编写

```java
package com.tqk.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {

    @RequestMapping("hello")
    public ModelAndView hello(){
        ModelAndView mv=new ModelAndView();
        /**
         * 模型数据:Model
         * 视图: View
         */
        mv.addObject("hello","hello SpringMvc tqk");
        mv.setViewName("hello");
        return mv;
    }


}
```

### 2.1.5 添加视图页面

```java
<%--
  Created by IntelliJ IDEA.
  User: lp
  Date: 2020/2/13
  Time: 11:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
   ${hello}
</body>
</html>

```

### 2.1.6 启动jetty服务器

访问地址 [http://localhost:8080/springmvc/hello.do]


## 2.2 URL地址映射配置

```java
package com.tqk.springmvc.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *   @author tianqikai
 * @RequestMapping:
 *      声明级别:
 *         类级别
 *         方法级别    方法级别uri
 *         类级别+方法级别   类级别uri +方法级别uri
 *     没有声明请求类型  资源可以处理Get + Post
 *     没有声明请求类型  资源可以处理Get + Post
 *       可以显示声明方法处理的请求类型   声明method 属性值  支持多种请求类型
 */
@Controller
@RequestMapping("hello")
public class UrlController {

    //todo  localhost:8080/springmvc/hello/u01.do
    @RequestMapping("u01")
    public ModelAndView u01(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("hello","u01");
        modelAndView.setViewName("hello");
        return modelAndView;
    }

    //  ip:port/springmvc/hello/u02.do
    @RequestMapping("/u02")
    public ModelAndView u02(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("hello","u02");
        modelAndView.setViewName("hello");
        return modelAndView;
    }

    //todo  localhost:8080/springmvc/hello/u03_01.do
    //todo  localhost:8080/springmvc/hello/u03_02.do
    // 支持一个方法多个uri 方法绑定操作
    @RequestMapping(value = {"u03_01","u03_02"})
    public ModelAndView u03(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("hello","u03");
        modelAndView.setViewName("hello");
        return modelAndView;
    }


    // 只能处理post 请求
    @RequestMapping(value = "u04",method = {RequestMethod.POST})
    public ModelAndView u04(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("hello","u04");
        modelAndView.setViewName("hello");
        return modelAndView;
    }


    //todo http://localhost:8080/springmvc/hello.do?u05
    @RequestMapping(params = "u05")
    public ModelAndView u05(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("hello","u05");
        modelAndView.setViewName("hello");
        return modelAndView;
    }
}

```
## 2.3 参数绑定

请求参数到处理器功能处理方法的方法参数上的绑定，对于参数绑定非常灵活

基本数据类型、字符串数据绑定

```java
package com.tqk.springmvc.controller;


import com.tqk.springmvc.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * 参数绑定（重点掌握前4种）
 *    基本类型（包装类型）
 *    String | Date
 *    数组
 *    JavaBean
 *    List|Set|Map(了解)
 */
@Controller
public class ParamsController {

    /**
     * 基本类型
     *    参数值必须存在  如果没有指定参数值 也没有配置默认值  此时方法 500错误!!!
     * @param age
     * @param s
     */
    //todo  http://localhost:8080/springmvc/p01.do?age=100&s=70.00
    @RequestMapping("p01")
    public ModelAndView  p01(int age,double s){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",age);
        modelAndView.addObject("s",s);
        System.out.println("age:"+age+":s:"+s);
        modelAndView.setViewName("params");
        return modelAndView;
    }


    /**
     * 基本类型
     *    参数值必须存在  如果没有指定参数值 也没有配置默认值  此时方法 500错误!!!
     *     防止500参数错误 可以使用@RequestParam 配置参数默认值
     * @param age
     * @param s
     */
    //todo http://localhost:8080/springmvc/p02.do?age=100&s=70.00
    //todo  http://localhost:8080/springmvc/p02.do
    @RequestMapping("p02")
    public ModelAndView p02(@RequestParam(defaultValue = "0") int age,@RequestParam(defaultValue = "0.00") double s){
        System.out.println("age:"+age+":s:"+s);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",age);
        modelAndView.addObject("s",s);
        System.out.println("age:"+age+":s:"+s);
        modelAndView.setViewName("params");
        return modelAndView;
    }

    /**
     * 基本类型
     *    参数值必须存在  如果没有指定参数值 也没有配置默认值  此时方法 500错误!!!
     *     防止500参数错误 可以使用@RequestParam 配置参数默认值  同时可以通过name 属性 给形参取别名
     * @param age
     * @param s
     */
    //todo 别名 http://localhost:8080/springmvc/p03.do?a=100&s=70.00
    //todo http://localhost:8080/springmvc/p03.do?age=100&s=70.00
    @RequestMapping("p03")
    public ModelAndView p03(@RequestParam(name = "a",defaultValue = "10") int age,@RequestParam(defaultValue = "60.5") double s){
        System.out.println("age:"+age+":s:"+s);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",age);
        modelAndView.addObject("s",s);
        System.out.println("age:"+age+":s:"+s);
        modelAndView.setViewName("params");
        return modelAndView;

    }

    /**
     * 字符串参数绑定
     *    客户端请求参数名与方法形参名一致  默认参数值为null
     *    @RequestParam  可以设置形参的别名  参数默认值
     * @param userName
     * @param userPwd
     */
    //todo http://localhost:8080/springmvc/p04.do?userName=tqk&userPwd=12345
    @RequestMapping("p04")
    public ModelAndView p04(String userName,String userPwd){
        System.out.println("userName:"+userName+":userPwd:"+userPwd);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",userName);
        modelAndView.addObject("s",userPwd);
        modelAndView.setViewName("params");
        return modelAndView;
    }

    /**
     * 包装参数绑定(推荐使用包装类型!!!)
     *    客户端请求参数名与方法形参名一致  默认参数值为null
     *    @RequestParam  可以设置形参的别名  参数默认值
     * @param age
     * @param s
     */
    //todo  http://localhost:8080/springmvc/p05.do?age=100&s=70.00
    @RequestMapping("p05")
    public ModelAndView p05(Integer age, Double s){
        System.out.println("age:"+age+":s:"+s);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",age);
        modelAndView.addObject("s",s);
        modelAndView.setViewName("params");
        return modelAndView;
    }

    // todo http://localhost:8080/springmvc/p06.do?ids=10&ids=20&ids=30
    // 传参形式: ids=10&ids=20&ids=30
    @RequestMapping("p06")
    public ModelAndView p06(Integer[] ids){
        for (Integer id : ids) {
            System.out.println(id);
        }
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",ids[0]);
        modelAndView.addObject("s",ids[1]);
        modelAndView.setViewName("params");
        return modelAndView;
    }


    /**
     * 客户端参数名称与user 属性名一致即可
     * @param user
     */
    // todo http://localhost:8080/springmvc/p07.do?id=10&userName=20&userPwd=30
    @RequestMapping("p07")
    public ModelAndView p07(User user){
        System.out.println(user);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",user.getIds());
        modelAndView.addObject("s",user.getUserName());
        modelAndView.setViewName("params");
        return modelAndView;
    }

    /**
     * List集合参数绑定  使用JavaBean进行包装
     * @param user
     */
    //http://localhost:8080/springmvc/p08.jsp
    @RequestMapping("p08")
    public ModelAndView p08(User user){
        user.getIds().forEach(id->{
            System.out.println(id);
        });
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",user.getIds().get(0));
        modelAndView.addObject("s",user.getIds().get(1));
        modelAndView.setViewName("params");
        return modelAndView;
    }
    //todo http://localhost:8080/springmvc/p09.jsp
    @RequestMapping("p09")
    public ModelAndView p09(User user){
        user.getPhones().forEach(phone->{
            System.out.println(phone.getNum());
        });
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",user.getPhones().get(0));
        modelAndView.addObject("s",user.getPhones().get(1));
        modelAndView.setViewName("params");
        return modelAndView;
    }
    /**
     * map集合参数绑定  使用JavaBean进行包装
     * @param user
     */
    // todo http://localhost:8080/springmvc/p10.jsp
    @RequestMapping("p10")
    public ModelAndView p10(User user){
        user.getMap().forEach((k,v)->{
            System.out.println("k:"+k+":v:"+v);
        });
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("age",user.getMap().get(0));
        modelAndView.addObject("s",user.getMap().get(1));
        modelAndView.setViewName("params");
        return modelAndView;
    }


}

```
## 2.4 请求转发与重定向的问题

SpringMvc 默认采用服务器内部转发的形式展示页面信息。同样也支持重定向页面。

```java
package com.tqk.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * 转发与重定向
 */
@Controller
public class ViewController {

    // 页面重定向
    //todo  localhost:8080/springmvc/queryView1.do
    @RequestMapping("queryView1")
    public String queryView1(){
        return "redirect:v1.jsp";
    }


    // 重定向参数携带
    //todo  localhost:8080/springmvc/queryView2.do
    @RequestMapping("queryView2")
    public String queryView2(){
        return "redirect:v1.jsp?a=admin&b=123456";
    }


    // 重定向如果参数存在中文 此时可能会出现乱码
    //todo  localhost:8080/springmvc/queryView3.do
    @RequestMapping("queryView3")
    public String queryView3(){
        return "redirect:v1.jsp?a=奥利给&b=123456";
    }

    // 重定向如果参数存在中文 此时可能会出现乱码  通过声明 RedirectAttributes 类型参数 携带重定向参数
    //todo  localhost:8080/springmvc/queryView4.do
    @RequestMapping("queryView4")
    public String queryView4(RedirectAttributes redirectAttributes){
        redirectAttributes.addAttribute("a","奥利给");
        redirectAttributes.addAttribute("b","123456");
        return "redirect:v1.jsp";
    }

    // 重定向如果参数存在中文 此时可能会出现乱码
    //todo  localhost:8080/springmvc/queryView5.do
    @RequestMapping("queryView5")
    public ModelAndView queryView5(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("redirect:v1.jsp");
        mv.addObject("a","奥利给");
        mv.addObject("b","123456");
        return mv;
    }

    //todo  localhost:8080/springmvc/queryView6.do
    @RequestMapping("queryView6")
    public ModelAndView queryView6(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("forward:test.do");
        return mv;
    }
    //todo  localhost:8080/springmvc/queryView7.do
    @RequestMapping("queryView7")
    public ModelAndView queryView7(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("forward:test.do?a=admin&b=123456");
        return mv;
    }
    //todo  localhost:8080/springmvc/queryView8.do
    @RequestMapping("queryView8")
    public ModelAndView queryView8(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("redirect:test.do");
        mv.addObject("a", "admin");
        mv.addObject("b", "奥利给");
        return mv;
    }




}

```

## 2.5 SpringMvc之Json数据开发

### 2.5.1 基本概念
Json在企业开发中已经作为通用的接口参数类型，在页面（客户端）解析很方便。SpringMvc 对于json 
提供了良好的支持，这里需要修改相关配置，添加json数据支持功能

**`@ResponseBody`**
 该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式
后，写入到Response对象的body数据区。

返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用（通常用于ajax 
请求）

**`@RequestBody`**


该注解用于读取Request请求的body部分数据，使用系统默认配置的HttpMessageConverter进行
解析，然后把相应的数据绑定到要返回的对象上 ,再把HttpMessageConverter返回的对象数据绑定到
controller中方法的参数上

### 2.5.2 演示代码

```java
package com.tqk.springmvc.controller;

import com.tqk.springmvc.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserLoginController {

    @RequestMapping("user/queryUser")
    @ResponseBody
    public User queryUser(){
        System.out.println("queryUser");
        User user=new User();
        user.setId(20);
        user.setUserName("admin");
        user.setUserPwd("123456");
        return user;
    }

    @RequestMapping("user/queryUser02")
    public @ResponseBody User queryUser02(){
        System.out.println("queryUser02");
        User user=new User();
        user.setId(20);
        user.setUserName("admin");
        user.setUserPwd("123456");
        return user;
    }

    @RequestMapping("user/queryUsers")
    @ResponseBody
    public List<User> queryUsers(){
        System.out.println("queryUsers");
        List<User> users=new ArrayList<User>();
        User user01=new User();
        user01.setId(20);
        user01.setUserName("admin");
        user01.setUserPwd("123456");

        User user02=new User();
        user02.setId(30);
        user02.setUserName("test");
        user02.setUserPwd("123456");
        users.add(user01);
        users.add(user02);
        return users;
    }


    @RequestMapping("user/queryUser03")
    @ResponseBody
    public User queryUser03(@RequestBody User user){
        System.out.println("user/queryUser03"+user.toString());
        return  user;
    }
}
```