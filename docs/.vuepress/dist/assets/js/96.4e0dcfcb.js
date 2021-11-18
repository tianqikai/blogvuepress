(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1024:function(s,a,t){"use strict";t.r(a);var e=t(26),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_1-rocketmq安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-rocketmq安装"}},[s._v("#")]),s._v(" 1.RocketMQ安装")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-1-rocketmq在linux下安装"}},[s._v("1.1 RocketMQ在linux下安装")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-1-1-调整启动参数"}},[s._v("1.1.1 调整启动参数")])]),e("li",[e("a",{attrs:{href:"#_1-1-2-启动namesrv和启动broker"}},[s._v("1.1.2 启动namesrv和启动broker")])]),e("li",[e("a",{attrs:{href:"#_1-1-3-安装控制台插件"}},[s._v("1.1.3 安装控制台插件")])]),e("li",[e("a",{attrs:{href:"#_1-1-4-验证"}},[s._v("1.1.4 验证")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"_1-1-rocketmq在linux下安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rocketmq在linux下安装"}},[s._v("#")]),s._v(" 1.1 RocketMQ在linux下安装")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://rocketmq.apache.org/dowloading/releases/"}},[s._v("官方下载地址 http://rocketmq.apache.org/dowloading/releases/")])]),s._v(" "),e("h3",{attrs:{id:"_1-1-1-调整启动参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-调整启动参数"}},[s._v("#")]),s._v(" 1.1.1 调整启动参数")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意事项")]),s._v(" "),e("p",[s._v("RocketMQ默认的虚拟机内存较大，启动Broker如果因为内存不足失败，需要编辑如下两个配置文件，修改JVM内存大小。\n但是这个也仅仅是在测试环境中，RocketMQ在生产上最低要求至少8G内存（官方推荐）才能确保RocketMQ的效果")])]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" runbroker.sh           --broker的配置\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" runserver.sh            --nameServer的配置\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server -Xms1024m -Xmx1024m -Xmn512m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_1-1-2-启动namesrv和启动broker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-启动namesrv和启动broker"}},[s._v("#")]),s._v(" 1.1.2 启动namesrv和启动broker")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/rocketmq-all-4.8.0-bin-release/bin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动NAMESERVER")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqnamesrv "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看日志的命令：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f ~/logs/rocketmqlogs/namesrv.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置文件增加外网地址(你启动加载哪个配置文件就修改哪个，这里修改broker.conf)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/rocketmq-all-4.8.0-bin-release/conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" broker.conf\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerIP1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动broker")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/rocketmq-all-4.8.0-bin-release/bin\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" mqbroker -c "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/broker.conf  -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236:9876 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autoCreateTopicEnable")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这样启动的服务器可以自动创建主题（客户端）,不过生产一般不推荐。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##推荐使用如下")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./mqbroker -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236:9876 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看日志的命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f ~/logs/rocketmqlogs/broker.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("启动遇见的问题")]),s._v(" "),e("p",[e("strong",[s._v("Error when measuring disk space usage, file doesn't exist on this path: /root/store/commitlog")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("  /root/store/commitlog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Error when measuring disk space usage, file doesn't exist on this path: /root/store/consumequeue")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("  /root/store/consumequeue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("h3",{attrs:{id:"_1-1-3-安装控制台插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-安装控制台插件"}},[s._v("#")]),s._v(" 1.1.3 安装控制台插件")]),s._v(" "),e("p",[e("strong",[s._v("新版本RocketMQ配置Web管理界面：解决找不到rocketmq-console目录问题")]),s._v("\n想配置一下RocketMQ的web管理页面，发现网上的资料都是之前版本的说明，导致无法成功配置。\n所以想自己查看一下,我们发现"),e("a",{attrs:{href:"https://github.com/apache/rocketmq-externals"}},[s._v("https://github.com/apache/rocketmq-externals")]),s._v("\n这个git项目上并没有找到rocketmq-console这个目录.")]),s._v(" "),e("p",[e("strong",[s._v("已经创建了一个独立的仓库并命名为RocketMQ Dashboard")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/apache/rocketmq-dashboard"}},[s._v("https://github.com/apache/rocketmq-dashboard")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("编译安装启动")]),s._v(" "),e("ol",[e("li",[s._v("下载完成之后，进入‘\\rocketmq-dashboard-master\\src\\main\\resources’文件夹，打开‘application.properties’进行配置")])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"RocketMQ",href:"./image/rocketmq11.jpg"}},[e("img",{attrs:{src:t(752),alt:"RocketMQ"}})])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("进入 H:\\安装包\\MQ\\rocketmq-dashboard-master，")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译生成")]),s._v("\nmvn clean package -Dmaven.test.skip"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("上传启动")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar rocketmq-dashboard-2.0.0.jar "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("登录验证\n"),e("a",{attrs:{href:"http://110.42.146.236:8899"}},[s._v("http://110.42.146.236:8899")])])])]),s._v(" "),e("h3",{attrs:{id:"_1-1-4-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-验证"}},[s._v("#")]),s._v(" 1.1.4 验证")]),s._v(" "),e("p",[e("strong",[s._v("查看是否启动成功")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-4-12-centos bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jps -l")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31922")]),s._v(" sun.tools.jps.Jps\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23182")]),s._v(" rocketmq-dashboard-2.0.0.jar\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13822")]),s._v(" org.apache.rocketmq.broker.BrokerStartup\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11054")]),s._v(" org.apache.rocketmq.namesrv.NamesrvStartup\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("验证是否启动成功")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("遇见的问题")]),s._v(" "),e("p",[e("strong",[s._v("java.lang.IllegalStateException: org.apache.rocketmq.remoting.exception.RemotingConnectException: connect to null failed")]),s._v(" "),e("strong",[s._v("解决办法：")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" tools.sh\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" JAVA_HOME\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v('/bin/java"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASE_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" $0"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/conf:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSPATH}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 添加如下：export NAMESRV_ADDR=110.42.146.236:9876")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAMESRV_ADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236:9876\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#===========================================================================================")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JVM Configuration")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#===========================================================================================")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server -Xms1g -Xmx1g -Xmn256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(" -Djava.ext.dirs="),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/lib:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre/lib/ext:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v('/lib/ext"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(" -cp "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSPATH}")]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" tools.sh org.apache.rocketmq.example.quickstart.Producer\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##可以正常发送消息")]),s._v("\nocketMQLog:WARN No appenders could be found "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" logger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("io.netty.util.internal.PlatformDependent0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nRocketMQLog:WARN Please initialize the logger system properly.\nSendResult "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sendStatus"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SEND_OK, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msgId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("7F00000112C936BAF30C3D7C4FB20000, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offsetMsgId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6E2A92EC00002A9F0000000000000000, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("messageQueue")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MessageQueue "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("topic"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TopicTest, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-a, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSendResult "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sendStatus"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SEND_OK, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msgId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("7F00000112C936BAF30C3D7C4FD90001, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offsetMsgId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6E2A92EC00002A9F00000000000000C9, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("messageQueue")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MessageQueue "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("topic"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TopicTest, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-a, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":32:38.995 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NettyClientSelector_1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" INFO  RocketmqRemoting - closeChannel: close the connection to remote address"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236:9876"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" result: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":32:39.002 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NettyClientSelector_1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" INFO  RocketmqRemoting - closeChannel: close the connection to remote address"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110.42")]),s._v(".146.236:10911"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" result: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[e("strong",[s._v("验证能否正常消费")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" tools.sh org.apache.rocketmq.example.quickstart.Consumer\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##正常消费 ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("_START_TIME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1631457281108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UNIQ_KEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("7F00000112C936BAF30C3D7C573703D0, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLUSTER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DefaultCluster, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WAIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TAGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TagA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("107")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("116")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("transactionId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nConsumeMessageThread_2 Receive New Messages: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MessageExt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("brokerName"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-a, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storeSize")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("203")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("queueOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("243")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sysFlag")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bornTimestamp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1631457158957")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bornHost")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/110.42.146.236:33792, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storeTimestamp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1631457158958")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storeHost")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/110.42.146.236:10911, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("msgId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6E2A92EC00002A9F0000000000030256, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("commitLogOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("197206")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bodyCRC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("794315549")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("reconsumeTimes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("preparedTransactionOffset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", toString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("topic"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TopicTest'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flag")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("properties")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MIN_OFFSET"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAX_OFFSET")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONSUME_START_TIME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1631457281108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UNIQ_KEY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("7F00000112C936BAF30C3D7C572D03CC, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLUSTER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DefaultCluster, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WAIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TAGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TagA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("82")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("107")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("116")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("transactionId")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'null'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports},752:function(s,a,t){s.exports=t.p+"assets/img/rocketmq11.75c8cfeb.jpg"}}]);