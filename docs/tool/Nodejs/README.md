# 1.CentOS7安装NodeJS

## 1.1首先安装wget

```sh
yum install -y wget
```

如果已经安装了可以跳过该步

## 1.2 下载nodejs最新的bin包
可以在下载页面<a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>中找到下载地址。
然后执行指令
```sh
wget https://nodejs.org/dist/v14.15.5/node-v14.15.5-linux-x64.tar.xz
```
然后就是等着下载完毕。  
**如果下载失败，可以登录网站直接下载，然后手工上传到服务器**

## 1.3 解压安装包

```sh
cd  /usr/local/src

xz -d node-v14.15.5-linux-x64.tar.xz

tar -xvf node-v14.15.5-linux-x64.tar

```

## 1.4 建立软连接，变为全局

```sh
cd node-v14.15.5-linux-x64/bin

ln -s /usr/local/src/node-v14.15.5-linux-x64/bin/npm /usr/local/bin/

ln -s /usr/local/src/node-v14.15.5-linux-x64/bin/node /usr/local/bin/

```
 
## 1.5 修改环境变量

```sh
vim /etc/profile

# 以下两个路径为加入nodejs路径
export NODE_HOME=/usr/local/src/node-v14.15.5-linux-x64
export PATH=$NODE_HOME/bin:$PATH
```

```sh
# 配置生效

source /etc/profile
```

## 1.6安装完成检查

```sh
[root@tianqikai vuepressblog_Gitee]# node -v
v14.15.5
[root@tianqikai vuepressblog_Gitee]# npm -v
6.14.11

```
