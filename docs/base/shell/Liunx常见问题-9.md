# 9.Liunx常用问题

## 9.1 Linux系统下 -bash: apt-get: command not found

apt-get: command not found，这个的出现是因为系统的原因。

**Linux系统分为两种：**  
1. RedHat系列：Redhat、Centos、Fedora等 

2. Debian系列：Debian、Ubuntu等 

RedHat系列的包管理工具是<font color='red'><strong>yum</strong></font>

Debian系列的包管理工具是<font color='red'><strong>apt-get</strong></font>

**查看系统版本:**

```sh
[root@TXYUN-NO3 JUC]# cat /proc/version
Linux version 4.18.0-193.28.1.el8_2.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 8.3.1 20191121 (Red Hat 8.3.1-5) (GCC)) #1 SMP Thu Oct 22 00:20:22 UTC 2020
[root@TXYUN-NO3 JUC]# uname -a
Linux TXYUN-NO3 4.18.0-193.28.1.el8_2.x86_64 #1 SMP Thu Oct 22 00:20:22 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```
## 9.2  Linux man手册没有pthread_mutex_init的解决办法

**Centos安装man pages**
```sh
//安装man pages：
yum install man

//安装pthread的man pages：
yum -y install man-pages
```
**Debian系列 Ubuntu**
```sh
sudo apt-get install manpages-posix-dev 
```

## 9.3 CENTOS7 安装telnet

<a href="https://www.cnblogs.com/suni/p/11528480.html">CENTOS7 安装telnet:https://www.cnblogs.com/suni/p/11528480.html</a>


https://www.cnblogs.com/kingsonfu/p/11683494.html
https://blog.csdn.net/inthat/article/details/108802061