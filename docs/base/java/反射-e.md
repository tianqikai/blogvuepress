# 14.反射

## 14.1 Java反射机制概述

::: tip <font color='red'>Java Reflection</font>
1. Reflection（反射）是被视为<font color='red'><strong>动态语言的关键</strong></font>，反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内部属性及方法。 
2. 加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。<font color='red'><strong>我们可以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射</strong></font>。
:::

-----------------------

<a data-fancybox title="Reflection" href="../image/Reflection.png">![Reflection](../image/Reflection.png)</a>


---------------------------

:::warning <font color='red'>动态语言 vs 静态语言</font>
1. 动态语言  
是一类在运行时可以改变其结构的语言：例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或是其他结构上的变化。通俗点说就是<font color='red'>在运行时代码可以根据某些条件改变自身结构</font>。  
主要动态语言：Object-C、C#、JavaScript、PHP、Python、Erlang。   
2. 静态语言  
与动态语言相对应的，运行时结构不可变的语言就是静态语言。如Java、C、C++。  

**Java不是动态语言，但Java可以称之为<font color='red'>“准动态语言”</font>。即Java有一定的动态性，我们可以利用反射机制、字节码操作获得类似动态语言的特性。Java的动态性让编程的时候更加灵活！**

:::


---------------------


::: danger Java反射机制提供的功能
1. 在运行时判断任意一个对象所属的类
2. 在运行时构造任意一个类的对象
3. 在运行时判断任意一个类所具有的成员变量和方法
4. 在运行时获取泛型信息
5. 在运行时调用任意一个对象的成员变量和方法
6. 在运行时处理注解
7. 生成动态代理
:::

:::tip <font color='blue'>反射的常用API</font>
1. java.lang.Class:代表一个类 
2. java.lang.reflect.Method:代表类的方法
3. java.lang.reflect.Field:代表类的成员变量
4. java.lang.reflect.Constructor:代表类的构造器
:::

## 14.2 理解Class类并获取Class的实例

在Object类中定义了以下的方法，此方法将被所有子类继承：
<font color='red'><strong>public final Class getClass()</strong></font>以上的方法返回值的类型是一个Class类，
此类是Java反射的源头，实际上所谓反射从程序的运行结果来看也很好理解，即：<font color='red'>可以通过对象反射求出类的名称</font>

:::tip <font color='red'>class类</font> 
对象照镜子后可以得到的信息：某个类的属性、方法和构造器、某个类到底实现了哪些接口。对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。一个 Class 对象包含了特定某个结构(class/interface/enum/annotation/primitive type/void/[])的有关信息。 
1. Class本身也是一个类
2. Class 对象只能由系统建立对象
3. 一个加载的类在 JVM 中只会有一个Class实例
4. 一个Class对象对应的是一个加载到JVM中的一个.class文件
5. 每个类的实例都会记得自己是由哪个 Class 实例所生成
6. 通过Class可以完整地得到一个类中的所有被加载的结构
7. Class类是Reflection的根源，针对任何你想动态加载、运行的类，唯有先获得相应的Class对象
:::

:::warning  <font color='red'>class常用的方法</font> 
1. <font color='red'><strong>static Class forName(String name)</strong></font> 　　　返回指定类名 name 的 Class 对象
2. <font color='red'><strong>Object newInstance()</strong></font> 　　　　　　　　　　调用缺省构造函数，返回该Class对象的一个实例
3. <font color='red'><strong>getName()</strong></font> 　返回此Class对象所表示的实体（类、接口、数组类、基本类型或void）名称
4. <font color='red'><strong>Class getSuperClass()</strong></font>　　　　　　　　　　返回当前Class对象的父类的Class对象
5. <font color='red'><strong>Class [] getInterfaces()</strong></font> 　　　　　　　　获取当前Class对象的接口
6. <font color='red'><strong>ClassLoader getClassLoader()</strong></font> 　　　　　　返回该类的类加载器
7. <font color='red'><strong>Class getSuperclass()</strong></font>　　　　　　　　　　返回表示此Class所表示的实体的超类的Class
8. <font color='red'><strong>Constructor[] getConstructors()</strong></font>　　　　　返回一个包含某些Constructor对象的数组
9. <font color='red'><strong>Field[] getDeclaredFields()</strong></font>　　　　　　　返回Field对象的一个数组
10. <font color='red'><strong>Method getMethod(String name,Class … paramTypes)</strong></font>　返回一个Method对象，此对象的形参类型为paramType
:::



:::tip <font color='red'>☆获取Class类的实例(四种方法)</font> 
1. 前提：若<font color='blue'>**已知具体的类**</font> ，通过类的class属性获取，该方法最为安全可靠，程序性能最高  
　实例：Class clazz = String.class;   
2. 前提：<font color='blue'>**已知某个类的实例**</font> ，调用该实例的getClass()方法获取Class对象  
　实例：Class clazz = “www.atguigu.com”.getClass();  
3. 前提：<font color='blue'>**已知一个类的全类名，且该类在类路径下**</font> ，可通过Class类的静态方法forName()获取，可能抛出ClassNotFoundException  
　实例：Class clazz = Class.forName(“java.lang.String”);  
4. <font color='blue'>**其他方式(不做要求)**</font>   
　<font color='red'>ClassLoader cl = this.getClass().getClassLoader()</font>    
　<font color='red'>Class clazz4 = cl.loadClass(“类的全类名”)</font>   
:::
-------------
:::danger 哪些类型可以有Class对象？
（1）**class**： 外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类  
（2）**interface**：接口  
（3）**[]**：数组  
（4）**enum**：枚举  
（5）**annotation**：注解@interface  
（6）**primitive type**：基本数据类型  
（7）**void**  
:::

```java
```


## 14.3 类的加载与ClassLoader的理解

## 14.4 创建运行时类的对象

## 14.5 获取运行时类的完整结构

## 14.6 调用运行时类的指定结构

## 14.7 调用运行时类的指定结构
