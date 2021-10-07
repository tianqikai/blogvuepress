# 5. Docker容器数据卷

## 5.1 Docker容器数据卷是什么

先来看看**Docker**的理念:
1. 将运用与运行的环境打包形成容器运行，运行可以伴随着容器，但是我们对数据的要求希望是持久化的
2. 容器之间希望有可能共享数据

**Docker**容器产生的数据，如果不通过**docker commit**生成新的镜像，使得数据做为镜像的一部分保存下来，
那么当容器删除后，数据自然也就没有了。
为了能保存数据在docker中我们使用**容器数据卷**。|

一句话：有点类似我们Redis里面的rdb和aof文件

----------------------------------------------

## 5.2 容器数据卷作用

卷就是目录或文件，存在于一个或多个容器中，由**docker**挂载到容器，但不属于**联合文件系统**，因此能够绕过Union FileSystem提供一些用于持续存储或共享数据的特性:
卷的设计目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷

:::tip 特点:
1. 数据卷可在容器之间共享或重用数据
2. 卷中的更改可以直接生效
3. 数据卷中的更改不会包含在镜像的更新中
4. 数据卷的生命周期一直持续到没有容器使用它为止
:::

**容器的持久化**  
**容器间继承+共享数据**

## 5.3 指定目录挂载


**-v /宿主机路径：容器内路径** 
```sh

docker run -it -v /宿主机绝对路径目录:/容器内目录 镜像名

docker run -it -d -v /mydata/logs:/usr/local/tomcat/logs  -p 8888:8080 590715041a56

# 查看数据卷是否挂载成功
# docker inspect  容器

[root@TXYUN-NO2 logs]# docker inspect  c0b1399e3fd6|grep mydata
                "/mydata/logs:/usr/local/tomcat/logs"
                "Source": "/mydata/logs",

"Mounts": [
    {
        "Type": "bind",
        "Source": "/mydata/logs",
        "Destination": "/usr/local/tomcat/logs",
        "Mode": "",
        "RW": true,
        "Propagation": "rprivate"
    }
],
```
## 5.4 匿名挂载

**-v 容器内路径**

```shell
docker run -it -d -v /usr/local/tomcat/logs  -p 1111:8080 590715041a56

#查看挂在容器卷  默认在/var/lib/docker/volumes下边的路径
docker inspect adb93530b509

```

## 5.5 具名挂载


**-v 数据卷名：容器内路径**

```shell
docker run -it -d -v mylog:/usr/local/tomcat/logs  -p 2222:8080 590715041a56

#查看挂在容器卷  默认在/var/lib/docker/volumes下边的路径
docker volumn inspect mylog

[root@TXYUN-NO2 etc]# docker volume inspect mylog
[
    {
        "CreatedAt": "2021-10-07T19:47:52+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/mylog/_data",
        "Name": "mylog",
        "Options": null,
        "Scope": "local"
    }
]

```

## 5.6 挂载只读和读写权限

```sh
#命令(带权限)

​# docker run -it -v /宿主机绝对路径目录:/容器内目录**:ro** 镜像名

#只读权限
docker run -it -d -v /mydata/logs:/usr/local/tomcat/logs:ro  -p 8888:8080 590715041a56

#读写权限
docker run -it -d -v /mydata/logs:/usr/local/tomcat/logs:ro  -p 8888:8080 590715041a56

[root@TXYUN-NO2 logs]# docker inspect  c0b1399e3fd6|grep mydata
                "/mydata/logs:/usr/local/tomcat/logs"
                "Source": "/mydata/logs",

        "Mounts": [
            {
                "Type": "bind",
                "Source": "/mydata/logs",
                "Destination": "/usr/local/tomcat/logs",
                "Mode": "ro",
                "RW": false,
                "Propagation": "rprivate"
            }
        ],

```

## 5.7 继承目录卷(--volumes-from)

```sh
docker run -it -d   -v dataVolumeContainer:/usr/local/tomcat/logs  -p 5555:8080  --name tomcat11 590715041a56
docker run -it -d   -p 5556:8080  --name tomcat12 --volumes-from tomcat11 590715041a56
docker run -it -d   -p 5557:8080  --name tomcat13 --volumes-from tomcat11 590715041a56

```

## 5.8 DockerFile添加

### 5.8.1 创建Dockerfile文件

```sh
# 建议使用Dockerfile作为文件名
vi Dockerfile

FROM tomcat:8.5.0
VOLUME ["/mydata/mylogs01","/mydata/mylogs02"]
CMD echo "finished,-----------success"
CMD /bin/bash
```

:::tip DockerFile命令说明

FROM  来自于一个父类的镜像

VOLUME  给镜像添加一个或多个容器卷

CMD  控制台执行的命令
::: 

### 5.8.2 执行dockerfile文件

```sh
$ docker build -f Dockerfile -t tqk001/tomcat .
# -f 指定dockerfile的路径
# -t target 指定目标，镜像的名称(不能以/开头)
# 最后的.不能忽略，表示输出的目录
```
### 5.8.3 启动刚才创建的容器

```sh
docker run -it --name tomcat01 -d -p 7777:8080 tqk001/tomcat /bin/bash
docker run -it  -d --name tomcat02 --volumes-from tomcat01 -p 8888:8080 tqk001/tomcat /bin/bash
docker run -it  -d --name tomcat03 --volumes-from tomcat01 -p 9999:8080 tqk001/tomcat /bin/bash
```

**注意**

Docker挂载主机目录Docker访问出现cannot open directory . Permission denied  
解决办法:在挂载目录后多加一个--privileged=true参数即可
