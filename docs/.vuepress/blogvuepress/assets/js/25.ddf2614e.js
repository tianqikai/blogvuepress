(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{356:function(s,t,a){s.exports=a.p+"assets/img/image-20200708224716035.a55c2385.png"},498:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"springcloud-微服务工具集v1-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-微服务工具集v1-1"}},[s._v("#")]),s._v(" SpringCloud 微服务工具集v1.1")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("版本: Hoxton SR6")])])]),s._v(" "),n("h2",{attrs:{id:"_1-什么是微服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是微服务"}},[s._v("#")]),s._v(" 1.什么是微服务")]),s._v(" "),n("ul",[n("li",[s._v("官网: https://www.martinfowler.com/articles/microservices.html")])]),s._v(" "),n("p",[s._v("In short, the microservice architectural style is an approach to developing a single application as "),n("code",[s._v("a suite of small services")]),s._v(", each "),n("code",[s._v("running in its own process")]),s._v(" and communicating with lightweight mechanisms, often an HTTP resource API. These services are "),n("code",[s._v("built around business capabilities")]),s._v(" and "),n("code",[s._v("independently deployable")]),s._v(" by fully automated deployment machinery. "),n("code",[s._v("There is a bare minimum of centralized management of these services")]),s._v(", which may be written in different programming languages and use different data storage technologies.                        -----[摘自官网]")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" a suite of small services                      \t\t\t\t--一系列微小服务\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" running in its own process                                    --运行在自己的进程里\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" built around business capabilities                            --围绕自己的业务开发\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" independently deployable                                      --独立部署\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" bare minimum of centralized management of these services      --基于分布式管理\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("官方定义:"),n("strong",[s._v("微服务就是由一系列围绕自己业务开发的微小服务构成,他们独立部署运行在自己的进程里,基于分布式的管理")])]),s._v(" "),n("p",[s._v("App 应学项目  分类模块   视频模块 评论模块  用户模块  统计模块...    单体应用")]),s._v(" "),n("p",[s._v("分类服务     独立应用  ---\x3e 计算进程里面 ---\x3e  独立部署")]),s._v(" "),n("p",[s._v("视频服务                                                                                     基于分布式服务管理")]),s._v(" "),n("p",[s._v("评论服务")]),s._v(" "),n("p",[s._v("用户服务")]),s._v(" "),n("p",[s._v("....服务")])]),s._v(" "),n("li",[n("p",[s._v("通俗定义:"),n("strong",[s._v("微服务是一种架构，这种架构是将单个的整体应用程序分割成更小的项目关联的独立的服务。一个服务通常实现一组独立的特性或功能，包含自己的业务逻辑和适配器。各个微服务之间的关联通过暴露api来实现。这些独立的微服务不需要部署在同一个虚拟机，同一个系统和同一个应用服务器中。")])])])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"_2-为什么是微服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么是微服务"}},[s._v("#")]),s._v(" 2.为什么是微服务?")]),s._v(" "),n("h3",{attrs:{id:"单体应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单体应用"}},[s._v("#")]),s._v(" 单体应用")]),s._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:"image-20200708224716035"}}),s._v("\nSpringCloud 微服务工具集v1.1.assets\nSpringCloudImage")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 1.优点")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v("\t单一架构模式在项目初期很小的时候开发方便，测试方便，部署方便，运行良好。\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 2.缺点")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 应用随着时间的推进，加入的功能越来越多，最终会变得巨大，一个项目中很有可能数百万行的代码，互相之间繁琐的jar包。\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 久而久之，开发效率低，代码维护困难\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 还有一个如果想整体应用采用新的技术，新的框架或者语言，那是不可能的。\n"),n("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" 任意模块的漏洞或者错误都会影响这个应用，降低系统的可靠性\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);