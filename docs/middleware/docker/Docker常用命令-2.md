# 3. Docker常用命令

<a data-fancybox title="Docker常用命令" href="./image/docker02.jpg">![Docker常用命令](./image/docker02.jpg)</a>

## 3.1 帮助命令

```shell

docker Version

docker info

docker --help
	#自己查看官网解释，高手都是自己练出来的，百度上只不过是翻译了下，加了点例子

```

## 3.2 镜像命令

```sh
docker pull nginx  #下载最新版

# 镜像名:版本名（标签）

docker pull nginx:1.20.1


docker pull redis  #下载最新
docker pull redis:6.2.4

## 下载来的镜像都在本地
docker images  #查看所有镜像

redis = redis:latest

docker rmi 镜像名:版本号/镜像id
```


### 3.2.1 docker images 列出本机上的镜像

```sh
[root@TXYUN-NO2 ~]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED      SIZE
hello-world   latest    feb5d9fea6a5   8 days ago   13.3kB

```
---------------

<a data-fancybox title="镜像命令说明" href="./image/Snipaste_2020-10-03_11-09-33.png">![镜像命令说明](./image/Snipaste_2020-10-03_11-09-33.png)</a>

#### OPTIONS 说明：

```dockerfile
-a 列出本地所有的镜像(含中间映射层)
-q 只显示镜像ID
--digests 显示镜像的摘要信息
--no-trunc 显示完整的镜像信息
```

### 3.2.2 查找镜像文件

<a data-fancybox title="dockerhub" href="www.dockerhub.com">![dockerhub]​网站 www.dockerhub.com 可查看镜像版本</a>

```sh
	​docker search [OPTIONS] 镜像名字
```
---------

```sh
	[root@TXYUN-NO2 ~]# docker search mysql
	NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
	mysql                             MySQL is a widely used, open-source relation…   11490     [OK]

```


#### OPTIONS 说明
```dockerfile
	--no-trun 显示完整的镜像描述
	-s 列出收藏数不小于指定值的镜像
	--automated 只列出 automated build类型的镜像
```



### 3.2.3 ​	下载镜像

```sh
​	docker pull 镜像名字[:TAG]
```


### 3.2.4  删除镜像

```sh

​#删除单个 镜像名:版本号/镜像id
docker rmi 镜像名:版本号/镜像id

​#删除多个 
docker rmi 镜像名1:TAG 镜像名2:TAG

​#删除多个
docker rmi ${docker images -qa}
```

## 3.3 容器命令

### 3.3.1 查看容器

```sh
docker ps
docker ps -a 查看所有容器
docker container  ls
docker container -a
```

### 3.3.2 启动docker

```sh
docker start 容器id/名字

# -d：后台运行
# --restart=always: 开机自启
docker run --name=mynginx   -d  --restart=always -p  88:80   nginx

#应用开机自启
docker update 容器id/名字 --restart=always
```
### 3.3.3 停止docker

```sh
docker stop 容器id/名字
```
### 3.3.4 进入docker容器

```sh
# 进入容器内部的系统，修改容器内容
docker exec -it 容器id  /bin/bash

docker exec -it mysql_mysql_1 /bin/bash
```
### 3.3.5 终止容器

```sh
使用docker stop $CONTAINER_ID来终止一个运行中的容器。并且可以使用
docker ps -a来看终止状态的容器
```

### 3.3.6 删除容器

```sh
docker rm 容器id/名字
```
