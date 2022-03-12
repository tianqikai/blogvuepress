# 1. Docker安装Elasticsearch、Kibana

## 1.1 下载镜像文件

```sh
# 存储和检索数据
docker pull elasticsearch:7.4.2

# 可视化检索数据
docker pull kibana:7.4.22. 

```

## 1.2 配置挂载数据文件夹

```sh
# 创建配置文件目录
mkdir -p /mydata/elasticsearch/config

# 创建数据目录
mkdir -p /mydata/elasticsearch/data

# 将/mydata/elasticsearch/文件夹中文件都可读可写
chmod -R 777 /mydata/elasticsearch/

# 配置任意机器可以访问 elasticsearch
echo "http.host: 0.0.0.0" >/mydata/elasticsearch/config/elasticsearch.yml
```

## 1.3. 启动Elasticsearch

命令后面的 \是换行符，注意前面有空格

```sh
docker run --name elasticsearch -p 9200:9200 -p 9300:9300 \
-e  "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
-v /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \
-v  /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-d elasticsearch:7.4.2
```

 `-p 9200:9200 -p 9300:9300`：向外暴露两个端口，9200用于HTTP REST API请求，9300 ES 在分布式集群状态下 ES 之间的通信端口；
 
 -e  "discovery.type=single-node"：es 以单节点运行
 
 -e ES_JAVA_OPTS="-Xms64m -Xmx512m"：设置启动占用内存，不设置可能会占用当前系统所有内存
 
 -v：挂载容器中的配置文件、数据文件、插件数据到本机的文件夹；
 
 -d elasticsearch:7.6.2：指定要启动的镜像访问 IP:9200 看到返回的 json 数据说明启动成功。
 
 ## 1.4. 设置 Elasticsearch 随Docker启动
```sh
    # 当前 Docker 开机自启，所以 ES 现在也是开机自启
    docker update elasticsearch --restart=always
```
## 1.5. 启动可视化Kibana

```sh
docker run --name kibana \
-e ELASTICSEARCH_HOSTS=http://49.233.34.168:9200 \
-p 5601:5601 \
-d kibana:7.4.2
```
`-e ELASTICSEARCH_HOSTS=http://49.233.34.168:9200`: 这里要设置成自己的虚拟机IP地址浏览器输入`49.233.34.168:5601` 测试：


## 1.6. 设置 Kibana 随Docker启动

```sh
# 当前 Docker 开机自启，所以 kibana 现在也是开机自启
docker update kibana --restart=always​
```