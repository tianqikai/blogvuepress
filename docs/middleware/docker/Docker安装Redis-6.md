# 6 Docker安装Redis

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

docker run -p 6400:6400 --name redis \
-v /mydata/redis/data:/data \
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf

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