# 5 Docker安装mysql

[[toc]]
## 5.1 Docker下载mysql镜像

```sh
# 下载mysql 5.7
docker pull mysql:5.7
# 不加版本号，下载最新版本
docker pull mysql
# 查看下载镜像
docker images

```
## 5.2 docker启动mysql

```sh
docker run --name mysqlserver5.7 \
-v $PWD/logs:/logs  \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=12345@tqk \
-i -p 3366:3306 \
-d mysql:5.7 
```

:::tip 参数介绍
<font color='red'><strong>-p 3366:3306</strong></font>：将容器的3366端口映射到主机的3366端口   
<font color='red'><strong>--name</strong></font>：给容器命名  
<font color='red'><strong>-v /mydata/mysql/conf:/etc/mysql</strong></font>：将配置文件挂载到主机/mydata/..  
<font color='red'><strong>-e MYSQL_ROOT_PASSWORD=12345@tqk</strong></font>：初始化root用户的密码为12345@tqk   
:::

## 5.3 查看mysql服务进程是否存在

```sh
[root@VM-16-5-centos ~]# docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                                         NAMES
7757c9c35824   mysql:5.7   "docker-entrypoint.s…"   5 seconds ago   Up 4 seconds   3306/tcp, 33060/tcp, 0.0.0.0:3366->3366/tcp   mysqlserver5.7

```

## 5.4 配置mysql

### 5.4.1 修改配置文件 my.cnf

```sh
vi /mydata/mysql/conf/my.cnf

##添加内容##
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect='SET collation_connection = utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve
# Esc
```

### 5.4.2 进入mysql容器，并登陆mysql

```sh
docker exec -it mysqlserver5.7 bash
mysql -u root -p
```

### 5.4.3 开启远程访问权限

```sh
use mysql;
select host,user from user;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '12345@tqk';
flush privileges;

### 退出docker容器
exit
```

## 5.5 Docker重启mysql使配置生效

```sh
docker restart mysqlserver5.7


# docker开机自启动mysql
docker update mysqlserver5.7 --restart=always

# redis
docker update redis --restart=always
```
## 5.6 Docker安装mysql网络不通

**用docker创建MySQL无法访问的问题（WARNING: IPv4 forwarding is disabled. Networking will not work）**

--------------


```sh
# 查看内核参数 net.ipv4.ip_forward=0
cat /etc/sysctl.conf|grep forward
# 修改内核参数
vi /etc/sysctl.conf
net.ipv4.ip_forward=0
#改成
net.ipv4.ip_forward=1

#重启network服务
systemctl restart network

#重启docker服务
systemctl restart docker

#重启iptables（可有可无，我的是腾讯云没有执行）
systemctl restart iptables

#上述步骤还是无法解决问题时，执行完上述步骤，重新安装MySQL
```

gyp ERR! stack Error : can't find python executable "python",you can set the PYTHON env variable.

https://blog.csdn.net/caicsama/article/details/103679242?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.no_search_link

