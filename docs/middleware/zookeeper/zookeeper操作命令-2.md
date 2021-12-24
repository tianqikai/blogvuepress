# 3. ZK客户端操作命令

<a data-fancybox title="客户端命令行操作" href="./image/zookeeper10.jpg">![客户端命令行操作](./image/zookeeper10.jpg)</a>

## 3.1 连接客户端

```vb
sh /usr/local/zk-cluster/zk-1/bin/zkCli.sh -server 127.0.0.1:2181
```

## 3.2 显示所有操作命令--help

```vb
[zk: 127.0.0.1:2181(CONNECTED) 0] help
ZooKeeper -server host:port cmd args
	stat path [watch]
	set path data [version]
	ls path [watch]
	delquota [-n|-b] path
	ls2 path [watch]
	setAcl path acl
	setquota -n|-b val path
	history 
	redo cmdno
	printwatches on|off
	delete path [version]
	sync path
	listquota path
	rmr path
	get path [watch]
	create [-s] [-e] path data acl
	addauth scheme auth
	quit 
	getAcl path
	close 
	connect host:port
```
## 3.3 创建zookeeper 节点命令

```sh
 create [ ‐s] [ ‐e] [ ‐c] [ ‐t ttl] path [data] [acl]
 #中括号为可选项， 没有则默认创建持久化节点
```
------------------

:::tip 参数说明
1. -s: 顺序节点
2. -e: 临时节点
3. -c: 容器节点
4. -t:  可以给节点添加过期时间， 默认禁用， 需要通过系统参数启用
```
（-Dzookeeper.extendedTypesEnabled =true,  znode.container.checkIntervalMs : (Java system
property only) New in 3.5.1: The time interval in milliseconds for each check of candidate
container and ttl nodes. Default is "60000".)
```
:::

### 3.3.1 创建节点  --create /节点名

**没有加任何可选参数， 创建的就是持久化节点**

```vb
[zk: 127.0.0.1:2181(CONNECTED) 3] create /sanguo  "wuguo"
Created /sanguo
[zk: 127.0.0.1:2181(CONNECTED) 4] create /sanguo/shuguo  "诸葛亮"
Created /sanguo/shuguo

```

### 3.3.2 创建短暂节点

<font color='red'><strong>create 后跟一个 -e 创建临时节点 ， 临时节点不能创建子节点</strong></font> 

```vb
[zk: 127.0.0.1:2181(CONNECTED) 12] create -e /sanguo/wuguo "周瑜"
Created /sanguo/wuguo
```

1. 在当前客户端是能查看到的

```vb
[zk: 127.0.0.1:2181(CONNECTED) 13] get /sanguo/wuguo
周瑜
```

2. 退出当前客户端然后再重启客户端

```vb
quit
sh /usr/local/zk-cluster/zk-1/bin/zkCli.sh -server 127.0.0.1:2181
```

3. 再次查看根目录下短暂节点已经删除

```vb
[zk: 127.0.0.1:2181(CONNECTED) 0] get /sanguo/wuguo 
Node does not exist: /sanguo/wuguo
```

### 3.3.3 创建带序号的节点
#### 先创建一个普通的根节点/sanguo/weiguo
```vb
create /sanguo/weiguo "曹操"

```
#### 创建带序号的节点 -- create -s XXX "XXX"

```vb
[zk: 127.0.0.1:2181(CONNECTED) 2] create -s /sanguo/weiguo "许诸"
Created /sanguo/weiguo0000000004
[zk: 127.0.0.1:2181(CONNECTED) 3] create -s /sanguo/weiguo "许诸"
Created /sanguo/weiguo0000000005
[zk: 127.0.0.1:2181(CONNECTED) 4] create -s /sanguo/weiguo "许诸"
Created /sanguo/weiguo0000000006
```
如果原来没有序号节点，序号从0开始依次递增。如果原节点下已有2个节点，则再排序时从2开始，以此类推。


## 3.3.4 创建容器节点(移除了)
容器节点主要用来容纳字节点， 如果没有给其创建子节点， 容器节点表现和持久化节点一样， 如果给容器节点创建了子节点，后续又把子节点清空， 容器节点也会被zookeeper删除。

```sh
create ‐c /container
```

## 3.4 查看子节点

```bash
[zk: 127.0.0.1:2181(CONNECTED) 1] ls /
[zookeeper, tqk]
#查看当前节点详细数据
[zk: 127.0.0.1:2181(CONNECTED) 2] ls2 /
[zookeeper, tqk]
cZxid = 0x0
ctime = Thu Jan 01 08:00:00 CST 1970
mZxid = 0x0
mtime = Thu Jan 01 08:00:00 CST 1970
pZxid = 0x100000002
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 0
numChildren = 2
```
## 3.5 获得节点的值

```vb
[zk: 127.0.0.1:2181(CONNECTED) 10] get /sanguo/shuguo
诸葛亮
cZxid = 0x100000006
ctime = Sun May 16 19:43:01 CST 2021
mZxid = 0x100000006
mtime = Sun May 16 19:43:01 CST 2021
pZxid = 0x100000006
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 9
numChildren = 0
```

## 3.6 修改节点数据值
**set -s XXX "XXX"**
```vb
set /sanguo/weiguo0000000005  "司马懿"
```

## 3.7 事件监听机制

###  3.7.1 节点的监听

```sh
# 3.5.x版本
get ‐w /path #注册监听的同时获取数据 
stat ‐w /path #对节点进行监听，且获取元数据信息

# 3.6.x版本 
get /path watch  #注册监听的同时获取数据 
stat /path watch  # 对节点进行监听，且获取元数据信息
```

<font color='red'><strong> 针对节点的监听：  一定事件触发， 对应的注册立刻被移除， 所以事件监听是一次性的</strong></font> 

1. 在[127.0.0.1:2182]主机上注册监听/tqk/tqk节点数据变化

```vb
[zk: 127.0.0.1:2182(CONNECTED) 10] get /tqk/tqk watch
tianqikai
cZxid = 0x100000045
ctime = Wed Dec 15 16:53:02 CST 2021
mZxid = 0x100000045
mtime = Wed Dec 15 16:53:02 CST 2021
pZxid = 0x100000045
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 9
numChildren = 0
```

2. 在[127.0.0.1:2183]主机上修改/tqk/tqk节点的数据

```vb
[zk: 127.0.0.1:2183(CONNECTED) 9] get /tqk/tqk watch 
tianqikai
cZxid = 0x100000045
ctime = Wed Dec 15 16:53:02 CST 2021
mZxid = 0x100000045
mtime = Wed Dec 15 16:53:02 CST 2021
pZxid = 0x100000045
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 9
numChildren = 0
[zk: 127.0.0.1:2183(CONNECTED) 10] set /tqk/tqk tqk

WATCHER::

WatchedEvent state:SyncConnected type:NodeDataChanged path:/tqk/tqk
cZxid = 0x100000045
ctime = Wed Dec 15 16:53:02 CST 2021
mZxid = 0x100000046
mtime = Wed Dec 15 16:53:58 CST 2021
pZxid = 0x100000045
cversion = 0
dataVersion = 1
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 3
numChildren = 0

```

3. 观察[127.0.0.1:2182]主机收到数据变化的监听
```vb
[zk: 127.0.0.1:2182(CONNECTED) 10] get /tqk/tqk watch
tianqikai
cZxid = 0x100000045
ctime = Wed Dec 15 16:53:02 CST 2021
mZxid = 0x100000045
mtime = Wed Dec 15 16:53:02 CST 2021
pZxid = 0x100000045
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 9
numChildren = 0
[zk: 127.0.0.1:2182(CONNECTED) 11] 
WATCHER::

WatchedEvent state:SyncConnected type:NodeDataChanged path:/tqk/tqk

```

###  3.7.2 路径监听

**针对递归子目录的监听**
1. 在hadoop104主机上注册监听/sanguo节点的子节点变化
```vb
    ls /sanguo watch
```
2. 在hadoop103主机/sanguo节点上创建子节点
```vb
[zk: 127.0.0.1:2182(CONNECTED) 1] create -s /sanguo/wuguo "孙权"
Created /sanguo/wuguo0000000007
```
3. 观察hadoop104主机收到子节点变化的监听
```vb
WATCHER::

WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/sanguo
[zk: 127.0.0.1:2181(CONNECTED) 17] get /sanguo/wuguo0000000007
孙权
```
## 3.8 删除节点

```vb
delete /sanguo/weiguo
```
### 递归删除节点

```vb
 rmr /sanguo/shuguo
```

## 3.9 查看节点状态
```vb
[zk: 127.0.0.1:2181(CONNECTED) 22] stat /sanguo       
cZxid = 0x100000005
ctime = Sun May 16 19:42:35 CST 2021
mZxid = 0x100000005
mtime = Sun May 16 19:42:35 CST 2021
pZxid = 0x100000017
cversion = 12
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 5
numChildren = 4

```

:::tip Stat参数
1. cZxid：  创建znode的事务ID（Zxid的值）
2. mZxid：  最后修改znode的事务ID。
3. pZxid：  最后添加或删除子节点的事务ID（子节点列表发生变化才会发生改变
4. ctime：  znode创建时间。
5. mtime：  znode最近修改时间。
6. dataVersion：  znode的当前数据版本。
7. cversion：  znode的子节点结果集版本（一个节点的子节点增加、  删除都会影响这个版本
8. aclVersion：  表示对此znode的acl版本。
9. ephemeralOwner：  znode是临时znode时， 表示znode所有者的 session ID。   如果znode不是临时znode， 则该字段设置为零。
10. dataLength：  znode数据字段的长度
:::