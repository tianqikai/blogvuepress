# 3. SpringMVC拦截器

## 3.1 基本概念

SpringMVC 中的Interceptor 拦截器也是相当重要和相当有用的，它的主要作用是拦截用户的请求并进行相应的处理。比如通过它来进行权限验证，或者是来判断用户是否登陆等操作。

-----------------

对于springmvc拦截器的定义方式有两种方式:
实现接口：`org.springframework.web.servlet.HandlerInterceptor`
继承适配器: `org.springframework.web.servlet.handler.HandlerInterceptorAdapter`

## 3.2 实现HandlerInterceptor接口方式
### 3.2.1 接口实现类

```java
package com.tqk.springmvc.interceptors;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author tianqikai
 */
public class MyInterceptor1 implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        System.out.println("目标Handler执行前执行MyInterceptor1-->preHandle 方法...");
        /**
         *  true:执行handler 方法
         *  false: 阻止目标Handler  方法执行
         */
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        System.out.println("目标Handler执行后,视图生成前执行MyInterceptor1-->postHandle 方法...");
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        System.out.println("目标Handler执行后,视图生成后执行MyInterceptor1-->afterCompletion 方法...");
    }
}
```
### 3.2.2 生效拦截器xml配置

- servlet-context.xml
```xml
    <!--
       拦截器生效配置方式01
    -->
    <mvc:interceptors>
        <!--拦截所有的Handler-->
         <bean class="com.tqk.springmvc.interceptors.MyInterceptor1"></bean>
     </mvc:interceptors>

    <!--
       拦截器生效配置方式02   推荐使用该配置
    -->
    <mvc:interceptors>
        <mvc:interceptor>
<!--               mvc:mapping  配置拦截器拦截的资源  支持通配符 可以配置多个-->
<!--               mvc:exclude-mapping 配置拦截器放行的资源  可以多个-->
            <mvc:mapping path="/**"/>
            <mvc:exclude-mapping path="/m01.do"/>
            <bean class="com.tqk.springmvc.interceptors.MyInterceptor1"></bean>
        </mvc:interceptor>
    </mvc:interceptors>
```

## 3.3 继承HandlerInterceptorAdapter方式

### 3.3.1 接口实现类
```java
package com.tqk.springmvc.interceptors;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author tianqikai
 */
public class MyIntercetpor2  extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("目标Handler执行前执行MyIntercetpor2-->preHandle 方法...");
        return true;
    }
}

```

### 3.3.2 生效拦截器xml配置

- servlet-context.xml
```xml

    <!-- <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/**"/>
            <mvc:exclude-mapping path="/hello.do"/>
            <mvc:exclude-mapping path="/m01.do"/>
            <mvc:exclude-mapping path="/m02.do"/>
            <bean class="com.xxxx.springmvc.interceptors.MyIntercetpor2"></bean>
        </mvc:interceptor>
    </mvc:interceptors>-->


    <mvc:interceptors>
          <!--
             拦截器链(多个拦截器)
               先配置的拦截器preHandler 方法先执行 (重点理解)
               先配置的拦截器 postHandle 、afterCompletion 方法后执行(栈的元素出栈效果 )  了解
          -->
          <mvc:interceptor>
              <mvc:mapping path="/**"/>
              <bean class="com.tqk.springmvc.interceptors.MyInterceptor1"></bean>
          </mvc:interceptor>
          <mvc:interceptor>
              <mvc:mapping path="/**"/>
                <!--排除不进行处理-->
              <mvc:exclude-mapping path="/hello.do"/>
              <mvc:exclude-mapping path="/m01.do"/>
              <mvc:exclude-mapping path="/m02.do"/>
              <bean class="com.tqk.springmvc.interceptors.MyIntercetpor2"></bean>
          </mvc:interceptor>
    </mvc:interceptors>
</beans>
```
## 3.4 拦截器应用-非法请求拦截处理

### 3.4.1 接口实现类

```java
package com.xxxx.springmvc.interceptors;

import com.xxxx.springmvc.vo.User;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /**
         *  获取用户session 信息
         *  如果用户session 信息存在  请求合法放行处理
         *  如果用户session 信息不存在 请求非法 阻止目标方法执行
         */
        User user = (User) request.getSession().getAttribute("userInfo");
        if(null ==user){
            // 用户未登录 或者 session已失效
            response.sendRedirect(request.getContextPath()+"/login.jsp");
            return false;
        }
        return true;
    }
}
```
### 3.4.2 生效拦截器xml配置

```xml
    <mvc:interceptors>
        <mvc:interceptor>
            <mvc:mapping path="/**"/>
            <mvc:exclude-mapping path="/user/login.do"/>
            <mvc:exclude-mapping path="/uploadFile.do"/>
            <bean class="com.tqk.springmvc.interceptors.LoginInterceptor"></bean>
        </mvc:interceptor>
    </mvc:interceptors>
```


### 3.4.3 jps

- success

```jsp
<%--
  Created by IntelliJ IDEA.
  User: lp
  Date: 2020/2/14
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
   测试页面...
</body>
</html>

```
- result
```jsp
<%--
  Created by IntelliJ IDEA.
  User: lp
  Date: 2020/2/15
  Time: 14:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  ${msg}
</body>
</html>

```
- login

```jsp
<%--
  Created by IntelliJ IDEA.
  User: lp
  Date: 2020/2/14
  Time: 16:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
   用户登录页面...
</body>
</html>

```