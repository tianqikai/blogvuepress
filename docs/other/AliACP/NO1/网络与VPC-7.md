# 8. 网络与VPC

## 8.1 网络与VPC背景

<a data-fancybox title="网络与VPC背景" href="./image/ecs020.png">![网络与VPC背景]](./image/ecs020.png)</a>


<a data-fancybox title="网络产品概览" href="./image/ecs021.png">![网络产品概览]](./image/ecs021.png)</a>

## 8.2 专有网络VPC

-  专有网络VPC（Virtual Private Cloud）是基于阿里云构建的一个隔离的网络环境，专有
网络之间逻辑上彻底隔离。VPC 主要提供了两个能力：

1.  用户可以自定义网络拓扑，包括选择自有 IP 地址范围、划分网段、配置路由表和网关等；
2.  通过专线或VPN与原有数据中心连接，云上和云下的资源使用同一个网络地址规划，实现
应用的平滑迁移上云。

<a data-fancybox title="专有网络VPC" href="./image/ecs022.png">![专有网络VPC]](./image/ecs022.png)</a>

### 8.2.1 专有网络VPC特点

<a data-fancybox title="专有网络VPC特点" href="./image/ecs023.png">![专有网络VPC特点]](./image/ecs023.png)</a>

<a data-fancybox title="专有网络VPC特点" href="./image/ecs024.png">![专有网络VPC特点]](./image/ecs024.png)</a>

### 8.2.2 专有网络VPC产品架构

<a data-fancybox title="专有网络VPC产品架构" href="./image/ecs025.png">![专有网络VPC产品架构]](./image/ecs025.png)</a>

### 8.2.3 路由器与交换机

<a data-fancybox title="路由器与交换机" href="./image/ecs026.png">![路由器与交换机]](./image/ecs026.png)</a>

### 8.2.4 路由表与路由条目

<a data-fancybox title="路由器与交换机" href="./image/ecs027.png">![路由器与交换机]](./image/ecs027.png)</a>

### 8.2.5 弹性公网IP

弹性公网IP（Elastic IP Address，简称EIP），独立的公网IP资源，可以绑定到阿里云专有网络
VPC类型的ECS、NAT网关、私网负载均衡SLB上，并可以动态解绑，实现公网IP和ECS、NAT网
关、SLB的解耦，满足灵活管理的要求。

<a data-fancybox title="弹性公网IP" href="./image/ecs028.png">![弹性公网IP]](./image/ecs028.png)</a>


### 8.2.6 高速通道

高速通道是一款为用户提供网络互连能力的产品，为用户实现高速、稳定、安全的私网互通。

高速通道可实现云下IDC接入阿里云、IDC与云上VPC互通以及云上VPC之间跨地域互通的能力。

<a data-fancybox title="高速通道" href="./image/ecs029.png">![高速通道]](./image/ecs029.png)</a>

<a data-fancybox title="高速通道" href="./image/ecs031.png">![高速通道]](./image/ecs031.png)</a>

### 8.2.7 VPN网关
VPN网关（VPN Gateway）是一款基于Internet，通过加密通道将企业数据中心、企业办公网络、
或internet终端和阿里云专有网络（Virtual Private Cloud）安全可靠连接起来的服务。

<a data-fancybox title="VPN网关" href="./image/ecs030.png">![VPN网关]](./image/ecs030.png)</a>


<a data-fancybox title="VPN网关" href="./image/ecs032.png">![VPN网关]](./image/ecs032.png)</a>

### 8.2.8 NAT网关

NAT网关（NAT Gateway)是一款企业级的VPC公
网网关，提供SNAT和DNAT功能，支持多IP，支
持共享带宽，具备TGbps级别的集群转发能力和
Region级别的高可用性（跨可用区的容灾）

<a data-fancybox title="NAT网关" href="./image/ecs033.png">![NAT网关]](./image/ecs033.png)</a>

### 8.2.9 共享公网带宽

<a data-fancybox title="共享公网带宽" href="./image/ecs034.png">![共享公网带宽]](./image/ecs034.png)</a>


### 8.2.9 IPV6网关

• IPv6网关（IPv6 Gateway）是专有网络（VPC）的一个IPv6互联网流量网关。

• 您可以通过配置IPv6互联网带宽和仅主动出规则，灵活定义IPv6互联网出流量和入流量。

<a data-fancybox title="IPV6网关" href="./image/ecs035.png">![IPV6网关]](./image/ecs035.png)</a>

### 8.2.10 设置EIP网卡可见模式

• 弹性公网IP本质上是一个NAT IP。

• 由于普通模式（NAT模式）下的公网IP存在于网关设备，并不在ECS实例的网卡上，所以在操
作系统内看不到公网IP，只能看到网卡上的私网IP。

• EIP网卡可见模式功能使EIP在网卡上可见，解决了

:::tip 上述问题：
1. EIP替换辅助弹性网卡的私网IP，辅助弹性网卡将
变为一个纯公网网卡，私网功能不再可用。

2. EIP在操作系统内部的弹性网卡上可见，可直接通
过ifconfig或ipconfig获取网卡上的公网IP地址。

3. EIP可支持全部IP协议类型，支持FTP、H.323、
SIP、DNS、RTSP、TFTP等协议。
:::

## 8.3 VPC的网络规划、访问控制及路由

<a data-fancybox title="VPC的网络规划、访问控制及路由" href="./image/ecs036.png">![VPC的网络规划、访问控制及路由]](./image/ecs036.png)</a>

<a data-fancybox title="VPC的网络规划、访问控制及路由" href="./image/ecs037.png">![VPC的网络规划、访问控制及路由]](./image/ecs037.png)</a>

<a data-fancybox title="VPC的网络规划、访问控制及路由" href="./image/ecs038.png">![VPC的网络规划、访问控制及路由]](./image/ecs038.png)</a>


### 8.2.12 NAT网关

### 8.2.13 NAT网关
