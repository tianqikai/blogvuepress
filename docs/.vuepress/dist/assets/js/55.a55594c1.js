(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1526:function(s,a,t){"use strict";t.r(a);var n=t(26),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-rabbitmq安装以及概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-rabbitmq安装以及概述"}},[s._v("#")]),s._v(" 1. RabbitMQ安装以及概述")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-1-rabbitmq安装"}},[s._v("1.1 RabbitMQ安装")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-1-1-安装erlang"}},[s._v("1.1.1 安装erlang")])]),n("li",[n("a",{attrs:{href:"#_1-1-2-安装rabbitmq"}},[s._v("1.1.2 安装RabbitMQ")])]),n("li",[n("a",{attrs:{href:"#_1-1-3-启动命令"}},[s._v("1.1.3 启动命令")])]),n("li",[n("a",{attrs:{href:"#_1-1-4-web管理"}},[s._v("1.1.4 WEB管理")])]),n("li",[n("a",{attrs:{href:"#_1-1-5-登陆"}},[s._v("1.1.5 登陆")])])])]),n("li",[n("a",{attrs:{href:"#_1-2-amqp-概论"}},[s._v("1.2 AMQP 概论")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-2-1-客户端与rabbitmq连接"}},[s._v("1.2.1 客户端与RabbitMQ连接")])]),n("li",[n("a",{attrs:{href:"#_1-2-2-rabbitmq-中使用-amqp"}},[s._v("1.2.2 RabbitMQ 中使用 AMQP")])]),n("li",[n("a",{attrs:{href:"#_1-2-3-虚拟主机"}},[s._v("1.2.3 虚拟主机")])]),n("li",[n("a",{attrs:{href:"#_1-2-4-交换器类型"}},[s._v("1.2.4 交换器类型")])])])]),n("li",[n("a",{attrs:{href:"#_1-3-延时插件安装"}},[s._v("1.3 延时插件安装")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"_1-1-rabbitmq安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rabbitmq安装"}},[s._v("#")]),s._v(" 1.1 RabbitMQ安装")]),s._v(" "),n("h3",{attrs:{id:"_1-1-1-安装erlang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-安装erlang"}},[s._v("#")]),s._v(" 1.1.1 安装erlang")]),s._v(" "),n("p",[s._v("由于rabbitmq是基于erlang语言开发的，所以必须先安装erlang。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("安装erlang")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc glibc-devel "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" ncurses-devel openssl-devel xmlto perl "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" gtk2-devel binutils-devel\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如果出现安装时error: db5 error(-30973) from dbenv->failchk: BDB0087 DB_RUNRECOVERY: Fatal error, run database reco")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 操作如下步骤")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" var/lib/rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lrt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf __db.00*  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--删除掉__db.00开头的数据库文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lrt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --rebuilddb   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--重建rpm数据库")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装包 erlang官网")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://erlang.org/download/otp_src_22.0.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf otp_src_22.0.tar.gz\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移走")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" otp_src_22.0 /usr/local/\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/otp_src_22.0/\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建即将安装的目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/erlang\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置安装路径")]),s._v("\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/erlang\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看一下是否安装成功")]),s._v("\nll /usr/local/erlang/bin\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH="),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/erlang/bin'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#甩一条命令")]),s._v("\nerl\n在里面输入halt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".命令退出来（那个点号别忘记）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-2-安装rabbitmq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-安装rabbitmq"}},[s._v("#")]),s._v(" 1.1.2 安装RabbitMQ")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("安装步骤")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##在Linux中安装RabbitMQ演示，以VirtualBox中的虚拟机为操作系统载体")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##操作系统版本为CentOS7，纯净未安装RabbitMQ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.15/rabbitmq-server-generic-unix-3.7.15.tar.xz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于是tar.xz格式的所以需要用到xz，没有的话就先安装 ,存在则不需要执行了")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y xz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一次解压")]),s._v("\n/bin/xz -d rabbitmq-server-generic-unix-3.7.15.tar.xz\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二次解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf rabbitmq-server-generic-unix-3.7.15.tar\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移走")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" rabbitmq_server-3.7.15 /usr/local/\n \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/local/rabbitmq_server-3.7.15  /usr/local/rabbitmq\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH="),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/rabbitmq/sbin'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建配置目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/rabbitmq\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-3-启动命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-启动命令"}},[s._v("#")]),s._v(" 1.1.3 启动命令")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("启动命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 切换到启动命令目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/rabbitmq/sbin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动：")]),s._v("\nrabbitmq-server -detached\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止：")]),s._v("\nrabbitmqctl stop\n \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#状态：")]),s._v("\nrabbitmqctl status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#防火墙之类的请自行处理（5672和15672端口），反正我是从来不开防火墙")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启相对应的端口")]),s._v("\nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("15672")]),s._v("/tcp\nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v("/tcp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看已有虚拟主机并增加名为enjoyedu的虚拟主机")]),s._v("\nrabbitmqctl list_vhosts\nrabbitmqctl add_vhost enjoyedu\nrabbitmqctl list_vhosts\n\nListing vhosts "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nname\ntqkstuday\nenjoyedu\n/\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq01.jpg"}},[n("img",{attrs:{src:t(346),alt:"rabbitmq"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-1-4-web管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-web管理"}},[s._v("#")]),s._v(" 1.1.4 WEB管理")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("WEB管理")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有用户")]),s._v("\nrabbitmqctl list_users\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加一个用户")]),s._v("\n\nrabbitmqctl add_user tqk001 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345")]),s._v("@tqk\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#增加名为tqk001的用户并配置administrator角色,增加相应的权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#赋予其administrator角色")]),s._v("\nrabbitmqctl set_user_tags  tqk001  administrator\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置权限 # 为用户赋权：")]),s._v("\nrabbitmqctl set_permissions -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v(" tqk001 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("\nrabbitmqctl set_permissions -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enjoyedu"')]),s._v(" tqk001 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("\nrabbitmqctl set_permissions -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tqkstuday"')]),s._v(" tqk001 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看用户权限")]),s._v("\nrabbitmqctl list_user_permissions tqk001\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除用户（安全起见，删除默认用户）")]),s._v("\nrabbitmqctl delete_user guest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-5-登陆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-登陆"}},[s._v("#")]),s._v(" 1.1.5 登陆")]),s._v(" "),n("p",[s._v("配置好用户之后重启一下rabbit\n然后就可以用新账号进行登陆")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 切换到启动命令目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/rabbitmq/sbin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动：")]),s._v("\nrabbitmq-server -detached\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止：")]),s._v("\nrabbitmqctl stop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq01.jpg"}},[n("img",{attrs:{src:t(346),alt:"rabbitmq"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-2-amqp-概论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-amqp-概论"}},[s._v("#")]),s._v(" 1.2 AMQP 概论")]),s._v(" "),n("p",[s._v("AMQP 是应用层协议的一个开放标准,为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同的开发语言等条件的限制。目标是实现一种在全行业广泛使用的标准消息中间件技术，以便降低企业和系统集成的开销，并且向大众提供工业级的集成服务。 主要实现有 RabbitMQ。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-1-客户端与rabbitmq连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-客户端与rabbitmq连接"}},[s._v("#")]),s._v(" 1.2.1 客户端与RabbitMQ连接")]),s._v(" "),n("h4",{attrs:{id:"连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[s._v("#")]),s._v(" 连接")]),s._v(" "),n("p",[s._v("首先作为客户端（无论是生产者还是消费者），你如果要与 RabbitMQ 通讯的话，你们之间必须创建一条 TCP 连接，当然同时建立连接后，客户端还必须发送一条“问候语”让彼此知道我们都是符合 AMQP 的语言的，比如你跟别人打招呼一般会说“你好！”，你跟国外的美女一般会说“hello!”一样。 你们确认好“语言”之后，就相当于客户端和 RabbitMQ 通过“认证”了。你们之间可以创建一条 AMQP 的信道。")]),s._v(" "),n("h4",{attrs:{id:"信道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#信道"}},[s._v("#")]),s._v(" 信道")]),s._v(" "),n("p",[s._v("概念：信道是生产者/消费者与 RabbitMQ 通信的渠道。信道是建立在 TCP 连接上的虚拟连接，什么意思呢？就是说 rabbitmq 在一条 TCP 上建立成百 上千个信道来达到多个线程处理，这个 TCP 被多个线程共享，每个线程对应一个信道，信道在 RabbitMQ 都有唯一的 ID ,保证了信道私有性，对应上唯一 的线程使用。 疑问：为什么不建立多个 TCP 连接呢？原因是 rabbit 保证性能，系统为每个线程开辟一个 TCP 是非常消耗性能，每秒成百上千的建立销毁 TCP 会严 重消耗系统。所以 rabbitmq 选择建立多个信道（建立在 tcp 的虚拟连接）连接到 rabbit 上。 从技术上讲，这被称之为“"),n("strong",[s._v("多路复用")]),s._v("”，对于执行多个任务的多线程或者异步应用程序来说，它非常有用。")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq02.jpg"}},[n("img",{attrs:{src:t(947),alt:"rabbitmq"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-2-2-rabbitmq-中使用-amqp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-rabbitmq-中使用-amqp"}},[s._v("#")]),s._v(" 1.2.2 RabbitMQ 中使用 AMQP")]),s._v(" "),n("p",[s._v("RabbitMQ包括的要素 "),n("strong",[s._v("生产者、消费者、消息")]),s._v(" "),n("strong",[s._v("交换器、队列、绑定、路由键")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("RabbitMQ要素")]),s._v(" "),n("p",[s._v("**生产者:**消息的创建者，发送到 rabbitmq；")]),s._v(" "),n("p",[s._v("**消费者：**连接到 rabbitmq，订阅到队列上，消费消息，"),n("strong",[s._v("持续订阅(basicConsumer)和单条订阅(basicGet)")]),s._v(".")]),s._v(" "),n("p",[s._v("**消息：**包含有效载荷和标签，有效载荷指要传输的数据，标签描述了有效载荷，并且 rabbitmq 用它来决定谁获得消息，消费者只能拿到有效载荷， 并不知道生产者是谁")])]),s._v(" "),n("p",[n("strong",[s._v("交换器、队列、绑定、路由键")])]),s._v(" "),n("p",[n("strong",[s._v("队列")]),s._v("通过"),n("strong",[s._v("路由键")]),s._v("（routing key，某种确定的规则）绑定到"),n("strong",[s._v("交换器")]),s._v("，生产者将消息发布到交换器，交换器根据绑定的路由键将消息路由到"),n("strong",[s._v("特定队列")]),s._v("， 然后由订阅这个队列的消费者进行接收。 （routing_key 和 绑定键 binding_key 的最大长度是 255 个字节）")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq03.jpg"}},[n("img",{attrs:{src:t(948),alt:"rabbitmq"}})])]),s._v(" "),n("h4",{attrs:{id:"消息的确认"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消息的确认"}},[s._v("#")]),s._v(" 消息的确认")]),s._v(" "),n("p",[s._v("消费者收到的每一条消息都必须进行确认（自动确认和自行确认）。")]),s._v(" "),n("p",[s._v("消费者在声明队列时，可以指定 autoAck 参数，当 autoAck=false 时，RabbitMQ 会等待消费者显式发回 "),n("strong",[s._v("ack")]),s._v(" 信号后才从内存(和磁盘，如果是持久化消 息的话)中移去消息。否则，RabbitMQ 会在队列中消息被消费后立即删除它。")]),s._v(" "),n("p",[s._v("采用消息确认机制后，只要令 "),n("strong",[s._v("autoAck=false")]),s._v("，消费者就有足够的时间处理消息(任务)，不用担心处理消息过程中消费者进程挂掉后消息丢失的问题， 因为 RabbitMQ 会一直持有消息直到消费者显式调用 basicAck 为止。")]),s._v(" "),n("p",[s._v("当 autoAck=false 时，对于 RabbitMQ 服务器端而言，队列中的消息分成了两部分：一部分是等待投递给消费者的消息；一部分是已经投递给消费者， 但是还没有收到消费者 ack 信号的消息。如果服务器端一直没有收到消费者的 ack 信号，并且消费此消息的消费者已经断开连接，则服务器端会安排该消息重新进入队列，等待投递给下一个消费者（也可能还是原来的那个消费者）。")]),s._v(" "),n("p",[s._v("RabbitMQ 不会为未 ack 的消息设置超时时间，它判断此消息是否需要重新投递给消费者的唯一依据是消费该消息的消费者连接是否已经断开。这么设计的原因是 RabbitMQ 允许消费者消费一条消息的时间可以很久很久")]),s._v(" "),n("h4",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),n("p",[n("strong",[s._v("如果消息达到无人订阅的队列会怎么办？")]),n("br"),s._v("\n消息会一直在队列中等待，RabbitMq 默认队列是无限长度的。\n"),n("strong",[s._v("多个消费者订阅到同一队列怎么办？")])]),s._v(" "),n("p",[s._v("消息以循环的方式发送给消费者，每个消息只会发送给一个消费者。")]),s._v(" "),n("p",[n("strong",[s._v("消息路由到了不存在的队列怎么办？")]),s._v("\n一般情况下，RabbitMq 会忽略，当这个消息不存在，也就是这消息丢了。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-3-虚拟主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-虚拟主机"}},[s._v("#")]),s._v(" 1.2.3 虚拟主机")]),s._v(" "),n("p",[n("strong",[s._v("虚拟消息服务器")]),s._v("，vhost，本质上就是一个 mini 版的 mq 服务器，有"),n("strong",[s._v("自己的队列、交换器和绑定")]),s._v("，最重要的，自己的权限机制。Vhost 提供了逻辑上的分离，可以将众多客户端进行区分，\n又可以避免队列和交换器的命名冲突。Vhost 必须在连接时指定，"),n("strong",[s._v("rabbitmq 包含缺省 vhost：“/”，通过缺省用户和口令 guest 进行访问")]),s._v("。")]),s._v(" "),n("p",[s._v("rabbitmq 里创建用户，必须要被指派给至少一个 vhost，并且只能访问被指派内的队列、交换器和绑定。Vhost 必须通过 rabbitmq 的管理控制工具创建。\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq04.jpg"}},[n("img",{attrs:{src:t(949),alt:"rabbitmq"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-2-4-交换器类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-交换器类型"}},[s._v("#")]),s._v(" 1.2.4 交换器类型")]),s._v(" "),n("p",[s._v("共有四种"),n("strong",[s._v("direct,fanout,topic,headers")]),s._v("，其种 headers(几乎和 direct 一样)不实用，可以忽略")]),s._v(" "),n("h4",{attrs:{id:"direct"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#direct"}},[s._v("#")]),s._v(" Direct")]),s._v(" "),n("p",[s._v("路由键完全匹配，消息被投递到对应的队列， direct 交换器是默认交换器。声明一个队列时，会自动绑定到默认交换器，并且以队列名称作为路由 键：channel->basic_public($msg,’’,’queue-name’)\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq05.jpg"}},[n("img",{attrs:{src:t(313),alt:"rabbitmq"}})])]),s._v(" "),n("h4",{attrs:{id:"fanout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fanout"}},[s._v("#")]),s._v(" Fanout")]),s._v(" "),n("p",[s._v("消息广播到绑定的队列，不管队列绑定了什么路由键，消息经过交换器，每个队列都有一份。\n"),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq06.jpg"}},[n("img",{attrs:{src:t(314),alt:"rabbitmq"}})])]),s._v(" "),n("h4",{attrs:{id:"topic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[s._v("#")]),s._v(" Topic")]),s._v(" "),n("p",[n("strong",[s._v('通过使用"'),n("em",[s._v('"和"#"通配符进行处理，使来自不同源头的消息到达同一个队列，"."将路由键分为了几个标识符，"')]),s._v('"匹配 1 个，"#"匹配一个 或多个')]),s._v(" "),n("a",{attrs:{"data-fancybox":"",title:"rabbitmq",href:"./image/rabbitmq07.jpg"}},[n("img",{attrs:{src:t(950),alt:"rabbitmq"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-3-延时插件安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-延时插件安装"}},[s._v("#")]),s._v(" 1.3 延时插件安装")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载延时插件:")]),s._v("\nhttps://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/tag/v3.8.0\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/rabbitmq/plugins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上传插件: ")]),s._v("\nrz rabbitmq_delayed_message_exchange-3.8.0.ez\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动延时插件: ")]),s._v("\nrabbitmq-plugins "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq_delayed_message_exchange\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports},313:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq05.f1888ba3.jpg"},314:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq06.0d84c7f3.jpg"},346:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq01.da070096.jpg"},947:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq02.1d8daecb.jpg"},948:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq03.bbbf49eb.jpg"},949:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq04.c3010f4f.jpg"},950:function(s,a,t){s.exports=t.p+"assets/img/rabbitmq07.fb3b5150.jpg"}}]);