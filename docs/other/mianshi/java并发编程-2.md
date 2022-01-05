# 2. java并发编程

## 2.1 ConcurrentHashMap的扩容机制

> 1.7版本
1. 1.7版本的ConcurrentHashMap是基于Segment分段实现的
2. 每个Segment相对于⼀个⼩型的HashMap
3. 每个Segment内部会进⾏扩容， 和HashMap的扩容逻辑类似
4. 先⽣成新的数组， 然后转移元素到新数组中
5. 扩容的判断也是每个Segment内部单独判断的， 判断是否超过阈值

> 1.8版本
1. 1.8版本的ConcurrentHashMap不再基于Segment实现
2. 当某个线程进⾏put时， 如果发现ConcurrentHashMap正在进⾏扩容那么该线程⼀起进⾏扩容
3. 如果某个线程put时， 发现没有正在进⾏扩容， 则将key-value添加到ConcurrentHashMap中， 然后判断是否超过阈值， 超过了则进⾏扩容
4. ConcurrentHashMap是⽀持多个线程同时扩容的
5. 扩容之前也先⽣成⼀个新的数组
6. 在转移元素时， 先将原数组分组， 将每组分给不同的线程来进⾏元素的转移， 每个线程负责⼀组或多组的元素转移⼯作

## 2.2 ThreadLocal的底层原理
1. ThreadLocal是Java中所提供的线程本地存储机制， 可以利⽤该机制将数据缓存在某个线程内部， 该线程可以在任意时刻、任意⽅法中获取缓存的数据

2. ThreadLocal底层是通过ThreadLocalMap来实现的， 每个Thread对象 （注意不是ThreadLocal对象）  中都存在⼀个`ThreadLocalMap`， Map的key为ThreadLocal对象， Map的value为需要缓存的值

3. 如果在线程池中使⽤ThreadLocal会造成内存泄漏， 因为当ThreadLocal对象使⽤完之后， 应该要把key设置的null， value， 也就是Entry对象进⾏回收， 但线程池中的线程不会回收， 

    ⽽线程对象是通过强引⽤指向ThreadLocalMap， ThreadLocalMap也是通过强引⽤指向Entry对象， 线程不被回收， Entry对象也就不会被回收， 从⽽出现内存泄漏， 

    > 解决办法是: 在使⽤了ThreadLocal对象之后， `⼿动调⽤ThreadLocal的remove⽅法， ⼿动清除Entry对象`

4. ThreadLocal经典的应⽤场景就是连接管理 （⼀个线程持有⼀个连接， 该连接对象可以在不同的⽅法之间进⾏传递， 线程之间不共享同⼀个连接）

<a href='http://www.tqk001.top:8081/base/seniorJava/%E7%BA%BF%E7%A8%8B%E9%97%B4%E7%9A%84%E5%85%B1%E4%BA%AB%E5%92%8C%E5%8D%8F%E4%BD%9C-2.html#_3-2-threadlocal'>ThreadLocal详解</a>

## 2.3 如何理解volatile关键字

在并发领域中存在三⼤特性：  `原⼦性`、`有序性`、`可⻅性`。

volatile关键字⽤来修饰对象的属性， 在并发环境下可以保证这个`属性的可⻅性`;

对于加了volatile关键字的属性， 在对这个属性进⾏修改时， 会直接将CPU⾼级缓存中的数据写回到主内存， 对这个变量的读取也会直接从主内存中读取， 从⽽保证了可⻅性;

底层是通过操作系统的`内存屏障`来实现的， 由于使⽤了内存屏障， 所以会`禁⽌指令重排`， 所以同时也就保证了`有序性`， 在很多并发场景下， 如果⽤好volatile关键字可以很好的提⾼执⾏效率。


## 2.4 ReentrantLock中的公平锁和⾮公平锁的底层实现

⾸先不管是公平锁和⾮公平锁， 它们的底层实现都会使⽤AQS来进⾏排队

:::tip 它们的区别在于：  

线程在使 ⽤lock()⽅法加锁时， 如果是公平锁， 会先检查AQS队列中是否存在线程在排队， 如果有线程在排队 ，  则当前线程也进⾏排队， 

如果是⾮公平锁， 则不会去检查是否有线程在排队， ⽽是直接竞争锁。
:::

------------------------

不管是公平锁还是⾮公平锁， ⼀旦没竞争到锁， 都会进⾏排队， 当锁释放时， 都是唤醒排在最前⾯的线程， 所以⾮公平锁只是体现在了线程加锁阶段， ⽽没有体现在线程被唤醒阶段。

另外， ReentrantLock是可重⼊锁， 不管是公平锁还是⾮公平锁都是可重⼊的


## 2.5 ReentrantLock中tryLock()和lock()⽅法的区别

1. tryLock()表示尝试加锁， 可能加到， 也可能加不到， 该⽅法不会阻塞线程， 如果加到锁则返回 true， 没有加到则返回false
2. lock()表示阻塞加锁， 线程会阻塞直到加到锁， ⽅法也没有返回值




## 2.6 CountDownLatch和Semaphore的区别和底层原理

**CountDownLatch表示计数器**， 可以给CountDownLatch设置⼀个数字， ⼀个线程调⽤CountDownLatch的await()将会阻塞， 其他线程可以调⽤CountDownLatch的countDown()⽅法来对 CountDownLatch中的数字减⼀， 当数字被减成0后， 所有await的线程都将被唤醒。

对应的底层原理就是， 调⽤await()⽅法的线程会利⽤`AQS排队`， ⼀旦数字被减为0， 则会将AQS中排队的线程依次唤醒。

-------------

**Semaphore表示信号量**， 可以`设置许可的个数`， 表示同时允许最多多少个线程使⽤该信号量， 通过acquire()来获取许可， 如果`没有许可可⽤则线程阻塞`， 并通过`AQS来排队`， 

可以通过release()⽅法来释放许可， `当某个线程释放了某个许可后， 会从AQS中正在排队的第⼀个线程开始依次唤醒`， 直到没有空闲许可。

<a href='http://www.tqk001.top:8081/base/seniorJava/%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E7%B1%BB-3.html#_4-4-semaphore'> Semaphore详解</a>

## 2.7 Sychronized的偏向锁 、轻量级锁 、重量级锁
无锁
0 01
1. 偏向锁： 在锁对象的对象头中记录⼀下当前获取到该锁的线程ID， 该线程下次如果⼜来获取该锁就 可以直接获取到了
1 01
2. 轻量级锁： 由偏向锁升级⽽来， 当⼀个线程获取到锁后， 此时这把锁是偏向锁， 此时如果有第⼆个线程来竞争锁， 偏向锁就会升级为轻量级锁， 之所以叫轻量级锁， 是为了和重量级锁区分开来， 轻量级锁底层是通过⾃旋来实现的， 并不会阻塞线程
X   00
3. 如果⾃旋次数过多仍然没有获取到锁， 则会升级为重量级锁， 重量级锁会导致线程阻塞

4.  ⾃旋锁： ⾃旋锁就是线程在获取锁的过程中， 不会去阻塞线程， 也就⽆所谓唤醒线程， 阻塞和唤醒 这两个步骤都是需要操作系统去进⾏的， ⽐较消耗时间， ⾃旋锁是线程通过CAS获取预期的⼀个标 记， 如果没有获取到， 则继续循环获取， 如果获取到了则表示获取到了锁， 这个过程线程⼀直在运⾏中， `相对⽽⾔没有使⽤太多的操作系统资源， ⽐较轻量`。

X 10

## 锁消除
消除锁是虚拟机另外一种锁的优化，这种优化更彻底，Java虚拟机在JIT编译时(可以简单理解为当某段代码即将第一次被执行时进行编译，又称即时编译)，通过对运行上下文的扫描，去除不可能存在共享资源竞争的锁，通过这种方式消除没有必要的锁，可以节省毫无意义的请求锁时间，如下StringBuffer的append是一个同步方法，但是在add方法中的StringBuffer属于一个局部变量，并且不会被其他线程所使用，因此StringBuffer不可能存在共享资源竞争的情景，JVM会自动将其锁消除。锁消除的依据是逃逸分析的数据支持。

## 2.8 Sychronized和ReentrantLock的区别

1. sychronized是⼀个关键字， ReentrantLock是⼀个类
2. sychronized会⾃动的加锁与释放锁， ReentrantLock需要程序员⼿动加锁与释放锁
3. sychronized的底层是JVM层⾯的锁， ReentrantLock是API层⾯的锁
4. sychronized是⾮公平锁， ReentrantLock可以选择公平锁或⾮公平锁
5. sychronized锁的是对象， 锁信息保存在对象头中， ReentrantLock通过代码中int类型的state标识 来标识锁的状态
6. `sychronized底层有⼀个锁升级的过程`




## 2.9 线程池的底层⼯作原理

`线程池内部是通过队列+线程实现的`
当我们利⽤线程池执⾏任务时：
1. 如果此时线程池中的线程数量⼩于corePoolSize， 即使线程池中的线程都处于空闲状态， 也要创建新的线程来处理被添加的任务。
2. 如果此时线程池中的线程数量等于corePoolSize， 但是`缓冲队列workQueue`未满， 那么任务被放⼊缓冲队列。
3. 如果此时线程池中的线程数量⼤于等于corePoolSize，` 缓冲队列workQueue满`， 并且线程池中的数量⼩于maximumPoolSize， 建新的线程来处理被添加的任务。
4. 如果此时线程池中的线程数量⼤于corePoolSize， 缓冲队列workQueue满， 并且线程池中的数量等 于maximumPoolSize， 那么通过 handler所指定的策略来处理此任务。
5.  当线程池中的线程数量⼤于 corePoolSize时， 如果某线程空闲时间超过keepAliveTime， 线程将被终⽌ 。这样线程池可以动态的调整池中的线程数