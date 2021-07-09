# JVM基础知识

## JVM 从编译到执行 

### Java 程序的执行过程 
一个 Java 程序，首先经过 **javac** 编译成 **.class 文件**，然后 **JVM 将其加载到方法区**，**执行引擎**将会执行这些字节码。执行时，会翻译成操作系统相关的函数。**JVM 作为 .class 文件的翻译器存在，输入字节码，调用操作系统函数**。 
过程如下：**Java 文件->编译器>字节码->JVM->机器码**。 JVM 全称 Java Virtual Machine，也就是我们耳熟能详的 Java 虚拟机。它能识别 .class 后缀的文件，并且能够解析它的指令，最终调用操作系统上的函数，完成我们想要的操作

<a data-fancybox title="JAVA程序的执行过程" href="./image/jvmruning.jpg">![JAVA程序的执行过程](./image/jvmruning.jpg)</a> 

### JVM、JRE、JDK 的关系 
<font color='red'><strong>JVM</strong></font> 只是一个翻译，把 Class 翻译成机器识别的代码，但是需要注意，JVM 不会自己生成代码，需要大家编写代码，同时需要很多依赖类库，这个时候就需要用到 JRE。 

<font color='red'><strong>JRE</strong></font> 是什么，它除了包含 JVM 之外，提供了**很多的类库**（就是我们说的 jar 包，它可以提供一些即插即用的功能，比如读取或者操作文件，连接网络， 使用 I/O 等等之类的）这些东西就是 JRE 提供的基础类库。JVM 标准加上实现的一大堆基础类库，就组成了 Java 的运行时环境，也就是我们常说的 JRE （Java Runtime Environment）。  

但对于程序员来说，JRE 还不够。我写完要编译代码，还需要调试代码，还需要打包代码、有时候还需要反编译代码。所以我们会使用 JDK，因为 <font color='red'><strong>JDK</strong></font> 还提供了一些非常好用的小工具，比如 <font color='red'><strong>javac（编译代码）、java、jar （打包代码）、javap（反编译(反汇编)）</strong></font>等。这个就是 JDK。 具体可以文档可以通过官网去下载：<a href="https://www.oracle.com/java/technologies/javase-jdk8-doc-downloads.html"> https://www.oracle.com/java/technologies/javase-jdk8-doc-downloads.html</a>   

JVM 的作用是：从软件层面屏蔽不同操作系统在底层硬件和指令的不同。这个就是我们在宏观方面对 JVM 的一个认识。   
**同时 JVM 是一个虚拟化的操作系统，类似于 Linux 或者 Windows 的操作系统，只是它架在操作系统上，接收字节码也就是 class，把字节码翻译成操作系统上的 机器码且进行执行**


### JVM跨平台到跨语言 

<font color='blue'><strong>跨平台</strong></font>：我们写的一个类，在不同的操作系统上（Linux、Windows、MacOS 等平台）执行，效果是一样，这个就是 JVM 的跨平台性。 为了实现跨平台型，不同操作系统有对应的 JDK 的版本。 <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html">https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</a>

<a data-fancybox title="从跨平台到跨语言" href="./image/jvmCrossplatform.jpg">![从跨平台到跨语言](./image/jvmCrossplatform.jpg)</a> 

<font color='blue'><strong>跨语言（语言无关性)</strong></font>：JVM 只识别字节码，所以 JVM 其实跟语言是解耦的，也就是没有直接关联，JVM 运行不是翻译 Java 文件，而是识别 class 文 件，这个一般称之为字节码。还有像 <font color='red'><strong>Groovy 、Kotlin、Scala</strong></font> 等等语言，它们其实也是编译成字节码，所以它们也可以在 JVM 上面跑，这个就是 JVM 的跨 语言特征。Java 的跨语言性一定程度上奠定了非常强大的 java 语言生态圈。

#### 常见的 JVM 实现
<font color='red'><strong>Hotspot</strong></font>：目前使用的最多的 Java 虚拟机。在命令行 java –version。它会输出你现在使用的虚拟机的名字、版本等信息、执行模式。   
<font color='blue'><strong>Jrocket</strong></font>：原来属于BEA 公司，曾号称世界上最快的 JVM，后被 Oracle 公司收购，合并于 Hotspot   
<font color='blue'><strong>J9</strong></font>: IBM 有自己的 java 虚拟机实现，它的名字叫做 J9. 主要是用在 IBM 产品（IBM WebSphere 和 IBM 的 AIX 平台上）   
<font color='blue'><strong>TaobaoVM</strong></font>: 只有一定体量、一定规模的厂商才会开发自己的虚拟机，比如淘宝有自己的 VM,它实际上是 Hotspot 的定制版，专门为淘宝准备的，阿里、天 猫都是用的这款虚拟机。   
<font color='blue'><strong>LiquidVM</strong></font>: 它是一个针对硬件的虚拟机，它下面是没有操作系统的（不是 Linux 也不是 windows）,下面直接就是硬件，运行效率比较高。   
<font color='blue'><strong>zing</strong></font>: 它属于 zual 这家公司，非常牛，是一个商业产品，很贵！它的垃圾回收速度非常快（1 毫秒之内），是业界标杆。它的一个垃圾回收的算法后来被 **Hotspot 吸收才有了现在的 ZGC**。   

## JVM 整体概述

JVM 能涉及非常庞大的一块知识体系，比如<font color='red'><strong>内存结构、垃圾回收、类加载、性能调优、JVM 自身优化技术、执行引擎、类文件结构、监控工具等</strong></font>。   

但是在所有的知识体系中，都或多或少跟内存结构有一定的关系： 比如<font color='red'><strong>垃圾回收回收的就是内存、类加载加载到的地方也是内存、性能优化也涉及到内存优化、执行引擎与内存密不可分、类文件结构与内存的设计有关系，监控工具也会监控内存</strong></font>。所以**内存结构处于 JVM 中核心位置**。也是属于我们入门 JVM 学习的最好的选择。   

<font color='blue'><strong>同时 JVM 是一个虚拟化的操作系统，所以除了要虚拟指令之外，最重要的一个事情就是需要虚拟化内存，这个虚拟化内存就是我们马上要讲到的 JVM 的内存区域</strong></font>。

## <font color='red'>JVM 的内存区域 </font>

### 运行时数据区域
**运行时数据区的定义**：Java 虚拟机在执行 Java 程序的过程中会把它所管理的内存划分为若干个不同的数据区域 Java 引以为豪的就是它的**自动内存管理机制**。相比于 C++的手动内存管理、复杂难以理解的指针等，Java 程序写起来就方便的多。 所以要深入理解 JVM 必须理解内存虚拟化的概念。
 在 JVM 中，**JVM 内存**主要分为<font color='blue'><strong>堆、程序计数器、方法区、虚拟机栈和本地方法栈等</strong></font>。   
 同时按照与线程的关系也可以这么划分区域：   
 线程私有区域：一个线程拥有单独的一份内存区域。   
 线程共享区域：被所有线程共享，且只有一份。   
 这里还有一个直接内存，这个虽然不是运行时数据区的一部分，但是会被频繁使用。  
 你可以理解成没有被虚拟机化的操作系统上的其他内存（比如操作 系统上有 8G 内存，被 JVM 虚拟化了 3G，那么还剩余 5G， JVM 是借助一些工具使用这 5G 内存的，这个内存部分称之为直接内存）