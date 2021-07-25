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

### 10.1.3 jinfo

### 10.1.4 jmap

### 10.1.5 jhat

### 10.1.6 jstack

## 10.2 Arthas阿里工具

## 10.3 动态追踪技术底层分析
