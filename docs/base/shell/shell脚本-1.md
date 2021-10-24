# 2. shell脚本入门

## 2.1 shell脚本简介

C Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。

Shell 是指一种命令行解释器，接收用户指令和应用程序命令，操作系统内核的服务。
<a data-fancybox title="shell" href="./image/shell01.jpg">![shell](./image/shell01.jpg)</a>

常见的shell还有 Bourne shell，两者语法不兼容；

### 2.1.1 shell解释器


```sh
# Centos默认的解析器是bash
[root@TXYUN-NO2 ~]# cat /etc/shells
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash

```

## 2.2  shell中的变量

### 2.2.1 系统变量

**常用系统变量$HOME、$PWD、$SHELL、$USER等**

:::tip 常用系统
$HOME : 当前目录的根目录  
$PWD  : 当前目录  
$USER ：当前用户  
$SHELL ：当前系统默认的解释器  
:::

-----------

```sh
[root@TXYUN-NO2 JVM]# echo $HOME
/root
[root@TXYUN-NO2 JVM]# echo $USER
root
[root@TXYUN-NO2 JVM]# echo $PWD
/root/JVM
[root@TXYUN-NO2 JVM]# echo $SHELL
/bin/bash

```
### 2.2.2 自定义变量

:::tip 基本语法
1. 定义变量：变量=值 

2. 撤销变量：unset 变量

3. 声明静态变量：readonly变量，注意：不能unset
:::


:::tip 变量定义规则
（1）变量名称可以由字母、数字和下划线组成，但是不能以数字开头，环境变量名建议大写。

（2）等号两侧不能有空格

（3）在bash中，变量默认类型都是字符串类型，无法直接进行数值运算。

（4）变量的值如果有空格，需要使用双引号或单引号括起来。
:::

```sh

[root@TXYUN-NO2 JVM]# A=555
[root@TXYUN-NO2 JVM]# echo $A
555

[root@TXYUN-NO2 JVM]# unset A
[root@TXYUN-NO2 JVM]# echo $A

[root@TXYUN-NO2 JVM]# readonly B=999
[root@TXYUN-NO2 JVM]# echo $B
999

[root@TXYUN-NO2 JVM]# unset B
-bash: unset: B: cannot unset: readonly variable

# 在bash中，变量默认类型都是字符串类型，无法直接进行数值运算
[root@TXYUN-NO2 JVM]# A=11+22
[root@TXYUN-NO2 JVM]# echo  $A
11+22

# 变量的值如果有空格，需要使用双引号或单引号括起来
[root@TXYUN-NO2 JVM]# A='1 love you'
[root@TXYUN-NO2 JVM]# echo  $A
1 love you

# 可把变量提升为全局环境变量，可供其他Shell程序使用
# export 变量名
[root@TXYUN-NO2 JVM]# export A

```
### 2.2.3 特殊变量

:::tip  特殊变量
<font color='red'><strong>$#</strong></font>	传递到脚本的参数个数

<font color='red'><strong>$*</strong></font>	以一个单字符串显示所有向脚本传递的参数。  
如$*用""括起来的情况、以"$1 $2 … $n"的形式输出所有参数

<font color='red'><strong>$$</strong></font>	脚本运行的当前进程ID号

<font color='red'><strong>$!</strong></font>	后台运行的最后一个进程的ID号

<font color='red'><strong>$@</strong></font>	与$*相同，但是使用时加引号，并在引号中返回每个参数。  
如$@用""括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数

<font color='red'><strong>$-</strong></font>	显示Shell使用的当前选项，与set命令功能相同。

<font color='red'><strong>$?</strong></font>	显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。
:::

## 2.3 shell中运算符	

```sh

```

## 2.4 shell中条件判断	

```sh

```

## 2.5 shell中流程控制	

```sh

```

## 2.6 shell中函数	

```sh

```

## 2.7 shell中工具命令	

```sh

```
