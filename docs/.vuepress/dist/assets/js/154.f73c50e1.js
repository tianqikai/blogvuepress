(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1058:function(a,s,e){"use strict";e.r(s);var t=e(26),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"seata安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seata安装"}},[a._v("#")]),a._v(" Seata安装")]),a._v(" "),e("p",[e("strong",[a._v("我们这里使用docker安装部署，简化部署运维成本")])]),a._v(" "),e("h3",{attrs:{id:"_1、docker-拉取seata-server镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、docker-拉取seata-server镜像"}},[a._v("#")]),a._v(" 1、docker 拉取seata-server镜像")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("docker pull seataio/seata-server:latest\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2、查看镜像是否拉取成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看镜像是否拉取成功"}},[a._v("#")]),a._v(" 2、查看镜像是否拉取成功")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"",alt:"Seate镜像"}})]),a._v(" "),e("h3",{attrs:{id:"_3、docker启动seata-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、docker启动seata-server"}},[a._v("#")]),a._v(" 3、docker启动seata-server")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("docker run --name seata-server01  -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8091")]),a._v(":8091  -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SEATA_IP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("49.232")]),a._v(".21.151  -v /usr/local/docker/seata/conf:/root/seata-config -v /usr/local/docker/seata/logs:/root/logs/seata  seataio/seata-server\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4、查看seata是否启动成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看seata是否启动成功"}},[a._v("#")]),a._v(" 4、查看seata是否启动成功")]),a._v(" "),e("p",[e("img",{attrs:{src:"",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);