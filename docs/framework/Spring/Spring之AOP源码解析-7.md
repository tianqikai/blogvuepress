# 5. Spring之AOP底层源码解析

## 5.1 动态代理

代理模式的解释：为`其他对象`提供一种`代理`以控制对这个对象的访问，`增强一个类中的某个方法`，对程序进行扩展

### 5.1.1 cglib动态代理

#### 5.1.1.1 被代理类（UserService）
```java
public class UserService  {

	public void test() {
		System.out.println("test...");
	}

}
```
此时，我们new一个UserService对象，然后执行test()方法，结果是显而易见的。

如果我们现在想在不修改UserService类的源码前提下，给test()增加额外逻辑，那么就可以使用动态代理机制来创建UserService对象了，比如：

#### 5.1.1.2 代理类（UserServiceProxy）
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

### 5.1.2 JDK动态代理

除开cglib技术，jdk本身也提供了一种创建代理对象的动态代理机制，但是它只能代理接口，也就是UserService得先有一个接口才能利用jdk动态代理机制来生成一个代理对象，比如：

#### 5.1.2.1 接口
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

#### 5.1.2.2 被代理类
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

#### 5.1.2.3 代理类
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


## 5.2 ProxyFactory

上面我们介绍了两种动态代理技术，那么在Spring中进行了封装，`封装出来的类叫做ProxyFactory`，表示是创建代理对象的一个工厂，使用起来会比上面的更加方便，比如：

```java
package com.tqk.jdk;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.jetbrains.annotations.Nullable;
import org.springframework.aop.framework.ProxyFactory;

/**
 * @author tianqikai
 */
public class UserProxyFactory {
	public static void main(String[] args) {
		UserService userService = (UserService) getUserService();
		userService.test();
	}

	@Nullable
	private static UserInterface getUserService() {
		UserService userService = new UserService();
		ProxyFactory proxyFactory = new ProxyFactory();
		proxyFactory.setTarget(userService);
		proxyFactory.addAdvice(new MethodInterceptor() {
			@Override
			public Object invoke(MethodInvocation invocation) throws Throwable {
				System.out.println("before...");
				Object result = invocation.proceed();
				System.out.println("after...");
				return result;
			}
		});

		UserInterface userService2 = (UserInterface) proxyFactory.getProxy();
		return userService2;
	}
}

```

`通过ProxyFactory`，我们可以不再关系到底是`用cglib还是jdk动态代理`了，ProxyFactory会帮我们去判断

- 如果UserService实现了接口，那么ProxyFactory底层就会用jdk动态代理，
- 如果没有实现接口，就会用cglib技术

上面的代码，就是由于UserService实现了UserInterface接口，所以最后产生的代理对象是`UserInterface类型`。


## 5.3 Advice的分类

1. `Before Advice`：方法之前执行
2. `After returning advice`：方法return后执行
3. `After throwing advice`：方法抛异常后执行
4. `After (finally) advice`：方法执行完finally之后执行，这是最后的，比return更后
5. `Around advice`：这是功能最强大的Advice，可以自定义执行顺序

### 5.3.1 AdviceDemo

```java
package com.tqk.advice;

import com.tqk.cglib.UserService;
import org.springframework.aop.framework.ProxyFactory;

/**
 * @author tianqikai
 */
public class AdviceDemo {
	public static void main(String[] args) {
		UserService userService = new UserService();
		ProxyFactory proxyFactory = new ProxyFactory();
		proxyFactory.setTarget(userService);
		proxyFactory.addAdvice(new TqkAroundAdvice());
		proxyFactory.addAdvice(new TqkBeforeAdvice());
		UserService  userService1= (UserService) proxyFactory.getProxy();
		userService1.test();
	}
}
```

### 5.3.2 TqkAfterReturningAdvice

`After returning advice`：方法return后执行

```java
package com.tqk.advice;

import org.springframework.aop.AfterReturningAdvice;
import java.lang.reflect.Method;

/**
 * @author tianqikai
 */
public class TqkAfterReturningAdvice implements AfterReturningAdvice {

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		System.out.println("方法return后执行");
	}
}

```

### 5.3.3 TqkAroundAdvice


`Around advice`：这是功能最强大的Advice，可以自定义执行顺序

```java
package com.tqk.advice;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

/**
 * @author tianqikai
 */
public class TqkAroundAdvice implements MethodInterceptor {
	@Nullable
	@Override
	public Object invoke(@NotNull MethodInvocation invocation) throws Throwable {
		System.out.println("方法执行Around前");
		Object proceed = invocation.proceed();
		System.out.println("方法执行Around后");
		return proceed;
	}
}

```

### 5.3.4 TqkBeforeAdvice

```java
package com.tqk.advice;

import org.springframework.aop.MethodBeforeAdvice;

import java.lang.reflect.Method;


/**
 * @author tianqikai
 */
public class TqkBeforeAdvice implements MethodBeforeAdvice {

	@Override
	public void before(Method method, Object[] args, Object target) throws Throwable {
		System.out.println("方法执行前执行");
	}
}

```

### 5.3.5 TqkThrowsAdvice

```java
package com.tqk.advice;
import org.springframework.aop.ThrowsAdvice;
import java.lang.reflect.Method;

/**
 * @author tianqikai
 */
public class TqkThrowsAdvice implements ThrowsAdvice {

	public void afterThrowing(Method method, Object[] args, Object target, NullPointerException ex) {
		System.out.println("方法抛出异常后执行");
	}
}
```


## 5.4 Advisor的理解

跟Advice类似的还有一个Advisor的概念，`一个Advisor是有一个Pointcut和一个Advice组成的`，通过Pointcut可以指定要需要被代理的逻辑，比如一个UserService类中有两个方法，按上面的例子，这两个方法都会被代理，被增强，那么我们`现在可以通过Advisor，来控制到具体代理哪一个方法`，比如：

```java
package com.tqk.advice;

import com.tqk.cglib.UserService;
import org.aopalliance.aop.Advice;
import org.jetbrains.annotations.NotNull;
import org.springframework.aop.Pointcut;
import org.springframework.aop.PointcutAdvisor;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.aop.support.StaticMethodMatcherPointcut;

import java.lang.reflect.Method;

/**
 * @author tianqikai
 */
public class AdvisorDemo {
	public static void main(String[] args) {
		UserService userService = getUserService();
		userService.testAbc();
	}

	@NotNull
	private static UserService getUserService() {
		UserService target = new UserService();

		ProxyFactory proxyFactory = new ProxyFactory();
		proxyFactory.setTarget(target);
		proxyFactory.addAdvisor(new PointcutAdvisor() {
			@Override
			public Pointcut getPointcut() {
				return new StaticMethodMatcherPointcut() {
					@Override
					public boolean matches(Method method, Class<?> targetClass) {
						return method.getName().equals("testAbc");
					}
				};
			}

			@Override
			public Advice getAdvice() {

				return new TqkAroundAdvice();
//				return new MethodInterceptor() {
//					@Override
//					public Object invoke(MethodInvocation invocation) throws Throwable {
//						System.out.println("before...");
//						Object result = invocation.proceed();
//						System.out.println("after...");
//						return result;
//					}
//				};
			}

			@Override
			public boolean isPerInstance() {
				return false;
			}
		});

		UserService userService = (UserService) proxyFactory.getProxy();
		return userService;
	}
}
```


## 5.5 创建代理对象的方式

上面介绍了Spring中所提供了`ProxyFactory、Advisor、Advice、PointCut`等技术来实现代理对象的创建，

但是我们在使用Spring时，我们并不会直接这么去使用ProxyFactory，比如说，我们希望ProxyFactory所产生的代理对象能直接就是Bean，能直接从Spring容器中得到UserSerivce的代理对象，而这些Spring都是支持的，只不过作为开发者的我们肯定得告诉Spring，那些类需要被代理，代理逻辑是什么。

### 5.5.1 ProxyFactoryBean


```java
@Bean
public ProxyFactoryBean userServiceProxy(){
	UserService userService = new UserService();

	ProxyFactoryBean proxyFactoryBean = new ProxyFactoryBean();
	proxyFactoryBean.setTarget(userService);
	proxyFactoryBean.addAdvice(new MethodInterceptor() {
		@Override
		public Object invoke(MethodInvocation invocation) throws Throwable {
			System.out.println("before...");
			Object result = invocation.proceed();
			System.out.println("after...");
			return result;
		}
	});
	return proxyFactoryBean;
}

```

通过这种方法来定义一个UserService的Bean，并且是经过了AOP的。但是这种方式只能针对某一个Bean。它是一个FactoryBean，所以利用的就是FactoryBean技术，间接的将UserService的代理对象作为了Bean。

------------------------

`ProxyFactoryBean`还有额外的功能，比如可以把某个Advice或Advisor定义成为Bean，然后在ProxyFactoryBean中进行设置

```java
package com.tuling.aop;

import com.tuling.UserService;
import com.tuling.aop.advice.ZhouyuAroundAdvice;
import org.springframework.aop.framework.ProxyFactoryBean;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author 周瑜
 */
@Configuration
public class ProxyFactoryBeanDemo {


	@Bean
	public ZhouyuAroundAdvice zhouyuAroundAdvise() {
		return new ZhouyuAroundAdvice();
	}


	@Bean
	public ProxyFactoryBean userService() {
		UserService userService = new UserService();

		ProxyFactoryBean proxyFactoryBean = new ProxyFactoryBean();
		proxyFactoryBean.setProxyTargetClass(true);
		proxyFactoryBean.setTarget(userService);
		proxyFactoryBean.setInterceptorNames("zhouyuAroundAdvise");
		return proxyFactoryBean;
	}

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext =
				new AnnotationConfigApplicationContext(ProxyFactoryBeanDemo.class);
		UserService userService = applicationContext.getBean("userService", UserService.class);
		userService.test();
	}
}

```

### 5.5.2 BeanNameAutoProxyCreator

`ProxyFactoryBean`得自己指定被代理的对象，那么我们可以通过`BeanNameAutoProxyCreator`来通过指定`某个bean的名字`，来对该bean进行代理

```java
package com.tuling.aop;

import com.tuling.UserService;
import com.tuling.aop.advice.ZhouyuAroundAdvice;
import org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author 周瑜
 */
@Configuration
public class BeanNameAutoProxyCreatorDemo {

	@Bean
	public UserService userService() {
		return new UserService();
	}

	@Bean
	public ZhouyuAroundAdvice zhouyuAroundAdvise() {
		return new ZhouyuAroundAdvice();
	}

	@Bean
	public BeanNameAutoProxyCreator beanNameAutoProxyCreator() {
		BeanNameAutoProxyCreator beanNameAutoProxyCreator = new BeanNameAutoProxyCreator();
		beanNameAutoProxyCreator.setBeanNames("userSe*");
		beanNameAutoProxyCreator.setInterceptorNames("zhouyuAroundAdvise");
		beanNameAutoProxyCreator.setProxyTargetClass(true);

		return beanNameAutoProxyCreator;
	}

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext =
				new AnnotationConfigApplicationContext(BeanNameAutoProxyCreatorDemo.class);

		UserService userService = applicationContext.getBean("userService", UserService.class);
		userService.test();
	}
}

```


```java
方法执行Around前
test...
方法执行Around后
```

### 5.5.3 DefaultAdvisorAutoProxyCreator

```java
package com.tuling.aop;

import com.tuling.UserService;
import com.tuling.aop.advice.ZhouyuAfterReturningAdvice;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.aop.support.NameMatchMethodPointcut;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author 周瑜
 */
@Configuration
public class DefaultAdvisorAutoProxyCreatorDemo {

	@Bean
	public UserService userService() {
		return new UserService();
	}

	@Bean
	public DefaultPointcutAdvisor defaultPointcutAdvisor() {
		NameMatchMethodPointcut pointcut = new NameMatchMethodPointcut();
		pointcut.addMethodName("test");

		DefaultPointcutAdvisor defaultPointcutAdvisor = new DefaultPointcutAdvisor();
		defaultPointcutAdvisor.setPointcut(pointcut);
		defaultPointcutAdvisor.setAdvice(new ZhouyuAfterReturningAdvice());

		return defaultPointcutAdvisor;
	}

	@Bean
	public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {
		DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator = new DefaultAdvisorAutoProxyCreator();
		defaultAdvisorAutoProxyCreator.setProxyTargetClass(true);

		return defaultAdvisorAutoProxyCreator;
	}

	public static void main(String[] args) {
		AnnotationConfigApplicationContext applicationContext =
				new AnnotationConfigApplicationContext(DefaultAdvisorAutoProxyCreatorDemo.class);
		UserService userService = applicationContext.getBean("userService", UserService.class);
		userService.test();
	}
}

```

通过DefaultAdvisorAutoProxyCreator会直接去找所有Advisor类型的Bean，根据Advisor中的PointCut和Advice信息，确定要代理的Bean以及代理逻辑。

但是，我们发现，通过这种方式，我们得依靠某一个类来实现定义我们的Advisor，或者Advice，或者Pointcut，那么这个步骤能不能更加简化一点呢？

对的，通过注解！

比如我们能不能只定义一个类，然后通过在类中的方法上通过某些注解，来定义PointCut以及Advice，可以的，比如

```java
@Aspect
@Component
public class ZhouyuAspect {

	@Before("execution(public void com.zhouyu.service.UserService.test())")
	public void zhouyuBefore(JoinPoint joinPoint) {
		System.out.println("zhouyuBefore");
	}

}
```
通过上面这个类，我们就直接定义好了所要代理的方法(通过一个表达式)，以及代理逻辑（被@Before修饰的方法），简单明了，这样对于Spring来说，它要做的就是来解析这些注解了，解析之后得到对应的Pointcut对象、Advice对象，生成Advisor对象，扔进ProxyFactory中，进而产生对应的代理对象，具体怎么解析这些注解就是`@EnableAspectJAutoProxy注解`所要做的事情了，后面详细分析。


### 5.5.4 

```java
```