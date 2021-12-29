(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1666:function(s,a,n){"use strict";n.r(a);var t=n(26),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-centos7安装nodejs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-centos7安装nodejs"}},[s._v("#")]),s._v(" 1.CentOS7安装NodeJS")]),s._v(" "),n("h2",{attrs:{id:"_1-1首先安装wget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1首先安装wget"}},[s._v("#")]),s._v(" 1.1首先安装wget")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果已经安装了可以跳过该步")]),s._v(" "),n("h2",{attrs:{id:"_1-2-下载nodejs最新的bin包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-下载nodejs最新的bin包"}},[s._v("#")]),s._v(" 1.2 下载nodejs最新的bin包")]),s._v(" "),n("p",[s._v("可以在下载页面"),n("a",{attrs:{href:"https://nodejs.org/en/download/"}},[s._v("https://nodejs.org/en/download/")]),s._v("中找到下载地址。\n然后执行指令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v14.15.5/node-v14.15.5-linux-x64.tar.xz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后就是等着下载完毕。"),n("br"),s._v(" "),n("strong",[s._v("如果下载失败，可以登录网站直接下载，然后手工上传到服务器")])]),s._v(" "),n("h2",{attrs:{id:"_1-3-解压安装包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-解压安装包"}},[s._v("#")]),s._v(" 1.3 解压安装包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("  /usr/local/src\n\nxz -d node-v14.15.5-linux-x64.tar.xz\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v14.15.5-linux-x64.tar\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_1-4-建立软连接-变为全局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-建立软连接-变为全局"}},[s._v("#")]),s._v(" 1.4 建立软连接，变为全局")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v14.15.5-linux-x64/bin\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/src/node-v14.15.5-linux-x64/bin/npm /usr/local/bin/\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/src/node-v14.15.5-linux-x64/bin/node /usr/local/bin/\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_1-5-修改环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-修改环境变量"}},[s._v("#")]),s._v(" 1.5 修改环境变量")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下两个路径为加入nodejs路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/node-v14.15.5-linux-x64\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_HOME")]),s._v("/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置生效")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_1-6安装完成检查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6安装完成检查"}},[s._v("#")]),s._v(" 1.6安装完成检查")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tianqikai vuepressblog_Gitee"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node -v")]),s._v("\nv14.15.5\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@tianqikai vuepressblog_Gitee"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm -v")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.14")]),s._v(".11\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);