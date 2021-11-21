# 7. Redis订阅与发布

## 7.1 订阅频道

```sh
#订阅消息--客户端A，B
127.0.0.1:6379> subscribe channel:qltopic
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "channel:qltopic"
3) (integer) 1


```
## 7.2 发布频道消息

```sh
127.0.0.1:6379> publish channel:qltopic "hello world"
(integer) 2
## 两个订阅者收到消息
```

## 7.3 发布频道消息

```sh
127.0.0.1:6379> subscribe channel:qltopic
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "channel:qltopic"
3) (integer) 1
1) "message"
2) "channel:qltopic"
3) "hello world"

```

## 7.4 其他命令

```sh
#取消订阅 
unsubscribe channel:qltopic

#按模式订阅和取消订阅
psubscribe ch*    //订阅以 ch 开头的所有频道
punsubscribe ch*  //取消以 ch 开头的所有频道
```

## 7.5 应用场景： 

1. 今日头条订阅号、微信订阅公众号、新浪微博关注、邮件订阅系统 
2. 即使通信系统 
3. 群聊部落系统（微信群）

### 测试实践：微信班级群 class:20211121

1、学生 C 订阅一个主题叫 ：class:20211121 
>subscribe class:20211121 

2、学生 A 针对 class:20211121 主体发送消息，那么所有订阅该主题的用户都能 够接收到该数据。 
>publish class:20211121 "hello world! I am A" 

3、学生 B 针对 class:20211121 主体发送消息，那么所有订阅该主题的用户都能 够接收到该数据。 
>publish class:20211121 "hello world! I am B"

4、展示学生 C 接受到的 A\B 同学发送过来的消息信息

```sh
127.0.0.1:6379> subscribe class:20211121 
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "class:20211121"
3) (integer) 1
1) "message"
2) "class:20211121"
3) "hello world! I am A"
1) "message"
2) "class:20211121"
3) "hello world! I am B"

```