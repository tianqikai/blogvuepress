(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1006:function(s,a,n){s.exports=n.p+"assets/img/zhucongfuzhi.ecdb6cef.jpg"},1007:function(s,a,n){s.exports=n.p+"assets/img/duxiefenli.03783188.jpg"},1008:function(s,a,n){s.exports=n.p+"assets/img/jiqun2.9a762149.jpg"},1547:function(s,a,n){"use strict";n.r(a);var e=n(26),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_5-rocketmq主从架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-rocketmq主从架构"}},[s._v("#")]),s._v(" 5. RocketMQ主从架构")]),s._v(" "),e("h2",{attrs:{id:"_5-1-rocketmq集群部署模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-rocketmq集群部署模式"}},[s._v("#")]),s._v(" 5.1 RocketMQ集群部署模式")]),s._v(" "),e("h3",{attrs:{id:"_5-1-1-单-master-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-单-master-模式"}},[s._v("#")]),s._v(" 5.1.1 单 master 模式")]),s._v(" "),e("p",[s._v("也就是只有一个 master 节点，称不上是集群，一旦这个 master 节点宕机，那么整个服务就不可用。")]),s._v(" "),e("h3",{attrs:{id:"_5-1-2-多-master-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-多-master-模式"}},[s._v("#")]),s._v(" 5.1.2 多 master 模式")]),s._v(" "),e("p",[s._v("多个 master 节点组成集群，单个 master 节点宕机或者重启对应用没有影响。")]),s._v(" "),e("p",[e("strong",[s._v("优点")]),s._v("：所有模式中性能最高")]),s._v(" "),e("p",[e("strong",[s._v("缺点")]),s._v("：单个 master 节点宕机期间，未被消费的消息在节点恢复之前不可用，消息的实时性就受到影响。")]),s._v(" "),e("p",[s._v("注意："),e("strong",[s._v("使用同步刷盘可以保证消息不丢失")]),s._v("，同时 Topic 相对应的 queue 应该分布在集群中各个节点，而不是只在某各节点上，否则，该节点宕机会对订阅该 topic 的应用造成影响。")]),s._v(" "),e("h3",{attrs:{id:"_5-1-3-多-master-多-slave-异步复制模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-多-master-多-slave-异步复制模式"}},[s._v("#")]),s._v(" 5.1.3 多 master 多 slave 异步复制模式")]),s._v(" "),e("p",[s._v("在多 master 模式的基础上，每个 master 节点都有至少一个对应的 slave。master 节点可读可写，但是 slave 只能读不能写，类似于 mysql 的主备 模式。")]),s._v(" "),e("p",[e("strong",[s._v("优点")]),s._v("： 一般情况下都是 master 消费，在 master 宕机或超过负载时，消费者可以从 slave 读取消息，消息的实时性不会受影响，性能几乎和多 master 一样。")]),s._v(" "),e("p",[e("strong",[s._v("缺点")]),s._v("：使用异步复制的同步方式有可能会有消息丢失的问题。")]),s._v(" "),e("h3",{attrs:{id:"_5-1-4-多-master-多-slave-同步双写模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-4-多-master-多-slave-同步双写模式"}},[s._v("#")]),s._v(" 5.1.4 多 master 多 slave 同步双写模式")]),s._v(" "),e("p",[s._v("同多 master 多 slave 异步复制模式类似，区别在于 master 和 slave 之间的数据同步方式。")]),s._v(" "),e("p",[e("strong",[s._v("优点")]),s._v("：同步双写的同步模式能保证数据不丢失。")]),s._v(" "),e("p",[e("strong",[s._v("缺点")]),s._v("：发送单个消息响应时间会略长，性能相比异步复制低 10%左右。")]),s._v(" "),e("p",[e("strong",[s._v("同步方式")]),s._v("：同步双写和异步复制（指的一组 master 和 slave 之间数据的同步）\n"),e("strong",[s._v("刷盘策略")]),s._v("：同步刷盘和异步刷盘（指的是节点自身数据是同步还是异步存储进入磁盘）")]),s._v(" "),e("p",[e("strong",[s._v("注意")]),s._v("：对数据要求较高的场景，建议的持久化策略是"),e("strong",[s._v("主 broker 和从 broker 采用同步复制方式，主从 broker 都采用异步刷盘方式")]),s._v("。")]),s._v(" "),e("p",[s._v("通过同步复制方式， 保存数据热备份，通过异步刷盘方式，保证 rocketMQ 高吞吐量。")]),s._v(" "),e("h2",{attrs:{id:"_5-2-主从复制原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-主从复制原理"}},[s._v("#")]),s._v(" 5.2 主从复制原理")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("RocketMQ 主从同步（HA）实现过程如下：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("主服务器启动，并在特定端口上监听从服务器的连接。")])]),s._v(" "),e("li",[e("p",[s._v("从服务器主动连接主服务器，主服务器接受客户端的连接，并建立相关 TCP 连接。")])]),s._v(" "),e("li",[e("p",[s._v("从服务器主动向服务器发送待拉取消息偏移 ，主服务器解析请求并返回消息给从服务器。")])]),s._v(" "),e("li",[e("p",[s._v("从服务器保存消息并继续发送新的消息同步请求。")])])])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"RocketMQ",href:"./image/zhucongfuzhi.jpg"}},[e("img",{attrs:{src:n(1006),alt:"RocketMQ"}})])]),s._v(" "),e("p",[e("em",[e("strong",[s._v("核心实现")])])]),s._v(" "),e("p",[e("strong",[s._v("从服务器")]),s._v("在启动的时候"),e("strong",[s._v("主动向主服务器建立 TCP 长连接")]),s._v("，然后获取服务器的 commitlog 最大偏移，以此偏移向主服务器主动拉取消息，主服务器根据偏移量，与自身 commitlog 文件的最大偏移进行比较，如果大于从服务器 commitlog 偏移 ，主服务器将向从服务器返回一定数量的消息， 该过程循环进行 ，达到主从服务器数据同步。")]),s._v(" "),e("h2",{attrs:{id:"_5-3-读写分离机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-读写分离机制"}},[s._v("#")]),s._v(" 5.3 读写分离机制")]),s._v(" "),e("p",[s._v("RocketMQ 读写分离与他中间件的实现方式完全不同， RocketMQ 是消费者首先服务器发起拉取消息请求，然后主服务器返回一批消息，然后会"),e("font",{attrs:{color:"#f15a22"}},[s._v("根据主服务器负载压力与主从同步情况")]),s._v("，向从服务器建议下次消息拉取是从主服务器还是从从服务器拉取。")],1),s._v(" "),e("p",[s._v("那消息服务端是根据何种规则来建议哪个消息消费队列该从哪台 Broker 服务器上拉取消息呢？")]),s._v(" "),e("p",[s._v("一般都是"),e("font",{attrs:{color:"#f15a22"}},[s._v("从主服务器拉取")]),s._v("，如果主阶段拉取的消息已经超出了常驻内存的大小，表示主服务器繁忙，此时从从服务器拉取。")],1),s._v(" "),e("p",[s._v("如果主服务器繁忙则建议下次从从服务器拉取消息，设置 suggestWhichBrokerld 配置文件中 whichBrokerWhenConsumeSlowly 属性，默认为 1。如果一个 Master 拥有多台 Slave 服务器，参与消息拉取负载的从服务器只会是其中一个。")]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"RocketMQ",href:"./image/duxiefenli.jpg"}},[e("img",{attrs:{src:n(1007),alt:"RocketMQ"}})])]),s._v(" "),e("h2",{attrs:{id:"_5-4-双主模式搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-双主模式搭建"}},[s._v("#")]),s._v(" 5.4 双主模式搭建")]),s._v(" "),e("h3",{attrs:{id:"_5-4-1-下载解压安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1-下载解压安装包"}},[s._v("#")]),s._v(" 5.4.1 下载解压安装包")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("  rocketmq-all-4.8.0-bin-release.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_5-4-2-修改配置文件以及脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-修改配置文件以及脚本"}},[s._v("#")]),s._v(" 5.4.2 修改配置文件以及脚本")]),s._v(" "),e("h4",{attrs:{id:"配置文件修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件修改"}},[s._v("#")]),s._v(" 配置文件修改")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 服务器-A：49.232.21.151")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/MQ/rocketmq-all-4.8.0-bin-release/conf/2m-noslave\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" broker-a.properties\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所属集群名字")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerClusterName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mybrokerCluster\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker名字")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-a\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0 表示 Master，>0 表示 Slave")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deleteWhen")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("04\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fileReservedTime")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker角色  ASYNC_MASTER 异步复制Master  ASYNC_MASTER 异步复制Master")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerRole")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASYNC_MASTER\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷盘方式 ASYNC_FLUSH --异步刷盘； SYNC_FLUSH --同步刷盘")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flushDiskType")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASYNC_FLUSH\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nameServer地址，分号分割")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("namesrvAddr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.232")]),s._v(".21.151:9876"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.2:9876\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当前broker监听的IP--外网访问使用")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## brokerIP1 当前broker监听的IP brokerIP2 存在broker主从时，在broker主节点上配置了brokerIP2的话,broker从节点会连接主节点配置的brokerIP2来同步")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerIP1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.232")]),s._v(".21.151\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Broker 对外服务的监听端口")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#listenPort=10911")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 服务器-B：1.117.13.88")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/MQ/rocketmq-all-4.8.0-bin-release/conf/2m-noslave\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" broker-b.properties\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所属集群名字")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerClusterName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mybrokerCluster\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker名字")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-b\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0 表示 Master，>0 表示 Slave")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deleteWhen")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("04\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fileReservedTime")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# broker角色  ASYNC_MASTER 异步复制Master  ASYNC_MASTER 异步复制Master")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerRole")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASYNC_MASTER\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷盘方式 ASYNC_FLUSH --异步刷盘； SYNC_FLUSH --同步刷盘")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flushDiskType")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASYNC_FLUSH\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nameServer地址，分号分割")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("namesrvAddr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("49.232")]),s._v(".21.151:9876"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.117")]),s._v(".13.88:9876\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当前broker监听的IP--外网访问使用")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## brokerIP1 当前broker监听的IP brokerIP2 存在broker主从时，在broker主节点上配置了brokerIP2的话,broker从节点会连接主节点配置的brokerIP2来同步")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerIP1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.117")]),s._v(".13.88\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br")])]),e("h4",{attrs:{id:"修改脚本参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改脚本参数"}},[s._v("#")]),s._v(" 修改脚本参数")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" runbroker.sh           --broker的配置\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server  -Xms128m -Xmx256m -Xmn256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" runserver.sh            --nameServer的配置\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server  -Xms128m -Xmx256m -Xmn256m"')]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_5-4-3-启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3-启动服务"}},[s._v("#")]),s._v(" 5.4.3 启动服务")]),s._v(" "),e("p",[e("strong",[s._v("启动步骤：(记得关闭防火墙或者要开通9876端口)")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/mq/rocketmq-all-4.8.0-bin-release/bin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.启动NameServer集群")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqnamesrv "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqnamesrv "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.启动双主集群，顺序是先启动主，然后启动从。")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动主A:  autoCreateTopicEnable=true 测试环境开启，生产环境建议关闭）：")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqbroker -c "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/2m-noslave/broker-a.properties  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autoCreateTopicEnable")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f ~/logs/rocketmqlogs/broker.log\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动主B:  ")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqbroker -c "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/2m-noslave/broker-b.properties  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autoCreateTopicEnable")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f ~/logs/rocketmqlogs/broker.log\n\t\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每台服务器查看日志：tail -f ~/logs/rocketmqlogs/broker.log")]),s._v("\n\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"_5-4-3-控制台打包启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3-控制台打包启动"}},[s._v("#")]),s._v(" 5.4.3 控制台打包启动")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("maven打包服务")]),s._v(" "),e("ol",[e("li",[s._v("F:\\安装包\\MQ\\ROCKET\\rocketmq-dashboard-master\\src\\main\\resources打开‘application.properties’进行配置。（多个NameServer使用;分隔）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rocketmq.config.namesrvAddr=49.232.21.151:9876;1.117.13.88:9876\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("在F:\\安装包\\MQ\\ROCKET\\rocketmq-dashboard-master目录， 执行‘")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvn clean package -Dmaven.test.skip=true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编译生成。")]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("在把编译后的jar包丢上服务器：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nohup java -jar rocketmq-dashboard-2.0.0.jar &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"RocketMQ",href:"./image/jiqun2.jpg"}},[e("img",{attrs:{src:n(1008),alt:"RocketMQ"}})])]),s._v(" "),e("h2",{attrs:{id:"_5-5-双主双从同步搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-双主双从同步搭建"}},[s._v("#")]),s._v(" 5.5 双主双从同步搭建")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('服务器相关配置信息：\n\n-----------------\t\n注意，默认RocketMQ会吃8G，所以需要修改默认加载内存设置。\n修改broker启动脚本runbroker.sh里面的jvm参数\nJAVA_OPT="${JAVA_OPT} -server -Xms8g -Xmx8g -Xmn4g"改为\nJAVA_OPT="${JAVA_OPT} -server -Xms128m -Xmx256m -Xmn256m"\n\nNameServer集群\n192.168.56.102        \n192.168.56.103\n\nBroker服务器：\n192.168.56.102             ------主A\n192.168.56.103             ------主B\n192.168.56.104             ------从A\n192.168.56.105             ------从B\n\n注意，因为RocketMQ使用外网地址，所以配置文件(MQ文件夹/conf/2m-2s-sync/)需要修改(同时修改nameserver地址为集群地址)：\n192.168.56.102             ------主A     \nbroker-a.properties      增加： brokerIP1=192.168.56.102\n\t\t               namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n192.168.56.103             ------主B\nbroker-b.properties      增加： brokerIP1=192.168.56.103\n\t\t\tnamesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\t\t\t\t\t\t\t\t\n192.168.56.104             ------从A\nbroker-a-s.properties      增加：brokerIP1=192.168.56.104\n\t\t\tnamesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\t\t\t\t\t\t\t\t\n192.168.56.105             ------从B\nbroker-b-s.properties      增加：brokerIP1=192.168.56.105\n\t\t\t namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n\n\n\n启动步骤：(记得关闭防火墙或者要开通9876端口)\n1.启动NameServer集群，这里使用102和103两台作为集群即可。\n    1） 在机器A，启动第1台NameServer:  102服务器进入至‘MQ文件夹/bin’下：然后执行‘nohup sh mqnamesrv &’ \n    2） 在机器B，启动第2台NameServer:  103服务器进入至‘MQ文件夹/bin’下：然后执行‘nohup sh mqnamesrv &’   \n\n2.启动双主双从同步集群，顺序是先启动主，然后启动从。\n    3）启动主A:     102服务器进入至‘MQ文件夹/bin’下：执行以下命令（autoCreateTopicEnable=true 测试环境开启，生产环境建议关闭）：\n\t\n\tnohup sh mqbroker -c ../conf/2m-2s-sync/broker-a.properties  autoCreateTopicEnable=true &\n\t\n\t4）启动主B:     103服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-sync/broker-b.properties  autoCreateTopicEnable=true &\n\t\n\t5）启动从A:     104服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-sync/broker-a-s.properties  autoCreateTopicEnable=true &\n\t\n\t6）启动从B:     105服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-sync/broker-b-s.properties  autoCreateTopicEnable=true &\n\t\n\t每台服务器查看日志：tail -f ~/logs/rocketmqlogs/broker.log\n\t\n\n\n如果是要启动控制台，则需要重新打包：\n\n进入‘\\rocketmq-console\\src\\main\\resources’文件夹，打开‘application.properties’进行配置。（多个NameServer使用;分隔）\nrocketmq.config.namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n进入‘\\rocketmq-externals\\rocketmq-console’文件夹，执行‘mvn clean package -Dmaven.test.skip=true’，编译生成。\n\n在把编译后的jar包丢上服务器：\nnohup java -jar rocketmq-console-ng-1.0.1.jar &\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br")])]),e("h2",{attrs:{id:"_5-6-双主双从异步搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-双主双从异步搭建"}},[s._v("#")]),s._v(" 5.6 双主双从异步搭建")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('服务器相关配置信息：\n\n-----------------\t\n注意，默认RocketMQ会吃8G，所以需要修改默认加载内存设置。\n修改broker启动脚本runbroker.sh里面的jvm参数\nJAVA_OPT="${JAVA_OPT} -server -Xms8g -Xmx8g -Xmn4g"改为\nJAVA_OPT="${JAVA_OPT} -server -Xms128m -Xmx256m -Xmn256m"\n\nNameServer集群\n192.168.56.102        \n192.168.56.103\n\nBroker服务器：\n192.168.56.102             ------主A\n192.168.56.103             ------主B\n192.168.56.104             ------从A\n192.168.56.105             ------从B\n\n注意，因为RocketMQ使用外网地址，所以配置文件(MQ文件夹/conf/2m-2s-async/)需要修改(同时修改nameserver地址为集群地址)：\n192.168.56.102             ------主A     \nbroker-a.properties      增加： brokerIP1=192.168.56.102\n\t\t               namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n192.168.56.103             ------主B\nbroker-b.properties      增加： brokerIP1=192.168.56.103\n\t\t\tnamesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\t\t\t\t\t\t\t\t\n192.168.56.104             ------从A\nbroker-a-s.properties      增加：brokerIP1=192.168.56.104\n\t\t\tnamesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\t\t\t\t\t\t\t\t\n192.168.56.105             ------从B\nbroker-b-s.properties      增加：brokerIP1=192.168.56.105\n\t\t\t namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n\n\n\n启动步骤：(记得关闭防火墙或者要开通9876端口)\n1.启动NameServer集群，这里使用102和103两台作为集群即可。\n    1） 在机器A，启动第1台NameServer:  102服务器进入至‘MQ文件夹/bin’下：然后执行‘nohup sh mqnamesrv &’ \n    2） 在机器B，启动第2台NameServer:  103服务器进入至‘MQ文件夹/bin’下：然后执行‘nohup sh mqnamesrv &’   \n\n2.启动双主双从同步集群，顺序是先启动主，然后启动从。\n    3）启动主A:     102服务器进入至‘MQ文件夹/bin’下：执行以下命令（autoCreateTopicEnable=true 测试环境开启，生产环境建议关闭）：\n\t\n\tnohup sh mqbroker -c ../conf/2m-2s-async/broker-a.properties  autoCreateTopicEnable=true &\n\t\n\t4）启动主B:     103服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-async/broker-b.properties  autoCreateTopicEnable=true &\n\t\n\t5）启动从A:     104服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-async/broker-a-s.properties  autoCreateTopicEnable=true &\n\t\n\t6）启动从B:     105服务器进入至‘MQ文件夹\\bin’下：执行以下命令：\n\tnohup sh mqbroker -c ../conf/2m-2s-async/broker-b-s.properties  autoCreateTopicEnable=true &\n\t\n\t每台服务器查看日志：tail -f ~/logs/rocketmqlogs/broker.log\n\t\n\n\n如果是要启动控制台，则需要重新打包：\n\n进入‘\\rocketmq-console\\src\\main\\resources’文件夹，打开‘application.properties’进行配置。（多个NameServer使用;分隔）\nrocketmq.config.namesrvAddr=192.168.56.102:9876;192.168.56.103:9876\n\n进入‘\\rocketmq-externals\\rocketmq-console’文件夹，执行‘mvn clean package -Dmaven.test.skip=true’，编译生成。\n\n在把编译后的jar包丢上服务器：\nnohup java -jar rocketmq-console-ng-1.0.1.jar &\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);