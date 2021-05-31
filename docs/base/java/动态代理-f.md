# 15.动态代理


**代理设计模式的原理:**
使用一个代理将对象包装起来, 然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时将方法调用转到原始对象上。   

1. 之前为大家讲解过代理机制的操作，属于静态代理，特征是代理类和目标对象的类都是在编译期间确定下来，不利于程序的扩展。同时，每一个代理类只能为一个接口服务，这样一来程序开发中必然产生过多的代理。最好可以通过一个代理类完成全部的代理功能。

2. 动态代理是指客户通过代理类来调用其它对象的方法，并且是在程序运行时根据需要动态创建目标类的代理对象。

**动态代理相比于静态代理的优点：**
<font color='red'><strong>抽象角色中（接口）声明的所有方法都被转移到调用处理器一个集中的方法中处理，这样，我们可以更加灵活和统一的处理众多的方法</strong></font>

## 15.1静态代理

```java
//静态代理
interface ClothFactory{
    void produceCloth();
}
//代理类
class ProxyClothFactory implements  ClothFactory{
    private ClothFactory clothFactory;

    public ProxyClothFactory(ClothFactory clothFactory) {
        this.clothFactory = clothFactory;
    }

    @Override
    public void produceCloth() {
        System.out.println("代理工厂做一些准备工作");
        clothFactory.produceCloth();
        System.out.println("代理工厂做一些后续的收尾工作");
    }
}
//被代理类
class Nike implements  ClothFactory{

    @Override
    public void produceCloth() {
        System.out.println("生产Nike球鞋");
    }
}
public class StaticProxyDemo {
    public static void main(String[] args) {
        Nike nike = new Nike();

        ProxyClothFactory proxyClothFactory = new ProxyClothFactory(nike);

        proxyClothFactory.produceCloth();

    }
}
```
## 15.1动态代理
::: tip <font color='red' size=4>Proxy类</font> 
**Proxy ：专门完成代理的操作类，是所有动态代理类的父类。通过此类为一个或多个接口动态地生成实现类**  
☆ 提供用于创建动态代理类和动态代理对象的静态方法  
<font color='red'><strong>▷static Class<?> getProxyClass(ClassLoader loader, Class<?>... interfaces) 创建一个动态代理类所对应的Class对象</strong></font>  
<font color='red'><strong>▷static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h) 直接创建一个动态代理对象</strong></font>  
:::


:::warning <font color='red' size=4>动态代理步骤</font>
1. 创建一个实现接口InvocationHandler的类，它必须实现invoke方法，以完成代理的具体操作。 
   <font color='red' size=3>public Object invoke(Object theProxy, Method method, Object[] params)</font>  
```java
class MyInvocationHandler implements InvocationHandler{
    private Object obj;
    public MyInvocationHandler(Object obj) {
        this.obj = obj;
    }
    /**
     * @param proxy 代理类的对象
     * @param method 要调用的方法
     * @param args 方法调用时所需要的参数
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        HumanUtil humanUtil = new HumanUtil();
        humanUtil.method1();
        Object invoke = method.invoke(obj, args);
        humanUtil.method2();
        return invoke;
    }
}
```
2. 创建被代理的类以及接口 
```java
interface  Human{
    void eat(String food);
    String getBelief();
}
```
3. 通过Proxy的静态方法  
<font color='red' size=3>newProxyInstance(ClassLoader loader, Class[] interfaces, InvocationHandler h)</font>  创建一个ProxyFactory接口代理  

```java
class ProxyFactory{
    public static Object getProxy(Object object){//被代理类
        MyInvocationHandler myInvocationHandler = new MyInvocationHandler(object);
        Object result=Proxy.newProxyInstance(object.getClass().getClassLoader(),object.getClass().getInterfaces(),myInvocationHandler);
        return result;
    }
}
```
4. 通过 ProxyFactory代理调用SuperHuman实现类的方法

```java
    public static void main(String[] args) {
        SuperHuman superHuman = new SuperHuman();
        Human proxyInstance = (Human)ProxyFactory.getProxy(superHuman);
        proxyInstance.getBelief();
        proxyInstance.eat("香蕉");
        System.out.println("-----------------------------------------------");
        Nike  nike =new Nike();
        ClothFactory proxy = (ClothFactory)ProxyFactory.getProxy(nike);
        proxy.produceCloth();
    }
```
:::
```java
//动态代理

interface  Human{
    void eat(String food);
    String getBelief();
}

class SuperHuman implements  Human{

    @Override
    public void eat(String food) {
        System.out.println("我喜欢吃"+food);
    }

    @Override
    public String getBelief() {
        System.out.println("I belive I can fly ");
        return null;
    }
}
class HumanUtil{

    public void method1(){
        System.out.println("====================通用方法一====================");

    }

    public void method2(){
        System.out.println("====================通用方法二====================");
    }

}


class MyInvocationHandler implements InvocationHandler{
    private Object obj;

    public MyInvocationHandler(){

    }

    public MyInvocationHandler(Object obj) {
        this.obj = obj;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        HumanUtil humanUtil = new HumanUtil();
        humanUtil.method1();
        Object invoke = method.invoke(obj, args);
        humanUtil.method2();
        return invoke;
    }
}
class ProxyFactory{
    public static Object getProxy(Object object){//被代理类
        MyInvocationHandler myInvocationHandler = new MyInvocationHandler(object);
        Object result=Proxy.newProxyInstance(object.getClass().getClassLoader(),object.getClass().getInterfaces(),myInvocationHandler);
        return result;
    }
}
public class ProxyTest {

    public static void main(String[] args) {
        SuperHuman superHuman = new SuperHuman();
        Human proxyInstance = (Human)ProxyFactory.getProxy(superHuman);
        proxyInstance.getBelief();
        proxyInstance.eat("香蕉");
        System.out.println("-----------------------------------------------");
        Nike  nike =new Nike();
        ClothFactory proxy = (ClothFactory)ProxyFactory.getProxy(nike);
        proxy.produceCloth();
    }

}
```
