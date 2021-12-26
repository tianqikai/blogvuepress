# 1. JAVA基础
[[toc]]

## 1.1 不改变对象地址，修改其值

```java
  public static void main(String [] args) {
    String s = new String("abc");
    // 在这中间可以添加N⾏代码， 但必须保证s引⽤的指向不变， 最终将输出变成abcd
    System.out.println(s);
  }
```

> 答案：采用反射方式
```java
/**
 * @author tianqikai
 */
public class test {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        String abc = new String("abc");
        Field declaredField = abc.getClass().getDeclaredField("value");
        declaredField.setAccessible(true);
        declaredField.set(abc,"abcd".toCharArray());
        System.out.println(abc);
    }
}
```

## 1.2 String值比较
```java
 public static void main(String [] args) {
     String s1 = new String("abc");
   String s2 = "abc";
     // s1 == s2?
     String s3 = s1.intern();
     // s2 == s3?
 }
```
> 答案：
> 1. s1 == s2为false
> 2. s2 == s3为true
> 
> String对象的intern⽅法， ⾸先会检查字符串常量池中是否存在"abc"， 如果存在则返回该字符串引⽤， 如果不存在， 则把"abc"添加到字符串常量池中， 并返回该字符串常量的引⽤ 。

## 1.3 包装类

```java
  public static void main(String [] args) {
      Integer i1 = 100;
      Integer i2 = 100;
      // i1 == i2?

      Integer i3 = 128;
      Integer i4 = 128;
    // i3 == i4?
  }
```
> 答案：
> 1. i1 == i2为true
> 2. i3 == i4为false
> 
> 在Interger类中， 存在⼀个静态内部类IntegerCache， 该类中存在⼀个Integer cache[]， 并且存在⼀    个static块， 会在加载类的时候执⾏， 会将-128⾄127这些数字提前⽣成Integer对象， 并缓存在cache数 组中， 当我们在定义Integer数字时， 会调⽤Integer的valueOf⽅法， valueOf⽅法会判断所定义的数字   是否在-128⾄127之间， 如果存在则直接从cache数组中获取Integer对象， 如果超过， 则⽣成⼀个新的  Integer对象。

## 1.4 String/StringBuffer/StringBuilder的区别

1. String是不可变的， 如果尝试去修改， 会新⽣成⼀个字符串对象， StringBuffer和StringBuilder是可变的
2. StringBuffer是线程安全的， StringBuilder是线程不安全的， 所以在单线程环境下StringBuilder效率会更⾼

## 1.5 ArrayList和LinkedList有哪些区别

1. ⾸先，他们的底层数据结构不同， ArrayList底层是基于`数组`实现的， LinkedList底层是基于`链表`实现的
2. 由于底层数据结构不同， 他们所适⽤的场景也不同， ArrayList更适合随机查找， LinkedList更适合 删除和添加， 查询 、添加、删除的时间复杂度不同
3. 另外ArrayList和LinkedList都实现了List接⼝， 但是LinkedList还额外实现了Deque接⼝， 所以 LinkedList还可以当做队列来使⽤

## 1.6 CopyOnWriteArrayList的底层原理是怎样的
1. ⾸先CopyOnWriteArrayList内部也是⽤过数组来实现的， 在向CopyOnWriteArrayList添加元素 时， 会复制⼀个新的数组， 写操作在新数组上进⾏， 读操作在原数组上进⾏
2. 并且， 写操作会加锁， 防⽌出现并发写⼊丢失数据的问题
3. 写操作结束之后会把原数组指向新数组
4. CopyOnWriteArrayList允许在写操作时来读取数据， ⼤⼤提⾼了读的性能， 因此适合读多写少的应 ⽤场景， 但是CopyOnWriteArrayList会⽐较占内存， 同时可能读到的数据不是实时最新的数据， 所 以不适合实时性要求很⾼的场景

## 1.7 HashMap的扩容机制原理

- 1.7版本
1. 先⽣成新数组
2. 遍历⽼数组中的每个位置上的链表上的每个元素
3. 取每个元素的key， 并基于新数组⻓度， 计算出每个元素在新数组中的下标
4. 将元素添加到新数组中去
5. 所有元素转移完了之后， 将新数组赋值给HashMap对象的table属性

- 1.8版本
1. 先⽣成新数组
2. 遍历⽼数组中的每个位置上的链表或红⿊树
3. 如果是链表， 则直接将链表中的每个元素重新计算下标， 并添加到新数组中去
4. 如果是红⿊树， 则先遍历红⿊树， 先计算出红⿊树中每个元素对应在新数组中的下标位置
  - a. 统计每个下标位置的元素个数
  - b. 如果该位置下的元素个数超过了8， 则⽣成⼀个新的红⿊树， 并将根节点的添加到新数组的对 应位置
  - c. 如果该位置下的元素个数没有超过8， 那么则⽣成⼀个链表， 并将链表的头节点添加到新数组 的对应位置
5. 所有元素转移完了之后， 将新数组赋值给HashMap对象的table属性