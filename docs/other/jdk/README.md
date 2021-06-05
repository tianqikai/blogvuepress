# Liunx安装JDK

1. 下载安装包rpm格式

[官网](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

2. 上传安装包，执行命令完事

```java
rpm -ivh jdk-8u211-linux-x64.rpm

[root@VM-0-8-centos ~]# java -version
java version "1.8.0_211"
Java(TM) SE Runtime Environment (build 1.8.0_211-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.211-b12, mixed mode)
[root@VM-0-8-centos ~]# jps
2569178 Jps

```