# 1. Nginx简介

## 1.1 Nginx概述
Nginx官网  https://www.nginx.com/

Nginx 是一款高性能的HTTP服务器和反**向代理服务器**，同时支持**IMAP/POP3/SMTP**代理服务

### 1.1.1 什么是Nginx

Nginx 是一款高性能的 http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。由俄罗斯的程序设计师伊戈尔·西索夫（Igor Sysoev）所开发，官方测试 nginx 能够支支撑 5 万并发链接， 并且 cpu、内存等资源消耗却非常低，运行非常稳定。 由C语言编写 

### 1.1.2 Nginx应用场景

:::tip Nginx应用场景

1. **http服务器**,Nginx 是一个 http 服务可以独立提供 http 服务。可以做**网页静态服务器**。

2. **虚拟主机**,可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。

3. **反向代理，负载均衡**,当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用 nginx 做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况。  
:::


## 1.2openresty来安装nginx

### 1.2.1 检查是否安装Perl环境

不安装会报错
**you may need to install the Temp module**
```sh
yum install perl

yum install cpan

# 检查是否安装成功
perl -V
```

### 1.2.3 创建文件制作**自动安装脚本**

vim  openresty.sh
```sh
yum install -y pcre-devel openssl-devel gcc curl
cd /usr/local/
wget https://openresty.org/download/openresty-1.17.8.2.tar.gz
cd /usr/local/
tar -zxvf openresty-1.17.8.2.tar.gz
cd /usr/local/
mv openresty-1.17.8.2 openresty
cd /usr/local/openresty/
 ./configure --with-luajit \
            --without-http_redis2_module \
            --with-http_iconv_module
cd /usr/local/openresty/ 
make && make install
```


1. 赋予执行文件 

```sh
chmod +x openresty.sh
```

2. 运行即可 

```sh
./openresty.sh 
```

3. 修改环境 

```shell
$ vi /etc/profile
 
export PATH=/usr/local/openresty/nginx/sbin:$PATH
$ source /etc/profile
```

至此结束 配置完成,启动nginx
```sh
cd /usr/local/openresty/nginx/sbin

 
#> 1、启动命令
 ./nginx

#> 2、关闭命令

 ./nginx -s stop

#> 3、重新加载命令
./nginx -s reload
```
<a data-fancybox title="启动nginx" href="./image/nginx02.jpg">![启动nginx](./image/nginx02.jpg)</a>

这个脚本可以复用,下次直接赋予执行文件配置 环境即可  