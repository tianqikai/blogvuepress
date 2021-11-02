# 8. DockerMaven插件
[[toc]]
## 8.1 微服务部署有两种方法
### 8.1.1 手动部署

首先基于源码打包生成jar包（或war包）,将jar包（或war包）上传至虚拟机并拷贝至JDK容器。

### 8.1.2 通过Maven插件自动部署
对于数量众多的微服务，手动部署无疑是非常麻烦的做法，并且容易出错。所以我们这里学习如何自动部署，这也是
企业实际开发中经常使用的方法。

## 8.2 Maven插件自动部署步骤

1. 修改宿主机的docker配置，让其可以远程访问

```sh
vim /lib/systemd/system/docker.service

#修改以 ExecStart 开头的行
ExecStart= 
ExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375
```

2. 刷新配置，重启服务

```sh
systemctl daemon-reload 
systemctl restart docker 
docker start registry
```
3. 在工程pom.xml 增加配置

```xml
<?xml version="1.0" encoding="utf-8"?>

<!--docker的maven插件，官网：https://github.com/spotify/docker-maven-plugin-->
<plugin> 
  <groupId>com.spotify</groupId>  
  <artifactId>docker-maven-plugin</artifactId>  
  <version>1.1.0</version>  
  <executions> 
    <execution> 
      <id>build-image</id>  
      <phase>package</phase>  
      <goals> 
        <goal>build</goal> 
      </goals> 
    </execution> 
  </executions>  
  <configuration> 
    <imageName>ego/${project.artifactId}:${project.version}</imageName>  
    <dockerHost>http://192.168.10.101:2375</dockerHost>  
    <baseImage>java:8</baseImage>  
    <entryPoint>["java", "-jar", "- Dspring.profiles.active=dev","/${project.build.finalName}.jar"]</entryPoint>  
    <resources> 
      <resource> 
        <targetPath>/</targetPath>  
        <directory>${project.build.directory}</directory>  
        <include>${project.build.finalName}.jar</include> 
      </resource> 
    </resources> 
  </configuration> 
</plugin>
```