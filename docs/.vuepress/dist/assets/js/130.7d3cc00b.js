(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1003:function(s,t,a){s.exports=a.p+"assets/img/docker01.338e31b7.jpg"},1004:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2020-10-03_10-54-57.c2325287.jpg"},1005:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2020-10-03_10-55-24.75574118.png"},1568:function(s,t,a){"use strict";a.r(t);var e=a(26),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_2-centos7-0安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-centos7-0安装docker"}},[s._v("#")]),s._v(" 2. Centos7.0安装Docker")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_2-1-移除以前docker相关包"}},[s._v("2.1 移除以前docker相关包")])]),e("li",[e("a",{attrs:{href:"#_2-2-配置yum源"}},[s._v("2.2 配置yum源")])]),e("li",[e("a",{attrs:{href:"#_2-3-安装docker"}},[s._v("2.3 安装docker")])]),e("li",[e("a",{attrs:{href:"#_2-4-启动"}},[s._v("2.4 启动")])]),e("li",[e("a",{attrs:{href:"#_2-5-配置加速"}},[s._v("2.5 配置加速")]),e("ul",[e("li",[e("a",{attrs:{href:"#_2-5-1-阿里云镜像加速"}},[s._v("2.5.1 阿里云镜像加速")])]),e("li",[e("a",{attrs:{href:"#_2-5-2-配置本机docker运行镜像加速器"}},[s._v("2.5.2 配置本机Docker运行镜像加速器")])]),e("li",[e("a",{attrs:{href:"#_2-5-3-重新启动-docker-后台服务"}},[s._v("2.5.3 重新启动 Docker 后台服务")])])])]),e("li",[e("a",{attrs:{href:"#_2-6-启动docker后台容器"}},[s._v("2.6 启动Docker后台容器")])])])]),s._v(" "),e("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/"}},[s._v("https://docs.docker.com/engine/install/centos/")]),e("p"),s._v(" "),e("h2",{attrs:{id:"_2-1-移除以前docker相关包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-移除以前docker相关包"}},[s._v("#")]),s._v(" 2.1 移除以前docker相关包")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-common "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"_2-2-配置yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置yum源"}},[s._v("#")]),s._v(" 2.2 配置yum源")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--add-repo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttp://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-3-安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装docker"}},[s._v("#")]),s._v(" 2.3 安装docker")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce docker-ce-cli containerd.io\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以下是在安装k8s的时候使用")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-20.10.7 docker-ce-cli-20.10.7  containerd.io-1.4.6\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"_2-4-启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动"}},[s._v("#")]),s._v(" 2.4 启动")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker --now\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-5-配置加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-配置加速"}},[s._v("#")]),s._v(" 2.5 配置加速")]),s._v(" "),e("p",[e("strong",[s._v("这里额外添加了docker的生产环境核心配置cgroup")])]),s._v(" "),e("h3",{attrs:{id:"_2-5-1-阿里云镜像加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-阿里云镜像加速"}},[s._v("#")]),s._v(" 2.5.1 阿里云镜像加速")]),s._v(" "),e("p",[s._v("​\n"),e("a",{attrs:{href:"https://promotion.aliyun.com/ntms/act/kubernetes.html"}},[s._v("https://promotion.aliyun.com/ntms/act/kubernetes.html")])]),s._v(" "),e("p",[s._v("​\t鉴于国内网络问题，后续拉取Docker镜像十分缓慢，我们可以需要配置加速器来解决，\n我使用的是阿里云的本人自己账号的镜像地址(需要自己注册有一个属于你自己的): https://gmbtuhv4.mirror.aliyuncs.com")]),s._v(" "),e("p",[s._v("登录阿里云服务器")]),s._v(" "),e("p",[e("strong",[s._v("控制台-》产品与服务-》容器镜像服务-》镜像加速器")])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"阿里云镜像加速",href:"./image/docker01.jpg"}},[e("img",{attrs:{src:a(1003),alt:"阿里云镜像加速"}})])]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_2-5-2-配置本机docker运行镜像加速器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-配置本机docker运行镜像加速器"}},[s._v("#")]),s._v(" 2.5.2 配置本机Docker运行镜像加速器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://gmbtuhv4.mirror.aliyuncs.com"],\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2"\n}\nEOF')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_2-5-3-重新启动-docker-后台服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-3-重新启动-docker-后台服务"}},[s._v("#")]),s._v(" 2.5.3 重新启动 Docker 后台服务")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload  \n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux系统下配置完加速器需要检查是否生效")]),s._v("\ndocker info\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# registry-mirror参数说明配置成功，如下所示: https://gmbtuhv4.mirror.aliyuncs.com")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"_2-6-启动docker后台容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-启动docker后台容器"}},[s._v("#")]),s._v(" 2.6 启动Docker后台容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker run hello-world\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("hr"),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"hello world",href:"./image/Snipaste_2020-10-03_10-54-57.jpg"}},[e("img",{attrs:{src:a(1004),alt:"hello world"}})])]),s._v(" "),e("p",[e("strong",[s._v("run干了什么")])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"hello world",href:"./image/Snipaste_2020-10-03_10-55-24.png"}},[e("img",{attrs:{src:a(1005),alt:"hello world"}})])])])}),[],!1,null,null,null);t.default=n.exports}}]);