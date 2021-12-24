(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1586:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-k8s集群管理工具kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-k8s集群管理工具kubectl"}},[t._v("#")]),t._v(" 3. K8s集群管理工具kubectl")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-命令格式"}},[t._v("3.1 命令格式")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-1-参数说明"}},[t._v("3.1.1 参数说明")])])])]),a("li",[a("a",{attrs:{href:"#_3-2-常用命令"}},[t._v("3.2 常用命令")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-2-1-获取kubectl的命令"}},[t._v("3.2.1 获取kubectl的命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-2-基础命令"}},[t._v("3.2.2 基础命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-3-部署命令"}},[t._v("3.2.3 部署命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-4-集群管理命令"}},[t._v("3.2.4 集群管理命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-5-故障和调试命令"}},[t._v("3.2.5 故障和调试命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-6-其它命令"}},[t._v("3.2.6 其它命令")])]),a("li",[a("a",{attrs:{href:"#_3-2-7-目前使用的命令"}},[t._v("3.2.7 目前使用的命令")])])])])])]),a("p"),t._v(" "),a("p",[t._v("kubectl是Kubernetes集群的命令行工具，通过kubectl能够对集群本身进行管理，并能够在集群上进行容器化应用的安装和部署")]),t._v(" "),a("h2",{attrs:{id:"_3-1-命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-命令格式"}},[t._v("#")]),t._v(" 3.1 命令格式")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#命令格式如下")]),t._v("\nkubectl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-1-1-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-参数说明"}},[t._v("#")]),t._v(" 3.1.1 参数说明")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("参数")]),t._v(" "),a("ul",[a("li",[t._v("command：指定要对资源执行的操作，例如create、get、describe、delete")]),t._v(" "),a("li",[t._v("type：指定资源类型，资源类型是大小写敏感的，开发者能够以单数 、复数 和 缩略的形式")])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get pod pod1\nkubectl get pods pod1\nkubectl get po pod1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8smaster ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get node")]),t._v("\nNAME        STATUS   ROLES    AGE    VERSION\nk8s-node1   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   100m   v1.18.0\nk8s-node2   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   75m    v1.18.0\nk8smaster   Ready    master   127m   v1.18.0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8smaster ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get nodes")]),t._v("\nNAME        STATUS   ROLES    AGE    VERSION\nk8s-node1   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   100m   v1.18.0\nk8s-node2   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   75m    v1.18.0\nk8smaster   Ready    master   127m   v1.18.0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8smaster ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get nodes k8s-node1")]),t._v("\nNAME        STATUS   ROLES    AGE    VERSION\nk8s-node1   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   101m   v1.18.0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8smaster ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get node k8s-node1")]),t._v("\nNAME        STATUS   ROLES    AGE    VERSION\nk8s-node1   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   101m   v1.18.0\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("ul",[a("li",[t._v("name：指定资源的名称，名称也是大小写敏感的，如果省略名称，则会显示所有的资源，例如")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@k8smaster ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl get nodes k8s-node1")]),t._v("\nNAME        STATUS   ROLES    AGE    VERSION\nk8s-node1   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   101m   v1.18.0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("flags：指定可选的参数，例如，可用 -s 或者 -server参数指定Kubernetes API server的地址和端口")])])]),t._v(" "),a("h2",{attrs:{id:"_3-2-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-常用命令"}},[t._v("#")]),t._v(" 3.2 常用命令")]),t._v(" "),a("h3",{attrs:{id:"_3-2-1-获取kubectl的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-获取kubectl的命令"}},[t._v("#")]),t._v(" 3.2.1 获取kubectl的命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取kubectl的命令")]),t._v("\nkubectl --help\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取某个命令的介绍和使用")]),t._v("\nkubectl get --help\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-2-2-基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-基础命令"}},[t._v("#")]),t._v(" 3.2.2 基础命令")]),t._v(" "),a("p",[t._v("常见的基础命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("create")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通过文件名或标准输入创建资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("expose")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将一个资源公开为一个新的Service")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("run")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在集群中运行一个特定的镜像")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("set")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在对象上设置特定的功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("get")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示一个或多个资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("explain")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文档参考资料")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("edit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用默认的编辑器编辑一个资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("delete")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通过文件名，标准输入，资源名称或标签来删除资源")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-3-部署命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-部署命令"}},[t._v("#")]),t._v(" 3.2.3 部署命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rollout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("管理资源的发布")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rolling-update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对给定的复制控制器滚动更新")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("scale")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("扩容或缩容Pod数量，Deployment、ReplicaSet、RC或Job")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("autoscale")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("创建一个自动选择扩容或缩容并设置Pod数量")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-4-集群管理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-集群管理命令"}},[t._v("#")]),t._v(" 3.2.4 集群管理命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("certificate")]),t._v(" "),a("td",[t._v("修改证书资源")])]),t._v(" "),a("tr",[a("td",[t._v("cluster-info")]),t._v(" "),a("td",[t._v("显示集群信息")])]),t._v(" "),a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("显示资源(CPU/M)")])]),t._v(" "),a("tr",[a("td",[t._v("cordon")]),t._v(" "),a("td",[t._v("标记节点不可调度")])]),t._v(" "),a("tr",[a("td",[t._v("uncordon")]),t._v(" "),a("td",[t._v("标记节点可被调度")])]),t._v(" "),a("tr",[a("td",[t._v("drain")]),t._v(" "),a("td",[t._v("驱逐节点上的应用，准备下线维护")])]),t._v(" "),a("tr",[a("td",[t._v("taint")]),t._v(" "),a("td",[t._v("修改节点taint标记")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-5-故障和调试命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-故障和调试命令"}},[t._v("#")]),t._v(" 3.2.5 故障和调试命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("describe")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示特定资源或资源组的详细信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("logs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在一个Pod中打印一个容器日志，如果Pod只有一个容器，容器名称是可选的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("attach")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("附加到一个运行的容器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("exec")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("执行命令到容器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("port-forward")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("转发一个或多个")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("proxy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("运行一个proxy到Kubernetes API Server")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("拷贝文件或目录到容器中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("检查授权")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-6-其它命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-其它命令"}},[t._v("#")]),t._v(" 3.2.6 其它命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("apply")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通过文件名或标准输入对资源应用配置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("patch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用补丁修改、更新资源的字段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("replace")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通过文件名或标准输入替换一个资源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("convert")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不同的API版本之间转换配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新资源上的标签")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("annotate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新资源上的注释")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("completion")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于实现kubectl工具自动补全")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("api-versions")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("打印受支持的API版本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("config")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("修改kubeconfig文件（用于访问API，比如配置认证信息）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("help")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("所有命令帮助")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("plugin")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("运行一个命令行插件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("打印客户端和服务版本信息")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-7-目前使用的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-7-目前使用的命令"}},[t._v("#")]),t._v(" 3.2.7 目前使用的命令")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个nginx镜像")]),t._v("\nkubectl create deployment nginx --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对外暴露端口")]),t._v("\nkubectl expose deployment nginx --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NodePort\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看资源")]),t._v("\nkubectl get pod, svc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);