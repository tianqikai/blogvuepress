(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1073:function(e,o,t){"use strict";t.r(o);var r=t(26),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"一、zookeeper简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、zookeeper简介"}},[e._v("#")]),e._v(" 一、Zookeeper简介")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-1-zookeeper概述"}},[e._v("1.1 Zookeeper概述")])]),r("li",[r("a",{attrs:{href:"#_1-2-zookeeper工作机制"}},[e._v("1.2 Zookeeper工作机制")])]),r("li",[r("a",{attrs:{href:"#_1-3-zookeeper特点"}},[e._v("1.3 Zookeeper特点")])]),r("li",[r("a",{attrs:{href:"#_1-4-zookeeper应用场景"}},[e._v("1.4 Zookeeper应用场景")])]),r("li",[r("a",{attrs:{href:"#_1-5-zookeeper下载地址"}},[e._v("1.5 Zookeeper下载地址")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"_1-1-zookeeper概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-zookeeper概述"}},[e._v("#")]),e._v(" 1.1 Zookeeper概述")]),e._v(" "),r("p",[e._v("Zookeeper是源代码开放的分布式协调服务，是一个高性能的分布式数据一致性的解决方案，它将那些复杂的，容易出错的分布式一致性服务封装起来。用户可以通过调用Zookeeper提供的接口来解决一些分布式应用中的实际问题.")]),e._v(" "),r("h2",{attrs:{id:"_1-2-zookeeper工作机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-zookeeper工作机制"}},[e._v("#")]),e._v(" 1.2 Zookeeper工作机制")]),e._v(" "),r("p",[e._v("Zookeeper从设计模式的角度上来理解：属于观察者模型的一种分布式服务管理框架；它"),r("font",{attrs:{color:"red"}},[e._v("负责管理大家关心的数据和存储，然后接受观察者的注册")]),e._v(";一旦这些数据的状态发生变化，zookeeper就会负责通知已经在zookeeper上注册的这些观察者做出相关的相应；")],1),e._v(" "),r("hr"),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"zookeeperg工作机制",href:"../image/zookeeper1.jpg"}},[r("img",{attrs:{src:t(882),alt:"zookeeperg工作机制"}})])]),e._v(" "),r("h2",{attrs:{id:"_1-3-zookeeper特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-zookeeper特点"}},[e._v("#")]),e._v(" 1.3 Zookeeper特点")]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper特点",href:"../image/zookeeper2.jpg"}},[r("img",{attrs:{src:t(883),alt:"Zookeeper特点"}})])]),e._v(" "),r("ol",[r("li",[e._v("Zookeeper：一个领导者（Leader），多个跟随者（Follower）组成的集群。")]),e._v(" "),r("li",[e._v("集群中只要有半数以上节点存活，Zookeeper集群就能正常服务。")]),e._v(" "),r("li",[e._v("全局数据一致：每个Server保存一份相同的数据副本，Client无论连接到哪个Server，数据都是一致的。")]),e._v(" "),r("li",[e._v("更新请求顺序进行，来自同一个Client的更新请求按其发送顺序依次执行。")]),e._v(" "),r("li",[e._v("数据更新原子性，一次数据更新要么成功，要么失败。")]),e._v(" "),r("li",[e._v("实时性，在一定时间范围内，Client能读到最新数据。")])]),e._v(" "),r("p",[r("strong",[e._v("zookeeper数据结构")]),r("br"),e._v("\nZooKeeper数据模型的结构与Unix文件系统很类似，整体上可以看作是一棵树，每个节点称做一个ZNode。每一个ZNode默认能够存储1M B的数据，每个ZNode都可以通过其路径唯一标识。")]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper数据结构",href:"../image/zookeeper3.jpg"}})]),e._v(" "),r("h2",{attrs:{id:"_1-4-zookeeper应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-zookeeper应用场景"}},[e._v("#")]),e._v(" 1.4 Zookeeper应用场景")]),e._v(" "),r("p",[r("strong",[e._v("提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等。")])]),e._v(" "),r("ol",[r("li",[r("font",{attrs:{color:"red",size:"4"}},[r("strong",[e._v("统一命名服务")])]),r("br"),e._v("\n在分布式环境下，经常需要对应用/服务进行统一命名，便于识别。例如：IP不容易记住，而域名容易记住。")],1)]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper统一命名服务",href:"../image/zookeeper4.jpg"}},[r("img",{attrs:{src:t(884),alt:"Zookeeper统一命名服务"}})])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("font",{attrs:{color:"red",size:"4"}},[r("strong",[e._v("统一配置管理")])])],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("分布式环境下，配置文件同步非常常见："),r("br"),e._v("\n（1）一般要求一个集群中，所有节点的配置信息是一致的，比如 Kafka 集群。"),r("br"),e._v("\n（2）对配置文件修改后，希望能够快速同步到各个节点上。"),r("br"),e._v("\n配置管理可交由ZooKeeper实现："),r("br"),e._v("\n（1）可将配置信息写入ZooKeeper上的一个Znode。"),r("br"),e._v("\n（2）各个客户端服务器监听这个Znode。"),r("br"),e._v("\n（3）一 旦Znode中的数据被修改，ZooKeeper将通知各个客户端服务器。")])]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper统一配置管理",href:"../image/zookeeper5.jpg"}},[r("img",{attrs:{src:t(885),alt:"Zookeeper统一配置管理"}})])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("font",{attrs:{color:"red",size:"4"}},[r("strong",[e._v("统一集群管理")])])],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("ol",[r("li",[e._v("分布式环境中，实时掌握每个节点的状态是必要的; 可根据节点实时状态做出一些调整。")]),e._v(" "),r("li",[e._v("ZooKeeper可以实现实时监控节点状态变化; 可将节点信息写入ZooKeeper上的一个ZNode。监听这个ZNode可获取它的实时状态变化。")])])]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper统一集群管理",href:"../image/zookeeper6.jpg"}},[r("img",{attrs:{src:t(886),alt:"Zookeeper统一集群管理"}})])]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("font",{attrs:{color:"red",size:"4"}},[r("strong",[e._v("服务器节点动态上下线")])])],1)]),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper服务器节点动态上下线",href:"../image/zookeeper7.jpg"}},[r("img",{attrs:{src:t(887),alt:"Zookeeper服务器节点动态上下线"}})])]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[r("font",{attrs:{color:"red",size:"4"}},[r("strong",[e._v("软负载均衡")])])],1)]),e._v(" "),r("p",[r("font",{attrs:{color:"red"}},[r("strong",[e._v("在Zookeeper中记录每台服务器的访问数，让访问数最少的服务器去处理最新的客户端请求")])])],1),e._v(" "),r("p",[r("a",{attrs:{"data-fancybox":"",title:"Zookeeper软负载均衡",href:"../image/zookeeper8.jpg"}},[r("img",{attrs:{src:t(888),alt:"Zookeeper软负载均衡"}})])]),e._v(" "),r("h2",{attrs:{id:"_1-5-zookeeper下载地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-zookeeper下载地址"}},[e._v("#")]),e._v(" 1.5 Zookeeper下载地址")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网首页"),r("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=a.exports},882:function(e,o,t){e.exports=t.p+"assets/img/zookeeper1.295ebb7b.jpg"},883:function(e,o,t){e.exports=t.p+"assets/img/zookeeper2.24ad3996.jpg"},884:function(e,o,t){e.exports=t.p+"assets/img/zookeeper4.4b9cf0c0.jpg"},885:function(e,o,t){e.exports=t.p+"assets/img/zookeeper5.d221a0cc.jpg"},886:function(e,o,t){e.exports=t.p+"assets/img/zookeeper6.d70d630d.jpg"},887:function(e,o,t){e.exports=t.p+"assets/img/zookeeper7.3ae80a8f.jpg"},888:function(e,o,t){e.exports=t.p+"assets/img/zookeeper8.fbcb1f90.jpg"}}]);