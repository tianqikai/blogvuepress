# 10. GC调优工具

## 10.1 JDK自带工具（重点）

<a data-fancybox title="JDK自带工具" href="./image/jdktool.jpg">![JDK自带工具](./image/jdktool.jpg)</a>

### 10.1.1 jps
**列出当前机器上正在运行的虚拟机进程，JPS 从操作系统的临时目录上去找（所以有一些信息可能显示不全)**

```sh
[root@TXYUN-NO1 ~]# jps
10752 blog.jar
29285 QuorumPeerMain
7290 QuorumPeerMain
29245 QuorumPeerMain
20509 Jps
```
:::tip 常用参数
<font color='red'><strong>-q</strong></font> : 仅仅显示进程  
<font color='red'><strong>-m</strong></font> : 输出主函数传入的参数. 下的 hello 就是在执行程序时从命令行输入的参数  
<font color='red'><strong>-l</strong></font> : 输出应用程序主类完整 package 名称或 jar 完整名称    
<font color='red'><strong>-v</strong></font> : 列出 jvm 参数, -Xms20m -Xmx50m 是启动程序指定的 jvm 参数  
:::

### 10.1.2 jstat
**是用于监视虚拟机各种运行状态信息的命令行工具。它可以显示本地或者远程虚拟机进程中的类装载、内存、垃圾收集、JIT 编译等运行数据，在没有 GUI 图形界面，只提供了纯文本控制台环境的服务器上，它将是运行期定位虚拟机性能问题的首选工具**

:::tip 常用参数： 
<font color='red'><strong>-class</strong></font> (类加载器)   
<font color='red'><strong>-compiler</strong></font> (JIT)   
<font color='red'><strong>-gc</strong></font> (GC 堆状态)  
<font color='red'><strong>-gccapacity</strong></font> (各区大小)   
<font color='red'><strong>-gccause</strong></font> (最近一次 GC 统计和原因)   
<font color='red'><strong>-gcnew</strong></font> (新区统计)   
<font color='red'><strong>-gcnewcapacity</strong></font> (新区大小)   
<font color='red'><strong>-gcold</strong></font> (老区统计)   
<font color='red'><strong>-gcoldcapacity</strong></font> (老区大小)   
<font color='red'><strong>-gcpermcapacity</strong></font> (永久区大小)   
<font color='red'><strong>-gcutil</strong></font> (GC 统计汇总)   
<font color='red'><strong>-printcompilation</strong></font> (HotSpot 编译统计)  
:::

:::tip 显示列表参数说明
<font color='red'><strong>S0C</strong></font>：第一个幸存区（From 区）的大小   
<font color='red'><strong>S1C</strong></font>：第二个幸存区（To 区）的大小   
<font color='red'><strong>S0U</strong></font>：第一个幸存区的使用大小   
<font color='red'><strong>S1U</strong></font>：第二个幸存区的使用大小   
<font color='red'><strong>EC</strong></font>：伊甸园（Eden）区的大小   
<font color='red'><strong>EU</strong></font>：伊甸园（Eden）区的使用大小   
<font color='red'><strong>OC</strong></font>：老年代大小  
<font color='red'><strong>OU</strong></font>：老年代使用大小   
<font color='red'><strong>MC</strong></font>：方法区大小   
<font color='red'><strong>MU</strong></font>：方法区使用大小   
<font color='red'><strong>CCSC</strong></font>:压缩类空间大小   
<font color='red'><strong>CCSU</strong></font>:压缩类空间使用大小   
<font color='red'><strong>YGC</strong></font>：年轻代垃圾回收次数   
<font color='red'><strong>YGCT</strong></font>：年轻代垃圾回收消耗时间   
<font color='red'><strong>FGC</strong></font>：老年代垃圾回收次数   
<font color='red'><strong>FGCT</strong></font>：老年代垃圾回收消耗时间   
<font color='red'><strong>GCT</strong></font>：垃圾回收消耗总时间  
:::

### 10.1.3 jinfo
查看和修改虚拟机的参数

jinfo –sysprops 可以查看由 System.getProperties()取得的参数
jinfo –flag 未被显式指定的参数的系统默认值
jinfo –flags（注意 s）显示虚拟机的参数
### 10.1.4 jmap
用于生成堆转储快照（一般称为 heapdump 或 dump 文件）。jmap 的作用并不仅仅是为了获取 dump 文件，它还可以查询 finalize 执行队列、Java 堆和永 久代的详细信息，如空间使用率、当前用的是哪种收集器等。和 jinfo 命令一样，jmap 有不少功能在 Windows 平台下都是受限的，除了生成 dump 文件的 -dump 选项和用于查看每个类的实例、空间占用统计的-histo 选项在所有操作系统都提供之外，其余选项都只能在 Linux/Solaris 下使用。

### 10.1.5 jhat
jhat dump 文件名 
后屏幕显示“Server is ready.”的提示后，用户在浏览器中键入 http://localhost:7000/就可以访问详情
使用 jhat 可以在服务器上生成堆转储文件分析（一般不推荐，毕竟占用服务器的资源，比如一个文件就有 1 个 G 的话就需要大约吃一个 1G 的内存资源）

### 10.1.6 jstack

（Stack Trace for Java）命令用于生成虚拟机当前时刻的线程快照。线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合，生成线程快照的主 要目的是定位线程出现长时间停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等都是导致线程长时间停顿的常见原因。 

在代码中可以用 java.lang.Thread 类的 getAllStackTraces（）方法用于获取虚拟机中所有线程的StackTraceElement对象。使用这个方法可以通过简单的几行代码就完成 jstack 的大部分功能，在实际项目中不妨调用这个方法做个管理员页面，可以随时使用浏览器来查看线程堆栈。（并发编程中的线程安全课程中有具体的案例）

一般来说jstack主要是用来排查是否有死锁的情况，这块内容在并发编程（包括二期）中有详细的讲解。

### 10.1.7 VM 参数分类

<a data-fancybox title="JVM 的命令行参数参考" href="https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html">JVM 的命令行参数参考：https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html</a>

1. **标准： -开头，所有的 java虚拟机都支持**

保证 Java 虚拟机（JVM）的所有实现都支持标准选项。它们用于执行常见操作，例如检查JRE版本，设置类路径，启用详细输出等

2. **非标准：-X 开头，特定版本HotSpot支持特定命令**

非标准选项是特定于 Java HotSpot 虚拟机的通用选项，因此不能保证所有 JVM 实现都支持它们，并且它们可能会发生变化。这些选项以开头-X。   
-Xms30m -Xmx30m -Xss1m

3. 高级选项：以开头-XX: 

这些是开发人员选项，用于调整 Java HotSpot 虚拟机操作的特定区域，这些区域通常具有特定的系统要求，并且可能需要对系统配置参数的特权访问。也不能保证所有 JVM 实现都支持它们，并且它们可能会发生变化。

### 10.1.9 命令工具总结（重点） 

1. **生产服务器推荐开启 -XX:-HeapDumpOnOutOfMemoryError 默认关闭，建议开启**    
在 java.lang.OutOfMemoryError 异常出现时，输出一个 dump 文件，记录当时的堆内存快照。 -XX:HeapDumpPath=./java_pid<pid>.hprof 用来设置堆内存快照的存储文件路径，默认是 java 进程启动位置。

2. **调优之前开启、调优之后关闭** 
-XX:+PrintGC 调试跟踪之打印简单的 
GC 信息参数: -XX:+PrintGCDetails, +XX:+PrintGCTimeStamps 
打印详细的 GC 信息 -Xlogger:logpath 设置 gc 的日志路，如： -Xlogger:log/gc.log， 将 gc.log 的路径设置到当前目录的 log 目录下. 

应用场景：将 gc 的日志独立写入日志文件，将 GC 日志与系统业务日志进行了分离，方便开发人员进行追踪分析。


-XX:+PrintHeapAtGC， 打印推信息 参数设置： -XX：+PrintHeapAtGC 应用场景： 获取 Heap 在每次垃圾回收前后的使用状况 -XX:+TraceClassLoading
参数方法： -XX:+TraceClassLoading 应用场景：在系统控制台信息中看到 class 加载的过程和具体的 class 信息，可用以分析类的加载顺序以及是否可进行精简操作。 -XX:+DisableExplicitGC 禁止在运行期显式地调用 System.gc()
### 10.1.9 可视化工具

1.Jconsole

2.visualvm

## 10.2 Arthas阿里工具

官方文档参考 https://alibaba.github.io/arthas/

Arthas 是 Alibaba 开源的 Java 诊断工具，深受开发者喜爱。

Arthas 支持JDK6+，支持 Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 Tab 自动补全功能，进一步方便进行问题的定位 和诊断

## 10.3 动态追踪技术底层分析


