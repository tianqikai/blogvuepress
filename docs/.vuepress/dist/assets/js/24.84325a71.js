(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{331:function(s,t,a){s.exports=a.p+"assets/img/Jenkins.68785016.jpg"},680:function(s,t,a){s.exports=a.p+"assets/img/Jenkins1.fa900e3f.jpg"},681:function(s,t,a){s.exports=a.p+"assets/img/Jenkins2.646da093.jpg"},682:function(s,t,a){s.exports=a.p+"assets/img/Jenkins3.38601767.jpg"},683:function(s,t,a){s.exports=a.p+"assets/img/Jenkins4.6bd84ec4.jpg"},684:function(s,t,a){s.exports=a.p+"assets/img/Jenkins5.ae6e384f.jpg"},685:function(s,t,a){s.exports=a.p+"assets/img/Jenkins6.eb960a40.jpg"},796:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-centos-7-安装-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-centos-7-安装-jenkins"}},[s._v("#")]),s._v(" 1. CentOS 7 安装 Jenkins")]),s._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[s._v("★ 安装前提需要安装 jDK")])])],1),s._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[s._v("★ 如果你的系统没有自带git，那么也需要安装一个")])])],1),s._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[s._v("★ 安装Node js/strong>")])])],1),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n//安装完成后\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tianqikai ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis git")]),s._v("\ngit: /usr/bin/git /usr/share/man/man1/git.1.gz\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_1-1-下载安装包并安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-下载安装包并安装"}},[s._v("#")]),s._v(" 1.1 下载安装包并安装")]),s._v(" "),n("h3",{attrs:{id:"_1-1-1-安装方式一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-安装方式一"}},[s._v("#")]),s._v(" 1.1.1 安装方式一")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_1-1-2-安装方式二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-安装方式二"}},[s._v("#")]),s._v(" 1.1.2 安装方式二")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.jenkins.io/redhat/jenkins-2.156-1.1.noarch.rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jenkins-2.156-1.1.noarch.rpm\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tianqikai ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -lrt")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("389376")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("75872652")]),s._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" jenkins-2.156-1.1.noarch.rpm\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_1-2-修改配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-修改配置文件"}},[s._v("#")]),s._v(" 1.2 修改配置文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENKINS_USER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_1-3-修改目录权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-修改目录权限"}},[s._v("#")]),s._v(" 1.3 修改目录权限")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/lib/jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/cache/jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/log/jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_1-4-启动jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-启动jenkins"}},[s._v("#")]),s._v(" 1.4 启动Jenkins")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins restart\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jenkins\n\nsystemctl start jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_1-5-访问使用jenkin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-访问使用jenkin"}},[s._v("#")]),s._v(" 1.5 访问使用Jenkin")]),s._v(" "),n("h3",{attrs:{id:"_1-5-1-访问jenkins地址-http-ip或者域名-8080"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-访问jenkins地址-http-ip或者域名-8080"}},[s._v("#")]),s._v(" 1.5.1 访问jenkins地址 http:<ip或者域名>:8080")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://tianqikai.top:9999/manage"}},[s._v("http://tianqikai.top:9999")])]),s._v(" "),n("h3",{attrs:{id:"_1-5-2-执行命令查看密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-执行命令查看密码"}},[s._v("#")]),s._v(" 1.5.2 执行命令查看密码")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/jenkins/secrets/initialAdminPassword\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"Jenkins初始密码",href:"./image/Jenkins1.jpg"}},[n("img",{attrs:{src:a(680),alt:"Jenkins初始密码"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-5-3-插件安装选择推荐插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3-插件安装选择推荐插件"}},[s._v("#")]),s._v(" 1.5.3 插件安装选择推荐插件")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"Jenkins安装插件",href:"./image/Jenkins2.jpg"}},[n("img",{attrs:{src:a(681),alt:"Jenkins安装插件"}})])]),s._v(" "),n("p",[s._v("可能会安装失败\n"),n("a",{attrs:{"data-fancybox":"",title:"Jenkins安装插件",href:"./image/Jenkins.jpg"}},[n("img",{attrs:{src:a(331),alt:"Jenkins安装插件"}})])]),s._v(" "),n("p",[s._v("安装失败后续登陆之后处理")]),s._v(" "),n("h3",{attrs:{id:"_1-5-4-创建管理员账户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-4-创建管理员账户"}},[s._v("#")]),s._v(" 1.5.4 创建管理员账户")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"创建管理员账户",href:"./image/Jenkins3.jpg"}},[n("img",{attrs:{src:a(682),alt:"创建管理员账户"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-5-5-安装完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-5-安装完成"}},[s._v("#")]),s._v(" 1.5.5 安装完成")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"安装完成",href:"./image/Jenkins4.jpg"}},[n("img",{attrs:{src:a(683),alt:"安装完成"}})])]),s._v(" "),n("h2",{attrs:{id:"_1-6-jenkins安装插件失败问题解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-jenkins安装插件失败问题解决方案"}},[s._v("#")]),s._v(" 1.6 Jenkins安装插件失败问题解决方案")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"Jenkins安装插件",href:"./image/Jenkins.jpg"}},[n("img",{attrs:{src:a(331),alt:"Jenkins安装插件"}})])]),s._v(" "),n("h3",{attrs:{id:"_1-6-1-切换下载源地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-切换下载源地址"}},[s._v("#")]),s._v(" 1.6.1 切换下载源地址")]),s._v(" "),n("p",[n("strong",[s._v("点击Manage Jenkins->Correct->Advanced")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"切换下载源地址",href:"./image/Jenkins5.jpg"}},[n("img",{attrs:{src:a(684),alt:"切换下载源地址"}})])]),s._v(" "),n("p",[s._v("找到页面最下面的Update Site，替换链接为：https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")]),s._v(" "),n("h3",{attrs:{id:"_1-6-2-更新相关插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-更新相关插件"}},[s._v("#")]),s._v(" 1.6.2 更新相关插件")]),s._v(" "),n("h3",{attrs:{id:"_1-6-2-1-更新报错插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-1-更新报错插件"}},[s._v("#")]),s._v(" 1.6.2.1 更新报错插件")]),s._v(" "),n("p",[n("strong",[s._v("点击Manage Jenkins 找到报错信息，执行更新操作即可")])]),s._v(" "),n("h3",{attrs:{id:"_1-6-2-2-在available里面搜索重装即可"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-2-在available里面搜索重装即可"}},[s._v("#")]),s._v(" 1.6.2.2 在Available里面搜索重装即可")]),s._v(" "),n("p",[n("strong",[s._v("插件安装成功之后")])]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"插件安装成功之后",href:"./image/Jenkins6.jpg"}},[n("img",{attrs:{src:a(685),alt:"插件安装成功之后"}})])]),s._v(" "),n("p",[s._v("https://blog.csdn.net/qq_34272964/article/details/93747652\nhttps://juejin.cn/post/6844903864466948110#heading-6")]),s._v(" "),n("p",[s._v("你的私人令牌自动构建Jenkins使用已生成")]),s._v(" "),n("p",[s._v("8e482a2f314b4b2189a66871791537b4")]),s._v(" "),n("p",[s._v("Gitee WebHook 密码\nd16e44e59eb6e13ad27f7594c6db0089")]),s._v(" "),n("p",[s._v("wget https://nodejs.org/dist/v14.15.5/node-v14.15.5-linux-arm64.tar.xz")])])}),[],!1,null,null,null);t.default=e.exports}}]);