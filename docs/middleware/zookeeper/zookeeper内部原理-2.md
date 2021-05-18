# 三、zookeeper内部原理
## 3.1 选举机制（面试重点）
1）半数机制：集群中<font color='red'>**半数以上机器存活**</font>，集群可用；所以Zookeeper适合安装<font color='red'>**奇数**</font>台服务器。  
2）Zookeeper虽然在配置文件中并没有指定Master和Slave。但是，Zookeeper工作时，是有一个节点为Leader，其他则为Follower，<font color='red'>**Leader是通过内部的选举机制临时产生的**</font>。  
3）以一个简单的例子来说明整个选举的过程。    
假设有五台服务器组成的Zookeeper集群，它们的id从1-5，同时它们都是最新启动的，也就是没有历史数据，在存放数据量这一点上，都是一样的。  
假设这些服务器依序启动，来看看会发生什么，如下图所示。 

<a data-fancybox title="Zookeeper选举机制" href="../image/zookeeper9.jpg">![Zookeeper选举机制](../image/zookeeper9.jpg)</a> 

:::tip <font color='red'>Zookeeper选举机制(五台为例)</font>
1. 服务器 1 启动，发起一次选举。服务器 1 投自己一票。此时服务器 1 票数一票，
不够半数以上（3 票），选举无法完成，服务器 1 状态保持为 LOOKING； 
2. 服务器 2 启动，再发起一次选举。服务器 1 和 2 分别投自己一票并交换选票信息：
此时服务器 1 发现服务器 2 的 ID 比自己目前投票推举的（服务器 1）大，更改选票为推举
服务器 2。此时服务器 1 票数 0 票，服务器 2 票数 2 票，没有半数以上结果，选举无法完成，
服务器 1，2 状态保持 LOOKING
3. 服务器 3 启动，发起一次选举。此时服务器 1 和 2 都会更改选票为服务器 3。此
次投票结果：服务器 1 为 0 票，服务器 2 为 0 票，服务器 3 为 3 票。此时服务器 3 的票数已
经超过半数，服务器 3 当选 Leader。服务器 1，2 更改状态为 FOLLOWING，服务器 3 更改
状态为 LEADING； 
4. 服务器 4 启动，发起一次选举。此时服务器 1，2，3 已经不是 LOOKING 状态，
不会更改选票信息。交换选票信息结果：服务器 3 为 3 票，服务器 4 为 1 票。此时服务器 4
服从多数，更改选票信息为服务器 3，并更改状态为 FOLLOWING； （5）服务器 5 启动，同 4 一样当小弟。
:::

## 3.2 Stat结构体

:::tip 四种类型的znode：
PERSISTENT-持久化目录节点      客户端与zookeeper断开连接后，该节点依旧存在  
PERSISTENT_SEQUENTIAL-持久化顺序编号目录节点   客户端与zookeeper断开连接后，该节点依旧存在，只是Zookeeper给该节点名称进行顺序编号  
EPHEMERAL-临时目录节点    客户端与zookeeper断开连接后，该节点被删除  
EPHEMERAL_SEQUENTIAL-临时顺序编号目录节点    客户端与zookeeper断开连接后，该节点被删除，只是Zookeeper给该节点名称进行顺序编号  
:::


:::danger
1. czxid-创建节点的事务zxid
每次修改ZooKeeper状态都会收到一个zxid形式的时间戳，也就是ZooKeeper事务ID。  
事务ID是ZooKeeper中所有修改总的次序。每个修改都有唯一的zxid，如果zxid1小于zxid2，那么zxid1在zxid2之前发生。  
2. ctime - znode被创建的毫秒数(从1970年开始)
3. mzxid - znode最后更新的事务zxid
4. mtime - znode最后修改的毫秒数(从1970年开始)
5. pZxid-znode最后更新的子节点zxid
6. cversion - znode子节点变化号，znode子节点修改次数
7. dataversion - znode数据变化号
8. aclVersion - znode访问控制列表的变化号
9. ephemeralOwner- 如果是临时节点，这个是znode拥有者的session id。如果不是临时节点则是0。
10. dataLength- znode的数据长度
11. numChildren - znode子节点数量
:::

## 3.5 监听器原理（面试重点）
 
<a data-fancybox title="监听器原理（面试重点）" href="../image/zookeeper12.jpg">![监听器原理（面试重点）](../image/zookeeper12.jpg)</a> 
## 3.4 写数据流程

<a data-fancybox title="写数据流程" href="../image/zookeeper11.jpg">![写数据流程](../image/zookeeper11.jpg)</a> 