# 7. Docker私有仓库搭建与配置
[[toc]]
## 7.1 拉取镜像并启动

```sh
# 拉取私有仓库镜像
docker pull registry:2

# 启动私有仓库容器
docker run -d -v /opt/registry:/var/lib/registry -p 5000:5000 --name myregistry registry:2
```

打开浏览器输入地址**http://122.51.156.245:5000/v2/_catalog** 看到 {"repositories":[]} 表示私有仓库搭建成功
并且内容为空

## 7.3 修改daemon.json

```sh
vim /etc/docker/daemon.json
# 添加以下内容，保存退出。

{"insecure-registries":["122.51.156.245:5000"]}

# 此步用于让 docker信任私有仓库地址

# 重启docker 服务
systemctl restart docker
```

## 7.4 镜像上传至私有仓库

```sh

# 标记此镜像为私有仓库的镜像
docker tag hello-world 122.51.156.245:5000/hello-world

# 再次启动私服容器
docker start registry

# 格式如下：
# docker pull 122.51.156.245:5000/镜像名称:镜像版本号
# 上传标记的镜像
docker push 122.51.156.245:5000/hello-world
```

**访问 http://122.51.156.245:5000/v2/_catalog 查看私有仓库目录，可以看到刚上传的镜像了**

## 7.4 Harbor搭建私有仓库