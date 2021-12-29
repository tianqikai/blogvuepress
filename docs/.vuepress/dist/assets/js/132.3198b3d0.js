(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1117:function(s,a,t){s.exports=t.p+"assets/img/image-20201117093606710.3924cfae.png"},1118:function(s,a,t){s.exports=t.p+"assets/img/image-20201117093902459.7fbfc6f6.png"},1119:function(s,a,t){s.exports=t.p+"assets/img/image-20201117094142491.26565133.png"},1596:function(s,a,t){"use strict";t.r(a);var e=t(26),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_7-k8s核心技术service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-k8s核心技术service"}},[s._v("#")]),s._v(" 7. K8s核心技术Service")]),s._v(" "),e("h2",{attrs:{id:"_7-1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-前言"}},[s._v("#")]),s._v(" 7.1 前言")]),s._v(" "),e("p",[s._v("前面我们了解到 Deployment 只是保证了支撑服务的微服务Pod的数量，但是没有解决如何访问这些服务的问题。一个Pod只是一个运行服务的实例，随时可能在一个节点上停止，在另一个节点以一个新的IP启动一个新的Pod，因此不能以确定的IP和端口号提供服务。")]),s._v(" "),e("p",[s._v("要稳定地提供服务需要服务发现和负载均衡能力。服务发现完成的工作，是针对客户端访问的服务，找到对应的后端服务实例。在K8S集群中，客户端需要访问的服务就是Service对象。每个Service会对应一个集群内部有效的虚拟IP，集群内部通过虚拟IP访问一个服务。")]),s._v(" "),e("p",[s._v("在K8S集群中，微服务的负载均衡是由kube-proxy实现的。kube-proxy是k8s集群内部的负载均衡器。它是一个分布式代理服务器，在K8S的每个节点上都有一个；这一设计体现了它的伸缩性优势，需要访问服务的节点越多，提供负载均衡能力的kube-proxy就越多，高可用节点也随之增多。与之相比，我们平时在服务器端使用反向代理作负载均衡，还要进一步解决反向代理的高可用问题。")]),s._v(" "),e("h2",{attrs:{id:"service存在的意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service存在的意义"}},[s._v("#")]),s._v(" Service存在的意义")]),s._v(" "),e("h3",{attrs:{id:"防止pod失联【服务发现】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防止pod失联【服务发现】"}},[s._v("#")]),s._v(" 防止Pod失联【服务发现】")]),s._v(" "),e("p",[s._v("因为Pod每次创建都对应一个IP地址，而这个IP地址是短暂的，每次随着Pod的更新都会变化，假设当我们的前端页面有多个Pod时候，同时后端也多个Pod，这个时候，他们之间的相互访问，就需要通过注册中心，拿到Pod的IP地址，然后去访问对应的Pod")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1117),alt:"image-20201117093606710"}})]),s._v(" "),e("h3",{attrs:{id:"定义pod访问策略【负载均衡】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义pod访问策略【负载均衡】"}},[s._v("#")]),s._v(" 定义Pod访问策略【负载均衡】")]),s._v(" "),e("p",[s._v("页面前端的Pod访问到后端的Pod，中间会通过Service一层，而Service在这里还能做负载均衡，负载均衡的策略有很多种实现策略，例如：")]),s._v(" "),e("ul",[e("li",[s._v("随机")]),s._v(" "),e("li",[s._v("轮询")]),s._v(" "),e("li",[s._v("响应比")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(1118),alt:"image-20201117093902459"}})]),s._v(" "),e("h2",{attrs:{id:"pod和service的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod和service的关系"}},[s._v("#")]),s._v(" Pod和Service的关系")]),s._v(" "),e("p",[s._v("这里Pod 和 Service 之间还是根据 label 和 selector 建立关联的 【和Controller一样】")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1119),alt:"image-20201117094142491"}})]),s._v(" "),e("p",[s._v("我们在访问service的时候，其实也是需要有一个ip地址，这个ip肯定不是pod的ip地址，而是 虚拟IP "),e("code",[s._v("vip")])]),s._v(" "),e("h2",{attrs:{id:"service常用类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service常用类型"}},[s._v("#")]),s._v(" Service常用类型")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Service常用类型有三种")]),s._v(" "),e("ul",[e("li",[e("font",{attrs:{color:"red"}},[e("strong",[s._v("ClusterIp")])]),s._v("：集群内部访问")],1),s._v(" "),e("li",[e("font",{attrs:{color:"red"}},[e("strong",[s._v("NodePort")])]),s._v("：对外访问应用使用")],1),s._v(" "),e("li",[e("font",{attrs:{color:"red"}},[e("strong",[s._v("LoadBalancer")])]),s._v("：对外访问应用使用，公有云")],1)])]),s._v(" "),e("h3",{attrs:{id:"举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),e("p",[s._v("我们可以导出一个文件 包含service的配置信息")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl expose deployment web --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --target-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --dry-run -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" service.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("service.yaml 如下所示")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creationTimestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("loadBalancer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("如果我们没有做设置的话，默认使用的是第一种方式 ClusterIp，也就是只能在集群内部使用，我们可以添加一个type字段，用来设置我们的service类型")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creationTimestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NodePort\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("loadBalancer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("修改完命令后，我们使用创建一个pod")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl apply -f service.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8smaster ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubectl get pods,svc")]),s._v("\nNAME                           READY   STATUS    RESTARTS   AGE\npod/nginx-f89759699-xffhv      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          11h\npod/web-5dcb957ccc-swrfk       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\npod/web-tqk-86bf49fd74-kj8rd   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          54m\npod/web1111-68bd75d8d5-wwwwd   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\n\nNAME                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        AGE\nservice/kubernetes   ClusterIP   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP        13h\nservice/nginx        NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.104")]),s._v(".215.38    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":32307/TCP   11h\nservice/web          NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.109")]),s._v(".206.193   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":30650/TCP   7s\nservice/web1         NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.107")]),s._v(".26.157    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":30257/TCP   61m\nservice/web2         NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".20.34      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":31758/TCP   53m\nservice/web2222      NodePort    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.111")]),s._v(".55.53     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":32741/TCP   6m1s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("然后能够看到，已经成功修改为 NodePort类型了，最后剩下的一种方式就是LoadBalanced：对外访问应用使用公有云")]),s._v(" "),e("p",[s._v("node一般是在内网进行部署，而外网一般是不能访问到的，那么如何访问的呢？")]),s._v(" "),e("ul",[e("li",[s._v("找到一台可以通过外网访问机器，安装nginx，反向代理")]),s._v(" "),e("li",[s._v("手动把可以访问的节点添加到nginx中")])]),s._v(" "),e("p",[s._v("如果我们使用LoadBalancer，就会有负载均衡的控制器，类似于nginx的功能，就不需要自己添加到nginx上")])])}),[],!1,null,null,null);a.default=n.exports}}]);