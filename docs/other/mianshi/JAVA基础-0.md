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
2. 由于底层数据结构不同， 他们所适⽤的场景也不同， `ArrayList更适合随机查找`， `LinkedList更适合 删除和添加， 查询 、添加、删除的时间复杂度不同`
3. 另外ArrayList和LinkedList都实现了List接⼝， 但是LinkedList还额外实现了Deque接⼝， 所以 `LinkedList还可以当做队列来使⽤`

## 1.6 CopyOnWriteArrayList的底层原理是怎样的

1. ⾸先CopyOnWriteArrayList内部也是⽤过数组来实现的， 在向CopyOnWriteArrayList添加元素时， 会复制⼀个新的数组， 写操作在新数组上进⾏， 读操作在原数组上进⾏
2. 并且， `写操作会加锁， 防⽌出现并发写⼊丢失数据的问题`
3. 写操作结束之后会把原数组指向新数组
4. CopyOnWriteArrayList允许在写操作时来读取数据， ⼤⼤提⾼了读的性能， 因此`适合读多写少的应⽤场景`， 但是CopyOnWriteArrayList会⽐较占内存， 同时可能读到的数据不是实时最新的数据， 所 以不适合实时性要求很⾼的场景

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



## 1.8 final

最终的
修饰类：表示类不可被继承
修饰方法：表示方法不可被子类覆盖，但是可以重载
修饰变量：表示变量一旦被赋值就不可以更改它的值。
（1）修饰成员变量
如果final修饰的是类变量，只能在静态初始化块中指定初始值或者声明该类变量时指定初始值。
如果final修饰的是成员变量，可以在非静态初始化块、声明该变量或者构造器中执行初始值。
（2）修饰局部变量
系统不会为局部变量进行初始化，局部变量必须由程序员显示初始化。因此使用final修饰局部变量时，
即可以在定义时指定默认值（后面的代码不能对变量再赋值），也可以不指定默认值，而在后面的代码
中对final变量赋初值（仅一次）

```java
/**
 * 一、Map的实现类的结构：
 *  |----Map:双列数据，存储key-value对的数据   ---类似于高中的函数：y = f(x)
 *         |----HashMap:作为Map的主要实现类；线程不安全的，效率高；存储null的key和value
 *              |----LinkedHashMap:保证在遍历map元素时，可以按照添加的顺序实现遍历。
 *                      原因：在原有的HashMap底层结构基础上，添加了一对指针，指向前一个和后一个元素。
 *                      对于频繁的遍历操作，此类执行效率高于HashMap。
 *         |----TreeMap:保证按照添加的key-value对进行排序，实现排序遍历。此时考虑key的自然排序或定制排序
 *                      底层使用红黑树
 *         |----Hashtable:作为古老的实现类；线程安全的，效率低；不能存储null的key和value
 *              |----Properties:常用来处理配置文件。key和value都是String类型
 *
 *
 *      HashMap的底层：数组+链表  （jdk7及之前）
 *                    数组+链表+红黑树 （jdk 8）
 *
 *
 *  面试题：
 *  1. HashMap的底层实现原理？
 *  2. HashMap 和 Hashtable的异同？
 *  3. CurrentHashMap 与 Hashtable的异同？（暂时不讲）
 *
 *  二、Map结构的理解：
 *    Map中的key:无序的、不可重复的，使用Set存储所有的key  ---> key所在的类要重写equals()和hashCode() （以HashMap为例）
 *    Map中的value:无序的、可重复的，使用Collection存储所有的value --->value所在的类要重写equals()
 *    一个键值对：key-value构成了一个Entry对象。
 *    Map中的entry:无序的、不可重复的，使用Set存储所有的entry
 *
 *  三、HashMap的底层实现原理？以jdk7为例说明：
 *      HashMap map = new HashMap():
 *      在实例化以后，底层创建了长度是16的一维数组Entry[] table。
 *      ...可能已经执行过多次put...
 *      map.put(key1,value1):
 *      首先，调用key1所在类的hashCode()计算key1哈希值，此哈希值经过某种算法计算以后，得到在Entry数组中的存放位置。
 *      如果此位置上的数据为空，此时的key1-value1添加成功。 ----情况1
 *      如果此位置上的数据不为空，(意味着此位置上存在一个或多个数据(以链表形式存在)),比较key1和已经存在的一个或多个数据
 *      的哈希值：
 *              如果key1的哈希值与已经存在的数据的哈希值都不相同，此时key1-value1添加成功。----情况2
 *              如果key1的哈希值和已经存在的某一个数据(key2-value2)的哈希值相同，继续比较：调用key1所在类的equals(key2)方法，比较：
 *                      如果equals()返回false:此时key1-value1添加成功。----情况3
 *                      如果equals()返回true:使用value1替换value2。
 *
 *       补充：关于情况2和情况3：此时key1-value1和原来的数据以链表的方式存储。
 *
 *      在不断的添加过程中，会涉及到扩容问题，当超出临界值(且要存放的位置非空)时，扩容。默认的扩容方式：扩容为原来容量的2倍，并将原有的数据复制过来。
 *
 *      jdk8 相较于jdk7在底层实现方面的不同：
 *      1. new HashMap():底层没有创建一个长度为16的数组
 *      2. jdk 8底层的数组是：Node[],而非Entry[]
 *      3. 首次调用put()方法时，底层创建长度为16的数组
 *      4. jdk7底层结构只有：数组+链表。jdk8中底层结构：数组+链表+红黑树。
 *         4.1 形成链表时，七上八下（jdk7:新的元素指向旧的元素。jdk8：旧的元素指向新的元素）
           4.2 当数组的某一个索引位置上的元素以链表形式存在的数据个数 > 8 且当前数组的长度 > 64时，此时此索引位置上的所数据改为使用红黑树存储。
 *
 *      DEFAULT_INITIAL_CAPACITY : HashMap的默认容量，16
 *      DEFAULT_LOAD_FACTOR：HashMap的默认加载因子：0.75
 *      threshold：扩容的临界值，=容量*填充因子：16 * 0.75 => 12
 *      TREEIFY_THRESHOLD：Bucket中链表长度大于该默认值，转化为红黑树:8
 *      MIN_TREEIFY_CAPACITY：桶中的Node被树化时最小的hash表容量:64
 *
 *  四、LinkedHashMap的底层实现原理（了解）
 *      源码中：
 *      static class Entry<K,V> extends HashMap.Node<K,V> {
             Entry<K,V> before, after;//能够记录添加的元素的先后顺序
             Entry(int hash, K key, V value, Node<K,V> next) {
                super(hash, key, value, next);
             }
         }
 *
 *
 *   五、Map中定义的方法：
 添加、删除、修改操作：
 Object put(Object key,Object value)：将指定key-value添加到(或修改)当前map对象中
 void putAll(Map m):将m中的所有key-value对存放到当前map中
 Object remove(Object key)：移除指定key的key-value对，并返回value
 void clear()：清空当前map中的所有数据
 元素查询的操作：
 Object get(Object key)：获取指定key对应的value
 boolean containsKey(Object key)：是否包含指定的key
 boolean containsValue(Object value)：是否包含指定的value
 int size()：返回map中key-value对的个数
 boolean isEmpty()：判断当前map是否为空
 boolean equals(Object obj)：判断当前map和参数对象obj是否相等
 元视图操作的方法：
 Set keySet()：返回所有key构成的Set集合
 Collection values()：返回所有value构成的Collection集合
 Set entrySet()：返回所有key-value对构成的Set集合

 *总结：常用方法：
 * 添加：put(Object key,Object value)
 * 删除：remove(Object key)
 * 修改：put(Object key,Object value)
 * 查询：get(Object key)
 * 长度：size()
 * 遍历：keySet() / values() / entrySet()
 *
 *
 * @author shkstart
 * @create 2019 上午 11:15
 */
 ```

 ## 1.9 HashMap的扩容机制原理


当HashMap中的元素个数超过数组大小(数组总大小length,不是数组中个数 size)×loadFactor 时 ， 就 会 进 行 数 组 扩 容 ， loadFactor 的默认 值 (DEFAULT_LOAD_FACTOR)为0.75，这是一个折中的取值。也就是说，默认情况 下，数组大小(DEFAULT_INITIAL_CAPACITY)为16，那么当HashMap中元素个数 超过16×0.75=12（这个值就是代码中的threshold值，也叫做临界值）的时候，就把 数组的大小扩展为 2*16=32，即扩大一倍，然后重新计算每个元素在数组中的位置， 而这是一个非常消耗性能的操作，所以如果我们已经预知HashMap中元素的个数,那么预设元素的个数能够有效的提高HashMap的性能

- HashMap的扩容机制原理 1.7版本 
 1. 先⽣成新数组 
 2. 遍历⽼数组中的每个位置上的链表上的每个元素 
 3. 取每个元素的key，并基于新数组⻓度，计算出每个元素在新数组中的下标 
 4. 将元素添加到新数组中去 
 5. 所有元素转移完了之后，将新数组赋值给HashMap对象的table属性 
 
- 1.8版本 
  1. 先⽣成新数组 
  2. 遍历⽼数组中的每个位置上的链表或红⿊树 
  3. 如果是链表，则直接将链表中的每个元素重新计算下标，并添加到新数组中去 
  4. 如果是红⿊树，则先遍历红⿊树，先计算出红⿊树中每个元素对应在新数组中的下标位置 
    a. 统计每个下标位置的元素个数 
    b. 如果该位置下的元素个数超过了8，则⽣成⼀个新的红⿊树，并将根节点的添加到新数组的对 应位置 
    c. 如果该位置下的元素个数没有超过8，那么则⽣成⼀个链表，并将链表的头节点添加到新数组 的对应位置 
  5. 所有元素转移完了之后，将新数组赋值给HashMap对象的table属性

## 2.0 Java中的异常体系
Java中的所有异常都来自顶级父类`Throwable`
`Throwable`下有两个子类Exception和Error。
`Error`是程序无法处理的错误，一旦出现这个错误，则程序将被迫停止运行。
`Exception`不会导致程序停止，又分为两个部分RunTimeException运行时异常和CheckedException检查异常。
`RunTimeException`常常发生在程序运行过程中，会导致程序当前线程执行失败。CheckedException常常发生在程序编译过程中，会导致程序编译不通过。


## 2.1 JDK JRE JVM

`JDK：`
Java Develpment Kit java 开发工具
`JRE：`
Java Runtime Environment java运行时环境
`JVM：`
java Virtual Machine java 虚拟机


## 2.2 List和Set的区别
`List`：`有序，按对象进入的顺序保存对象`，可重复，允许多个Null元素对象，可以使用Iterator取出所有元素，在逐一遍历，还可以使用get(int index)获取指定下标的元素
`Set`：`无序，不可重复`，最多允许有一个Null元素对象，取元素时只能用Iterator接口取得所有元素，在逐一遍历各个元素


## 2.3 接口和抽象类的区别

抽象类可以存在普通成员函数，而接口中只能存在public abstract 方法。

抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是public static final类型的。
抽象类只能继承一个，接口可以实现多个。

接口的设计目的，是对类的行为进行约束（更准确的说是一种“有”约束，因为接口不能规定类不可以有
什么行为），也就是提供一种机制，可以强制要求不同的类具有相同的行为。它只约束了行为的有无，
但不对如何实现行为进行限制。

而`抽象类的设计目的，是代码复用`。当不同的类具有某些相同的行为(记为行为集合A)，且其中一部分行
为的实现方式一致时（A的非真子集，记为B），可以让这些类都派生于一个抽象类。在这个抽象类中实
现了B，避免让所有的子类来实现B，这就达到了代码复用的目的。而A减B的部分，留给各个子类自己
实现。正是因为A-B在这里没有实现，所以抽象类不允许实例化出来（否则当调用到A-B时，无法执行）。
抽象类是对类本质的抽象，表达的是 is a 的关系，比如： BMW is a Car 。抽象类包含并实现子类的通
用特性，将子类存在差异化的特性进行抽象，交由子类去实现。

而接口是对行为的抽象，表达的是 like a 的关系。比如： Bird like a Aircraft （像飞行器一样可以
飞），但其本质上 is a Bird 。接口的核心是定义行为，即实现类可以做什么，至于实现类主体是谁、
是如何实现的，接口并不关心。

使用场景：当你关注一个事物的本质的时候，用抽象类；当你关注一个操作的时候，用接口。
抽象类的功能要远超过接口，但是，定义抽象类的代价高。因为高级语言来说（从实际设计上来说也
是）每个类只能继承一个类。在这个类中，你必须继承或编写出其所有子类的所有共性。虽然接口在功
能上会弱化许多，但是它只是针对一个动作的描述。而且你可以在一个类中同时实现多个接口。在设计阶段会降低难度
