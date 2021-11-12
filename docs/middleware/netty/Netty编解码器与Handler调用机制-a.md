# 11. Netty编解码

##  11.1 基本说明
1. Netty 的组件设计：Netty 的主要组件有 <font color='#f47920'>Channel、EventLoop、ChannelFuture、ChannelHandler、ChannelPipe</font> 等

2. <font color='#f47920'>ChannelHandler</font> 充当了处理入站和出站数据的应用程序逻辑的容器。例如，实现 <font color='#f47920'>ChannelInboundHandler</font> 接口（或 <font color='#f47920'>ChannelInboundHandlerAdapter</font>），你就可以接收入站事件和数据，这些数据会被业务逻辑处理。当要给客户端发送响应时，也可以从 <font color='#f47920'>ChannelInboundHandler</font> 冲刷数据。业务逻辑通常写在一个或者多个 <font color='#f47920'>ChannelInboundHandler</font> 中。<font color='#f47920'>ChannelOutboundHandler</font> 原理一样，只不过它是用来处理出站数据的

<a data-fancybox title="ChannelInboundHandler" href="./image/ChannelInboundHandler.jpg">![ChannelInboundHandler](./image/ChannelInboundHandler.jpg)</a>

3. <font color='#f47920'>ChannelPipeline</font> 提供了 <font color='#f47920'>ChannelHandler</font> 链的容器。以客户端应用程序为例，如果事件的运动方向是从客户端到服务端的，那么我们称这些事件为出站的，即客户端发送给服务端的数据会通过 pipeline 中的一系列<font color='#f47920'> ChannelOutboundHandler</font>，并被这些 Handler 处理，反之则称为入站的

##  11.2 编码解码器

1. 当 Netty 发送或者接受一个消息的时候，就将会发生一次数据转换。入站消息会被解码：从字节转换为另一种格式（比如 java 对象）；如果是出站消息，它会被编码成字节。

2. Netty 提供一系列实用的编解码器，他们都实现了 <font color='#f47920'>ChannelInboundHadnler</font> 或者 <font color='#f47920'>ChannelOutboundHandler</font> 接口。在这些类中，channelRead 方法已经被重写了。以入站为例，对于每个从入站 Channel 读取的消息，这个方法会被调用。随后，它将调用由解码器所提供的 decode() 方法进行解码，并将已经解码的字节转发给 <font color='#f47920'>ChannelPipeline</font> 中的下一个 <font color='#f47920'>ChannelInboundHandler</font>

### 11.2.1 解码器-ByteToMessageDecoder

#### 关系继承图

<a data-fancybox title="ByteToMessageDecoder" href="./image/ByteToMessageDecoder.jpg">![ByteToMessageDecoder](./image/ByteToMessageDecoder.jpg)</a>

由于不可能知道远程节点是否会一次性发送一个完整的信息，tcp有可能出现粘包拆包的问题，这个类会对入站数据进行缓冲，直到它准备好被处理


一个关于ByteToMessageDecoder实例分析
```java
public class ToIntegerDecoder extends ByteToMessageDecoder {
    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
        if (in.readableBytes() >= 4) {
            out.add(in.readInt());
        }
    }
}
```
**说明：**  
这个例子，每次入站从ByteBuf中读取4字节，将其解码为一个int，然后将它添加到下一个List中。当没有更多元素可以被添加到该List中时，它的内容将会被发送给下一个ChannelInboundHandler。int在被添加到List中时，会被自动装箱为Integer。在调用readInt()方法前必须验证所输入的ByteBuf是否具有足够的数据

decode 执行分析图 [示意图]
<a data-fancybox title="decode" href="./image/decode.jpg">![decode](./image/decode.jpg)</a>

:::tip 其它解码器
1. LineBasedFrameDecoder：这个类在Netty内部也有使用，它使用行尾控制字符（\n或者\r\n）作为分隔符来解析数据。
2. DelimiterBasedFrameDecoder：使用自定义的特殊字符作为消息的分隔符。
3. HttpObjectDecoder：一个HTTP数据的解码器
4. LengthFieldBasedFrameDecoder：通过指定长度来标识整包消息，这样就可以自动的处理黏包和半包消息。
:::

##  11.3 Netty的handler链的调用机制

:::tip 实例要求
使用自定义的编码器和解码器来说明 Netty 的 handler 调用机制 客户端发送 long -> 服务器 服务端发送 long -> 客户端
:::

<a data-fancybox title="encoderdecoder01" href="./image/encoderdecoder01.jpg">![decode](./image/encoderdecoder01.jpg)</a>

###  11.3.1 MyServer
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;

public class MyServer {
    public static void main(String[] args) throws Exception{

        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup();

        try {

            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(bossGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .childHandler(new MyServerInitializer()); //自定义一个初始化类


            ChannelFuture channelFuture = serverBootstrap.bind(7000).sync();
            channelFuture.channel().closeFuture().sync();

        }finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }

    }
}

```
###  11.3.2 MyServerInitializer
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;


public class MyServerInitializer extends ChannelInitializer<SocketChannel> {

    @Override
    protected void initChannel(SocketChannel ch) throws Exception {
        ChannelPipeline pipeline = ch.pipeline();//一会下断点

        //入站的handler进行解码 MyByteToLongDecoder
        //pipeline.addLast(new MyByteToLongDecoder());
        pipeline.addLast(new MyByteToLongDecoder2());
        //出站的handler进行编码
        pipeline.addLast(new MyLongToByteEncoder());
        //自定义的handler 处理业务逻辑
        pipeline.addLast(new MyServerHandler());
        System.out.println("解码编码~~");
    }
}

```
###  11.3.3 MyServerHandler
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

public class MyServerHandler extends SimpleChannelInboundHandler<Long> {
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Long msg) throws Exception {

        System.out.println("从客户端" + ctx.channel().remoteAddress() + " 读取到long " + msg);

        //给客户端发送一个long
        ctx.writeAndFlush(98765L);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}

```
###  11.3.4 MyClient
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

public class MyClient {
    public static void main(String[] args)  throws  Exception{

        EventLoopGroup group = new NioEventLoopGroup();

        try {

            Bootstrap bootstrap = new Bootstrap();
            bootstrap.group(group).channel(NioSocketChannel.class)
                    .handler(new MyClientInitializer()); //自定义一个初始化类

            ChannelFuture channelFuture = bootstrap.connect("localhost", 7000).sync();

            channelFuture.channel().closeFuture().sync();

        }finally {
            group.shutdownGracefully();
        }
    }
}

```
###  11.3.5 MyClientHandler
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

public class MyClientHandler  extends SimpleChannelInboundHandler<Long> {
    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Long msg) throws Exception {

        System.out.println("服务器的ip=" + ctx.channel().remoteAddress());
        System.out.println("收到服务器消息=" + msg);

    }

    //重写channelActive 发送数据

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        System.out.println("MyClientHandler 发送数据");
        //ctx.writeAndFlush(Unpooled.copiedBuffer(""))
        ctx.writeAndFlush(123456L); //发送的是一个long

        //分析
        //1. "abcdabcdabcdabcd" 是 16个字节
        //2. 该处理器的前一个handler 是  MyLongToByteEncoder
        //3. MyLongToByteEncoder 父类  MessageToByteEncoder
        //4. 父类  MessageToByteEncoder
        /*

         public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
        ByteBuf buf = null;
        try {
            if (acceptOutboundMessage(msg)) { //判断当前msg 是不是应该处理的类型，如果是就处理，不是就跳过encode
                @SuppressWarnings("unchecked")
                I cast = (I) msg;
                buf = allocateBuffer(ctx, cast, preferDirect);
                try {
                    encode(ctx, cast, buf);
                } finally {
                    ReferenceCountUtil.release(cast);
                }

                if (buf.isReadable()) {
                    ctx.write(buf, promise);
                } else {
                    buf.release();
                    ctx.write(Unpooled.EMPTY_BUFFER, promise);
                }
                buf = null;
            } else {
                ctx.write(msg, promise);
            }
        }
        4. 因此我们编写 Encoder 是要注意传入的数据类型和处理的数据类型一致
        */
       // ctx.writeAndFlush(Unpooled.copiedBuffer("abcdabcdabcdabcd",CharsetUtil.UTF_8));

    }
}

```
###  11.3.6 MyClientInitializer
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;


public class MyClientInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {

        ChannelPipeline pipeline = ch.pipeline();

        //加入一个出站的handler 对数据进行一个编码
        pipeline.addLast(new MyLongToByteEncoder());

        //这时一个入站的解码器(入站handler )
        //pipeline.addLast(new MyByteToLongDecoder());
        pipeline.addLast(new MyByteToLongDecoder2());
        //加入一个自定义的handler ， 处理业务
        pipeline.addLast(new MyClientHandler());


    }
}

```
###  11.3.7 MyByteToLongDecoder
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ByteToMessageDecoder;

import java.util.List;

public class MyByteToLongDecoder extends ByteToMessageDecoder {
    /**
     *
     * decode 会根据接收的数据，被调用多次, 直到确定没有新的元素被添加到list
     * , 或者是ByteBuf 没有更多的可读字节为止
     * 如果list out 不为空，就会将list的内容传递给下一个 channelinboundhandler处理, 该处理器的方法也会被调用多次
     *
     * @param ctx 上下文对象
     * @param in 入站的 ByteBuf
     * @param out List 集合，将解码后的数据传给下一个handler
     * @throws Exception
     */
    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {

        System.out.println("MyByteToLongDecoder 被调用");
        //因为 long 8个字节, 需要判断有8个字节，才能读取一个long
        if(in.readableBytes() >= 8) {
            out.add(in.readLong());
        }
    }
}

```
###  11.3.8 MyByteToLongDecoder2
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ReplayingDecoder;

import java.util.List;

public class MyByteToLongDecoder2 extends ReplayingDecoder<Void> {
    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {

        System.out.println("MyByteToLongDecoder2 被调用");
        //在 ReplayingDecoder 不需要判断数据是否足够读取，内部会进行处理判断
        out.add(in.readLong());


    }
}

```
###  11.3.9 MyLongToByteEncoder
```java
package com.tqk.netty.codec.encoderdecoder;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

public class MyLongToByteEncoder extends MessageToByteEncoder<Long> {
    //编码方法
    @Override
    protected void encode(ChannelHandlerContext ctx, Long msg, ByteBuf out) throws Exception {

        System.out.println("MyLongToByteEncoder encode 被调用");
        System.out.println("msg=" + msg);
        out.writeLong(msg);

    }
}

```