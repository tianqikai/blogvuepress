
## 1.1 JVM中哪些是线程共享区
堆区和⽅法区是所有线程共享的， 栈 、本地⽅法栈 、程序计数器是每个线程独有的





## 1.2 JVM中哪些可以作为gc root

1. 引用计数法
循环引用
2. 根可达标记法


什么是gc root， JVM在进⾏垃圾回收时， 需要找到`垃圾对象`， 也就是`没有被引⽤的对象`， 但是直接找“垃圾”对象是⽐较耗时的， 所以反过来， 先找“⾮垃圾”对象， 也就是正常对象， 那么就需要从某些`根`开始去找， 根据这些“根”的引⽤路径找到正常对象， ⽽这些“根”有⼀个特征， 就是它只会引⽤其他对象， ⽽不会被其他对象引⽤， 

例如： `栈中的本地变量、⽅法区中的静态变量、本地⽅法栈中的变量、正在运⾏的线程`等可以作为gc root。

<a href='http://www.tqk001.top:8081/base/JVM/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B8%B2%E8%AE%B2%E5%8F%8A%20HostSpot%20%E7%9A%84%E7%BB%86%E8%8A%82%E5%AE%9E%E7%8E%B0-4.html#_5-1-1-%E4%B8%89%E8%89%B2%E6%A0%87%E8%AE%B0'>三色标记法</a>  

## 1.3 你们项⽬如何排查JVM问题

:::tip 对于还在正常运⾏的系统：
1. 可以使⽤`jmap`来查看JVM中各个区域的使⽤情况
2. 可以通过`jstack`来查看线程的运⾏情况， ⽐如哪些线程阻塞、是否出现了死锁
3. 可以通过`jstat`命令来查看垃圾回收的情况， 特别是fullgc， 如果发现fullgc⽐较频繁， 那么就得进⾏调优了
4. 通过各个命令的结果， 或者`visualvm`  `Arthas` 等⼯具来进⾏分析
5. ⾸先， 初步猜测频繁发送fullgc的原因， 如果频繁发⽣fullgc但是⼜⼀直没有出现内存溢出， 那么表 示fullgc实际上是回收了很多对象了， 所以这些对象最好能在younggc过程中就直接回收掉， 避免  这些对象进⼊到⽼年代， 对于这种情况， 就要考虑这些存活时间不⻓的对象是不是⽐较⼤， 导致年 轻代放不下， 直接进⼊到了⽼年代， 尝试加⼤年轻代的⼤⼩， 如果改完之后， fullgc减少， 则证明修改有效
6.  同时，还可以找到占⽤CPU最多的线程， 定位到具体的⽅法， 优化这个⽅法的执⾏， 看是否能避免 某些对象的创建， 从⽽节省内存
:::

:::tip 对于已经发⽣了OOM的系统：
1. ⼀般⽣产系统中都会设置当系统发⽣了OOM时， ⽣成当时的dump⽂件 （-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/usr/local/base）
2. 我们可以利⽤jsisualvm等⼯具来分析dump⽂件
3. 根据dump⽂件找到异常的实例对象， 和异常的线程 （占⽤CPU⾼）， 定位到具体的代码
4. 然后再进⾏详细的分析和调试
:::

<a href='http://www.tqk001.top:8081/base/JVM/GC%20%E8%B0%83%E4%BC%98%E5%B7%A5%E5%85%B7-a.html'>GC调优工具详解</a>  
总之调优不是⼀蹴⽽就的， 需要分析、推理、实践 、总结 、再分析， 最终定位到具体的问题




## 1.4 类加载器双亲委派模型

:::tip JVM中存在三个默认的类加载器：
1. BootstrapClassLoader
2. ExtClassLoader
3. AppClassLoader
:::

AppClassLoader的⽗加载器是ExtClassLoader， 
ExtClassLoader的⽗加载器是BootstrapClassLoader。

1. JVM在加载⼀个类时， 会调⽤AppClassLoader的loadClass⽅法来加载这个类， 不过在这个⽅法中， 会先使⽤ExtClassLoader的loadClass⽅法来加载类， 同样ExtClassLoader的loadClass⽅法中会先使⽤BootstrapClassLoader来加载类， 如果BootstrapClassLoader加载到了就直接成功， 

2. 如果BootstrapClassLoader没有加载到， 那么ExtClassLoader就会⾃⼰尝试加载该类， 如果没有加载到，那么则会由AppClassLoader来加载这个类。

所以**双亲委派指得是JVM在加载类时，会委派给Ext和Bootstrap进⾏加载， 如果没加载到才由⾃⼰进⾏加载**

<a href='http://www.tqk001.top:8081/base/JVM/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E4%B8%8E%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8-6.html#_7-2-3-%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%9C%BA%E5%88%B6-%E9%87%8D%E7%82%B9'>双亲委派机制详解</a>  


## 1.5 Tomcat中为什么要使⽤⾃定义类加载器
⼀个Tomcat中可以部署多个应⽤， ⽽每个应⽤中都存在很多类， 并且各个应⽤中的类是独⽴的， 全类     名是可以相同的， ⽐如⼀个订单系统中可能存在com.zhouyu.User类， ⼀个库存系统中可能也存在        com.zhouyu.User类， ⼀个Tomcat， 不管内部部署了多少应⽤， Tomcat启动之后就是⼀个Java进程， 也就是⼀个JVM， 所以如果Tomcat中只存在⼀个类加载器， ⽐如默认的AppClassLoader， 那么就只能 加载⼀个com.zhouyu.User类， 这是有问题的， ⽽在Tomcat中， 会为部署的每个应⽤都⽣成⼀个类加载 器实例， 名字叫做WebAppClassLoader， 这样Tomcat中每个应⽤就可以使⽤⾃⼰的类加载器去加载⾃  ⼰的类， 从⽽达到`应⽤之间的类隔离`， 不出现冲突。另外Tomcat还利⽤⾃定义加载器实现了热加载功能。


## 1.6 Tomcat如何进⾏优化？
对于Tomcat调优， 可以从两个⽅⾯来进⾏调整：  `内存和线程`。
⾸先启动Tomcat， 实际上就是启动了⼀个JVM， 所以可以按`JVM调优的⽅式来进⾏调整`， 从⽽达到 Tomcat优化的⽬的。
另外Tomcat中设计了⼀些缓存区， ⽐如`appReadBufSize、bufferPoolSize等缓存区来提⾼吞吐量`。 还可以调整Tomcat的线程， ⽐如调整minSpareThreads参数来改变Tomcat空闲时的线程数， 调整       `maxThreads参数来设置Tomcat处理连接的最⼤线程数`。
并且还可以调整IO模型， ⽐如使⽤`NIO、APR这种相⽐于BIO更加⾼效的IO模型`。


## 1.7 BIO、NIO、AIO分别是什么
1. BIO：  同步阻塞IO， 使⽤BIO读取数据时， 线程会阻塞住， 并且需要线程主动去查询是否有数据可 读， 并且需要处理完⼀个Socket之后才能处理下⼀个Socket
2. NIO： 同步⾮阻塞IO， 使⽤NIO读取数据时， 线程不会阻塞， 但需要线程主动的去查询是否有IO事件
3. AIO：  也叫做NIO 2.0， 异步⾮阻塞IO， 使⽤AIO读取数据时， 线程不会阻塞， 并且当有数据可读时 会通知给线程， 不需要线程主动去查询



## 1.8 零拷⻉是什么
零拷⻉指的是， 应⽤程序在需要把内核中的⼀块区域数据转移到另外⼀块内核区域去时， 不需要经过先 复制到⽤户空间， 再转移到⽬标内核区域去了， ⽽直接实现转移。