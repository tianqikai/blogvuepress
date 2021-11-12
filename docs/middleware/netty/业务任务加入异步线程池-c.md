# 13. 业务任务加入异步线程池


**前面所讲的TaskQueen用户自定义任务的形式，其实处理业务熟的线程还是服务器读取消息的线程**
**代码在 Netty-asyncExecutor -> com.tqk.netty.noasync**

```java
服务器读取线程 nioEventLoopGroup-3-1 channle =[id: 0x772e1be3, L:/127.0.0.1:6668 - R:/127.0.0.1:52196]
server ctx =ChannelHandlerContext(NettyServerHandler#0, [id: 0x772e1be3, L:/127.0.0.1:6668 - R:/127.0.0.1:52196])
看看channel 和 pipeline的关系
客户端发送消息是:hello, server: (>^ω^<)喵
客户端地址:/127.0.0.1:52196
EchoServerHandler execute 线程1是=nioEventLoopGroup-3-1
channel code=2104465389
EchoServerHandler execute 线程2是=nioEventLoopGroup-3-1
channel code=2104465389
```
:::tip 业务任务加入异步线程池
1. 处理耗时业务的第一种方式---handler 中加入线程池
2. 处理耗时业务的第二种方式---Context 中添加线程池
::: 

## 13.1 handler 中加入线程池

### 13.1.1 EchoServerHandler
```java
/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.tqk.netty.async;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.CharsetUtil;
import io.netty.util.concurrent.DefaultEventExecutorGroup;
import io.netty.util.concurrent.EventExecutorGroup;

import java.util.concurrent.Callable;

/**
 * Handler implementation for the echo server.
 */
@Sharable
public class EchoServerHandler extends ChannelInboundHandlerAdapter {

    // group 就是充当业务线程池，可以将任务提交到该线程池
    // 这里我们创建了16个线程
    static final EventExecutorGroup group = new DefaultEventExecutorGroup(16);

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {

        System.out.println("EchoServer Handler 的线程是=" + Thread.currentThread().getName());


        //将任务提交到 group线程池
        group.submit(new Callable<Object>() {
            @Override
            public Object call() throws Exception {

                //接收客户端信息
                ByteBuf buf = (ByteBuf) msg;
                byte[] bytes = new byte[buf.readableBytes()];
                buf.readBytes(bytes);
                String body = new String(bytes, "UTF-8");
                //休眠10秒
                Thread.sleep(10 * 1000);
                System.out.println("group.submit 的  call 线程是=" + Thread.currentThread().getName());
                ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));
                return null;

            }
        });

        //将任务提交到 group线程池
        group.submit(new Callable<Object>() {
            @Override
            public Object call() throws Exception {

                //接收客户端信息
                ByteBuf buf = (ByteBuf) msg;
                byte[] bytes = new byte[buf.readableBytes()];
                buf.readBytes(bytes);
                String body = new String(bytes, "UTF-8");
                //休眠10秒
                Thread.sleep(10 * 1000);
                System.out.println("group.submit 的  call 线程是=" + Thread.currentThread().getName());
                ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));
                return null;

            }
        });


        //将任务提交到 group线程池
        group.submit(new Callable<Object>() {
            @Override
            public Object call() throws Exception {

                //接收客户端信息
                ByteBuf buf = (ByteBuf) msg;
                byte[] bytes = new byte[buf.readableBytes()];
                buf.readBytes(bytes);
                String body = new String(bytes, "UTF-8");
                //休眠10秒
                Thread.sleep(10 * 1000);
                System.out.println("group.submit 的  call 线程是=" + Thread.currentThread().getName());
                ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));
                return null;

            }
        });
        //将任务提交到 group线程池
        group.submit(new Callable<Object>() {
            @Override
            public Object call() throws Exception {

                //接收客户端信息
                ByteBuf buf = (ByteBuf) msg;
                byte[] bytes = new byte[buf.readableBytes()];
                buf.readBytes(bytes);
                String body = new String(bytes, "UTF-8");
                //休眠10秒
                Thread.sleep(10 * 1000);
                System.out.println("group.submit 的  call 线程是=" + Thread.currentThread().getName());
                ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));
                return null;

            }
        });
        //将任务提交到 group线程池
        group.submit(new Callable<Object>() {
            @Override
            public Object call() throws Exception {

                //接收客户端信息
                ByteBuf buf = (ByteBuf) msg;
                byte[] bytes = new byte[buf.readableBytes()];
                buf.readBytes(bytes);
                String body = new String(bytes, "UTF-8");
                //休眠10秒
                Thread.sleep(10 * 1000);
                System.out.println("group.submit 的  call 线程是=" + Thread.currentThread().getName());
                ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));
                return null;

            }
        });

        System.out.println("go on ");

    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        // Close the connection when an exception is raised.
        //cause.printStackTrace();
        ctx.close();
    }
}

```
### 13.1.2 EchoServer
```java
/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.tqk.netty.async;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.SelfSignedCertificate;
import io.netty.util.concurrent.DefaultEventExecutorGroup;
import io.netty.util.concurrent.EventExecutorGroup;

/**
 * Echoes back any received data from a client.
 */
public final class EchoServer {

    static final boolean SSL = System.getProperty("ssl") != null;
    static final int PORT = Integer.parseInt(System.getProperty("port", "8007"));

    public static void main(String[] args) throws Exception {
        // Configure SSL.
        final SslContext sslCtx;
        if (SSL) {
            SelfSignedCertificate ssc = new SelfSignedCertificate();
            sslCtx = SslContextBuilder.forServer(ssc.certificate(), ssc.privateKey()).build();
        } else {
            sslCtx = null;
        }

        // Configure the server.
        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup(4);
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(bossGroup, workerGroup)
             .channel(NioServerSocketChannel.class)
             .option(ChannelOption.SO_BACKLOG, 100)
             .handler(new LoggingHandler(LogLevel.INFO))
             .childHandler(new ChannelInitializer<SocketChannel>() {
                 @Override
                 public void initChannel(SocketChannel ch) throws Exception {
                     ChannelPipeline p = ch.pipeline();
                     if (sslCtx != null) {
                         p.addLast(sslCtx.newHandler(ch.alloc()));
                     }
                     p.addLast(new LoggingHandler(LogLevel.INFO));
                     p.addLast(new EchoServerHandler());
                 }
             });

            // Start the server.
            ChannelFuture f = b.bind(PORT).sync();

            // Wait until the server socket is closed.
            f.channel().closeFuture().sync();
        } finally {
            // Shut down all event loops to terminate all threads.
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}

```
## 13.2 Context 中添加线程池

### 13.2.1 EchoServer
```java
/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.tqk.netty.async;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.SelfSignedCertificate;
import io.netty.util.concurrent.DefaultEventExecutorGroup;
import io.netty.util.concurrent.EventExecutorGroup;

/**
 * Echoes back any received data from a client.
 */
public final class EchoServer {

    static final boolean SSL = System.getProperty("ssl") != null;
    static final int PORT = Integer.parseInt(System.getProperty("port", "8007"));

    //创建业务线程池
    //这里我们就创建2个子线程
    static final EventExecutorGroup executorGroup = new DefaultEventExecutorGroup(2);

    public static void main(String[] args) throws Exception {
        // Configure SSL.
        final SslContext sslCtx;
        if (SSL) {
            SelfSignedCertificate ssc = new SelfSignedCertificate();
            sslCtx = SslContextBuilder.forServer(ssc.certificate(), ssc.privateKey()).build();
        } else {
            sslCtx = null;
        }

        // Configure the server.
        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup(4);
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(bossGroup, workerGroup)
             .channel(NioServerSocketChannel.class)
             .option(ChannelOption.SO_BACKLOG, 100)
             .handler(new LoggingHandler(LogLevel.INFO))
             .childHandler(new ChannelInitializer<SocketChannel>() {
                 @Override
                 public void initChannel(SocketChannel ch) throws Exception {
                     ChannelPipeline p = ch.pipeline();
                     if (sslCtx != null) {
                         p.addLast(sslCtx.newHandler(ch.alloc()));
                     }
                     /**说明: 如果我们在addLast 添加handler ，前面有指定
                      *EventExecutorGroup, 那么该handler 会优先加入到该线程池中
                      **/
                     p.addLast(executorGroup , new EchoServerHandler());
                 }
             });

            // Start the server.
            ChannelFuture f = b.bind(PORT).sync();

            // Wait until the server socket is closed.
            f.channel().closeFuture().sync();
        } finally {
            // Shut down all event loops to terminate all threads.
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}

```
### 13.2.2 EchoServerHandler
```java
/*
 * Copyright 2012 The Netty Project
 *
 * The Netty Project licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
package com.tqk.netty.async;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandler.Sharable;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.CharsetUtil;
import io.netty.util.concurrent.DefaultEventExecutorGroup;
import io.netty.util.concurrent.EventExecutorGroup;

import java.util.concurrent.Callable;

/**
 * Handler implementation for the echo server.
 */
@Sharable
public class EchoServerHandler extends ChannelInboundHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {

        System.out.println("EchoServer Handler 的线程是=" + Thread.currentThread().getName());
        //普通方式
        //接收客户端信息
        ByteBuf buf = (ByteBuf) msg;
        byte[] bytes = new byte[buf.readableBytes()];
        buf.readBytes(bytes);
        String body = new String(bytes, "UTF-8");
        //休眠10秒
        Thread.sleep(10 * 1000);
        System.out.println("普通调用方式的 线程是=" + Thread.currentThread().getName());
        ctx.writeAndFlush(Unpooled.copiedBuffer("hello, 客户端~(>^ω^<)喵2", CharsetUtil.UTF_8));

        System.out.println("go on ");

    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        // Close the connection when an exception is raised.
        //cause.printStackTrace();
        ctx.close();
    }
}

```
