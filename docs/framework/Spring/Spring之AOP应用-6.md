# 7. Spring之AOP应用

## 7.1 动态代理

:::tip 代理的三要素
- 有共同的行为（结婚） - 接口
- 目标角色（新人） - 实现行为
- 代理角色（婚庆公司） - 实现行为 增强目标对象行为
:::

**代理模式的解释**：为`其他对象`提供一种`代理`以控制对这个对象的访问，`增强一个类中的某个方法`，对程序进行扩展

:::tip 动态代理的特点
1. 目标对象不固定
2. 在应用程序执行时动态创建目标对象
3. 代理对象会增强目标对象的行为
:::

## 7.2 JDK动态代理

除开cglib技术，jdk本身也提供了一种创建代理对象的动态代理机制，但是它只能代理接口，也就是UserService得先有一个接口才能利用jdk动态代理机制来生成一个代理对象，比如：

### 7.2.1 接口

```java
package com.tqk.jdk;

/**
 * @author tianqikai
 */
public interface UserInterface {
	/**
	 * jdk动态代理
	 */
	void test();
}

```

### 7.2.2 被代理类
```java
package com.tqk.jdk;

/**
 * @author tianqikai
 */
public class UserService implements UserInterface{
	@Override
	public void test() {
		System.out.println("jdk test");
	}
}

```

### 7.2.3 代理类
```java
package com.tqk.jdk;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/**
 * @author tianqikai
 */
public class UserServiceProxy {
	public static void main(String[] args) {
		UserInterface userService = getUserInterface();
		userService.test();
	}

	/**
	 * 获取被代理类
	 * @return
	 */
	private static UserInterface getUserInterface() {
		UserService target = new UserService();

		//todo UserInterface接口的代理对象
		Object proxy = Proxy.newProxyInstance(UserService.class.getClassLoader(), new Class[]{UserInterface.class}, new InvocationHandler() {
			@Override
			public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
				System.out.println("before...");
				Object result = method.invoke(target, args);
				System.out.println("after...");
				return result;
			}
		});

		UserInterface userService = (UserInterface) proxy;
		return userService;
	}
}

```

如果你把`new Class[]{UserInterface.class}`，替换成`new Class[]{UserService.class}`，允许代码会直接报错：
```java
Exception in thread "main" java.lang.IllegalArgumentException: com.zhouyu.service.UserService is not an interface
```

表示一定要是个接口。

由于这个限制，所以产生的`代理对象的类型是UserInterface`，而不是UserService，这是需要注意的。

### 7.2.4 

:::tip newProxyInstance
- 返回一个指定接口的代理类的实例方法调用分派到指定的调用处理程序。 (返回代理对象)

- loader：一个ClassLoader对象，定义了由哪个ClassLoader对象来对生成的代理对象进行加载

- interfaces：一个Interface对象的数组，表示的是我将要给我需要代理的对象提供一组什么接口，

如果我提供了一组接口给它，那么这个代理对象就宣称实现了该接口(多 态)，这样我就能调用这组接口中的方法了

- h：一个`InvocationHandler接口`，表示代理实例的调用处理程序实现的接口。

每个代理实例都具有一个关联的调用处理程序。对代理实例调用方法时，将对方法调用进行编码并将其指派到它的调用处理程序的 invoke 方法（传入InvocationHandler接口的子类）
:::

```java
public static Object newProxyInstance(ClassLoader loader,
Class<?>[] interfaces,
InvocationHandler h)
```

## 7.3 cglib动态代理

### 7.3.1 被代理类（UserService）

```java
public class UserService  {

	public void test() {
		System.out.println("test...");
	}

}
```

此时，我们new一个UserService对象，然后执行test()方法，结果是显而易见的。

如果我们现在想在不修改UserService类的源码前提下，给test()增加额外逻辑，那么就可以使用动态代理机制来创建UserService对象了，比如：

### 7.3.2 代理类（UserServiceProxy）

```java
package com.tqk;

import org.springframework.cglib.proxy.Callback;
import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

public class UserServiceProxy {
	public static void main(String[] args) {
		UserService userService = getUserService();

		// 执行这个userService的test方法时，就会额外会执行一些其他逻辑
		userService.test();
	}

	private static UserService getUserService() {
		UserService target = new UserService();
		//todo 通过cglib技术
		Enhancer enhancer = new Enhancer();
		enhancer.setSuperclass(UserService.class);

		//todo 定义额外逻辑，也就是代理逻辑
		enhancer.setCallbacks(new Callback[]{new MethodInterceptor() {
			@Override
			public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
				System.out.println("before...");
				Object result = methodProxy.invoke(target, objects);
				System.out.println("after...");
				return result;
			}
		}});

		// 动态代理所创建出来的UserService对象
		UserService userService = (UserService) enhancer.create();
		return userService;
	}
}
```

得到的都是UserService对象，但是执行test()方法时的效果却不一样了，这就是代理所带来的效果。

上面是通过cglib来实现的代理对象的创建，是基于父子类的，`被代理类（UserService）是父类`，`代理类是子类`，代理对象就是代理类的实例对象，代理类是由cglib创建的，对于程序员来说不用关心

## 7.4 Spring之AOP应用

### 7.4.1 Spring之AOP简介

Aspect Oriented Programing 面向切面编程，相比较 oop 面向对象编程来说，Aop关注的不再是程
序代码中某个类，某些方法，而aop考虑的更多的是一种`面到面的切入`，即层与层之间的一种切入，所
以称之为切面。联想大家吃的汉堡（中间夹肉）。那么aop是怎么做到拦截整个面的功能呢？考虑前面
学到的servlet filter /* 的配置 ，实际上也是aop 的实现。

#### AOP作用

**AOP主要应用于日志记录，性能统计，安全控制,事务处理等方面，实现公共功能性的重复使用**

#### AOP的特点
:::tip AOP的特点
 1. 降低模块与模块之间的耦合度，提高业务代码的聚合度。（高内聚低耦合）
 2. 提高了代码的复用性。
 3. 提高系统的扩展性。（高版本兼容低版本）
 4. 可以在不影响原有的功能基础上添加新的功能
:::

#### AOP的底层实现

**AOP的底层实现--动态代理（JDK + CGLIB）**

-------------------------------------------

### 7.4.2 AOP基本概念

#### Joinpoint（连接点）

被拦截到的每个点，spring中指被拦截到的每一个方法，spring aop一个连接点即代表一个方法的执行。

#### Pointcut（切入点）

对连接点进行拦截的定义（匹配规则定义 规定拦截哪些方法，对哪些方法进行处理），spring 有专门的表达式语言定义。

#### Advice（通知）
拦截到每一个连接点即（每一个方法）后所要做的操作

1. 前置通知 （前置增强）— before() 执行方法前通知
2. 返回通知（返回增强）— afterReturn 方法正常结束返回后的通知
3. 异常抛出通知（异常抛出增强）— afetrThrow()
4. 最终通知 — after 无论方法是否发生异常，均会执行该通知。
5. 环绕通知 — around 包围一个连接点（join point）的通知，如方法调用。这是最强大的一种通知类型。 环绕通知可以在方法调用前后完成自定义的行为。它也会选择是否继续执行连接点或直接返回它们自己的返回值或抛出异常来结束执行。

#### Aspect（切面）

切入点与通知的结合，决定了切面的定义，切入点定义了要拦截哪些类的哪些方法，通知则定义了拦截过方法后要做什么，切面则是横切关注点的抽象，与类相似，类是对物体特征的抽象，切面则是横切关注点抽象。

#### Target（目标对象）

被代理的目标对象

#### Weave（织入）

将切面应用到目标对象并生成代理对象的这个过程即为织入

#### Introduction（引入）

在不修改原有应用程序代码的情况下，`在程序运行期为类动态添加方法或者字段的过程称为引入`

### 7.4.4 AOP环境准备

```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
```

### 7.4.5 AOP切面实现

```java
package com.tqk.aop.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

/**
 * 切面
 *      切入点和通知的抽象
 *      定义 切入点  和 通知
 *         切入点：定义要拦截哪些类的哪些方法
 *         通知：定义了拦截之后方法要做什么
 */
@Component // 将对象交给IOC容器进行实例化
@Aspect // 声明当前类是一个切面
public class LogCut {

    /**
     * 切入点
     *      定义要拦截哪些类的哪些方法
     *      匹配规则，拦截什么方法
     *
     *      定义切入点
     *          @Pointcut("匹配规则")
     *
     *      Aop切入点表达式
     *          1. 执行所有的公共方法
     *              execution(public *(..))
     *         2. 执行任意的set方法
     *              execution(* set*(..))
     *         3. 设置指定包下的任意类的任意方法 （指定包：com.tqk.aop.service）
     *              execution(* com.tqk.aop.service.*.*(..))
     *         4. 设置指定包及子包下的任意类的任意方法 （指定包：com.tqk.aop.service）
     *             execution(* com.tqk.aop.service..*.*(..))
     *
     *        表达式中的第一个*
     *              代表的是方法的修饰范围  （public、private、protected）
     *              如果取值是*，则表示所有范围
     */
    @Pointcut("execution(* com.tqk.aop.service..*.*(..))")
    public void cut(){
        //todo 定义切点
    }

    /**
     * 声明前置通知，并将通知应用到指定的切入点上
     *      目标类的方法执行前，执行该通知
     */
    @Before(value = "cut()")
    public void before() {
        System.out.println("前置通知...");
    }

    /**
     * 声明返回通知，并将通知应用到指定的切入点上
     *      目标类的方法在无异常执行后，执行该通知
     */
    @AfterReturning(value = "cut()")
    public void afterReturn(){
        System.out.println("返回通知...");
    }

    /**
     * 声明最终通知，并将通知应用到指定的切入点上
     *      目标类的方法在执行后，执行该通知 （有异常和无异常最终都会执行）
     */
    @After(value = "cut()")
    public void after(){
        System.out.println("最终通知...");
    }

    /**
     * 声明异常通知，并将通知应用到指定的切入点上
     *      目标类的方法在执行异常时，执行该通知
     */
    @AfterThrowing(value = "cut()", throwing = "e")
    public void afterThrow(Exception e){
        System.out.println("异常通知...  ===== 异常原因：" + e.getMessage());
    }


    /**
     * 声明环绕通知，并将通知应用到指定的切入点上
     *      目标类的方法执行前后，都可通过环绕通知定义响应的处理
     *          需要通过显式调用的方法，否则无法访问指定方法 pjp.proceed();
     * @param pjp
     * @return
     */
    @Around(value = "cut()")
    public Object around(ProceedingJoinPoint pjp)  {
        System.out.println("环绕通知-前置通知...");

        Object object = null;
        //object = pjp.proceed();

        try{
            // 显式调用对应的方法
            object = pjp.proceed();
            System.out.println(pjp.getTarget());
            System.out.println("环绕通知-返回通知...");
        } catch (Throwable throwable){
            throwable.printStackTrace();
            System.out.println("环绕通知-异常通知...");
        }
        System.out.println("环绕通知-最终通知...");

        return object;
    }



}
```

### 7.4.4 AOP测试

#### IOC定义UserService
```java
package com.tqk.aop.appconfig;

import com.tqk.aop.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.tqk")
public class AppConfig {
	@Bean
	public UserService userService(){
		return new UserService();
	}

}
```

#### 测试类
```java
package com.tqk.aop.test;

import com.tqk.aop.appconfig.AppConfig;
import com.tqk.aop.service.UserService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * @author tianqikai
 */
public class Test {

    public static void main(String[] args) {
        // 获取上下文环境
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        // 获取指定Bean
        UserService userService = (UserService) context.getBean("userService");
        userService.test();

    }
}

```

#### 测试结果

```log
环绕通知-前置通知...
前置通知...
UserService Test...
返回通知...
最终通知...
com.tqk.aop.service.UserService@56bc3fac
环绕通知-返回通知...
环绕通知-最终通知...
```

