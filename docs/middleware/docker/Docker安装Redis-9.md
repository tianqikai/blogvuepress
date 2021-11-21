# 6 Docker安装Redis
[[toc]]
## 6.1 Docker拉取redis镜像

```sh
docker pull redis
```

## 6.2 docker启动redis

```sh

#创建redis配置文件目录
mkdir -p /mydata/redis/conf

touch /mydata/redis/conf/redis.conf
# 启动redis容器

docker run -p 6400:6379 --name redis \
-v /mydata/redis/data:/data \
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf
--requirepass 12345@tqk

#配置redis持久化
echo "appendonly yes"  >> /mydata/redis/conf/redis.conf
```

## 6.3 重启生效

```sh
# 重启redis
docker restart redis
# redis容器随docker启动自动运行
docker update redis --restart=always
```
## 6.4 现有的redis创建密码或修改密码的方法

```bash
#1.进入redis的容器 
docker exec -it 容器ID bash

#2.进入redis目录 
cd /usr/local/bin 

#3.运行命令：
redis-cli

#4.查看现有的redis密码：
config get requirepass

#5.设置redis密码config 
set requirepass ****（****为你要设置的密码）

#6.若出现(error) NOAUTH Authentication required.错误，则使用 auth 密码来认证密码
```

2021-11-18 14:23:32.250 [Druid-ConnectionPool-Create-794476802] ERROR com.alibaba.druid.pool.DruidDataSource - create connection error, url: jdbc:mysql://49.233.34.168:6699/pattern?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true, errorCode 1040, state 08004
com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Data source rejected establishment of connection,  message from server: "Too many connections"