# 2.ES集群安装

##  解压软件
将下载的软件解压缩
### 解压缩
tar -zxvf elasticsearch-7.8.0-linux-x86_64.tar.gz -C /opt
###  改名
mv elasticsearch-7.8.0 es-cluster
将软件分发到其他节点：linux2, linux3
## 创建用户
因为安全问题，Elasticsearch 不允许 root 用户直接运行，所以要在每个节点中创建新用户，在 root 用户中创建新用户

```sh
useradd es #新增 es 用户
passwd es #为 es 用户设置密码
userdel -r es #如果错了，可以删除再加
chown -R es:es /opt/es-cluster #文件夹所有者
```

## 修改配置文件

**vi /opt/es-cluster/config/elasticsearch.yml 修改完后，分发文件**

```yml
# 加入如下配置
#集群名称
cluster.name: cluster-es
#节点名称，每个节点的名称不能重复
node.name: node-1
#ip 地址，每个节点的地址不能重复
network.host: TXYUN-NO1
#是不是有资格主节点
node.master: true
node.data: true
http.port: 9200
# head 插件需要这打开这两个配置
http.cors.allow-origin: "*"
http.cors.enabled: true
http.max_content_length: 200mb
#es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举 master
cluster.initial_master_nodes: ["node-1"]
#es7.x 之后新增的配置，节点发现
discovery.seed_hosts: ["TXYUN-NO1:9300","TXYUN-NO2:9300","TXYUN-NO3:9300"]
gateway.recover_after_nodes: 2
network.tcp.keep_alive: true
network.tcp.no_delay: true
transport.tcp.compress: true
#集群内同时启动的数据任务个数，默认是 2 个
cluster.routing.allocation.cluster_concurrent_rebalance: 16
#添加或删除节点及负载均衡时并发恢复的线程个数，默认 4 个
cluster.routing.allocation.node_concurrent_recoveries: 16
#初始化数据恢复时，并发恢复线程的个数，默认 4 个
cluster.routing.allocation.node_initial_primaries_recoveries: 16
```
```sh 
xsync elasticsearch.yml  TXYUN-NO 2 3
```

**修改/etc/security/limits.conf ，分发文件**

```conf
# 在文件末尾中增加下面内容
es soft nofile 65536
es hard nofile 65536


# ---------------------------------------------
#分发文件命令
xsync /etc/security/limits.conf  TXYUN-NO 2 3
```
**修改/etc/security/limits.d/20-nproc.conf，分发文件**
```conf
# 在文件末尾中增加下面内容
es soft nofile 65536
es hard nofile 65536
* hard nproc 4096
# 注：* 带表 Linux 所有用户名称


# -------------------------------------------------
#分发文件命令
 xsync /etc/security/limits.d/20-nproc.conf  TXYUN-NO 2 3
```

**修改/etc/sysctl.conf**
```conf
# 在文件中增加下面内容
vm.max_map_count=655360

# -------------------------------------------------
#分发文件命令
 xsync /etc/sysctl.conf  TXYUN-NO 2 3
```

**重新加载**
```sh
sysctl -p
```

```log
[root@TXYUN-NO1 es-cluster]# bin/elasticsearch -d
[root@TXYUN-NO1 es-cluster]# uncaught exception in thread [main]
java.lang.RuntimeException: can not run elasticsearch as root
	at org.elasticsearch.bootstrap.Bootstrap.initializeNatives(Bootstrap.java:111)
	at org.elasticsearch.bootstrap.Bootstrap.setup(Bootstrap.java:178)
	at org.elasticsearch.bootstrap.Bootstrap.init(Bootstrap.java:393)
	at org.elasticsearch.bootstrap.Elasticsearch.init(Elasticsearch.java:170)
	at org.elasticsearch.bootstrap.Elasticsearch.execute(Elasticsearch.java:161)
	at org.elasticsearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:86)
	at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:127)
	at org.elasticsearch.cli.Command.main(Command.java:90)
	at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:126)
	at org.elasticsearch.bootstrap.Elasticsearch.main(Elasticsearch.java:92)
For complete error details, refer to the log at /opt/es-cluster/logs/cluster-es.log
2021-06-29 15:15:12,268961 UTC [15035] ERROR CNamedPipeFactory.cc@226 Unable to open named pipe /tmp/elasticsearch-16425591197096334342/controller_log_15011 for writing: Interrupted system call
2021-06-29 15:15:12,269106 UTC [15035] ERROR CLogger.cc@298 Cannot log to named pipe /tmp/elasticsearch-16425591197096334342/controller_log_15011 as it could not be opened for writing
2021-06-29 15:15:12,269127 UTC [15035] FATAL Main.cc@102 Could not reconfigure logging
```

## 启动软件

分别在不同节点上启动 ES 软件

```sh
cd /opt/es-cluster
#启动
bin/elasticsearch
#后台启动
bin/elasticsearch -d 3.4.4 测试集群
```

- http://49.232.21.151:9200/_cat/nodes  
- http://1.117.13.88:9200/_cat/nodes  
- http://122.51.156.245:9200/_cat/nodes  