# 11.泛型

## 泛型设计背景

集合容器类在设计阶段/声明阶段不能确定这个容器到底实际存的是什么类型的
对象，所以<font color='blue'><strong>在JDK1.5之前只能把元素类型设计为Object，JDK1.5之后使用泛型来
解决</strong></font>。因为这个时候除了元素的类型不确定，其他的部分是确定的，例如关于
这个元素如何保存，如何管理等是确定的，因此<font color='red'><strong>此时把元素的类型设计成一个
参数，这个类型参数叫做泛型</strong></font>。Collection&#60;E&#62;，List&#60;E&#62;，ArrayList&#60;E&#62; 这个&#60;E&#62;就
是类型参数，即泛型。

## 泛型概念
所谓泛型，就是允许在定义类、接口时通过一个标识表示类中某个属性的类
型或者是某个方法的返回值及参数类型。这个类型参数将在使用时（例如，
继承或实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实
际的类型参数，也称为类型实参）。

```java
import java.util.ArrayList;
import java.util.List;

public class Generic {
    public static void main(String[] args) {
        objectMethod();
        genericMethod();

    }

    private static void genericMethod() {
        List<Integer> list1=new ArrayList<Integer>();
        List<String> list2=new ArrayList<String>();
        List<Person> list3=new ArrayList<Person>();
        list1.add(1);
        list2.add("xm");
        Person person=new Person();
        person.name="111";
        person.age=11;
        list3.add(person);
        for (Integer o : list1) {
            System.out.println(o);
        }
        for (String o : list2) {
            System.out.println(o);
        }
        for (Person o : list3) {
            System.out.println(o.toString());
        }
    }

    private static void objectMethod() {
        List<Object> list=new ArrayList<Object>();
        list.add(1);
        list.add("xm");
        Person person=new Person();
        person.name="111";
        person.age=11;
        list.add(person);
        for (Object o : list) {
            if(o instanceof Integer||o instanceof String){
                System.out.println(o);
            }else if(o instanceof Person){
                System.out.println(o.toString());
            }
        }
    }
    private static <T> void objectMethod2() {
        List<T> list=new ArrayList<T>();
    }
}
```

## 泛型的优点
1. 可以统一集合中的数据类型，提高安全性
2. 可以减少强制类型转换
3. Java泛型可以保证如果程序在编译时没有发出警告，运行时就不会产生ClassCastException异常。同时，代码更加简洁、健壮。


