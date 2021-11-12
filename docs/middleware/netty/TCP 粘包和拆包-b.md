# 12. TCP粘包和拆包及解决方案

## 12.1 TCP 粘包和拆包基本介绍

1. TCP 是面向连接的，面向流的，提供高可靠性服务。收发两端（客户端和服务器端）都要有一一成对的 socket，因此，发送端为了将多个发给接收端的包，更有效的发给对方，使用了优化方法（Nagle 算法），将多次间隔较小且数据量小的数据，合并成一个大的数据块，然后进行封包。这样做虽然提高了效率，但是接收端就难于分辨出完整的数据包了，因为面向流的通信是无消息保护边界的

2. 由于 TCP 无消息保护边界,需要在接收端处理消息边界问题，也就是我们所说的粘包、拆包问题,看一张图

3. TCP 粘包、拆包图解

假设客户端分别发送了两个数据包 D1 和 D2 给服务端，由于服务端一次读取到字节数是不确定的，故可能存在以下

:::tip 四种情况：
1. 服务端分两次读取到了两个独立的数据包，分别是 D1 和 D2，没有粘包和拆包
2. 服务端一次接受到了两个数据包，D1 和 D2 粘合在一起，称之为 TCP 粘包
3. 服务端分两次读取到了数据包，第一次读取到了完整的 D1 包和 D2 包的部分内容，第二次读取到了 D2 包的剩余内容，这称之为 TCP 拆包
4. 服务端分两次读取到了数据包，第一次读取到了 D1 包的部分内容 D1_1，第二次读取到了 D1 包的剩余部分内容 D1_2 和完整的 D2 包。
:::

## 12.2 TCP粘包和拆包现象实例

### 12.2.1 MyTcpClient

```java
package com.tqk.netty.tcp.server;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

public class MyTcpClient {
    public static void main(String[] args)  throws  Exception{

        EventLoopGroup group = new NioEventLoopGroup();

        try {

            Bootstrap bootstrap = new Bootstrap();
            bootstrap.group(group).channel(NioSocketChannel.class)
                    .handler(new MyTcpClientInitializer()); //自定义一个初始化类

            ChannelFuture channelFuture = bootstrap.connect("localhost", 8899).sync();

            channelFuture.channel().closeFuture().sync();

        }finally {
            group.shutdownGracefully();
        }
    }
}

```
### 12.2.2  MyTcpClientHandler

```java
package com.tqk.netty.tcp.server;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

import java.nio.charset.Charset;

/**
 * @author tianqikai
 */
public class MyTcpClientHandler extends SimpleChannelInboundHandler<ByteBuf> {

    private int count;
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        //使用客户端发送10条数据 hello,server 编号
        for(int i= 0; i< 10; ++i) {
            ByteBuf buffer = Unpooled.copiedBuffer("hello,server " + i, Charset.forName("utf-8"));
            ctx.writeAndFlush(buffer);
        }
    }

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, ByteBuf msg) throws Exception {
        byte[] buffer = new byte[msg.readableBytes()];
        msg.readBytes(buffer);

        String message = new String(buffer, Charset.forName("utf-8"));
        System.out.println("客户端接收到消息=" + message);
        System.out.println("客户端接收消息数量=" + (++this.count));

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}

```
### 12.2.3 MyTcpClientInitializer

```java
package com.tqk.netty.tcp.server;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;

/**
 * @author tianqikai
 */
public class MyTcpClientInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {

        ChannelPipeline pipeline = ch.pipeline();
        pipeline.addLast(new MyTcpClientHandler());
    }
}

```

### 12.2.4 MyTcpServer

```java
package com.tqk.netty.tcp.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelOption;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.ServerSocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

/**
 * @author tianqikai
 */
public class MyTcpServer {
    public static void main(String[] args) throws InterruptedException {
        NioEventLoopGroup bossGroup = new NioEventLoopGroup(1);
        NioEventLoopGroup workerGroup = new NioEventLoopGroup(8);

        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(bossGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .childOption(ChannelOption.SO_KEEPALIVE,true)
                    .childHandler(new MyTcpServerInitializer());

            ChannelFuture channelFuture = serverBootstrap.bind(8899).sync();

            channelFuture.channel().closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}

```
### 12.2.5 MyTcpServerHandler

```java
package com.tqk.netty.tcp.server;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.CharsetUtil;

/**
 * @author tianqikai
 */
public class MyTcpServerHandler extends SimpleChannelInboundHandler<ByteBuf> {
    private  int count;

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, ByteBuf msg) throws Exception {
        System.out.println("Server accept: "+msg.toString(CharsetUtil.UTF_8));
    }
}

```
### 12.2.6 MyTcpServerInitializer

```java
package com.tqk.netty.tcp.server;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;

/**
 * @author tianqikai
 */
public class MyTcpServerInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {
        ChannelPipeline pipeline = ch.pipeline();

        pipeline.addLast(new MyTcpServerHandler());
    }
}

```
### 12.2.7 示例演示效果

```
Server accept: hello,server 0
Server accept: hello,server 1hello,server 2
Server accept: hello,server 3hello,server 4
Server accept: hello,server 5
Server accept: hello,server 6
Server accept: hello,server 7
Server accept: hello,server 8
Server accept: hello,server 9
Server accept: hello,server 0
Server accept: hello,server 1
Server accept: hello,server 2hello,server 3hello,server 4
Server accept: hello,server 5
Server accept: hello,server 6hello,server 7
Server accept: hello,server 8hello,server 9
Server accept: hello,server 0
Server accept: hello,server 1
Server accept: hello,server 2
Server accept: hello,server 3
Server accept: hello,server 4hello,server 5
Server accept: hello,server 6
Server accept: hello,server 7
Server accept: hello,server 8
Server accept: hello,server 9
Server accept: hello,server 0
Server accept: hello,server 1
Server accept: hello,server 2hello,server 3
Server accept: hello,server 4hello,server 5
Server accept: hello,server 6hello,server 7
Server accept: hello,server 8
Server accept: hello,server 9
```
## 12.3 TCP 粘包和拆包解决方案

1. 常用方案：使用自定义协议+编解码器来解决  
2. 关键就是要解决服务器端每次读取数据长度的问题，这个问题解决就不会出现服务器多读或少读数据的问题，从而避免的TCP粘包、拆包。(设置好发送报文长度在报文头前几位发给服务端也是一种解决方案) 

### 12.3.1 MessageProtocol
```java
package com.tqk.netty.protocoltcp.client;


//协议包
public class MessageProtocol {
    private int len; //关键
    private byte[] content;

    public int getLen() {
        return len;
    }

    public void setLen(int len) {
        this.len = len;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }
}
```
### 12.3.2 MyMessageDecoder
```java
package com.tqk.netty.protocoltcp.client;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ReplayingDecoder;

import java.util.List;

public class MyMessageDecoder extends ReplayingDecoder<Void> {
    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
        System.out.println("MyMessageDecoder decode 被调用");
        //需要将得到二进制字节码-> MessageProtocol 数据包(对象)
        int length = in.readInt();

        byte[] content = new byte[length];
        in.readBytes(content);

        //封装成 MessageProtocol 对象，放入 out， 传递下一个handler业务处理
        MessageProtocol messageProtocol = new MessageProtocol();
        messageProtocol.setLen(length);
        messageProtocol.setContent(content);

        out.add(messageProtocol);

    }
}

```
### 12.3.3 MyMessageEncoder
```java
package com.tqk.netty.protocoltcp.client;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

public class MyMessageEncoder extends MessageToByteEncoder<MessageProtocol> {
    @Override
    protected void encode(ChannelHandlerContext ctx, MessageProtocol msg, ByteBuf out) throws Exception {
        System.out.println("MyMessageEncoder encode 方法被调用");
        out.writeInt(msg.getLen());
        out.writeBytes(msg.getContent());
    }
}

```
### 12.3.4 MyProtocolTcpClient
```java
package com.tqk.netty.protocoltcp.client;



import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

public class MyProtocolTcpClient {
    public static void main(String[] args)  throws  Exception{

        EventLoopGroup group = new NioEventLoopGroup();

        try {

            Bootstrap bootstrap = new Bootstrap();
            bootstrap.group(group).channel(NioSocketChannel.class)
                    .handler(new MyProtocolTcpClientInitializer()); //自定义一个初始化类

            ChannelFuture channelFuture = bootstrap.connect("localhost", 8899).sync();

            channelFuture.channel().closeFuture().sync();

        }finally {
            group.shutdownGracefully();
        }
    }
}

```
### 12.3.5 MyProtocolTcpClientInitializer
```java
package com.tqk.netty.protocoltcp.client;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;


/**
 * @author tianqikai
 */
public class MyProtocolTcpClientInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {

        ChannelPipeline pipeline = ch.pipeline();
        pipeline.addLast(new MyMessageEncoder()); //加入编码器
        pipeline.addLast(new MyMessageDecoder()); //加入解码器
        pipeline.addLast(new MyProtocolTcpHandler());
    }
}

```
### 12.3.6 MyProtocolTcpHandler
```java
package com.tqk.netty.protocoltcp.client;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

/**
 * @author tianqikai
 */
public class MyProtocolTcpHandler extends SimpleChannelInboundHandler<MessageProtocol> {

    private int count;
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        //使用客户端发送10条数据 hello,server 编号
        for(int i= 0; i< 10; ++i) {
            String mes="张亮麻辣烫！！！";
            byte[] mesBytes = mes.getBytes(Charset.forName("utf-8"));
            int length = mes.getBytes(StandardCharsets.UTF_8).length;
            //创建协议包对象
            MessageProtocol messageProtocol = new MessageProtocol();
            messageProtocol.setContent(mesBytes);
            messageProtocol.setLen(length);
            ctx.writeAndFlush(messageProtocol);
        }
    }

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, MessageProtocol msg) throws Exception {
        int len = msg.getLen();
        byte[] content = msg.getContent();

        System.out.println("客户端接收到消息如下");
        System.out.println("长度=" + len);
        System.out.println("内容=" + new String(content, Charset.forName("utf-8")));

        System.out.println("客户端接收消息数量=" + (++this.count));

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}

```
### 12.3.7 MyProtocolTcpServer
```java
package com.tqk.netty.protocoltcp.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelOption;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;

/**
 * @author tianqikai
 */
public class MyProtocolTcpServer {
    public static void main(String[] args) throws InterruptedException {
        NioEventLoopGroup bossGroup = new NioEventLoopGroup(1);
        NioEventLoopGroup workerGroup = new NioEventLoopGroup(8);

        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(bossGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .childOption(ChannelOption.SO_KEEPALIVE,true)
                    .childHandler(new MyProtocolTcpServerInitializer());

            ChannelFuture channelFuture = serverBootstrap.bind(8899).sync();

            channelFuture.channel().closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}

```
### 12.3.8 MyProtocolTcpServerHandler
```java
package com.tqk.netty.protocoltcp.server;

import com.tqk.netty.protocoltcp.client.MessageProtocol;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.CharsetUtil;

import java.nio.charset.Charset;
import java.util.UUID;

/**
 * @author tianqikai
 */
public class MyProtocolTcpServerHandler extends SimpleChannelInboundHandler<MessageProtocol> {
    private  int count;

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, MessageProtocol msg) throws Exception {
        //接收到数据，并处理
        int len = msg.getLen();
        byte[] content = msg.getContent();

        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println("服务器接收到信息如下");
        System.out.println("长度=" + len);
        System.out.println("内容=" + new String(content, Charset.forName("utf-8")));

        System.out.println("服务器接收到消息包数量=" + (++this.count));

        //回复消息

        String responseContent = UUID.randomUUID().toString();
        int responseLen = responseContent.getBytes("utf-8").length;
        byte[]  responseContent2 = responseContent.getBytes("utf-8");
        //构建一个协议包
        MessageProtocol messageProtocol = new MessageProtocol();
        messageProtocol.setLen(responseLen);
        messageProtocol.setContent(responseContent2);

        ctx.writeAndFlush(messageProtocol);
    }
}

```
### 12.3.9 MyProtocolTcpServerInitializer
```java
package com.tqk.netty.protocoltcp.server;

import com.tqk.netty.protocoltcp.client.MyMessageDecoder;
import com.tqk.netty.protocoltcp.client.MyMessageEncoder;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;

/**
 * @author tianqikai
 */
public class MyProtocolTcpServerInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {
        ChannelPipeline pipeline = ch.pipeline();
        pipeline.addLast(new MyMessageDecoder());//解码器
        pipeline.addLast(new MyMessageEncoder());//编码器
        pipeline.addLast(new MyProtocolTcpServerHandler());
    }
}

```