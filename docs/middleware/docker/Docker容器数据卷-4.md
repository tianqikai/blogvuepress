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

## 5.3 直接命令添加

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

#命令(带权限)

​# docker run -it -v /宿主机绝对路径目录:/容器内目录**:ro** 镜像名

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

## 5.4 DockerFile添加

```sh
FROM tomcat
VOLUME ["/mydata/mylogs","/usr/local/tomcat/logs"]
CMD echo "finished,-----------success"
CMD /bin/bash
```
:::tip DockerFile命令说明

FROM  来自于一个父类的镜像

VOLUME  给镜像添加一个或多个容器卷

CMD  控制台执行的命令
:::