# Seata安装

**我们这里使用docker安装部署，简化部署运维成本**

### 1、docker 拉取seata-server镜像
```sh
docker pull seataio/seata-server:latest
```

### 2、查看镜像是否拉取成功

```sh
docker image ls
```
![Seate镜像]()
### 3、docker启动seata-server
```sh
docker run --name seata-server01  -d -p 8091:8091  -e SEATA_IP=49.232.21.151  -v /usr/local/docker/seata/conf:/root/seata-config -v /usr/local/docker/seata/logs:/root/logs/seata  seataio/seata-server
```
### 4、查看seata是否启动成功

![]()