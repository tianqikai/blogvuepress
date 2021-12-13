# 3. Seata快速入门

## 3.1  Seata-Server（TC）环境搭建

:::tip Server端存储模式（store.mode）支持三种：
1. **file：单机模式**，全局事务会话信息内存中读写并持久化本地文件root.data，性能较高 
2. **db：高可用模式**，全局事务会话信息通过db共享，相应性能差些 
3. **redis：**  Seata-Server1.3及以上版本支持,性能较高,**存在事务信息丢失风险**,请提前配置适合当前场景的redis持久化配置
:::

**db存储模式+Nacos(注册&配置中心)部署**

### 3.1.1 下载安装包

[https://github.com/seata/seata/releases]


### 3.1.2 建表(仅db模式)

### 3.1.3 修改store.mode

### 3.1.4 修改数据库连接

### 3.1.5 配置Nacos注册中心

### 3.1.6 配置Nacos配置中心

### 3.1.7 启动Seata Server
