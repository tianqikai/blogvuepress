(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1508:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2-zuul路由功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-zuul路由功能"}},[s._v("#")]),s._v(" 2. Zuul路由功能")]),s._v(" "),n("h2",{attrs:{id:"_2-1-url-地址路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-url-地址路由"}},[s._v("#")]),s._v(" 2.1 URL 地址路由")]),s._v(" "),n("h3",{attrs:{id:"_2-1-1-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-配置文件"}},[s._v("#")]),s._v(" 2.1.1 配置文件")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("product-service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7071/ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射路径对应的微服务地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://192.168.0.105:9000/product-service/product/list")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ->跳转到")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http://localhost:7071/product-service/product/list")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_2-1-2-通配符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-通配符"}},[s._v("#")]),s._v(" 2.1.2 通配符")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" zuul通配符",href:"./image/zuul01.jpg"}},[n("img",{attrs:{src:a(885),alt:"zuul通配符"}})])]),s._v(" "),n("h3",{attrs:{id:"_2-1-3-测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-测试"}},[s._v("#")]),s._v(" 2.1.3 测试")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" zuul通配符",href:"./image/zuul02.jpg"}},[n("img",{attrs:{src:a(344),alt:"zuul通配符"}})])]),s._v(" "),n("h2",{attrs:{id:"_2-2-服务名称路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-服务名称路由"}},[s._v("#")]),s._v(" 2.2 服务名称路由")]),s._v(" "),n("p",[s._v("微服务一般是由几十、上百个服务组成，对于 URL 地址路由的方式，如果对每个服务实例手动指定一个唯一访问地址，这样做显然是不合理的。")]),s._v(" "),n("p",[s._v("Zuul 支持与 Eureka 整合开发，根据 serviceId 自动从注册中心获取服务地址并转发请求，这样做的好处不仅可以通过单个端点来访问应用的所有服务，而且在添加或移除服务实例时不用修改 Zuul 的路由配置。")]),s._v(" "),n("p",[n("strong",[s._v("必须依ip地址注册方式 注册到注册中心")])]),s._v(" "),n("p",[n("strong",[s._v("应用服务配置文件")])]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 Eureka Server 注册中心  集群版")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefer-ip-address")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否使用 ip 地址注册")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance-id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("spring.cloud.client.ip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("server.port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip:port")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry-fetch-interval-seconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service-url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册中心对外暴露的注册地址")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12345tqk@localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8762/eureka/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12345tqk@localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8763/eureka/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_2-2-1-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-配置文件"}},[s._v("#")]),s._v(" 2.2.1 配置文件")]),s._v(" "),n("p",[n("strong",[s._v("zuul-server服务配置文件")])]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zuul"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("register-with-eureka")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否将自己注册到注册中心，默认为 true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry-fetch-interval-seconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示 Eureka Client 间隔多久去服务器拉取注册信息，默认为30 秒")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service-url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12345tqk@localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8762/eureka/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12345tqk@localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8763/eureka/\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("product-service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#url: http://localhost:7071/ # 映射路径对应的微服务地址")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 serviceId 自动从注册中心获取服务地址并转发请求")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"_2-2-2-启动类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-启动类"}},[s._v("#")]),s._v(" 2.2.2 启动类")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启 Zuul 注解")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableZuulProxy")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启 EurekaClient 注解，目前版本如果配置了 Eureka 注册中心，默认会开启该注解")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableEurekaClient")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZuulServerApplication")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZuulServerApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_2-2-3-测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-测试"}},[s._v("#")]),s._v(" 2.2.3 测试")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:" zuul通配符",href:"./image/zuul02.jpg"}},[n("img",{attrs:{src:a(344),alt:"zuul通配符"}})])]),s._v(" "),n("h2",{attrs:{id:"_2-3-url-地址排除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-url-地址排除"}},[s._v("#")]),s._v(" 2.3 URL 地址排除")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由规则")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignored-patterns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**/order/**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# URL 地址排除，排除所有包含 /order/ 的路径")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不受路由排除影响")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("product-service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 serviceId 自动从注册中心获取服务地址并转发请求")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("http://192.168.0.105:9000/product-service/product/order/1")]),s._v(" "),n("h2",{attrs:{id:"_2-4-服务名称排除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-服务名称排除"}},[s._v("#")]),s._v(" 2.4 服务名称排除")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由规则")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ignored-services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称排除，多个服务逗号分隔，'*' 排除所有")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不受路由排除影响")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n     path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n     serviceId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 serviceId 自动从注册中心获取服务地址并转发请求")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_2-5-路由前缀"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-路由前缀"}},[s._v("#")]),s._v(" 2.5 路由前缀")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由规则")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#路由前缀 不要使用关键字/zuul")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /api\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("product-service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 serviceId 自动从注册中心获取服务地址并转发请求")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("http://192.168.0.105:9000/api/product-service/product/list")]),s._v(" "),n("h2",{attrs:{id:"_2-6-分组路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-分组路由"}},[s._v("#")]),s._v(" 2.6 分组路由")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由规则")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zuul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ignored-patterns: /**/order/**  # URL 地址排除，排除所有包含 /order/ 的路径")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分组前缀 不要使用关键字/zuul")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /api\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("routes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("product-service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由 id 自定义")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置请求 url 的映射路径")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#url: http://localhost:7071/ # 映射路径对应的微服务地址")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 serviceId 自动从注册中心获取服务地址并转发请求")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("microservice1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("provider\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strip-prefix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("microservice2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Consumer/"),n("span",{pre:!0,attrs:{class:"token important"}},[s._v("**")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Consumer\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strip-prefix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("http://192.168.0.105:9000/api/product-service/product/list")]),s._v(" "),n("p",[s._v("http://192.168.0.105:9000/api/service-provider/product/list")]),s._v(" "),n("p",[s._v("http://192.168.0.105:9000/api/Service-Consumer/order/1")])])}),[],!1,null,null,null);t.default=e.exports},344:function(s,t,a){s.exports=a.p+"assets/img/zuul02.763b2a08.jpg"},885:function(s,t,a){s.exports=a.p+"assets/img/zuul01.b7627a40.jpg"}}]);