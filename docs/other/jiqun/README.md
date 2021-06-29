# 配置集群hostname

## 配置hostname文件
在每台机器执行命令
```sh
# 49.232.21.151
echo TXYUN-NO1 > /etc/hostname
hostname TXYUN-NO1

# 122.51.156.245
echo TXYUN-NO2 > /etc/hostname
hostname TXYUN-NO2

# 1.117.13.88
echo TXYUN-NO3 > /etc/hostname
hostname TXYUN-NO3
```
##  配置hosts文件
修改完hostname后，将集群集群名称都加入到/etc/hosts文件中，以后登录不同机器，直接使用hostname而不用IP
```sh
vi /etc/hosts

49.232.21.151  TXYUN-NO1
122.51.156.245 TXYUN-NO2
1.117.13.88    TXYUN-NO3
```
# 配置免密登录

## 生成rsa密钥

分别登陆三台服务器
使用命令ssh-keygen 生成rsa密钥，配置信息直接回车即可
生成的密钥默认在当前用户主目录的.ssh目录下

密钥文件有两个：
id_rsa 存放着私钥
id_rsa.pub 存放着公钥

```sh
[root@VM-0-16-centos ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:OvRzRtiSQ1C2862k2zADgX15kUbNPKo8pjeXiRKoSFk root@TXYUN-NO1
The key's randomart image is:
+---[RSA 2048]----+
|      ..o.o=     |
|     o o oo.=    |
|    . o *... .   |
|   E   + B..     |
|  o  .o.S.= .    |
| o  ...+=* .     |
|.. .  o+Bo+o     |
|. .   o.+X+      |
|       o.o.      |
+----[SHA256]-----+
[root@VM-0-16-centos ~]# cd .ssh/
[root@VM-0-16-centos .ssh]# ls -lrt
total 8
-rw------- 1 root root    0 Aug 22  2020 authorized_keys
-rw-r--r-- 1 root root  396 Jun 29 20:54 id_rsa.pub
-rw------- 1 root root 1679 Jun 29 20:54 id_rsa
[root@VM-0-16-centos .ssh]# pwd
/root/.ssh

```
## copy机器自身公钥到目标机器

<!-- 在本地先将id_rsa_pub 一份名为 authorized_keys

```sh
cp id_rsa.pub authorized_keys
``` -->

使用rsync命令将id_rsa_pub 更名为 authorized_keys同步到对方目录


```sh
#TXYUN-NO1
rsync id_rsa.pub root@TXYUN-NO2:/root/.ssh/authorized_keys
#TXYUN-NO2
rsync id_rsa.pub root@TXYUN-NO3:/root/.ssh/authorized_keys
#TXYUN-NO3
rsync id_rsa.pub root@TXYUN-NO1:/root/.ssh/authorized_keys
```

##  添加xsync脚本
```sh 
#!/bin/sh

# 获取输入参数个数，如果没有参数，直接退出
pcount=$#
if((pcount!=4)); then
    echo Usage: $0 filename servername startno endno
    exit;
fi
# 获取文件名称
p1=$1
fname=`basename $p1`
echo fname=$fname

# 获取上级目录到绝对路径
pdir=`cd -P $(dirname $p1); pwd`
echo pdir=$pdir
# 获取当前用户名称
user=`whoami`
# 获取hostname及起止号
slave=$2
startline=$3
endline=$4

# 循环
for((host=$startline; host<=$endline; host++)); do
    echo $pdir/$fname $user@$slave$host:$pdir
    echo ==================$slave$host==================
    rsync -rvl $pdir/$fname $user@$slave$host:$pdir
done

```
## 脚本起别名
```sh 
vi .bash_profile

alias xsync='sh /root/xsync.sh'

. .bash_profile
```

## 执行脚本

filename 待发送的文件或目录名
servername 服务器前缀名
startno 服务器编号起始编号
endno 服务器编号终止编号

**xsync cutFile.sh  TXYUN-NO 2 3**

```sh
[root@TXYUN-NO1 ~]# xsync cutFile.sh  TXYUN-NO 2 3
fname=cutFile.sh
pdir=/root
/root/cutFile.sh root@TXYUN-NO2:/root
==================TXYUN-NO2==================
sending incremental file list
cutFile.sh

sent 379 bytes  received 35 bytes  276.00 bytes/sec
total size is 285  speedup is 0.69
/root/cutFile.sh root@TXYUN-NO3:/root
==================TXYUN-NO3==================
sending incremental file list
cutFile.sh

sent 379 bytes  received 35 bytes  276.00 bytes/sec
total size is 285  speedup is 0.69
```
