(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1656:function(a,e,t){"use strict";t.r(e);var _=t(26),v=Object(_.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2-java并发编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-java并发编程"}},[a._v("#")]),a._v(" 2. java并发编程")]),a._v(" "),t("h2",{attrs:{id:"_2-1-concurrenthashmap的扩容机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-concurrenthashmap的扩容机制"}},[a._v("#")]),a._v(" 2.1 ConcurrentHashMap的扩容机制")]),a._v(" "),t("blockquote",[t("p",[a._v("1.7版本")])]),a._v(" "),t("ol",[t("li",[a._v("1.7版本的ConcurrentHashMap是基于Segment分段实现的")]),a._v(" "),t("li",[a._v("每个Segment相对于⼀个⼩型的HashMap")]),a._v(" "),t("li",[a._v("每个Segment内部会进⾏扩容， 和HashMap的扩容逻辑类似")]),a._v(" "),t("li",[a._v("先⽣成新的数组， 然后转移元素到新数组中")]),a._v(" "),t("li",[a._v("扩容的判断也是每个Segment内部单独判断的， 判断是否超过阈值")])]),a._v(" "),t("blockquote",[t("p",[a._v("1.8版本")])]),a._v(" "),t("ol",[t("li",[a._v("1.8版本的ConcurrentHashMap不再基于Segment实现")]),a._v(" "),t("li",[a._v("当某个线程进⾏put时， 如果发现ConcurrentHashMap正在进⾏扩容那么该线程⼀起进⾏扩容")]),a._v(" "),t("li",[a._v("如果某个线程put时， 发现没有正在进⾏扩容， 则将key-value添加到ConcurrentHashMap中， 然后判断是否超过阈值， 超过了则进⾏扩容")]),a._v(" "),t("li",[a._v("ConcurrentHashMap是⽀持多个线程同时扩容的")]),a._v(" "),t("li",[a._v("扩容之前也先⽣成⼀个新的数组")]),a._v(" "),t("li",[a._v("在转移元素时， 先将原数组分组， 将每组分给不同的线程来进⾏元素的转移， 每个线程负责⼀组或多组的元素转移⼯作")])]),a._v(" "),t("h2",{attrs:{id:"_2-2-threadlocal的底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-threadlocal的底层原理"}},[a._v("#")]),a._v(" 2.2 ThreadLocal的底层原理")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("ThreadLocal是Java中所提供的线程本地存储机制， 可以利⽤该机制将数据缓存在某个线程内部， 该线程可以在任意时刻、任意⽅法中获取缓存的数据")])]),a._v(" "),t("li",[t("p",[a._v("ThreadLocal底层是通过ThreadLocalMap来实现的， 每个Thread对象 （注意不是ThreadLocal对象）  中都存在⼀个"),t("code",[a._v("ThreadLocalMap")]),a._v("， Map的key为ThreadLocal对象， Map的value为需要缓存的值")])]),a._v(" "),t("li",[t("p",[a._v("如果在线程池中使⽤ThreadLocal会造成内存泄漏， 因为当ThreadLocal对象使⽤完之后， 应该要把key设置的null， value， 也就是Entry对象进⾏回收， 但线程池中的线程不会回收，")]),a._v(" "),t("p",[a._v("⽽线程对象是通过强引⽤指向ThreadLocalMap， ThreadLocalMap也是通过强引⽤指向Entry对象， 线程不被回收， Entry对象也就不会被回收， 从⽽出现内存泄漏，")]),a._v(" "),t("blockquote",[t("p",[a._v("解决办法是: 在使⽤了ThreadLocal对象之后， "),t("code",[a._v("⼿动调⽤ThreadLocal的remove⽅法， ⼿动清除Entry对象")])])])]),a._v(" "),t("li",[t("p",[a._v("ThreadLocal经典的应⽤场景就是连接管理 （⼀个线程持有⼀个连接， 该连接对象可以在不同的⽅法之间进⾏传递， 线程之间不共享同⼀个连接）")])])]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.tqk001.top:8081/base/seniorJava/%E7%BA%BF%E7%A8%8B%E9%97%B4%E7%9A%84%E5%85%B1%E4%BA%AB%E5%92%8C%E5%8D%8F%E4%BD%9C-2.html#_3-2-threadlocal"}},[a._v("ThreadLocal详解")])]),a._v(" "),t("h2",{attrs:{id:"_2-3-如何理解volatile关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-如何理解volatile关键字"}},[a._v("#")]),a._v(" 2.3 如何理解volatile关键字")]),a._v(" "),t("p",[a._v("在并发领域中存在三⼤特性：  "),t("code",[a._v("原⼦性")]),a._v("、"),t("code",[a._v("有序性")]),a._v("、"),t("code",[a._v("可⻅性")]),a._v("。")]),a._v(" "),t("p",[a._v("volatile关键字⽤来修饰对象的属性， 在并发环境下可以保证这个"),t("code",[a._v("属性的可⻅性")]),a._v(";")]),a._v(" "),t("p",[a._v("对于加了volatile关键字的属性， 在对这个属性进⾏修改时， 会直接将CPU⾼级缓存中的数据写回到主内存， 对这个变量的读取也会直接从主内存中读取， 从⽽保证了可⻅性;")]),a._v(" "),t("p",[a._v("底层是通过操作系统的"),t("code",[a._v("内存屏障")]),a._v("来实现的， 由于使⽤了内存屏障， 所以会"),t("code",[a._v("禁⽌指令重排")]),a._v("， 所以同时也就保证了"),t("code",[a._v("有序性")]),a._v("， 在很多并发场景下， 如果⽤好volatile关键字可以很好的提⾼执⾏效率。")]),a._v(" "),t("h2",{attrs:{id:"_2-4-reentrantlock中的公平锁和非公平锁的底层实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-reentrantlock中的公平锁和非公平锁的底层实现"}},[a._v("#")]),a._v(" 2.4 ReentrantLock中的公平锁和⾮公平锁的底层实现")]),a._v(" "),t("p",[a._v("⾸先不管是公平锁和⾮公平锁， 它们的底层实现都会使⽤AQS来进⾏排队")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("它们的区别在于：")]),a._v(" "),t("p",[a._v("线程在使 ⽤lock()⽅法加锁时， 如果是公平锁， 会先检查AQS队列中是否存在线程在排队， 如果有线程在排队 ，  则当前线程也进⾏排队，")]),a._v(" "),t("p",[a._v("如果是⾮公平锁， 则不会去检查是否有线程在排队， ⽽是直接竞争锁。")])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("不管是公平锁还是⾮公平锁， ⼀旦没竞争到锁， 都会进⾏排队， 当锁释放时， 都是唤醒排在最前⾯的线程， 所以⾮公平锁只是体现在了线程加锁阶段， ⽽没有体现在线程被唤醒阶段。")]),a._v(" "),t("p",[a._v("另外， ReentrantLock是可重⼊锁， 不管是公平锁还是⾮公平锁都是可重⼊的")]),a._v(" "),t("h2",{attrs:{id:"_2-5-reentrantlock中trylock-和lock-方法的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-reentrantlock中trylock-和lock-方法的区别"}},[a._v("#")]),a._v(" 2.5 ReentrantLock中tryLock()和lock()⽅法的区别")]),a._v(" "),t("ol",[t("li",[a._v("tryLock()表示尝试加锁， 可能加到， 也可能加不到， 该⽅法不会阻塞线程， 如果加到锁则返回 true， 没有加到则返回false")]),a._v(" "),t("li",[a._v("lock()表示阻塞加锁， 线程会阻塞直到加到锁， ⽅法也没有返回值")])]),a._v(" "),t("h2",{attrs:{id:"_2-6-countdownlatch和semaphore的区别和底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-countdownlatch和semaphore的区别和底层原理"}},[a._v("#")]),a._v(" 2.6 CountDownLatch和Semaphore的区别和底层原理")]),a._v(" "),t("p",[t("strong",[a._v("CountDownLatch表示计数器")]),a._v("， 可以给CountDownLatch设置⼀个数字， ⼀个线程调⽤CountDownLatch的await()将会阻塞， 其他线程可以调⽤CountDownLatch的countDown()⽅法来对 CountDownLatch中的数字减⼀， 当数字被减成0后， 所有await的线程都将被唤醒。")]),a._v(" "),t("p",[a._v("对应的底层原理就是， 调⽤await()⽅法的线程会利⽤"),t("code",[a._v("AQS排队")]),a._v("， ⼀旦数字被减为0， 则会将AQS中排队的线程依次唤醒。")]),a._v(" "),t("hr"),a._v(" "),t("p",[t("strong",[a._v("Semaphore表示信号量")]),a._v("， 可以"),t("code",[a._v("设置许可的个数")]),a._v("， 表示同时允许最多多少个线程使⽤该信号量， 通过acquire()来获取许可， 如果没有许可可⽤则线程阻塞， 并通过AQS来排队，")]),a._v(" "),t("p",[a._v("可以通过release()⽅法来释放许可， 当某个线程释放了某个许可后， 会从AQS中正在排队的第⼀个线程开始依次唤醒， 直到没有空闲许可。")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.tqk001.top:8081/base/seniorJava/%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%B9%B6%E5%8F%91%E5%B7%A5%E5%85%B7%E7%B1%BB-3.html#_4-4-semaphore"}},[a._v(" Semaphore详解")])]),a._v(" "),t("h2",{attrs:{id:"_2-7-sychronized的偏向锁-、轻量级锁-、重量级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-sychronized的偏向锁-、轻量级锁-、重量级锁"}},[a._v("#")]),a._v(" 2.7 Sychronized的偏向锁 、轻量级锁 、重量级锁")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("偏向锁： 在锁对象的对象头中记录⼀下当前获取到该锁的线程ID， 该线程下次如果⼜来获取该锁就 可以直接获取到了")])]),a._v(" "),t("li",[t("p",[a._v("轻量级锁： 由偏向锁升级⽽来， 当⼀个线程获取到锁后， 此时这把锁是偏向锁， 此时如果有第⼆个线程来竞争锁， 偏向锁就会升级为轻量级锁， 之所以叫轻量级锁， 是为了和重量级锁区分开来， 轻量级锁底层是通过⾃旋来实现的， 并不会阻塞线程")])]),a._v(" "),t("li",[t("p",[a._v("如果⾃旋次数过多仍然没有获取到锁， 则会升级为重量级锁， 重量级锁会导致线程阻塞")])]),a._v(" "),t("li",[t("p",[a._v("⾃旋锁： ⾃旋锁就是线程在获取锁的过程中， 不会去阻塞线程， 也就⽆所谓唤醒线程， 阻塞和唤醒 这两个步骤都是需要操作系统去进⾏的， ⽐较消耗时间， ⾃旋锁是线程通过CAS获取预期的⼀个标 记， 如果没有获取到， 则继续循环获取， 如果获取到了则表示获取到了锁， 这个过程线程⼀直在运⾏中， "),t("code",[a._v("相对⽽⾔没有使⽤太多的操作系统资源， ⽐较轻量")]),a._v("。")])])]),a._v(" "),t("h2",{attrs:{id:"_2-8-sychronized和reentrantlock的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-sychronized和reentrantlock的区别"}},[a._v("#")]),a._v(" 2.8 Sychronized和ReentrantLock的区别")]),a._v(" "),t("ol",[t("li",[a._v("sychronized是⼀个关键字， ReentrantLock是⼀个类")]),a._v(" "),t("li",[a._v("sychronized会⾃动的加锁与释放锁， ReentrantLock需要程序员⼿动加锁与释放锁")]),a._v(" "),t("li",[a._v("sychronized的底层是JVM层⾯的锁， ReentrantLock是API层⾯的锁")]),a._v(" "),t("li",[a._v("sychronized是⾮公平锁， ReentrantLock可以选择公平锁或⾮公平锁")]),a._v(" "),t("li",[a._v("sychronized锁的是对象， 锁信息保存在对象头中， ReentrantLock通过代码中int类型的state标识 来标识锁的状态")]),a._v(" "),t("li",[a._v("sychronized底层有⼀个锁升级的过程")])]),a._v(" "),t("h2",{attrs:{id:"_2-9-线程池的底层工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-线程池的底层工作原理"}},[a._v("#")]),a._v(" 2.9 线程池的底层⼯作原理")]),a._v(" "),t("p",[t("code",[a._v("线程池内部是通过队列+线程实现的")]),a._v("\n当我们利⽤线程池执⾏任务时：")]),a._v(" "),t("ol",[t("li",[a._v("如果此时线程池中的线程数量⼩于corePoolSize， 即使线程池中的线程都处于空闲状态， 也要创建新的线程来处理被添加的任务。")]),a._v(" "),t("li",[a._v("如果此时线程池中的线程数量等于corePoolSize， 但是缓冲队列workQueue未满， 那么任务被放⼊缓冲队列。")]),a._v(" "),t("li",[a._v("如果此时线程池中的线程数量⼤于等于corePoolSize， 缓冲队列workQueue满， 并且线程池中的数量⼩于maximumPoolSize， 建新的线程来处理被添加的任务。")]),a._v(" "),t("li",[a._v("如果此时线程池中的线程数量⼤于corePoolSize， 缓冲队列workQueue满， 并且线程池中的数量等 于maximumPoolSize， 那么通过 handler所指定的策略来处理此任务。")]),a._v(" "),t("li",[a._v("当线程池中的线程数量⼤于 corePoolSize时， 如果某线程空闲时间超过keepAliveTime， 线程将被终⽌ 。这样线程池可以动态的调整池中的线程数")])])])}),[],!1,null,null,null);e.default=v.exports}}]);