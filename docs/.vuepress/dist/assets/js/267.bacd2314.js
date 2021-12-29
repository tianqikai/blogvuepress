(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1578:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_7-docker私有仓库搭建与配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-docker私有仓库搭建与配置"}},[s._v("#")]),s._v(" 7. Docker私有仓库搭建与配置")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_7-1-拉取镜像并启动"}},[s._v("7.1 拉取镜像并启动")])]),t("li",[t("a",{attrs:{href:"#_7-3-修改daemon-json"}},[s._v("7.3 修改daemon.json")])]),t("li",[t("a",{attrs:{href:"#_7-4-镜像上传至私有仓库"}},[s._v("7.4 镜像上传至私有仓库")])]),t("li",[t("a",{attrs:{href:"#_7-4-harbor搭建私有仓库"}},[s._v("7.4 Harbor搭建私有仓库")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"_7-1-拉取镜像并启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-拉取镜像并启动"}},[s._v("#")]),s._v(" 7.1 拉取镜像并启动")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取私有仓库镜像")]),s._v("\ndocker pull registry:2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动私有仓库容器")]),s._v("\ndocker run -d -v /opt/registry:/var/lib/registry -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 --name myregistry registry:2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("打开浏览器输入地址"),t("strong",[s._v("http://122.51.156.245:5000/v2/_catalog")]),s._v(' 看到 {"repositories":[]} 表示私有仓库搭建成功\n并且内容为空')]),s._v(" "),t("h2",{attrs:{id:"_7-3-修改daemon-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-修改daemon-json"}},[s._v("#")]),s._v(" 7.3 修改daemon.json")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加以下内容，保存退出。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"122.51.156.245:5000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此步用于让 docker信任私有仓库地址")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker 服务")]),s._v("\nsystemctl restart docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_7-4-镜像上传至私有仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-镜像上传至私有仓库"}},[s._v("#")]),s._v(" 7.4 镜像上传至私有仓库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标记此镜像为私有仓库的镜像")]),s._v("\ndocker tag hello-world "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122.51")]),s._v(".156.245:5000/hello-world\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次启动私服容器")]),s._v("\ndocker start registry\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式如下：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull 122.51.156.245:5000/镜像名称:镜像版本号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传标记的镜像")]),s._v("\ndocker push "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122.51")]),s._v(".156.245:5000/hello-world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("strong",[s._v("访问 http://122.51.156.245:5000/v2/_catalog 查看私有仓库目录，可以看到刚上传的镜像了")])]),s._v(" "),t("h2",{attrs:{id:"_7-4-harbor搭建私有仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-harbor搭建私有仓库"}},[s._v("#")]),s._v(" 7.4 Harbor搭建私有仓库")])])}),[],!1,null,null,null);a.default=e.exports}}]);