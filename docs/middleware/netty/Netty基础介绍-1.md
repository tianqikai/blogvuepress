# 2. Netty基础介绍

## 2.1 为什么要用 Netty

1. 虽然 JAVA NIO 框架提供了 **多路复用 IO**的支持，但是并没有提供上层“信息格式”的良好封装。例如前两者并没有提供针对 Protocol Buffer、JSON 这些信 息格式的封装，但是 Netty 框架提供了这些数据格式封装（<font color='red'>基于责任链模式的编码和解码功能</font>）； 

2. **NIO 的类库和API相当复杂**，使用它来开发需要非常熟练地掌握 Selector、 ByteBuffer、ServerSocketChannel、SocketChannel 等，需要很多额外的编程技能 来辅助使用 NIO,例如，因为 NIO 涉及了 Reactor 线程模型，所以必须必须对多线 程和网络编程非常熟悉才能写出高质量的 NIO 程序 

3. 要编写一个可靠的、易维护的、高性能的 NIO 服务器应用。除了框架本身要兼容实现各类操作系统的实现外。更重要的是它应该还要处理很多上层特有服务，例如：客户端的权限、还有上面提到的信息格式封装、简单的数据读取， <font color='red'>**断连重连，半包读写，心跳等等，这些 Netty 框架都提供了响应的支持**</font>。 

4. **JAVA NIO 框架存在一个 poll/epoll bug：Selector doesn’t block on Selector.select(timeout)，不能 block 意味着 CPU 的使用率会变成 100%**（这是底 层 JNI 的问题，上层要处理这个异常实际上也好办）。当然这个 bug 只有在 Linux 内核上才能重现。 

这个问题在 JDK 1.7 版本中还没有被完全解决，但是 Netty 已经将这个 bug 进行了处理。 这个 Bug 与操作系统机制有关系的，JDK 虽然仅仅是一个兼容各个操作系统 平台的软件，但在 JDK5 和 JDK6 最初的版本中（严格意义上来将，JDK 部分版本 都是），这个问题并没有解决，而将这个帽子抛给了操作系统方，这也就是这个 bug 最终一直到 2013 年才最终修复的原因(JDK7 和 JDK8 之间)。

## 2.2 为什么 Netty 使用 NIO 而不是 AIO？

1. **Netty 不看重 Windows 上的使用，在 Linux 系统上，AIO 的底层实现仍使用 EPOLL，没有很好实现 AIO**，因此在性能上没有明显的优势，而且被 JDK 封装了 一层不容易深度优化。 

2. AIO 还有个缺点是**接收数据需要预先分配缓存**, 而不是 NIO 那种需要接收时才需要分配缓存, 所以对连接数量非常大但流量小的情况, 内存浪费很多。 
据说  <font color='red'>**Linux 上 AIO 不够成熟，处理回调结果速度跟不上处理需求**</font>，有点像外 卖员太少，顾客太多，供不应求，造成处理速度有瓶颈

## 2.2 第一个 Netty 程序

### 2.2.1 Channel 
Channel 是 Java NIO 的一个基本构造。 它代表一个到实体（如一个硬件设备、一个文件、一个网络套接字或者一个能够执行一个或者多个不同的 I/O 操作的程序组件）的开放连接，如读操作和写操作目前，可以把 Channel 看作是传入（入站）或者传出（出站）数据的载体。 因此它可以被打开或者被关闭，连接或者断开连接。

### 2.2.2 回调和 Future 

一个回调其实就是一个方法，一个指向已经被提供给另外一个方法的方法的 引用。这使得后者可以在适当的时候调用前者。回调在广泛的编程场景中都有应用，而且也是在操作完成后通知相关方最常见的方式之一。 

Netty 在内部使用了回调来处理事件；当一个回调被触发时，相关的事件可 以被一个 interface-ChannelHandler 的实现处理。 

Future 提供了另一种在操作完成时通知应用程序的方式。这个对象可以看 作是一个异步操作的结果的占位符；它将在未来的某个时刻完成，并提供对其结 果的访问。 

JDK 预置了 interface java.util.concurrent.Future，但是其所提供的实现，只允许手动检查对应的操作是否已经完成，或者一直阻塞直到它完成。这是非常繁琐 的，所以 Netty 提供了它自己的实现——ChannelFuture，用于在执行异步操作的 时候使用。

ChannelFuture 提供了几种额外的方法，这些方法使得我们能够注册一个或者多个 ChannelFutureListener 实例。监听器的回调方法 operationComplete()，将 会在对应的操作完成时被调用。然后监听器可以判断该操作是成功地完成了还是 出错了。如果是后者，我们可以检索产生的 Throwable。简而言之，由 ChannelFutureListener 提供的通知机制消除了手动检查对应的操作是否完成的必 要。每个 Netty 的出站 I/O 操作都将返回一个 ChannelFuture。

### 2.2.3 事件和 ChannelHandler 

Netty 使用不同的事件来通知我们状态的改变或者是操作的状态。这使得我们能够基于已经发生的事件来触发适当的动作。  
Netty 事件是按照它们与入站或出站数据流的相关性进行分类的。   

:::tip 可能由入站数据或者相关的状态更改而触发的事件包括：   
连接已被激活或者连接失活；   
数据读取；   
用户事件；  
错误事件;  
:::

:::tip 出站事件是未来将会触发的某个动作的操作结果，这些动作包括：   
打开或者关闭到远程节点的连接；   
将数据写到或者冲刷到套接字。   
:::

每个事件都可以被分发给 ChannelHandler 类中的某个用户实现的方法。 可以认为每个 ChannelHandler 的实例都类似于一种为了响应特定事件而被执行的回调。   

Netty 提供了大量预定义的可以开箱即用的 ChannelHandler 实现，包括用于 各种协议（如 HTTP 和 SSL/TLS）的 ChannelHandler。

### 2.2.4 netty客户端
```java
package com.tqk.netty.basic;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

import java.net.InetSocketAddress;

/**
 * @author tianqikai
 */
public class NettyClient {
    private final int port;
    private final String host;

    public NettyClient(int port, String host) {
        this.port = port;
        this.host = host;
    }
    public void start() throws InterruptedException {
        //线程组
        NioEventLoopGroup eventExecutors = new NioEventLoopGroup();
        try {
            //客户端启动必备
            Bootstrap bootstrap = new Bootstrap();
            bootstrap.group(eventExecutors)/*把线程组传入*/
                    /*指定使用NIO进行网络传输*/
                    .channel(NioSocketChannel.class)
                    .remoteAddress(new InetSocketAddress(host,port))
                    .handler(new NettyClientHandle());
            /*连接到远程节点，阻塞直到连接完成*/
            ChannelFuture future = bootstrap.connect().sync();
            /*阻塞程序，直到Channel发生了关闭*/
            future.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }finally {
            eventExecutors.shutdownGracefully().sync();
        }

    }
    public static void main(String[] args) throws InterruptedException {
        new NettyClient(9999,"127.0.0.1").start();
//        Channel
    }
}

```
```java
package com.tqk.netty.basic;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.CharsetUtil;


public class NettyClientHandle extends SimpleChannelInboundHandler<ByteBuf> {
    /**
     * 客户端读到数据以后，就会执行
     * @param channelHandlerContext
     * @param byteBuf
     * @throws Exception
     */
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, ByteBuf byteBuf) throws Exception {
        System.out.println("客户端接收到返回信息: "+byteBuf.toString(CharsetUtil.UTF_8));
    }

    /**
     * 连接建立以后
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        ctx.writeAndFlush(Unpooled.copiedBuffer("Hello Netty tqk!", CharsetUtil.UTF_8));
//        ctx.fireChannelActive();
    }

    /**
     * 异常处理
     * @param ctx
     * @param cause
     * @throws Exception
     */
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }

    /**
     * 心跳重连机制
     * @param ctx
     * @param evt
     * @throws Exception
     */
    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        super.userEventTriggered(ctx, evt);
    }
}

```
### 2.2.5 netty服务端
```java
package com.tqk.netty.basic;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

import java.net.InetSocketAddress;

/**
 * @author tianqikai
 */
public class NettyServer {
    private final int port;

    public NettyServer(int port) {
        this.port = port;
    }

    public static void main(String[] args) throws InterruptedException {
        int port = 9999;
        NettyServer echoServer = new NettyServer(port);
        System.out.println("服务器即将启动");
        echoServer.start();
        System.out.println("服务器关闭");
    }
    public void start() throws InterruptedException {
        NettyServerHandler nettyServerHandler = new NettyServerHandler();
        /*线程组*/
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            /*服务端启动必须*/
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(group).channel(NioServerSocketChannel.class)/*指定使用NIO进行网络传输*/
                    .localAddress(new InetSocketAddress(port))/*指定服务器监听端口*/
                    /*服务端每接收到一个连接请求，就会新启一个socket通信，也就是channel，
    所以下面这段代码的作用就是为这个子channel增加handle*/
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            /*添加到该子channel的pipeline的尾部*/
                            socketChannel.pipeline().addLast(nettyServerHandler);
                        }
                    });
            /*异步绑定到服务器，sync()会阻塞直到完成*/
            ChannelFuture f = serverBootstrap.bind().sync();
            /*阻塞直到服务器的channel关闭*/
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully().sync();/*优雅关闭线程组*/
        }
    }
}


```
```java
package com.tqk.netty.basic;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.CharsetUtil;

/**
 * 类说明：自己的业务处理
 * @author tianqikai
 */
@ChannelHandler.Sharable

/**
 * 不加这个注解那么在增加到childHandler时就必须new出来
 *添加一个StatusHandler，目的为了记录同时在线的设备数量
 *private StatusHandler statusHandler = new StatusHandler();
**/
public class NettyServerHandler extends ChannelInboundHandlerAdapter {

    /**
     * 服务端收到数据以后，就会执行
     * @param ctx
     * @param msg
     * @throws Exception
     */
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf in = (ByteBuf)msg;
        System.out.println("Server accept"+in.toString(CharsetUtil.UTF_8));
        ctx.write(in);

    }

    /**
     * 服务端读取完成网络数据后的处理
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.writeAndFlush(Unpooled.EMPTY_BUFFER)
                .addListener(ChannelFutureListener.CLOSE);
    }

    /**
     * 发生异常后的处理
     * @param ctx
     * @param cause
     * @throws Exception
     */
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
            throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}

```