# 2. 手写模拟Spring底层原理

:::tip 核心知识点简介
1. 扫描加载路径生成，并将信息存放在**beanDefinitionMap**

```java
// todo 扫描需要加载的路径，需要创建的对象
private Map<String ,BeanDefinition> beanDefinitionMap =new HashMap<>();
```

2. 遍历**beanDefinitionMap** 进行创建Bean，存放在数据到单例池
```java
//todo 单例实例化池
private Map<String ,Object> singletonObjects =new HashMap<>();
```
3. 初始化后置处理池,进行一些aop处理

```java
//todo 初始化后置处理池
private List<BeanPostProcessor> beanPostProcessorList = new ArrayList<>();
```
:::

## 2.1 Java自定义注解复习

### 2.1.1 什么是注解(Annotation)

Java注解又称Java标注，是JDK5.0版本开始支持加入源代码的特殊语法元数据。
Java语言中的类、方法、变量、参数和包等都可以被标注。和Javadoc不同，Java标注可以通过反射获取标注内容。在编译器生成类文件时，标注可以被嵌入到字节码中。Java虚拟机可以保留标注内容，在运行时可以获取到标注内容。 当然它也支持自定义Java标注。

:::tip 声明一个注解要用到的东西
1. 修饰符  
  访问修饰符必须为public,不写默认为pubic；
2. 关键字  
  关键字为@interface；
3. 注解名称  
  注解名称为自定义注解的名称，使用时还会用到；
4. 注解类型元素  
  注解类型元素是注解中内容，可以理解成自定义接口的实现部分；
:::

### 2.1.2 常用元注解

JDK中有一些元注解，**主要有@Target，@Retention,@Document,@Inherited用来修饰注解。**

:::tip 常用元注解
1. @Target  
  表明该注解可以应用的java元素类型
2. @Retention  
  表明该注解的生命周期

3. @Document  
  表明该注解标记的元素可以被Javadoc 或类似的工具文档化
4. @Inherited  
  表明使用了@Inherited注解的注解，所标记的类的子类也会拥有这个注解
:::


### 2.1.3 配置注解
```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// 适用类、接口（包括注解类型）或枚举
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface ClassInfo {  
    String value();  
}
```

```java
// 适用field属性，也包括enum常量
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface FieldInfo {  
    int[] value();  
}  
```

```java
// 适用方法
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MethodInfo {  
    String name() default "long";  
    String data();  
    int age() default 27;  
}
```
### 2.1.4 使用自定义注解

```java

/**
 * 测试运行时注解 
 */  
@ClassInfo("Test Class")  
public class TestRuntimeAnnotation {  
  
    @FieldInfo(value = {1, 2})  
    public String fieldInfo = "FiledInfo";  
  
    @FieldInfo(value = {10086})  
    public int i = 100;  
  
    @MethodInfo(name = "BlueBird", data = "Big")  
    public static String getMethodInfo() {  
        return TestRuntimeAnnotation.class.getSimpleName();  
    }  
}  
```
### 2.1.5 测试自定义注解

```java
package com.tqk.zz.test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;

public class test {

    public static void main(String[] args) {
        _testRuntimeAnnotation();
        System.out.println("---------------");

    }
    /**
     * 测试运行时注解
     */
    private static void _testRuntimeAnnotation() {
        StringBuffer sb = new StringBuffer();
        Class<?> cls = TestRuntimeAnnotation.class;
        Constructor<?>[] constructors = cls.getConstructors();
        // 获取指定类型的注解
        sb.append("Class注解：").append("\n");
        ClassInfo classInfo = cls.getAnnotation(ClassInfo.class);
        if (classInfo != null) {
            sb.append(Modifier.toString(cls.getModifiers())).append(" ")
                    .append(cls.getSimpleName()).append("\n");
            sb.append("注解值: ").append(classInfo.value()).append("\n\n");
        }
        System.out.println("--------------------------");
        sb.append("Field注解：").append("\n");
        Field[] fields = cls.getDeclaredFields();
        for (Field field : fields) {
            FieldInfo fieldInfo = field.getAnnotation(FieldInfo.class);
            if (fieldInfo != null) {
                sb.append(Modifier.toString(field.getModifiers())).append(" ")
                        .append(field.getType().getSimpleName()).append(" ")
                        .append(field.getName()).append("\n");
                sb.append("注解值: ").append(Arrays.toString(fieldInfo.value())).append("\n\n");
            }
        }
        System.out.println("--------------------------");
        sb.append("Method注解：").append("\n");
        Method[] methods = cls.getDeclaredMethods();
        for (Method method : methods) {
            MethodInfo methodInfo = method.getAnnotation(MethodInfo.class);
            if (methodInfo != null) {
                sb.append(Modifier.toString(method.getModifiers())).append(" ")
                        .append(method.getReturnType().getSimpleName()).append(" ")
                        .append(method.getName()).append("\n");
                sb.append("注解值: ").append("\n");
                sb.append("name: ").append(methodInfo.name()).append("\n");
                sb.append("data: ").append(methodInfo.data()).append("\n");
                sb.append("age: ").append(methodInfo.age()).append("\n");
            }
        }

        System.out.print(sb.toString());
    }
}
```

## 2.2 手写Spring底层核心逻辑

### 2.2.1 TqkApplicationContext

```java
package com.tqk.spring;

import java.io.File;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author tianqikai
 */
public class TqkApplicationContext {
    private Class configClass;

    // todo 扫描需要创建的对象
    private Map<String ,BeanDefinition> beanDefinitionMap =new HashMap<>();

    //todo 单例实例化池
    private Map<String ,Object> singletonObjects =new HashMap<>();
    //todo 初始化后置处理池
    private List<BeanPostProcessor> beanPostProcessorList = new ArrayList<>();

    public TqkApplicationContext(Class configClass) {
        this.configClass = configClass;

        //todo 扫描指定的加载路径
        scan(configClass);

        //todo 遍历 beanDefinitionMap创建 bean
        for (Map.Entry<String, BeanDefinition> entry : beanDefinitionMap.entrySet()){
            String beanName = entry.getKey();
            BeanDefinition beanDefinition = entry.getValue();
            if (beanDefinition.getScope().equals("singleton")) {
                Object bean = createBean(beanName, beanDefinition);
                singletonObjects.put(beanName, bean);
            }
        }
    }

    /**
     * 创建Bean
     * @param beanName
     * @param beanDefinition
     * @return
     */
    public Object createBean(String beanName, BeanDefinition beanDefinition){
        Class clazz =beanDefinition.getType();
        Object object =null;
        try {
            object = clazz.getConstructor().newInstance();

            for (Field field : clazz.getDeclaredFields()) {
                if (field.isAnnotationPresent(Autowired.class)) {

                    field.setAccessible(true);
                    //todo 创建bean 赋值给object对象
                    field.set(object, getBean(field.getName()));
                }
            }

            // todo 获取beanname
            if (object instanceof BeanNameAware) {
                ((BeanNameAware)object).setBeanName(beanName);
            }

            // todo 把每一个bean都放入到 BeanPostProcessor 进行前置处理
            for (BeanPostProcessor beanPostProcessor : beanPostProcessorList) {
                System.out.println(object);
                System.out.println(beanName);
                object = beanPostProcessor.postProcessBeforeInitialization(object, beanName);
            }

            // todo 实现初始化操作方法
            if (object instanceof InitializingBean) {
                //todo 调用初始化接口中的方法
                ((InitializingBean)object).afterPropertiesSet();
            }

            // todo 把每一个bean都放入到 BeanPostProcessor 进行后置处理
            for (BeanPostProcessor beanPostProcessor : beanPostProcessorList) {
                object = beanPostProcessor.postProcessAfterInitialization(object, beanName);
            }

        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
        return object;
    }

    /**
     * 获取 Bean
     * @param beanName
     * @return
     */
    public Object getBean(String beanName) {
        //todo 如果不存在直接报错
        if (!beanDefinitionMap.containsKey(beanName)) {
            throw new NullPointerException();
        }

        BeanDefinition beanDefinition = beanDefinitionMap.get(beanName);
        //todo 如果是单例模式直接从单例池中获取
        if (beanDefinition.getScope().equals("singleton")) {
            Object singletonBean = singletonObjects.get(beanName);
            //todo 如果单例池中还没有创建好，再次创建；
            //todo userService包含OrderService情况，我先去创建userService，但是其属性OrderService还是空，就会造成这种情况
            if (singletonBean == null) {
                singletonBean = createBean(beanName, beanDefinition);
                singletonObjects.put(beanName, singletonBean);
            }
            return singletonBean;
        } else {
            //todo 如果是原型 直接创建
            Object prototypeBean = createBean(beanName, beanDefinition);
            return prototypeBean;
        }

    }

    /**
     * 扫描类路径
     * @param configClass
     */
    private void scan(Class configClass) {
        /**
         * 类加载复习
         * Bootstrap ClassLoader   --> jre/lib
         * Extention ClassLoader   --> jre/ext/lib
         * Application ClassLoader --> 指定的类的加载路径
         * Custom ClassLoader
         */
        if(configClass.isAnnotationPresent(ComponentScan.class)){


            ComponentScan configClassAnnotation = (ComponentScan) configClass.getAnnotation(ComponentScan.class);

            //todo 获取扫描路径
            String path = configClassAnnotation.value();

            path=path.replace(".","/");

            ClassLoader classLoader = TqkApplicationContext.class.getClassLoader();
            URL resource = classLoader.getResource(path);
            File file = new File(resource.getFile());
            System.out.println(file.getAbsolutePath());

            //todo 注意不要把项目建在中文路径下，不然识别不了目录路径
            //todo 如果是目录，进行遍历文件

            if (file.isDirectory()){
                for(File f:file.listFiles()){
                    String absolutePath = f.getAbsolutePath();
                    absolutePath=absolutePath.substring(absolutePath.indexOf("com"),absolutePath.indexOf(".class")).replace("\\",".");
                    System.out.println("类路径："+absolutePath);

                    try {
                        Class<?> clazz = classLoader.loadClass(absolutePath);
                        //todo 如果是A.isAssignableFrom(B)确定一个类(B)是不是继承来自于另一个父类(A)，一个接口(A)是不是实现了另外一个接口(B)，或者两个类相同
                        //todo
                        if (BeanPostProcessor.class.isAssignableFrom(clazz)) {
                            BeanPostProcessor instance = (BeanPostProcessor) clazz.getConstructor().newInstance();
                            beanPostProcessorList.add(instance);
                        }

                        //todo 判断是否添加compent注解
                        if(clazz.isAnnotationPresent(Component.class)){

                            Component component = clazz.getAnnotation(Component.class);
                            String className = component.value();
                            //todo 如果注解中没有加value，自己截取
                            if(className.isEmpty()||className==null){
                                className=clazz.getSimpleName().substring(0,1).toLowerCase()+ clazz.getSimpleName().substring(1);
                            }
                            System.out.println("注解类："+className);

                            //todo 创建一个BeanDefinition 存放类信息
                            BeanDefinition beanDefinition = new BeanDefinition();
                            beanDefinition.setType(clazz);

                            //todo 判断该类是否添加Scope注解，进行解析
                            if(clazz.isAnnotationPresent(Scope.class)){

                                Scope scope = clazz.getAnnotation(Scope.class);
                                beanDefinition.setScope(scope.value());
                            }else{

                                beanDefinition.setScope("singleton");
                            }
                            beanDefinitionMap.put(className,beanDefinition);
                        }
                    } catch (ClassNotFoundException | NoSuchMethodException e) {
                        e.printStackTrace();
                    } catch (InvocationTargetException e) {
                        e.printStackTrace();
                    } catch (InstantiationException e) {
                        e.printStackTrace();
                    } catch (IllegalAccessException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
```

### 2.2.2 BeanDefinition

```java
/**
 * 存放bean类型信息
 * @author tianqikai
 */
public class BeanDefinition {
    //todo bean class类型
    private Class type;
    //todo 原型类还是单例类
    private String scope;
    //todo 是否懒加载
    private boolean isLazy;

    public Class getType() {
        return type;
    }

    public void setType(Class type) {
        this.type = type;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public boolean isLazy() {
        return isLazy;
    }

    public void setLazy(boolean lazy) {
        isLazy = lazy;
    }
}
```

### 2.2.3 常用注解

```java
package com.tqk.spring;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface ComponentScan {

    String value() default "";
}


package com.tqk.spring;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author tianqikai
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Component {
    String value() default "";
}


package com.tqk.spring;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 依赖注入
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Autowired {
}

```

### 2.2.4 BeanPostProcessor

```java
package com.tqk.spring;

/**
 * 后置处理器：初始化前后进行处理工作
 * 将后置处理器加入到容器中
 * @author tianqikai
 */
public interface BeanPostProcessor {

    default Object postProcessBeforeInitialization(Object bean, String beanName) {
        return bean;
    }

    default Object postProcessAfterInitialization(Object bean, String beanName) {
        return bean;
    }
}

```
### 2.2.5 InitializingBean

```java
package com.tqk.spring;

/**
 * 初始化
 * @author tianqikai
 */
public interface InitializingBean {

    /**
     * @param
     * @return
     */
    void afterPropertiesSet();
}
```
### 2.2.6 Scope

```java
package com.tqk.spring;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author tianqikai
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Scope {
    String value() default "";
}

```