(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1111:function(a,s,t){"use strict";t.r(s);var e=t(26),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_6-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-dockerfile"}},[a._v("#")]),a._v(" 6. DockerFile")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_6-1-dockerfile是什么"}},[a._v("6.1 DockerFile是什么")])]),e("li",[e("a",{attrs:{href:"#_6-2-docker执行dockerfile的大致流程"}},[a._v("6.2 Docker执行Dockerfile的大致流程")]),e("ul",[e("li",[e("a",{attrs:{href:"#小总结"}},[a._v("小总结")])])])]),e("li",[e("a",{attrs:{href:"#_6-3-dockerfile常用命令"}},[a._v("6.3 DockerFile常用命令")])]),e("li",[e("a",{attrs:{href:"#_6-4-自定义镜像"}},[a._v("6.4  自定义镜像")]),e("ul",[e("li",[e("a",{attrs:{href:"#_6-4-1-创建dockerfile脚本文件"}},[a._v("6.4.1 创建Dockerfile脚本文件")])]),e("li",[e("a",{attrs:{href:"#_6-4-2-执行命令构建镜像"}},[a._v("6.4.2 执行命令构建镜像")])]),e("li",[e("a",{attrs:{href:"#_6-4-3-运行自定义镜像"}},[a._v("6.4.3 运行自定义镜像")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"_6-1-dockerfile是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-dockerfile是什么"}},[a._v("#")]),a._v(" 6.1 DockerFile是什么")]),a._v(" "),e("p",[e("strong",[a._v("Dockerfile是用来构建Docker镜像的构建文件，由一系列命令和参数构成的脚本")])]),a._v(" "),e("h4",{attrs:{id:"base-镜像-scratch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base-镜像-scratch"}},[a._v("#")]),a._v(" Base 镜像(scratch)")]),a._v(" "),e("p",[a._v("Docker Hub中 99%的镜像都是通过在base镜像中安装和配置需要的软件构建出来的")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("构建三步骤")]),a._v(" "),e("p",[a._v("​1. 编写Dockerfile文件")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("docker build")])]),a._v(" "),e("p",[a._v("​3. docker run")])]),a._v(" "),e("h2",{attrs:{id:"_6-2-docker执行dockerfile的大致流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-docker执行dockerfile的大致流程"}},[a._v("#")]),a._v(" 6.2 Docker执行Dockerfile的大致流程")]),a._v(" "),e("ol",[e("li",[a._v("docker 从基础镜像运行一个容器")]),a._v(" "),e("li",[a._v("执行一条指令并对容器作出修改")]),a._v(" "),e("li",[a._v("执行类似docker commit的操作提交- -个新的镜像层")]),a._v(" "),e("li",[a._v("docker再基 于刚提交的镜像运行一一个新容器")]),a._v(" "),e("li",[a._v("执行dockerfile中的 下一条指令直到所有指令都执行完成")])]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"小总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[a._v("#")]),a._v(" 小总结")]),a._v(" "),e("p",[a._v("从应用软件的角度来看，Dockerfile、 Docker镜像与Docker容器分别代表软件的三个不同阶段，\nDockerfile是软件的原材料\nDocker镜像是软件的交付品\nDocker容器则可以认为是软件的运行态。\nDockerfile面向开发，Docker镜 像成为交付标准，Docker容 器则涉及部署与运维，三者缺- -不可，合力充当Docker体系的基石。")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"./image/Snipaste_2020-10-03_17-35-08.png"}},[e("img",{attrs:{src:t(836),alt:""}})])]),a._v(" "),e("h2",{attrs:{id:"_6-3-dockerfile常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-dockerfile常用命令"}},[a._v("#")]),a._v(" 6.3 DockerFile常用命令")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("常用命令")]),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("FROM image_name:tag ")])]),a._v(":"),e("br"),a._v("\n定义了使用哪个基础镜像启动构建流程")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("MAINTAINER user_name")])]),a._v(":"),e("br"),a._v("\n声明镜像的创建者")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("ENV key value ")])]),a._v(":"),e("br"),a._v("\n设置环境变量 (可以写多条)")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("RUN command ")])]),a._v(":"),e("br"),a._v("\n是Dockerfile的核心部分(可以写多条)")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("ADD source_dir/file dest_dir/file")])]),a._v(":"),e("br"),a._v("\n将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后自动解压")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("COPY source_dir/file dest_dir/file ")])]),a._v(":"),e("br"),a._v("\n和ADD相似，但是如果有压缩文件并不能解压")],1),a._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[a._v("WORKDIR path_dir")])]),a._v(":"),e("br"),a._v("\n设置工作目录")],1)]),a._v(" "),e("h2",{attrs:{id:"_6-4-自定义镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-自定义镜像"}},[a._v("#")]),a._v(" 6.4  自定义镜像")]),a._v(" "),e("h3",{attrs:{id:"_6-4-1-创建dockerfile脚本文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-创建dockerfile脚本文件"}},[a._v("#")]),a._v(" 6.4.1 创建Dockerfile脚本文件")]),a._v(" "),e("p",[a._v("vi /mydata/Dockerfile")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("FROM centos:7\nMAINTAINER tianqikai\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#把宿主机当前上下文的tqk.txt拷贝到容器/usr/local/路径下")]),a._v("\nCOPY tqk.txt /usr/local/cincontainer.txt\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#把java与tomcat添加到容器中")]),a._v("\nADD jdk-8u231-linux-x64.tar.gz /usr/local/\nADD apache-tomcat-8.5.72.tar.gz /usr/local/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装vim编辑器")]),a._v("\nRUN yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置工 作访问时候的WORKDIR路径， 登录落脚点")]),a._v("\nENV MYPATH /usr/local\nWORKDIR "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MYPATH")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配:置java与tomcat环境变量")]),a._v("\nENV JAVA_HOME /usr/local/jdk1.8.0_231\nENV CLASSPATH "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar\nENV CATALINA_HOME /usr/local/apache-tomcat-8.5.72\nENV CATALINA_BASE /usr/local/apache-tomcat-8.5.72\nENV "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_HOME")]),a._v("/ib:"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CATALINA_HOME")]),a._v("/bin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#容器运行时监听的端口")]),a._v("\nEXPOSE "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动时运行tomcat")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# ENTRYPOINT ["/usrl/local/apache-tomcat-8.5.72/bin/startup.sh" ]')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# CMD ["/usr/local/apache-tomcat-8.5.72/bin/catalina.sh","run"]')]),a._v("\nCMD /usr/local/apache-tomcat-8.5.72/bin/startup.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -F /usr/local/apache-tomcat-8.5.72/logs/catalina.out\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br")])]),e("h3",{attrs:{id:"_6-4-2-执行命令构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-执行命令构建镜像"}},[a._v("#")]),a._v(" 6.4.2 执行命令构建镜像")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# .表示所需要的资源在当前执行命令的路径下")]),a._v("\ndocker build -t tomcat-tqk "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\ndocker build -t tomcat-tqk /mydata\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@TXYUN-NO2 mydata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker build -t tomcat-tqk .")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"_6-4-3-运行自定义镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-3-运行自定义镜像"}},[a._v("#")]),a._v(" 6.4.3 运行自定义镜像")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("docker run  -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9080")]),a._v(":8080 --name tqk001 tomcat-tqk \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports},836:function(a,s,t){a.exports=t.p+"assets/img/Snipaste_2020-10-03_17-35-08.c88255e4.png"}}]);