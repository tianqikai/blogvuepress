(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1603:function(s,a,e){"use strict";e.r(a);var t=e(26),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_14-k8s集群资源监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-k8s集群资源监控"}},[s._v("#")]),s._v(" 14. K8s集群资源监控")]),s._v(" "),e("h2",{attrs:{id:"_14-1-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-概述"}},[s._v("#")]),s._v(" 14.1 概述")]),s._v(" "),e("h3",{attrs:{id:"_14-1-1-监控指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-1-监控指标"}},[s._v("#")]),s._v(" 14.1.1 监控指标")]),s._v(" "),e("p",[s._v("一个好的系统，主要监控以下内容")]),s._v(" "),e("ul",[e("li",[s._v("集群监控\n"),e("ul",[e("li",[s._v("节点资源利用率")]),s._v(" "),e("li",[s._v("节点数")]),s._v(" "),e("li",[s._v("运行Pods")])])]),s._v(" "),e("li",[s._v("Pod监控\n"),e("ul",[e("li",[s._v("容器指标")]),s._v(" "),e("li",[s._v("应用程序【程序占用多少CPU、内存】")])])])]),s._v(" "),e("h3",{attrs:{id:"_14-1-2-监控平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-2-监控平台"}},[s._v("#")]),s._v(" 14.1.2 监控平台")]),s._v(" "),e("p",[s._v("使用普罗米修斯【prometheus】 + Grafana 搭建监控平台")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("prometheus【定时搜索被监控服务的状态】")]),s._v(" "),e("ul",[e("li",[s._v("开源的")]),s._v(" "),e("li",[s._v("监控、报警、数据库")]),s._v(" "),e("li",[s._v("以HTTP协议周期性抓取被监控组件状态")]),s._v(" "),e("li",[s._v("不需要复杂的集成过程，使用http接口接入即可")])])]),s._v(" "),e("li",[e("p",[s._v("Grafana")]),s._v(" "),e("ul",[e("li",[s._v("开源的数据分析和可视化工具")]),s._v(" "),e("li",[s._v("支持多种数据源")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120082257441.png",alt:"image-20201120082257441"}})]),s._v(" "),e("h2",{attrs:{id:"_14-2-部署prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-部署prometheus"}},[s._v("#")]),s._v(" 14.2 部署prometheus")]),s._v(" "),e("p",[s._v("首先需要部署一个守护进程")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120083606298.png",alt:"image-20201120083606298"}})]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("---\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: node-exporter\n  namespace: kube-system\n  labels:\n    k8s-app: node-exporter\nspec:\n  selector:\n    matchLabels:\n      k8s-app: node-exporter\n  template:\n    metadata:\n      labels:\n        k8s-app: node-exporter\n    spec:\n      containers:\n      - image: prom/node-exporter\n        name: node-exporter\n        ports:\n        - containerPort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v("\n          protocol: TCP\n          name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    k8s-app: node-exporter\n  name: node-exporter\n  namespace: kube-system\nspec:\n  ports:\n  - name: http\n    port: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v("\n    nodePort: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31672")]),s._v("\n    protocol: TCP\n  type: NodePort\n  selector:\n    k8s-app: node-exporter\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br")])]),e("p",[s._v("然后执行下面命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl create -f node-exporter.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行完，发现会报错")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120084034160.png",alt:"image-20201120084034160"}})]),s._v(" "),e("p",[s._v("这是因为版本不一致的问题，因为发布的正式版本，而这个属于测试版本")]),s._v(" "),e("p",[s._v("所以我们找到第一行，然后把内容修改为如下所示")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改前")]),s._v("\napiVersion: extensions/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改后 【正式版本发布后，测试版本不能使用】")]),s._v("\napiVersion: apps/v1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("创建完成后的效果")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120085721454.png",alt:"image-20201120085721454"}})]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster prometheus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f node-exporter.yaml")]),s._v("\ndaemonset.apps/node-exporter created\nservice/node-exporter created\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("然后通过yaml的方式部署prometheus")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120083107594.png",alt:"image-20201120083107594"}})]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("文件说明")]),s._v(" "),e("ul",[e("li",[s._v("configmap：定义一个configmap：存储一些配置文件【不加密】")]),s._v(" "),e("li",[s._v("prometheus.deploy.yaml：部署一个deployment【包括端口号，资源限制】")]),s._v(" "),e("li",[s._v("prometheus.svc.yaml：对外暴露的端口")]),s._v(" "),e("li",[s._v("rbac-setup.yaml：分配一些角色的权限")])])]),s._v(" "),e("ul",[e("li",[s._v("下面我们进入目录下，首先部署 rbac-setup.yaml")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl create -f rbac-setup.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster prometheus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f rbac-setup.yaml")]),s._v("\nclusterrole.rbac.authorization.k8s.io/prometheus created\nserviceaccount/prometheus created\nclusterrolebinding.rbac.authorization.k8s.io/prometheus created\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/image-20201120090002150.png",alt:"image-20201120090002150"}})]),s._v(" "),e("ul",[e("li",[s._v("然后分别部署")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署configmap")]),s._v("\nkubectl create -f configmap.yaml\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----------------------------------------------")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署deployment")]),s._v("\nkubectl create -f prometheus.deploy.yml\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster prometheus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl create -f prometheus.deploy.yml")]),s._v("\nerror: unable to recognize "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prometheus.deploy.yml"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" no matches "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" kind "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Deployment"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" version "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apps/v1beta2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改版本同上 ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-----------------------------------------------")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署svc")]),s._v("\nkubectl create -f prometheus.svc.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("部署完成后，我们使用下面命令查看")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get pods -n kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/image-20201120093213576.png",alt:"image-20201120093213576"}})]),s._v(" "),e("ul",[e("li",[s._v("在我们部署完成后，即可看到 prometheus 的 pod了，然后通过下面命令，能够看到对应的端口")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get svc -n kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/image-20201121091348752.png",alt:"image-20201121091348752"}})]),s._v(" "),e("ul",[e("li",[s._v("通过这个，我们可以看到 "),e("code",[s._v("prometheus")]),s._v(" 对外暴露的端口为 30003，访问页面即可对应的图形化界面")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("http://192.168.222.3:30003\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/image-20201121091508851.png",alt:"image-20201121091508851"}})]),s._v(" "),e("hr"),s._v(" "),e("ul",[e("li",[s._v("在上面我们部署完prometheus后，我们还需要来部署grafana")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl create -f grafana-deploy.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("然后执行完后，发现下面的问题")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("error: unable to recognize "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grafana-deploy.yaml"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" no matches "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" kind "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Deployment"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" version "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extensions/v1beta1"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("我们需要修改如下内容")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改")]),s._v("\napiVersion: apps/v1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加selector")]),s._v("\nspec:\n  replicas: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  selector:\n    matchLabels:\n      app: grafana\n      component: core\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("修改完成后，我们继续执行上述代码")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建deployment")]),s._v("\nkubectl create -f grafana-deploy.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建svc")]),s._v("\nkubectl create -f grafana-svc.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 ing")]),s._v("\nkubectl create -f grafana-ing.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("我们能看到，我们的grafana正在")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120110426534.png",alt:"image-20201120110426534"}})]),s._v(" "),e("h3",{attrs:{id:"_14-2-2-配置数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-2-配置数据源"}},[s._v("#")]),s._v(" 14.2.2 配置数据源")]),s._v(" "),e("p",[s._v("下面我们需要开始打开 Grafana，然后配置数据源，导入数据显示模板")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get svc -n kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster grafana"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n kube-system")]),s._v("\nNAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  AGE\ngrafana         NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".3.17     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":31856/TCP           22s\nkube-dns        ClusterIP   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.10     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("/UDP,53/TCP,9153/TCP   40h\nnode-exporter   NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".249.35   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v(":31672/TCP           13m\nprometheus      NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".41.106   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":30003/TCP           5m42s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),s._v(" "),e("p",[s._v("我们可以通过")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("http://192.168.222.3:31856\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("访问我们的 grafana 图形化页面")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201120112048887.png",alt:"image-20201120112048887"}})]),s._v(" "),e("p",[s._v("然后输入账号和密码：admin admin")]),s._v(" "),e("p",[s._v("进入后，我们就需要配置 prometheus 的数据源")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster grafana"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get svc -n kube-system")]),s._v("\nNAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  AGE\ngrafana         NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.99")]),s._v(".3.17     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":31856/TCP           22s\nkube-dns        ClusterIP   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.10     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("/UDP,53/TCP,9153/TCP   40h\nnode-exporter   NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".249.35   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v(":31672/TCP           13m\nprometheus      NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".41.106   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":30003/TCP           5m42s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("和 对应的IP【这里IP是我们的ClusterIP】\n"),e("img",{attrs:{src:"images/pormetheus01.jpg",alt:"pormetheus01.jpg"}})]),s._v(" "),e("h3",{attrs:{id:"_14-2-3-设置显示数据的模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-2-3-设置显示数据的模板"}},[s._v("#")]),s._v(" 14.2.3 设置显示数据的模板")]),s._v(" "),e("ul",[e("li",[s._v("选择Dashboard，导入我们的模板")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121092312118.png",alt:"image-20201121092312118"}})]),s._v(" "),e("ul",[e("li",[s._v("然后输入 315 号模板")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121092418180.png",alt:"image-20201121092418180"}})]),s._v(" "),e("ul",[e("li",[s._v("然后选择 prometheus数据源 mydb，导入即可")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/pormetheus02.jpg",alt:"pormetheus02.jpg"}})]),s._v(" "),e("ul",[e("li",[s._v("导入后的效果如下所示")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121092610154.png",alt:"image-20201121092610154"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);