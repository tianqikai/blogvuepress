(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1511:function(t,a,s){"use strict";s.r(a);var e=s(26),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2-seata简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-seata简介"}},[t._v("#")]),t._v(" 2. Seata简介")]),t._v(" "),e("h2",{attrs:{id:"_2-1-seata-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-seata-是什么"}},[t._v("#")]),t._v(" 2.1 Seata 是什么")]),t._v(" "),e("p",[t._v("Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 "),e("strong",[t._v("AT、TCC、SAGA 和 XA 事务模式")]),t._v("，为用户打造一站式的分布式解决方案。AT模式是阿里首推的模式,阿里云上有商用版本的GTS（Global Transaction Service 全局事务服务）")]),t._v(" "),e("p",[t._v("官网：https://seata.io/zh-cn/index.html")]),t._v(" "),e("p",[t._v("源码: https://github.com/seata/seata")]),t._v(" "),e("p",[t._v("官方Demo: https://github.com/seata/seata-sample")]),t._v(" "),e("h2",{attrs:{id:"_2-3-seata的三大角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-seata的三大角色"}},[t._v("#")]),t._v(" 2.3 Seata的三大角色")]),t._v(" "),e("p",[t._v("在 Seata 的架构中，一共有三个角色：")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Seata的三大角色")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("TC (Transaction Coordinator)")]),t._v(" - 事务协调者")])]),t._v(" "),e("p",[t._v("维护全局和分支事务的状态，驱动全局事务提交或回滚。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("TM (Transaction Manager)")]),t._v(" - 事务管理器")])]),t._v(" "),e("p",[t._v("定义全局事务的范围：开始全局事务、提交或回滚全局事务。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("RM (Resource Manager)")]),t._v(" - 资源管理器")])]),t._v(" "),e("p",[t._v("管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。")])]),t._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[t._v("其中 TC 为单独部署的 Server 服务端，TM 和 RM 为嵌入到应用中的 Client 客户端")])])],1),t._v(" "),e("p",[t._v("在 Seata 中，一个分布式事务的生命周期如下:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("TM 请求 TC 开启一个全局事务。TC 会生成一个 XID 作为该全局事务的编号。XID，会在微服务的调用链路中传播，保证将多个微服务 的子事务关联在一起。")])]),t._v(" "),e("li",[e("p",[t._v("RM 请求 TC 将本地事务注册为全局事务的分支事务，通过全局事务的 XID 进行关联。")])]),t._v(" "),e("li",[e("p",[t._v("TM 请求 TC 告诉 XID 对应的全局事务是进行提交还是回滚。")])]),t._v(" "),e("li",[e("p",[t._v("TC 驱动 RM 们将 XID 对应的自己的本地事务进行提交还是回滚。")])])]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:" 分布式事务",href:"./image/seata08.jpg"}},[e("img",{attrs:{src:s(902),alt:"分布式事务"}})])]),t._v(" "),e("h2",{attrs:{id:"_2-4-seata的at模式设计思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-seata的at模式设计思路"}},[t._v("#")]),t._v(" 2.4 Seata的AT模式设计思路")]),t._v(" "),e("p",[t._v("AT模式的核心是对业务无侵入，是一种改进后的两阶段提交，其设计思路如图")]),t._v(" "),e("h3",{attrs:{id:"_2-4-1-第一阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-第一阶段"}},[t._v("#")]),t._v(" 2.4.1 第一阶段")]),t._v(" "),e("p",[t._v("业务数据和回滚日志记录在同一个本地事务中提交，释放本地锁和连接资源。核心在于对业务sql进行解析，转换成undolog，并同时入库，这是怎么做的呢？")]),t._v(" "),e("p",[t._v("先抛出一个概念DataSourceProxy代理数据源，通过名字大家大概也能基本猜到是什么个操作，后面做具体分析")]),t._v(" "),e("p",[t._v("参考官方文档：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://seata.io/zh-cn/docs/dev/mode/at-mode.html"}},[t._v("[https://seata.io/zh-cn/docs/dev/mode/at-mode.html]")])]),t._v(" "),e("h3",{attrs:{id:"_2-4-2-第二阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-第二阶段"}},[t._v("#")]),t._v(" 2.4.2 第二阶段")]),t._v(" "),e("p",[t._v("分布式事务操作成功，则TC通知RM异步删除undolog")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:" 分布式事务",href:"./image/seata10.jpg"}},[e("img",{attrs:{src:s(903),alt:"分布式事务"}})])]),t._v(" "),e("p",[t._v("分布式事务操作失败，TM向TC发送回滚请求，RM 收到协调器TC发来的回滚请求，通过 XID 和 Branch ID 找到相应的回滚日志记 录，通过回滚记录生成反向的更新 SQL 并执行，以完成分支的回滚")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:" 分布式事务",href:"./image/seata11.jpg"}},[e("img",{attrs:{src:s(904),alt:"分布式事务"}})])]),t._v(" "),e("h3",{attrs:{id:"_2-4-3-整体执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-整体执行流程"}},[t._v("#")]),t._v(" 2.4.3 整体执行流程")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:" 分布式事务",href:"./image/seata12.jpg"}},[e("img",{attrs:{src:s(905),alt:"分布式事务"}})])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Seata架构的亮点主要有几个:")]),t._v(" "),e("ol",[e("li",[t._v("应用层基于SQL解析实现了自动补偿，从而最大程度的降低业务侵入性；")]),t._v(" "),e("li",[t._v("将分布式事务中TC（事务协调者）独立部署，负责事务的注册、回滚；")]),t._v(" "),e("li",[t._v("通过全局锁实现了写隔离与读隔离")])])])])}),[],!1,null,null,null);a.default=_.exports},902:function(t,a,s){t.exports=s.p+"assets/img/seata08.1eb03536.jpg"},903:function(t,a,s){t.exports=s.p+"assets/img/seata10.6608f61e.jpg"},904:function(t,a,s){t.exports=s.p+"assets/img/seata11.cf935bcb.jpg"},905:function(t,a,s){t.exports=s.p+"assets/img/seata12.f88583e6.jpg"}}]);