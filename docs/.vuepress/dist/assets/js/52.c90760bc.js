(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1094:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_6-控制队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-控制队列"}},[s._v("#")]),s._v(" 6. 控制队列")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_6-1-临时队列"}},[s._v("6.1 临时队列")]),n("ul",[n("li",[n("a",{attrs:{href:"#_6-1-1-自动删除队列"}},[s._v("6.1.1 自动删除队列")])]),n("li",[n("a",{attrs:{href:"#_6-1-2-单消费者队列"}},[s._v("6.1.2 单消费者队列")])]),n("li",[n("a",{attrs:{href:"#_6-1-3-自动过期队列"}},[s._v("6.1.3 自动过期队列")])])])]),n("li",[n("a",{attrs:{href:"#_6-2-永久队列"}},[s._v("6.2 永久队列")])]),n("li",[n("a",{attrs:{href:"#_6-2-1-队列的持久性"}},[s._v("6.2.1 队列的持久性")])]),n("li",[n("a",{attrs:{href:"#_6-3-队列级别消息过期"}},[s._v("6.3 队列级别消息过期")])]),n("li",[n("a",{attrs:{href:"#_6-4-队列保留参数列表"}},[s._v("6.4 队列保留参数列表")])])])]),s._v("\n前面讲了比较多的消费者，RabbitMQ 中消费行为主要跟队列有直接关系，那么我们接下来深入的分析队列。"),n("p"),s._v(" "),n("h2",{attrs:{id:"_6-1-临时队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-临时队列"}},[s._v("#")]),s._v(" 6.1 临时队列")]),s._v(" "),n("p",[s._v("临时队列对应的是没有持久化的队列，也就是如果 RabbitMQ 服务器重启，那么这些队列就不会存在，所以我们称之为临时队列。")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tqk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setqueue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rabbitmq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeoutException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n\n *类说明：控制队列的参数\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SetQueueConsumer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" EXCHANGE_NAME "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set_queue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeoutException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建连接、连接到RabbitMQ")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConnectionFactory")]),s._v(" connectionFactory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConnectionFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置下连接工厂的连接地址(使用默认端口5672)")]),s._v("\n        connectionFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHost")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"110.42.146.236"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        connectionFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setPort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        connectionFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setUsername")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tqk001"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        connectionFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12345@tqk"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打开连接和创建频道，与发送端一样")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" connection "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" connectionFactory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("newConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Channel")]),s._v(" channel "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("exchangeDeclare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EXCHANGE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BuiltinExchangeType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DIRECT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//TODO /*自动过期队列--参数需要Map传递*/")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" queueName "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"setQueue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" arguments "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-expires"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10秒被删除")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//TODO 队列的各种参数")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*加入队列的各种参数*/")]),s._v("\n        channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("queueDeclare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queueName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*绑定，将队列和交换器通过路由键进行绑定*/")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" routekey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*表示只关注error级别的日志消息*/")]),s._v("\n        channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("queueBind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queueName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("EXCHANGE_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("routekey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"waiting for message........"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*声明了一个消费者*/")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Consumer")]),s._v(" consumer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DefaultConsumer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("handleDelivery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" consumerTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                       "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Envelope")]),s._v(" envelope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                       "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AMQP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BasicProperties")]),s._v(" properties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Received["')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("envelope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRoutingKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"]"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*消费者正式开始在指定队列上消费消息*/")]),s._v("\n        channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("basicConsume")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queueName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br")])]),n("h3",{attrs:{id:"_6-1-1-自动删除队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-自动删除队列"}},[s._v("#")]),s._v(" 6.1.1 自动删除队列")]),s._v(" "),n("p",[s._v("自动删除队列和普通队列在使用上没有什么区别，唯一的区别是，当消费者断开连接时，队列将会被删除。")]),s._v(" "),n("p",[s._v("自动删除队列允许的消费者没有限制， 也就是说当这个队列上最后一个消费者断开连接才会执行删除。")]),s._v(" "),n("p",[s._v("自动删除队列只需要在声明队列时，设置属性 auto-delete 标识为 true 即可。"),n("strong",[s._v("系统声明的随机队列，缺省就是自动删除的")]),s._v("。\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq61.jpg"}},[n("img",{attrs:{src:a(787),alt:"rabbitmq"}})])]),s._v(" "),n("h3",{attrs:{id:"_6-1-2-单消费者队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-单消费者队列"}},[s._v("#")]),s._v(" 6.1.2 单消费者队列")]),s._v(" "),n("p",[s._v("普通队列允许的消费者没有限制，多个消费者绑定到多个队列时，RabbitMQ 会采用轮询进行投递。如果需要消费者独占队列，在队列创建的时候， 设定属性 exclusive 为 true。\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq62.jpg"}},[n("img",{attrs:{src:a(788),alt:"rabbitmq"}})])]),s._v(" "),n("h3",{attrs:{id:"_6-1-3-自动过期队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-自动过期队列"}},[s._v("#")]),s._v(" 6.1.3 自动过期队列")]),s._v(" "),n("p",[s._v("指队列在超过一定时间没使用，会被从 RabbitMQ 中被删除。 什么是没使用？\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq63.jpg"}},[n("img",{attrs:{src:a(789),alt:"rabbitmq"}})])]),s._v(" "),n("ol",[n("li",[s._v("一定时间内没有 Get 操作发生。")]),s._v(" "),n("li",[s._v("没有 Consumer 连接在队列上。")])]),s._v(" "),n("p",[n("strong",[s._v("特别的")]),s._v("：就算一直有消息进入队列，也不算队列在被使用。 通过声明队列时，设定 x-expires 参数即可，单位毫秒。 比如这个队列会在当消费者断开连接时 10 秒后过期。")]),s._v(" "),n("h2",{attrs:{id:"_6-2-永久队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-永久队列"}},[s._v("#")]),s._v(" 6.2 永久队列")]),s._v(" "),n("h2",{attrs:{id:"_6-2-1-队列的持久性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-队列的持久性"}},[s._v("#")]),s._v(" 6.2.1 队列的持久性")]),s._v(" "),n("p",[s._v("持久化队列和非持久化队列的区别是，持久化队列会被保存在磁盘中，固定并持久的存储，当 Rabbit 服务重启后，该队列会保持原来的状态在 RabbitMQ 中被管理，而非持久化队列不会被保存在磁盘中，Rabbit 服务重启后队列就会消失。")]),s._v(" "),n("p",[n("strong",[s._v("非持久化比持久化的优势就是，由于非持久化不需要保存在磁盘中，所以使用速度就比持久化队列快。即是非持久化的性能要高于持久化。而持久化的优点就是会一直存在，不会随服务的重启或服务器的宕机而消失")])]),s._v(" "),n("p",[n("strong",[s._v("在声明队列时，将属性 durable 设置为“false”，则该队列为非持久化队列，设置成“true”时，该队列就为持久化队列")]),s._v(" "),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq64.jpg"}},[n("img",{attrs:{src:a(790),alt:"rabbitmq"}})])]),s._v(" "),n("h2",{attrs:{id:"_6-3-队列级别消息过期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-队列级别消息过期"}},[s._v("#")]),s._v(" 6.3 队列级别消息过期")]),s._v(" "),n("p",[s._v("就是为每个队列设置消息的超时时间。只要给队列设置 x-message-ttl 参数，就设定了该队列所有消息的存活时间，时间单位是毫秒。如果声明队列 时指定了死信交换器，则过期消息会成为死信消息。\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq65.jpg"}},[n("img",{attrs:{src:a(791),alt:"rabbitmq"}})])]),s._v(" "),n("h2",{attrs:{id:"_6-4-队列保留参数列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-队列保留参数列表"}},[s._v("#")]),s._v(" 6.4 队列保留参数列表")]),s._v(" "),n("ol",[n("li",[s._v("x-dead-letter-exchange 死信交换器")]),s._v(" "),n("li",[s._v("x-dead-letter-routing-key 死信消息的可选路由键")]),s._v(" "),n("li",[s._v("x-expires 队列在指定毫秒数后被删除")]),s._v(" "),n("li",[s._v("x-ha-policy 创建 HA 队列")]),s._v(" "),n("li",[s._v("x-ha-nodes HA 队列的分布节点")]),s._v(" "),n("li",[s._v("x-max-length 队列的最大消息数")]),s._v(" "),n("li",[s._v("x-message-ttl 毫秒为单位的消息过期时间，队列级别")]),s._v(" "),n("li",[s._v("x-max-priority 最大优先值为 255 的队列优先排序功能")])]),s._v(" "),n("p",[n("strong",[s._v("对队列中消息的条数进行限制 x-max-length")]),n("br"),s._v(" "),n("strong",[s._v("对队列中消息的总量进行限制 x-max-length-bytes")])])])}),[],!1,null,null,null);t.default=e.exports},787:function(s,t,a){s.exports=a.p+"assets/img/rabbitmq61.bf797291.jpg"},788:function(s,t,a){s.exports=a.p+"assets/img/rabbitmq62.b2d9f485.jpg"},789:function(s,t,a){s.exports=a.p+"assets/img/rabbitmq63.0d206bac.jpg"},790:function(s,t,a){s.exports=a.p+"assets/img/rabbitmq64.3f56ea89.jpg"},791:function(s,t,a){s.exports=a.p+"assets/img/rabbitmq65.e26a1cc7.jpg"}}]);