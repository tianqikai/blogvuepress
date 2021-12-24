(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1521:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-nacos环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-nacos环境搭建"}},[s._v("#")]),s._v(" 1. Nacos环境搭建")]),s._v(" "),n("h2",{attrs:{id:"_1-1-nacos服务端搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-nacos服务端搭建"}},[s._v("#")]),s._v(" 1.1 Nacos服务端搭建")]),s._v(" "),n("p",[s._v("下载地址:[https://github.com/alibaba/Nacos/releases]")]),s._v(" "),n("h3",{attrs:{id:"_1-1-1-linux环境启停"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-linux环境启停"}},[s._v("#")]),s._v(" 1.1.1 linux环境启停")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Nacos包解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nacos-server-1.1.4.tar.gz \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nacos\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动单机")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" startup.sh -m standalone\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查nacos启动的端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8848\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止nocas 在nocas/bin目录下 执行 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" shutdown.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("访问nocas的服务端")]),s._v(" : [http://101.43.21.33:8848/nacos/index.html]")]),s._v(" "),n("h2",{attrs:{id:"_1-2-nacos-client端的搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-nacos-client端的搭建"}},[s._v("#")]),s._v(" 1.2 Nacos Client端的搭建")]),s._v(" "),n("h3",{attrs:{id:"_1-2-1-引入依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-引入依赖"}},[s._v("#")]),s._v(" 1.2.1 引入依赖")]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--nacos注册中心--\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-discovery"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_1-2-2-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-配置文件"}},[s._v("#")]),s._v(" 1.2.2 配置文件")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9911")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 101.43.21.33"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Oorder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_1-2-3-启动类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-启动类"}},[s._v("#")]),s._v(" 1.2.3 启动类")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableDiscoveryClient")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderApplication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrderApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos01.jpg"}},[n("img",{attrs:{src:t(927),alt:"nacos"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-3-nacos-领域模型划分以及概念详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-nacos-领域模型划分以及概念详解"}},[s._v("#")]),s._v(" 1.3 Nacos 领域模型划分以及概念详解")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos02.jpg"}},[n("img",{attrs:{src:t(928),alt:"nacos"}})])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos03.jpg"}},[n("img",{attrs:{src:t(929),alt:"nacos"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-3-1-默认namespace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-默认namespace"}},[s._v("#")]),s._v(" 1.3.1 默认NameSpace")]),s._v(" "),n("p",[s._v("NameSpace(默认的NameSpace是”public“ NameSpace可以进行"),n("strong",[s._v("资源隔离")])]),s._v(" "),n("p",[s._v("比如我们dev环境下的NameSpace下的服务是调用不到prod的NameSpace下 的微服务)")]),s._v(" "),n("p",[n("strong",[s._v("环境隔离")]),s._v(" "),n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos04.jpg"}},[n("img",{attrs:{src:t(930),alt:"nacos"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-3-2-验证服务隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-验证服务隔离"}},[s._v("#")]),s._v(" 1.3.2 验证服务隔离")]),s._v(" "),n("h4",{attrs:{id:"order-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#order-server"}},[s._v("#")]),s._v(" order-server")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9911")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 101.43.21.33"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dev--开发环境")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 9cb54f0e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("e894"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4aca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("acde"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("de664d11b7f1\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"product-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#product-server"}},[s._v("#")]),s._v(" product-server")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9922")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 101.43.21.33"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dev--开发环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        namespace: 9cb54f0e-e894-4aca-acde-de664d11b7f1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#product--生产环境")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 83e2733a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("fff7"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("469b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("9929"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("7f1085f7f61d\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h4",{attrs:{id:"访问测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问测试"}},[s._v("#")]),s._v(" 访问测试")]),s._v(" "),n("p",[s._v("[http://localhost:9911/order/1]")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos05.jpg"}},[n("img",{attrs:{src:t(931),alt:"nacos"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-4-nacos高可用集群模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-nacos高可用集群模式"}},[s._v("#")]),s._v(" 1.4 Nacos高可用集群模式")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" nacos",href:"./image/nacos06.jpg"}},[n("img",{attrs:{src:t(932),alt:"nacos"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-4-1-安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-安装nginx"}},[s._v("#")]),s._v(" 1.4.1 安装nginx")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://nginx.org/download/nginx-1.14.2.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf nginx-1.14.2.tar.gz \n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx­1.14.2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令指定安装目录")]),s._v("\n./configure ­­ --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx­1.14.2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入该目录下的配置目录conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx­1.14.2/conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改ng的conf文件")]),s._v("\n----------------------\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx­1.14.2/sbin\n\n./nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("hr"),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#user  nobody;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n   upstream  nacos-cluster {\n        server  172.21.0.16:8849;\n        server  172.21.0.16:8850;\n        server  172.21.0.16:8851;\n    }\n    server {\n        listen       8848;\n        server_name  122.51.156.245;\n        location /nacos/ {\n                proxy_pass   http://nacos-cluster/nacos/;\n        }\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"_1-4-2-安装mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-安装mysql"}},[s._v("#")]),s._v(" 1.4.2 安装mysql")]),s._v(" "),n("p",[n("strong",[s._v("mysql5.7版本")]),s._v(" 不然会有问题")]),s._v(" "),n("h3",{attrs:{id:"_1-4-3-安装三台nacos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-安装三台nacos"}},[s._v("#")]),s._v(" 1.4.3 安装三台Nacos")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 创建三个实例 nacos8849 nacos8850 nacos8851")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@TXYUN-NO1 nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -lrt")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50916")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("52115827")]),s._v(" Nov "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":08 nacos-server-1.1.4.tar.gz\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":57 nacos\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":44 nacos8851\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":51 nacos8849\ndrwxr-xr-x "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" root root     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":02 nacos8850\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"修改配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),n("p",[n("strong",[s._v("application.properties")])]),s._v(" "),n("p",[s._v("修改nacos8849/conf文件 application.properties")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server.port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8849")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.datasource.platform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库实例数量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.num")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自己数据库的连接信息")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 172.21.0.16 内网地址-不要用公网地址，不然会超时")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.url.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://172.21.0.16:3310/nacostest?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&serverTimezone=GMT%2B8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("db.password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("12345@tqk")]),s._v("\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("修改nacos8849/conf文件 把原来的cluster.conf.example改为 cluster.conf文件")]),s._v(" "),n("div",{staticClass:"language-conf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#it is ip\n## 172.21.0.16 内网地址-不要用公网地址，不然会超时\n172.21.0.16:8849\n172.21.0.16:8850\n172.21.0.16:8851\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"创建mysql用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql用户"}},[s._v("#")]),s._v(" 创建mysql用户")]),s._v(" "),n("p",[s._v("创建一个数据库（需要自己创建一个数据库） 脚本的位子在"),n("strong",[s._v("nacos/conf/nacos-mysql.sql")])]),s._v(" "),n("h4",{attrs:{id:"启动脚本jvm修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动脚本jvm修改"}},[s._v("#")]),s._v(" 启动脚本JVM修改")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"nacos",href:"./image/nacos09.jpg"}},[n("img",{attrs:{src:t(933),alt:"nacos"}})])]),s._v(" "),n("h4",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),n("p",[s._v("执行./startup.sh 启动成功的依据")]),s._v(" "),n("p",[s._v("查看日志 /usr/local/spring-cloud-alibaba/nacos/nacos8850/logs/start.out")]),s._v(" "),n("div",{staticClass:"language-log line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("2021-12-11 15:51:40,679 INFO The server IP list of Nacos is [49.232.21.151:8849, 49.232.21.151:8850, 49.232.21.151:8851]\n\n2021-12-11 15:51:41,699 INFO Nacos is starting...\n\n2021-12-11 15:51:48,251 INFO Nacos Log files: /root/nacos/nacos8849/logs/\n\n2021-12-11 15:51:48,252 INFO Nacos Conf files: /root/nacos/nacos8849/conf/\n\n2021-12-11 15:51:48,252 INFO Nacos Data files: /root/nacos/nacos8849/data/\n\n2021-12-11 15:51:48,252 INFO Nacos started successfully in cluster mode.\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"nacos",href:"./image/nacos10.jpg"}},[n("img",{attrs:{src:t(934),alt:"nacos"}})])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"nacos",href:"./image/nacos11.jpg"}},[n("img",{attrs:{src:t(935),alt:"nacos"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-4-4-搭建换进遇见的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-4-搭建换进遇见的问题"}},[s._v("#")]),s._v(" 1.4.4 搭建换进遇见的问题")]),s._v(" "),n("ol",[n("li",[s._v("mysql版本问题")])]),s._v(" "),n("p",[s._v("一定要选用5.7版本 ；"),n("strong",[s._v("mysql8版本 nacos连接不上")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("数据库连接串地址 还有配置地址都用内网地址，传输速度快；不然注册会超时失败")])])])}),[],!1,null,null,null);a.default=e.exports},927:function(s,a,t){s.exports=t.p+"assets/img/nacos01.b84d9610.jpg"},928:function(s,a,t){s.exports=t.p+"assets/img/nacos02.bb520722.jpg"},929:function(s,a,t){s.exports=t.p+"assets/img/nacos03.846881f3.jpg"},930:function(s,a,t){s.exports=t.p+"assets/img/nacos04.3e60bd70.jpg"},931:function(s,a,t){s.exports=t.p+"assets/img/nacos05.807de240.jpg"},932:function(s,a,t){s.exports=t.p+"assets/img/nacos06.4385292b.jpg"},933:function(s,a,t){s.exports=t.p+"assets/img/nacos09.464f103d.jpg"},934:function(s,a,t){s.exports=t.p+"assets/img/nacos10.58232c72.jpg"},935:function(s,a,t){s.exports=t.p+"assets/img/nacos11.f6473765.jpg"}}]);