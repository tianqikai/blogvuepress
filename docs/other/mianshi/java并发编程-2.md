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

## ThreadLocal的底层原理
1. ThreadLocal是Java中所提供的线程本地存储机制， 可以利⽤该机制将数据缓存在某个线程内部， 该线程可以在任意时刻、任意⽅法中获取缓存的数据
2. ThreadLocal底层是通过ThreadLocalMap来实现的， 每个Thread对象 （注意不是ThreadLocal对 象）  中都存在⼀个ThreadLocalMap， Map的key为ThreadLocal对象， Map的value为需要缓存的 值
3. 如果在线程池中使⽤ThreadLocal会造成内存泄漏， 因为当ThreadLocal对象使⽤完之后， 应该要   把设置的key， value， 也就是Entry对象进⾏回收， 但线程池中的线程不会回收， ⽽线程对象是通过 强引⽤指向ThreadLocalMap， ThreadLocalMap也是通过强引⽤指向Entry对象， 线程不被回收， Entry对象也就不会被回收， 从⽽出现内存泄漏， 解决办法是， 在使⽤了ThreadLocal对象之后， ⼿  动调⽤ThreadLocal的remove⽅法， ⼿动清楚Entry对象
4. ThreadLocal经典的应⽤场景就是连接管理 （⼀个线程持有⼀个连接， 该连接对象可以在不同的⽅ 法之间进⾏传递， 线程之间不共享同⼀个连接）