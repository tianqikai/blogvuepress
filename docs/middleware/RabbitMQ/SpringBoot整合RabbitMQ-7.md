# 8. SpringBoot整合RabbitMQ

[[toc]]

## 8.1 pom 文件与统一配置

### 8.1.1 pom文件
Springboot 的版本我们使用 2.6.0，保持和 Springboot 版本的一致性,maven默认加载一致的版本

```xml
    <!--Rabbitmq        -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-amqp</artifactId>
    </dependency>
```
### 8.1.2 application.properties

```yml
server.port=8888
spring.application.name=springboot-rabbitmq
spring.rabbitmq.host=110.42.146.236
spring.rabbitmq.port=5672
spring.rabbitmq.username=tqk001
spring.rabbitmq.password=12345@tqk
spring.rabbitmq.publisher-confirms=true
spring.rabbitmq.virtual-host=/
```

### 8.1.3 RabbitTemplate

```java
    //===============生产者发送确认==========
    @Bean
    public RabbitTemplate.ConfirmCallback confirmCallback(){
        //TODO 发送方确认

        return new RabbitTemplate.ConfirmCallback(){
            @Override
            public void confirm(CorrelationData correlationData,
                                boolean ack, String cause) {
                if (ack) {
                    System.out.println("生产者确认发送给mq成功");
                } else {
                    //处理失败的消息
                    System.out.println("生产者发送给mq失败,考虑重发:"+cause);
                }
            }
        };
    }

    @Bean
    public RabbitTemplate.ReturnCallback returnCallback(){
        //TODO 失败回调
        return new RabbitTemplate.ReturnCallback(){

            @Override
            public void returnedMessage(Message message,
                                        int replyCode,
                                        String replyText,
                                        String exchange,
                                        String routingKey) {
                System.out.println("无法路由的消息，需要考虑另外处理。");
                System.out.println("Returned replyText："+replyText);
                System.out.println("Returned exchange："+exchange);
                System.out.println("Returned routingKey："+routingKey);
                String msgJson  = new String(message.getBody());
                System.out.println("Returned Message："+msgJson);
            }
        };
    }
```
### 8.1.4 队列和交换器及绑定关系

可以在生产者配置 RabbitConfig 类中增加队列和交换器

#### 默认交换器（direct） 

默认情况下，申明一个队列，如果没有建立与交换器的绑定关系，系统默认分配一个 Default 交换器（多个队列也是这一个），默认匹配队列名称
```java
    //TODO===============使用了RabbitMQ系统缺省的交换器==========
    //绑定键即为队列名称

    @Bean
    public Queue helloQueue() {
        return new Queue(RmConst.QUEUE_HELLO);
    }

    @Bean
    public Queue userQueue() {
        return new Queue(RmConst.QUEUE_USER);
    }
```

#### Topic 类型

```java
    //TODO===============以下是验证topic Exchange交换器==========

    //TODO 创建三个队列
    @Bean
    public Queue queueEmailMessage() {
        return new Queue(RmConst.QUEUE_TOPIC_EMAIL);
    }

    @Bean
    public Queue queueUserMessages() {
        return new Queue(RmConst.QUEUE_TOPIC_USER);
    }
    @Bean
    public Queue queueErrorMessages() {
        return new Queue(RmConst.QUEUE_TOPIC_ERROR);
    }

    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(RmConst.EXCHANGE_TOPIC);
    }

    @Bean
    public Binding bindingEmailExchangeMessage() {
        return BindingBuilder
                .bind(queueEmailMessage())
                .to(exchange())
                .with("sb.*.email");
    }

    @Bean
    public Binding bindingUserExchangeMessages() {
        return BindingBuilder
                .bind(queueUserMessages())
                .to(exchange())
                .with("sb.*.user");
    }
    @Bean
    public Binding bindingErrorExchangeMessages() {
        return BindingBuilder
                .bind(queueUserMessages())
                .to(exchange())
                .with("sb.*.error");
    }
    //TODO ===============以上是验证topic Exchange==========END
```

#### Fanout 类型

```java
    //TODO ===============以下是验证Fanout Exchange==========START

    @Bean
    public Queue AMessage() {
        return new Queue("sb.fanout.A");
    }

    @Bean
    public FanoutExchange fanoutExchange() {
        return new FanoutExchange(RmConst.EXCHANGE_FANOUT);
    }

    @Bean
    Binding bindingExchangeA(Queue AMessage,FanoutExchange fanoutExchange) {
        return BindingBuilder.bind(AMessage).to(fanoutExchange);
    }

    //TODO ===============以上是验证Fanout Exchange的交换器==========END
```

### 8.1.5 发送者失败通知
```java
    @Bean
    public RabbitTemplate.ReturnCallback returnCallback(){
        //TODO 失败回调
        return new RabbitTemplate.ReturnCallback(){

            @Override
            public void returnedMessage(Message message,
                                        int replyCode,
                                        String replyText,
                                        String exchange,
                                        String routingKey) {
                System.out.println("无法路由的消息，需要考虑另外处理。");
                System.out.println("Returned replyText："+replyText);
                System.out.println("Returned exchange："+exchange);
                System.out.println("Returned routingKey："+routingKey);
                String msgJson  = new String(message.getBody());
                System.out.println("Returned Message："+msgJson);
            }
        };
    }
```
### 8.1.6 发送者确认的回调
```java
    //===============生产者发送确认==========
    @Bean
    public RabbitTemplate.ConfirmCallback confirmCallback(){
        //TODO 发送方确认

        return new RabbitTemplate.ConfirmCallback(){
            @Override
            public void confirm(CorrelationData correlationData,
                                boolean ack, String cause) {
                if (ack) {
                    System.out.println("生产者确认发送给mq成功");
                } else {
                    //处理失败的消息
                    System.out.println("生产者发送给mq失败,考虑重发:"+cause);
                }
            }
        };
    }
```
### 8.1.7 生产者
略--见代码包Boot-RabbitMq
### 8.1.8 消费者
略--见代码包Boot-RabbitMq
## 8.2 演示效果
略--见代码包Boot-RabbitMq

## 8.3 配置属性列表说明

```yml
★Config:
# base
spring.rabbitmq.host: 服务Host
spring.rabbitmq.port: 服务端口
spring.rabbitmq.username: 登陆用户名
spring.rabbitmq.password: 登陆密码
spring.rabbitmq.virtual-host: 连接到rabbitMQ的vhost
spring.rabbitmq.addresses: 指定client连接到的server的地址，多个以逗号分隔(优先取addresses，然后再取host)
spring.rabbitmq.requested-heartbeat: 指定心跳超时，单位秒，0为不指定；默认60s
spring.rabbitmq.publisher-confirms: 是否启用【发布确认】
spring.rabbitmq.publisher-returns: 是否启用【发布返回】
spring.rabbitmq.connection-timeout: 连接超时，单位毫秒，0表示无穷大，不超时
spring.rabbitmq.parsed-addresses:


# ssl
spring.rabbitmq.ssl.enabled: 是否支持ssl
spring.rabbitmq.ssl.key-store: 指定持有SSL certificate的key store的路径
spring.rabbitmq.ssl.key-store-password: 指定访问key store的密码
spring.rabbitmq.ssl.trust-store: 指定持有SSL certificates的Trust store
spring.rabbitmq.ssl.trust-store-password: 指定访问trust store的密码
spring.rabbitmq.ssl.algorithm: ssl使用的算法，例如，TLSv1.1


# cache
spring.rabbitmq.cache.channel.size: 缓存中保持的channel数量
spring.rabbitmq.cache.channel.checkout-timeout: 当缓存数量被设置时，从缓存中获取一个channel的超时时间，单位毫秒；如果为0，则总是创建一个新channel
spring.rabbitmq.cache.connection.size: 缓存的连接数，只有是CONNECTION模式时生效
spring.rabbitmq.cache.connection.mode: 连接工厂缓存模式：CHANNEL 和 CONNECTION


# listener
spring.rabbitmq.listener.simple.auto-startup: 是否启动时自动启动容器
spring.rabbitmq.listener.simple.acknowledge-mode: 表示消息确认方式，其有三种配置方式，分别是none、manual和auto；默认auto
spring.rabbitmq.listener.simple.concurrency: 最小的消费者数量
spring.rabbitmq.listener.simple.max-concurrency: 最大的消费者数量
spring.rabbitmq.listener.simple.prefetch: 指定一个请求能处理多少个消息，如果有事务的话，必须大于等于transaction数量.
spring.rabbitmq.listener.simple.transaction-size: 指定一个事务处理的消息数量，最好是小于等于prefetch的数量.
spring.rabbitmq.listener.simple.default-requeue-rejected: 决定被拒绝的消息是否重新入队；默认是true（与参数acknowledge-mode有关系）
spring.rabbitmq.listener.simple.idle-event-interval: 多少长时间发布空闲容器时间，单位毫秒

spring.rabbitmq.listener.simple.retry.enabled: 监听重试是否可用
spring.rabbitmq.listener.simple.retry.max-attempts: 最大重试次数
spring.rabbitmq.listener.simple.retry.initial-interval: 第一次和第二次尝试发布或传递消息之间的间隔
spring.rabbitmq.listener.simple.retry.multiplier: 应用于上一重试间隔的乘数
spring.rabbitmq.listener.simple.retry.max-interval: 最大重试时间间隔
spring.rabbitmq.listener.simple.retry.stateless: 重试是有状态or无状态


# template
spring.rabbitmq.template.mandatory: 启用强制信息；默认false
spring.rabbitmq.template.receive-timeout: receive() 操作的超时时间
spring.rabbitmq.template.reply-timeout: sendAndReceive() 操作的超时时间
spring.rabbitmq.template.retry.enabled: 发送重试是否可用
spring.rabbitmq.template.retry.max-attempts: 最大重试次数
spring.rabbitmq.template.retry.initial-interval: 第一次和第二次尝试发布或传递消息之间的间隔
spring.rabbitmq.template.retry.multiplier: 应用于上一重试间隔的乘数
spring.rabbitmq.template.retry.max-interval: 最大重试时间间隔
```