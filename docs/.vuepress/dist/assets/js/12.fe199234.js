(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1387:function(A,t,a){"use strict";a.r(t);var o=a(26),r=Object(o.a)({},(function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[o("h1",{attrs:{id:"_4-垃圾回收机制及算法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-垃圾回收机制及算法"}},[A._v("#")]),A._v(" 4. 垃圾回收机制及算法")]),A._v(" "),o("h2",{attrs:{id:"_4-1-垃圾回收基础知识"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-垃圾回收基础知识"}},[A._v("#")]),A._v(" 4.1 垃圾回收基础知识")]),A._v(" "),o("h3",{attrs:{id:"_4-1-1-什么是-gc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-什么是-gc"}},[A._v("#")]),A._v(" 4.1.1 什么是 GC")]),A._v(" "),o("p",[A._v("Java 与 C++等语言最大的技术区别："),o("font",{attrs:{color:"red"}},[o("strong",[A._v("自动化的垃圾回收机制（GC）")])]),o("br"),A._v("\n为什么要了解 GC 和内存分配策略")],1),A._v(" "),o("ol",[o("li",[A._v("面试需要")]),A._v(" "),o("li",[A._v("GC 对应用的性能是有影响的；")]),A._v(" "),o("li",[A._v("写代码有好处"),o("br"),A._v(" "),o("font",{attrs:{color:"red"}},[o("strong",[A._v("栈")])]),A._v("：栈中的生命周期是跟随线程，所以一般不需要关注"),o("br"),A._v(" "),o("font",{attrs:{color:"red"}},[o("strong",[A._v("堆")])]),A._v("：堆中的对象是垃圾回收的重点"),o("br"),A._v("\n方法区/元空间：这一块也会发生垃圾回收，不过这块的效率比较低，一般不是我们关注的重点\n"),o("a",{attrs:{"data-fancybox":"",title:"GCTYPE",href:"./image/gctype.jpg"}},[o("img",{attrs:{src:a(444),alt:"GCTYPE"}})])],1)]),A._v(" "),o("h3",{attrs:{id:"_4-1-2-分代回收理论-重点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-分代回收理论-重点"}},[A._v("#")]),A._v(" 4.1.2 分代回收理论（重点）")]),A._v(" "),o("p",[A._v("当前商业虚拟机的垃圾回收器，大多遵循“分代收集”的理论来进行设计，这个理论大体上是这么描述的：")]),A._v(" "),o("ol",[o("li",[A._v("绝大部分的对象都是朝生夕死。")]),A._v(" "),o("li",[A._v("熬过多次垃圾回收的对象就越难回收。\n根据以上两个理论，朝生夕死的对象放一个区域，难回收的对象放另外一个区域，这个就构成了"),o("strong",[A._v("新生代和老年代")])])]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"新生代和老年代",href:"./image/youngold1.jpg"}},[o("img",{attrs:{src:a(445),alt:"新生代和老年代"}})])]),A._v(" "),o("h3",{attrs:{id:"_4-1-3-gc-分类"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-gc-分类"}},[A._v("#")]),A._v(" 4.1.3 GC 分类")]),A._v(" "),o("p",[A._v("市面上发生垃圾回收的叫法很多，我大体整理了一下：")]),A._v(" "),o("ol",[o("li",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("新生代回收（Minor GC/Young GC）")])]),A._v(":指只是进行新生代的回收。")],1),A._v(" "),o("li",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("老年代回收（Major GC/Old GC）")])]),A._v(":指只是进行老年代的回收。目前只有 CMS 垃圾回收器会有这个单独的回收老年代的行为.（Major GC 定义是比较混乱，有说指是老年代，有的说是做整个堆的收集，这个需要你根据别人的场景来定，没有固定的说法）")],1),A._v(" "),o("li",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("整堆回收（Full GC）")])]),A._v(":收集整个 Java 堆和方法区(注意包含方法区)")],1)]),A._v(" "),o("h2",{attrs:{id:"_4-2-垃圾回收算法-重点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-垃圾回收算法-重点"}},[A._v("#")]),A._v(" 4.2 垃圾回收算法（重点）")]),A._v(" "),o("p",[A._v("垃圾回收算法的实现设计到大量的程序细节，并且每一个平台的虚拟机操作内存的方式都有不同，所以不需要去了解算法的实现，我们重点讲解 3 种算法的思想。")]),A._v(" "),o("h3",{attrs:{id:"_4-2-1-复制算法-copying"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-复制算法-copying"}},[A._v("#")]),A._v(" 4.2.1 复制算法（Copying）")]),A._v(" "),o("p",[A._v("将可用内存按容量划分为大小相等的两块，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使 用过的内存空间一次清理掉。这样使得每次都是对整个半区进行内存回收，内存分配时也就不用考虑内存碎片等复杂情况，只要按顺序分配内存即可， 实现简单，运行高效。只是这种算法的代价是将内存缩小为了原来的一半。")]),A._v(" "),o("p",[A._v("但是要注意：内存移动是必须实打实的移动（复制），所以对应的引用(直接指针)需要调整。")]),A._v(" "),o("p",[o("strong",[A._v("复制回收算法适合于新生代，因为大部分对象朝生夕死，那么复制过去的对象比较少，效率自然就高，另外一半的一次性清理是很快的")])]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("Copying特点")]),A._v(" "),o("p",[A._v("实现简单、运行高效\n没有内存碎片\n利用率只有一半\n"),o("a",{attrs:{"data-fancybox":"",title:"复制算法（Copying）",href:"./image/copying.jpg"}},[o("img",{attrs:{src:a(446),alt:"复制算法（Copying）"}})])])]),A._v(" "),o("h3",{attrs:{id:"_4-2-2-appel式回收"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-appel式回收"}},[A._v("#")]),A._v(" 4.2.2 Appel式回收")]),A._v(" "),o("p",[A._v("一种更加优化的复制回收分代策略：具体做法是分配一块较大的 Eden 区和两块较小的 Survivor 空间（你可以叫做 From 或者 To，也可以叫做 Survivor1 和 Survivor2） 专门研究表明，新生代中的对象 98%是“朝生夕死”的，所以并不需要按照 1:1 的比例来划分内存空间，而是将内存分为一块较大的 Eden 空间和两块较 小的 Survivor 空间，每次使用 Eden 和其中一块 Survivor[1]。")]),A._v(" "),o("p",[A._v("当回收时，将 Eden 和 Survivor 中还存活着的对象一次性地复制到另外一块 Survivor 空间上， 最后清理掉 Eden 和刚才用过的 Survivor 空间。 HotSpot 虚拟机默认 Eden 和 Survivor 的大小比例是 8:1，也就是每次新生代中可用内存空间为整个新生代容量的 90%（80%+10%），只有 10%的内存会被 “浪费”。")]),A._v(" "),o("p",[A._v("当然，98%的对象可回收只是一般场景下的数据，我们没有办法保证每次回收都只有不多于 10%的对象存活，当 Survivor 空间不够用时，需要 依赖其他内存（这里指老年代）进行分配担保（Handle Promotion）")]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("Appel式回收")]),A._v(" "),o("p",[A._v("提高空间利用率和空间分配担保")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"Appel式回收",href:"./image/appel.jpg"}},[o("img",{attrs:{src:a(447),alt:"Appel式回收"}})])])]),A._v(" "),o("h3",{attrs:{id:"_4-2-3-标记-清除算法-mark-sweep"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-标记-清除算法-mark-sweep"}},[A._v("#")]),A._v(" 4.2.3 标记-清除算法（Mark-Sweep）")]),A._v(" "),o("p",[A._v("算法分为“标记”和“清除”两个阶段：\n首先扫描所有对象标记出需要回收的对象--标记，"),o("br"),A._v("\n再标记完成后扫描回收所有被标记的对象--清理，所以需要扫描两遍"),o("br"),A._v("\n回收效率略低，如果大部分对象是朝生夕死，那么回收效率降低，因为需要大量标记对象和回收对象，对比复制回收效率要低。")]),A._v(" "),o("p",[A._v("它的主要问题，标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配"),o("strong",[A._v("较大对象")]),A._v("时，无法找到足够的连续内存而不得不提前触发另一次垃圾回收动作。"),o("br"),A._v("\n回收的时候如果需要回收的对象越多，需要做的标记和清除的工作越多，所以标记清除算法适用于"),o("strong",[A._v("老年代")]),A._v("。")]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("特点")]),A._v(" "),o("p",[A._v("位置不连续，产生碎片"),o("br"),A._v("\n效率略低"),o("br"),A._v("\n两遍扫描"),o("br"),A._v(" "),o("a",{attrs:{"data-fancybox":"",title:"标记-清除算法（Mark-Sweep）",href:"./image/Mark-Sweep.jpg"}},[o("img",{attrs:{src:a(448),alt:"标记-清除算法（Mark-Sweep）"}})])])]),A._v(" "),o("h3",{attrs:{id:"_4-2-4-标记-整理算法-mark-compact"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-标记-整理算法-mark-compact"}},[A._v("#")]),A._v(" 4.2.4 标记-整理算法（Mark-Compact）")]),A._v(" "),o("p",[A._v("首先标记出所有需要回收的对象，在标记完成后，后续步骤不是直接对可回收对象进行清理，\n而是让所有存活的对象都向一端移动，然后直接清理掉边界以外的内存。\n标记整理算法虽然"),o("strong",[A._v("没有内存碎片，但是效率偏低")]),A._v("。\n我们看到标记整理与标记清除算法的区别主要在于对象的移动。对象移动不单单会加重系统负担，同时需要全程暂停用户线程才能进行，同时所有引用 对象的地方都需要更新（直接指针需要调整）。 所以看到，老年代采用的标记整理算法与标记清除算法，各有优点，各有缺点。")]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("特点")]),A._v(" "),o("p",[A._v("没有内存碎片\n效率偏低\n两遍扫描、指针需要调整")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"标记-整理算法（Mark-Compact）",href:"./image/Mark-compact.jpg"}},[o("img",{attrs:{src:a(449),alt:"标记-整理算法（Mark-Compact）"}})])])]),A._v(" "),o("h2",{attrs:{id:"_4-3-jvm-中常见的垃圾回收器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-jvm-中常见的垃圾回收器"}},[A._v("#")]),A._v(" 4.3 JVM 中常见的垃圾回收器")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"常见的垃圾回收器",href:"./image/lajihuishouqi.jpg"}},[o("img",{attrs:{src:a(450),alt:"常见的垃圾回收器"}})])]),A._v(" "),o("h3",{attrs:{id:"_4-3-1-serial-serial-old-了解即可"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-serial-serial-old-了解即可"}},[A._v("#")]),A._v(" 4.3.1 Serial/Serial Old（了解即可）")]),A._v(" "),o("p",[A._v("JVM 刚诞生就只有这种，最古老的，单线程，独占式，成熟，适合单 CPU，一般用在客户端模式下。"),o("br"),A._v("\n这种垃圾回收器只适合"),o("strong",[A._v("几十兆到一两百兆")]),A._v("的堆空间进行垃圾回收（可以控制停顿时间再 100ms 左右），"),o("br"),A._v("\n但是对于超过这个大小的内存回收速度很慢，所以对于现在来说这个垃圾回收器已经是一个鸡肋。\n"),o("a",{attrs:{"data-fancybox":"",title:"Serial/SerialOld",href:"./image/SerialandSerialold.jpg"}},[o("img",{attrs:{src:a(451),alt:"Serial/Serial Old"}})])]),A._v(" "),o("h4",{attrs:{id:"_4-3-1-1-参数设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-1-参数设置"}},[A._v("#")]),A._v(" 4.3.1.1 参数设置")]),A._v(" "),o("p",[A._v("-XX:+UseSerialGC 新生代和老年代都用串行收集器")]),A._v(" "),o("h4",{attrs:{id:"_4-3-1-2-stop-the-world-stw-重点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-2-stop-the-world-stw-重点"}},[A._v("#")]),A._v(" 4.3.1.2 Stop The World（STW）（重点）")]),A._v(" "),o("p",[A._v("单线程进行垃圾回收时，必须暂停所有的工作线程，直到它回收结束。这个暂停称之为“Stop The World”,但是这种 STW 带来了恶劣的用户体验,例如:应 用每运行一个小时就需要暂停响应 5 分。"),o("br"),A._v("\n这个也是早期 JVM 和 java 被 C/C++语言诟病性能差的一个重要原因。所以 JVM 开发团队一直努力消除或降低 STW 的时间。")]),A._v(" "),o("h2",{attrs:{id:"_4-4-parallel-scavenge-parallergc-parallel-old-重点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-parallel-scavenge-parallergc-parallel-old-重点"}},[A._v("#")]),A._v(" 4.4 Parallel Scavenge（ParallerGC）/Parallel Old（重点）")]),A._v(" "),o("p",[A._v("为了提高回收效率，从 JDK1.3 开始，JVM 使用了多线程的垃圾回收机制，关注吞吐量的垃圾收集器，高吞吐量则可以高效率地利用 CPU 时间，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的任务。"),o("br"),A._v("\n所谓吞吐量就是 CPU 用于运行用户代码的时间与 CPU 总消耗时间的比值，即吞吐量=运行用户代码时间/（运行用户代码时间+垃圾收集时间），虚拟机总共运行了 100 分钟，其中垃圾收集花掉 1 分钟，那吞吐量就是 99%。\n该垃圾回收器适合回收堆空间"),o("strong",[A._v("上百兆~几个 G")]),A._v("。")]),A._v(" "),o("h3",{attrs:{id:"_4-4-1-参数设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-参数设置"}},[A._v("#")]),A._v(" 4.4.1 参数设置")]),A._v(" "),o("p",[A._v("开启参数")]),A._v(" "),o("h4",{attrs:{id:"_4-4-1-1-xx-useparallelgc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-1-xx-useparallelgc"}},[A._v("#")]),A._v(" 4.4.1.1 -XX:+UseParallelGC")]),A._v(" "),o("p",[A._v("新生代使用 Parallel Scavenge，老年代使用 Parallel Old 收集器提供了两个参数用于精确控制吞吐量，\n分别"),o("font",{attrs:{color:"red"}},[o("strong",[A._v("控制的停顿时间的-XX:MaxGCPauseMillis")])]),A._v(" 参数以及"),o("font",{attrs:{color:"red"}},[o("strong",[A._v("直接设置吞吐量大小的-XX:GCTimeRatio 参数")])])],1),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"Parallel/ParallelOld",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html"}},[A._v("https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html")])]),A._v(" "),o("h4",{attrs:{id:"_4-4-1-2-xx-maxgcpausemillis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-2-xx-maxgcpausemillis"}},[A._v("#")]),A._v(" 4.4.1.2 -XX:MaxGCPauseMillis")]),A._v(" "),o("p",[A._v("为最大 GC 暂停时间（以毫秒为准）设定目标。这是一个软目标，合资公司将尽最大努力实现它。默认情况下，没有最大暂停时间值。")]),A._v(" "),o("p",[A._v("以下示例显示如何将最大目标暂停时间设置为 500 ms：\n-XX:MaxGCPauseMillis=500")]),A._v(" "),o("p",[A._v("不过大家不要异想天开地认为如果把这个参数的值设置得更小一点就能使得系统的垃圾收集速度变得更快，垃圾收集停顿时间缩短是以牺牲吞吐 量和新生代空间为代价换取的:系统把新生代调得小一些，收集 300MB 新生代肯定比收集 500MB 快，但这也直接导致垃圾收集发生得更频繁，原来 10 秒 收集一次、每次停顿 100 毫秒，现在变成 5 秒收集一次、 每次停顿 70 毫秒。停顿时间的确在下降，但吞吐量也降下来了。")]),A._v(" "),o("h4",{attrs:{id:"_4-4-1-3-xx-gctimeratio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-3-xx-gctimeratio"}},[A._v("#")]),A._v(" 4.4.1.3 -XX:GCTimeRatio")]),A._v(" "),o("p",[A._v("-XX:GCTimeRatio 参数的值则应当是一个大于 0 小于 100 的整数，也就是垃圾收集时间占总时间的比率，相当于吞吐量的倒数。 例如：把此参数设置为 19, 那允许的最大垃圾收集时占用总时间的 5% (即 1/(1+19))， 默认值为 99，即允许最大 1% (即 1/(1+99))的垃圾收集时间 由于与吞吐量关系密切，ParallelScavenge 是“吞吐量优先垃圾回收器”。")]),A._v(" "),o("h4",{attrs:{id:"_4-4-1-4-xx-useadaptivesizepolicy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-4-xx-useadaptivesizepolicy"}},[A._v("#")]),A._v(" 4.4.1.4 -XX:+UseAdaptiveSizePolicy")]),A._v(" "),o("p",[A._v("启用自适应生成尺寸。默认情况下，此选项已启用。要禁用自适应生成大小，请明确指定和设置内存分配池的大小（参见选项）。-XX:-UseAdaptiveSizePolicy-XX:SurvivorRatio\n-XX:+UseAdaptiveSizePolicy （默认开启）。这是一个开关参数， 当这个参数被激活之后，就不需要人工指定新生代的大小(-Xmn)、Eden 与 Survivor 区的 比例(-XX:SurvivorRatio)、 晋升老年代对象大小(-XX:PretenureSizeThreshold)等细节参数了，虚拟机会根据当前系统的运行情况收集性能监控信息，动态调 整这些参数以提供最合适的停顿时间或者最大的吞吐量。")]),A._v(" "),o("h2",{attrs:{id:"_4-5-parnew-了解即可"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-parnew-了解即可"}},[A._v("#")]),A._v(" 4.5 ParNew （了解即可）")]),A._v(" "),o("p",[A._v("多线程垃圾回收器，与 CMS 进行配合，对于 CMS(CMS 只回收老年代)，新生代垃圾回收器只有 Serial 与 ParNew 可以选。和 Serial 基本没区别，唯一的区 别：多线程，多 CPU 的，停顿时间比 Serial 少。（在 JDK9 以后，把 ParNew 合并到了 CMS 了） 大致了解下搭配关系即可，后续版本已经接近淘汰。")]),A._v(" "),o("h2",{attrs:{id:"_4-6-concurrent-mark-sweep-cms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-concurrent-mark-sweep-cms"}},[A._v("#")]),A._v(" 4.6 Concurrent Mark Sweep （CMS）")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"Mark Sweep",href:"./image/MarkSweep.jpg"}},[o("img",{attrs:{src:a(452),alt:"Mark Sweep"}})])]),A._v(" "),o("p",[A._v("收集器是一种以获取最短回收停顿时间为目标的收集器。目前很大一部分的 Java 应用集中在互联网站或者 B/S 系统的服务端上，这类应用尤其重视服务 的响应速度，希望系统停顿时间最短，以给用户带来较好的体验。CMS 收集器就非常符合这类应用的需求。 从名字（包含“Mark Sweep”）上就可以看出，CMS 收集器是基于“标记—清除”算法实现的，它的运作过程相对于前面几种收集器来说更复杂一些，")]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("整个过程分为 4 个步骤")]),A._v(" "),o("p",[A._v("▶ "),o("strong",[A._v("初始标记-短暂")]),o("br"),A._v("\n仅仅只是标记一下 GC Roots 能直接关联到的对象，速度很快。"),o("br"),A._v("\n▶ "),o("strong",[A._v("并发标记-和用户的应用程序同时进行")]),o("br"),A._v("\n进行 GC Roots 追踪的过程，标记从 GCRoots 开始关联的所有对象开始遍历整个可达分析路径的对象。这个时间比较长，所以采用并发处理（垃圾回收器线程和用户线程同时工作）"),o("br"),A._v("\n▶ "),o("strong",[A._v("重新标记-短暂")]),o("br"),A._v("\n为了修正并发标记期间因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标 记阶段稍长一些，但远比并发标记的时间短。"),o("br"),A._v("\n▶ "),o("strong",[A._v("并发清除")]),o("br"),A._v("\n由于整个过程中耗时最长的并发标记和并发清除过程收集器线程都可以与用户线程一起工作，所以，从总体上来说，CMS 收集器的内存回收过程是与用 户线程一起并发执行的。 -XX:+UseConcMarkSweepGC ，表示新生代使用 ParNew，老年代的用 CMS")])]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("CPU 敏感")])]),A._v("：CMS 对处理器资源敏感，毕竟采用了并发的收集、当处理核心数不足 4 个时，CMS 对用户的影响较大。")],1),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("浮动垃圾")])]),A._v("：由于 CMS 并发清理阶段用户线程还在运行着，伴随程序运行自然就还会有新的垃圾不断产生，这一部分垃圾出现在标记过程之后，CMS 无法 在当次收集中处理掉它们，只好留待下一次 GC 时再清理掉。这一部分垃圾就称为“浮动垃圾”。 由于浮动垃圾的存在，因此需要预留出一部分内存，意味着 CMS 收集不能像其它收集器那样等待老年代快满的时候再回收。 在 1.6 的版本中老年代空间使用率阈值(92%) 如果预留的内存不够存放浮动垃圾，就会出现 Concurrent Mode Failure，这时虚拟机将临时启用 Serial Old 来替代 CMS。")],1),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("会产生空间碎片")])]),A._v("：标记 - 清除算法会导致产生不连续的空间碎片 总体来说，CMS 是 JVM 推出了第一款并发垃圾收集器，所以还是非常有代表性。 但是最大的问题是 CMS 采用了标记清除算法，所以会有内存碎片，当碎片较多时，给大对象的分配带来很大的麻烦，为了解决这个问题，CMS 提供一个 参数：-XX:+UseCMSCompactAtFullCollection，一般是开启的，如果分配不了大对象，就进行内存碎片的整理过程。 这个地方一般会使用 Serial Old ，因为 Serial Old 是一个单线程，所以如果内存空间很大、且对象较多时,CMS 发生这样情况会很卡。")],1),A._v(" "),o("h2",{attrs:{id:"_4-7-garbage-first-g1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-garbage-first-g1"}},[A._v("#")]),A._v(" 4.7 Garbage First(G1)")]),A._v(" "),o("h2",{attrs:{id:"_4-7-1-设计思想"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-1-设计思想"}},[A._v("#")]),A._v(" 4.7.1 设计思想")]),A._v(" "),o("p",[A._v("随着 JVM 中内存的增大，STW 的时间成为 JVM 急迫解决的问题，但是如果按照传统的分代模型，总跳不出 STW 时间不可预测这点。 为了实现 STW 的时间可预测，首先要有一个思想上的改变。")]),A._v(" "),o("p",[A._v("G1 将堆内存“化整为零”，将堆内存划分成多个大小相等独立区域（Region），每一个 Region 都可以根据需要，扮演新生代的 Eden 空间、Survivor 空间，或者老年代空间。回收器能够对扮演不同角色的 Region 采用不同的策略去处理，这样无论是 新创建的对象还是已经存活了一段时间、熬过多次收集的旧对象都能获取很好的收集效果。")]),A._v(" "),o("h2",{attrs:{id:"_4-7-2-region"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-2-region"}},[A._v("#")]),A._v(" 4.7.2 Region")]),A._v(" "),o("p",[A._v("Region 可能是 Eden,也有可能是 Survivor,也有可能是 Old,另外 Region 中还有一类特殊的 Humongous 区域，专门用来存储大对象。 G1 认为只要大小超过 了一个 Region 容量一半的对象即可判定为大对象。每个 Region 的大小可以通过参数-XX:G1HeapRegionSize 设定，取值范围为 1MB~32MB,且应为 2 的 N 次 幂。而对于那些超过了整个 Region 容量的超级大对象，将会被存放在 N 个连续的 Humongous Region 之中，G1 的进行回收大多数情况下都把 Humongous Region 作为老年代的一部分来进行看待。\n"),o("a",{attrs:{"data-fancybox":"",title:"Region",href:"./image/region.jpg"}},[o("img",{attrs:{src:a(453),alt:"Region"}})])]),A._v(" "),o("h2",{attrs:{id:"_4-7-3参数设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-3参数设置"}},[A._v("#")]),A._v(" 4.7.3参数设置")]),A._v(" "),o("p",[o("strong",[A._v("开启参数 -XX:+UseG1GC")])]),A._v(" "),o("p",[o("strong",[A._v("分区大小 -XX:+G1HeapRegionSize")]),A._v("\n一般建议逐渐增大该值，随着 size 增加，垃圾的存活时间更长，GC 间隔更长，但每次 GC 的时间也会更长。\n"),o("a",{attrs:{"data-fancybox":"",title:"G1HeapRegionSize",href:"./image/G1HeapRegionSize.jpg"}},[o("img",{attrs:{src:a(454),alt:"G1HeapRegionSize"}})])]),A._v(" "),o("p",[o("strong",[A._v("最大 GC 暂停时间 MaxGCPauseMillis")])]),A._v(" "),o("h2",{attrs:{id:"_4-7-4-运行过程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-4-运行过程"}},[A._v("#")]),A._v(" 4.7.4 运行过程")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"g1运行过程",href:"./image/g1run.jpg"}},[o("img",{attrs:{src:a(455),alt:"G1运行过程"}})])]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("G1 的运作过程")]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("初始标记( Initial Marking)")])])],1),A._v(" "),o("p",[A._v("仅仅只是标记一下 GC Roots 能直接关联到的对象，并且修改 TAMS 指针的值，让下一阶段用户线程并发运行时，能正确地在可用的 Region 中分配新对象。 这个阶段需要停顿线程，但耗时很短，而且是借用进行 Minor GC 的时候同步完成的，所以 G1 收集器在这个阶段实际并没有额外的停顿。")]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("TAMS 是什么？")])])],1),A._v(" "),o("p",[A._v("要达到 GC 与用户线程并发运行，必须要解决回收过程中新对象的分配，所以 G1 为每一个 Region 区域设计了两个名为 TAMS（Top at Mark Start）的指针， 从 Region 区域划出一部分空间用于记录并发回收过程中的新对象。这样的对象认为它们是存活的，不纳入垃圾回收范围。")]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("并发标记( Concurrent Marking)")])])],1),A._v(" "),o("p",[A._v("从 GC Root 开始对堆中对象进行可达性分析，递归扫描整个堆里的对象图，找出要回收的对象，这阶段耗时较长，但可与用户程序并发执行。当对象图扫 描 完 成 以 后 ， 并 发 时 有 引 用 变 动 的 对 象 ， 这 些 对 象 会 漏 标 （ 后 续 再 讲 三 色 标 记 的 时 候 会 细 讲 这 个 问 题 ） ， 漏 标 的 对 象 会 被 一 个 叫 做 SATB(snapshot-at-the-beginning)算法来解决（这个下节课会细讲）")]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("最终标记( Final Marking)")])])],1),A._v(" "),o("p",[A._v("对用户线程做另一个短暂的暂停，用于处理并发阶段结后仍遗留下来的最后那少量的 SATB 记录(漏标对象)。")]),A._v(" "),o("p",[o("font",{attrs:{color:"red"}},[o("strong",[A._v("筛选回收( Live Data Counting and Evacuation)")])]),o("br"),A._v("\n负责更新 Region 的统计数据，对各个 Region 的回收价值和成本进行排序，根据用户所期望的停顿时间来制定回收计划，可以自由选择任意多个 Region 构 成回收集，然后把决定回收的那一部分 Region 的存活对象复制到空的 Region 中，再清理掉整个旧 Region 的全部空间。这里的操作涉及存活对象的移动， 是必须暂停用户线程，由多条收集器线程并行完成的。")],1)]),A._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[A._v("特点")]),A._v(" "),o("p",[o("font",{attrs:{color:"blue"}},[o("strong",[A._v("并行与并发")])]),A._v("：G1 能充分利用多 CPU、多核环境下的硬件优势，使用多个 CPU（CPU 或者 CPU 核心）来缩短 Stop-The-World 停顿的时间，部分其他收集器 原本需要停顿 Java 线程执行的 GC 动作，G1 收集器仍然可以通过并发的方式让 Java 程序继续执行。")],1),A._v(" "),o("p",[o("font",{attrs:{color:"blue"}},[o("strong",[A._v("分代收集")])]),A._v("：与其他收集器一样，分代概念在 G1 中依然得以保留。虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但它能够采用不同的方式 去处理新创建的对象和已经存活了一段时间、熬过多次 GC 的旧对象以获取更好的收集效果。")],1),A._v(" "),o("p",[o("font",{attrs:{color:"blue"}},[o("strong",[A._v("空间整合")])]),A._v("：与 CMS 的“标记—清理”算法不同，G1 从整体来看是基于“标记—整理”算法实现的收集器，从局部（两个 Region 之间）上来看是基于“复制”算法实现的，但无论如何，这两种算法都意味着 G1 运作期间不会产生内存空间碎片，收集后能提供规整的可用内存。这种特性有利于程序长时间运行，分配大对象时不会因为无法找到连续内存空间而提前触发下一次 GC。")],1),A._v(" "),o("p",[o("font",{attrs:{color:"blue"}},[o("strong",[A._v("追求停顿时间")])]),A._v("： -XX:MaxGCPauseMillis 指定目标的最大停顿时间，G1 尝试调整新生代和老年代的比例，堆大小，晋升年龄来达到这个目标时间。 怎么玩？ 该垃圾回收器适合回收堆空间上百 G。一般在 G1 和 CMS 中间选择的话平衡点在 6~8G，只有内存比较大 G1 才能发挥优势。")],1)]),A._v(" "),o("h2",{attrs:{id:"_4-8-垃圾回收器整理-重点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-垃圾回收器整理-重点"}},[A._v("#")]),A._v(" 4.8 垃圾回收器整理（重点）")]),A._v(" "),o("p",[o("a",{attrs:{"data-fancybox":"",title:"垃圾回收器整理（重点）",href:"./image/zongjie.jpg"}},[o("img",{attrs:{src:a(456),alt:"垃圾回收器整理（重点）"}})])]),A._v(" "),o("p",[A._v("并行：垃圾收集的多线程的同时进行。"),o("br"),A._v("\n并发：垃圾收集的多线程和应用的多线程同时进行。"),o("br"),A._v("\n注：吞吐量=运行用户代码时间/(运行用户代码时间+ 垃圾收集时间)"),o("br"),A._v("\n垃圾收集时间= 垃圾回收频率 * 单次垃圾回收时间")])])}),[],!1,null,null,null);t.default=r.exports},444:function(A,t,a){A.exports=a.p+"assets/img/gctype.c64fd160.jpg"},445:function(A,t,a){A.exports=a.p+"assets/img/youngold1.defe6117.jpg"},446:function(A,t){A.exports="data:image/jpeg;base64,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"},447:function(A,t,a){A.exports=a.p+"assets/img/appel.0d5d80b4.jpg"},448:function(A,t,a){A.exports=a.p+"assets/img/Mark-Sweep.758f122b.jpg"},449:function(A,t,a){A.exports=a.p+"assets/img/Mark-compact.49be933c.jpg"},450:function(A,t,a){A.exports=a.p+"assets/img/lajihuishouqi.01c8de32.jpg"},451:function(A,t,a){A.exports=a.p+"assets/img/SerialandSerialold.3d2866bd.jpg"},452:function(A,t,a){A.exports=a.p+"assets/img/MarkSweep.8368d715.jpg"},453:function(A,t,a){A.exports=a.p+"assets/img/region.19c40663.jpg"},454:function(A,t,a){A.exports=a.p+"assets/img/G1HeapRegionSize.a7c43d60.jpg"},455:function(A,t,a){A.exports=a.p+"assets/img/g1run.61776834.jpg"},456:function(A,t,a){A.exports=a.p+"assets/img/zongjie.a5c2574a.jpg"}}]);