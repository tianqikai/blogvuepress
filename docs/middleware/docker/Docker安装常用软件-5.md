# 5 Docker安装mysql


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
-i -p 3366:3366 \
-d mysql:5.7 
```

:::tip 参数介绍
<font color='red'><strong>-p 3366:3366</strong></font>：将容器的3366端口映射到主机的3366端口   
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
```