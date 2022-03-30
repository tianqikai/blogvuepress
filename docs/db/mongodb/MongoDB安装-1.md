# 2. MongoDB安装

## 2.1 MongoDB下载安装

### 2.1.1 下载

- 官网：`https://www.mongodb.com/`
- 下载地址：`https://www.mongodb.com/try/download/community`

 在页面中选择 MongoDB Community Server 社区版，根据自己的系统选择对应的版本，我自己使用的是
CentOS 版本。而 MongoDB 只有 RedHat 版本，下载使用即可。

 CentOS 是 Community ENTerprise Operating System 的简称，也可以叫它社区企业操作系统，是 Linux
操作系统中的一个发行版本。

 CentOS 并不是全新的 Linux 发行版，它是 Red Hat 家族发行的企业版的产品 Red Hat Enterprise
Linux（以下称之为 RHEL）的克隆版本。RHEL 是很多企业采用的 Linux 发行版本，需要向 Red Hat 付费才可
以使用，并能得到付费对应的服务，技术支持和版本升级。CentOS 可以像 RHEL 一样的构筑 Linux 系统环
境，但不需要向 Red Hat 支付任何的产品和服务费用，同时也得不到任何有偿技术支持和升级服务。
还可以通过：https://docs.mongodb.com/manual/installation/ 确认该版本软件是否支持你的操作系统。

### 2.1.2 安装

将资源上传至服务器 /usr/local，解压至 /usr/local 并重命名为 mongodb 。
```sh
# 创建 mongodb 目录
mkdir -p /usr/local/mongodb
# 解压 mongodb 至指定目录
tar -zxvf /usr/local/src/mongodb-linux-x86_64-rhel70-4.4.1.tgz -C /usr/local/
# 重命名解压目录为 mongodb
mv /usr/local/mongodb-linux-x86_64-rhel70-4.4.1/ /usr/local/mongodb

[root@TXYUN-NO2 ~]# cd /usr/local
[root@TXYUN-NO2 local]# tar -xvf mongodb-linux-x86_64-rhel70-4.4.1.tgz
[root@TXYUN-NO2 local]# mv mongodb-linux-x86_64-rhel70-4.4.1 mongodb

```

### 2.1.3 创建数据/日志目录

创建用于存放数据和日志的文件夹，并修改其权限增加读写权限。
```sh
# 创建存放数据的目录
mkdir -p /usr/local/mongodb/data/db
# 创建存放日志的目录
mkdir -p /usr/local/mongodb/logs
# 创建日志记录文件
touch /usr/local/mongodb/logs/mongodb.log
```

## 2.2 启动 MongoDB

### 2.2.1 前台启动

MongoDB 的默认启动方式为前台启动。所谓的前台启动就是 MongoDB 启动进程后会占用当前的终端窗口。

```sh
# 切换至指定目录
cd /usr/local/mongodb/
# 前台启动
bin/mongod --dbpath /usr/local/mongodb/data/db/ --logpath /usr/local/mongodb/logs/mongodb.log --logappend --port 27017 --bind_ip 0.0.0.0
```

- dbpath ：指定数据文件存放目录
- logpath ：指定日志文件，注意是指定文件不是目录
- logappend ：使用追加的方式记录日志
- port ：指定端口，默认为 27017
- bind_ip ：绑定服务 IP，若绑定 127.0.0.1，则只能本机访问，默认为本机地址

### 2.2.2 后台启动

所谓的后台启动就是以守护进程的方式启动 MongoDB。命令中添加 --fork 即可。

```sh
# 后台启动
bin/mongod --dbpath /usr/local/mongodb/data/db/ --logpath /usr/local/mongodb/logs/mongodb.log --logappend --port 27017 --bind_ip 0.0.0.0 --fork
```

通过命令启动的方式并不适合管理，毕竟每次输入命令都需要考虑各参数的配置。我们可以通过配置文件来配置
启动参数，然后通过指定配置文件的方式启动服务，这样在管理 MongoDB 上就比较方便了。

#### 配置文件
 在 bin 目录下增加一个 mongodb.conf 配置文件。
```conf
# 数据文件存放目录
dbpath = /usr/local/mongodb/data/db
# 日志文件存放目录
logpath = /usr/local/mongodb/logs/mongodb.log
# 以追加的方式记录日志
logappend = true
# 端口默认为 27017
port = 27017
# 对访问 IP 地址不做限制，默认为本机地址
bind_ip = 0.0.0.0
# 以守护进程的方式启用，即在后台运行
fork = true
```

#### 启动

```sh
# 切换至指定目录
cd /usr/local/mongodb/
# 指定配置文件的方式启动服务
./bin/mongod -f ./bin/mongodb.conf
```

### 2.2.3 安装问题

```log
bin/mongod: error while loading shared libraries: libcrypto.so.10: cannot open shared object file: No such file or directory
```

缺少对应的依赖包，
```sh
[root@TXYUN-NO2 mongodb]# ldd /usr/local/mongodb/bin/mongod
	linux-vdso.so.1 (0x00007fffe79dc000)
	liblzma.so.5 => /lib64/liblzma.so.5 (0x00007f3423c0c000)
	libcurl.so.4 => /lib64/libcurl.so.4 (0x00007f342397e000)
	libresolv.so.2 => /lib64/libresolv.so.2 (0x00007f3423767000)
	libcrypto.so.10 => not found
	libssl.so.10 => not found
	libdl.so.2 => /lib64/libdl.so.2 (0x00007f3423563000)
	librt.so.1 => /lib64/librt.so.1 (0x00007f342335b000)
	libm.so.6 => /lib64/libm.so.6 (0x00007f3422fd9000)
	libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007f3422dc1000)
	libpthread.so.0 => /lib64/libpthread.so.0 (0x00007f3422ba1000)
	libc.so.6 => /lib64/libc.so.6 (0x00007f34227dc000)
	/lib64/ld-linux-x86-64.so.2 (0x00007f342809b000)
	libnghttp2.so.14 => /lib64/libnghttp2.so.14 (0x00007f34225b5000)
	libidn2.so.0 => /lib64/libidn2.so.0 (0x00007f3422397000)
	libssh.so.4 => /lib64/libssh.so.4 (0x00007f3422128000)
	libpsl.so.5 => /lib64/libpsl.so.5 (0x00007f3421f17000)
	libssl.so.1.1 => /lib64/libssl.so.1.1 (0x00007f3421c83000)
	libcrypto.so.1.1 => /lib64/libcrypto.so.1.1 (0x00007f342179a000)
	libgssapi_krb5.so.2 => /lib64/libgssapi_krb5.so.2 (0x00007f3421545000)
	libkrb5.so.3 => /lib64/libkrb5.so.3 (0x00007f342125c000)
	libk5crypto.so.3 => /lib64/libk5crypto.so.3 (0x00007f3421045000)
	libcom_err.so.2 => /lib64/libcom_err.so.2 (0x00007f3420e41000)
	libldap-2.4.so.2 => /lib64/libldap-2.4.so.2 (0x00007f3420bf3000)
	liblber-2.4.so.2 => /lib64/liblber-2.4.so.2 (0x00007f34209e3000)
	libbrotlidec.so.1 => /lib64/libbrotlidec.so.1 (0x00007f34207d6000)
	libz.so.1 => /lib64/libz.so.1 (0x00007f34205bf000)
	libunistring.so.2 => /lib64/libunistring.so.2 (0x00007f342023e000)
	libkrb5support.so.0 => /lib64/libkrb5support.so.0 (0x00007f342002d000)
	libkeyutils.so.1 => /lib64/libkeyutils.so.1 (0x00007f341fe29000)
	libsasl2.so.3 => /lib64/libsasl2.so.3 (0x00007f341fc0b000)
	libbrotlicommon.so.1 => /lib64/libbrotlicommon.so.1 (0x00007f341f9ea000)
	libselinux.so.1 => /lib64/libselinux.so.1 (0x00007f341f7c0000)
	libcrypt.so.1 => /lib64/libcrypt.so.1 (0x00007f341f597000)
	libpcre2-8.so.0 => /lib64/libpcre2-8.so.0 (0x00007f341f313000)
```

## 2.3 docker安装MongoDB

### 2.3.1 拉取镜像

```sh
[root@TXYUN-NO2 mongodb]# docker pull mongo
[root@TXYUN-NO2 mongodb]# docker images
REPOSITORY                        TAG       IMAGE ID       CREATED        SIZE
mongo                             latest    dfda7a2cf273   3 months ago   693MB
```

### 2.3.2 创建本地容器卷

```sh
# 创建存放数据的目录
mkdir -p /usr/local/mongodb/data/db
# 创建存放日志的目录
mkdir -p /usr/local/mongodb/logs
# 创建日志记录文件
touch /usr/local/mongodb/logs/mongodb.log
```

### 2.3.3 启用镜像

```sh
docker run -p 27017:27017 -v /usr/local/mongodb/data/db:/data/db  -v /usr/local/mongodb/logs:/logs --name mongodb -d mongo 

## 开启用户认证
docker run -p 27117:27017 -v /usr/local/mongodb/data/db:/data/db  -v /usr/local/mongodb/logs:/logs --name mongodb1 -d mongo --auth
```

### 2.3.4 以 admin 用户身份进入mongo ：

```sh
docker exec -it  mongodb  mongo admin
```
### 2.3.5 创建一个 admin 管理员账号：

```sh
db.createUser({ user: 'admin', pwd: 'admin123456', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
```

