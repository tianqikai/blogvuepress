# 11.JVM性能调优（一）

## 11.1 压测工具 
AB Ab(ApacheBench) 测试工具是 Apache 提供的一款测试工具，具有简单易上手的特点，在测试 Web 服务时非常实用。  
ab 一般都是在 Linux 上用。 安装非常简单，只需要在 Linux 系统中输入   
```sh
// 安装命令
yum -y install httpd-tools
```
安装成功后，输入 ab 命令，可以看到以下信息：
```sh
[root@TXYUN-NO3 ~]# ab
ab: wrong number of arguments
Usage: ab [options] [http[s]://]hostname[:port]/path
Options are:
    -n requests     Number of requests to perform
    -c concurrency  Number of multiple requests to make at a time
    -t timelimit    Seconds to max. to spend on benchmarking
                    This implies -n 50000
    -s timeout      Seconds to max. wait for each response
                    Default is 30 seconds
    -b windowsize   Size of TCP send/receive buffer, in bytes
    -B address      Address to bind to when making outgoing connections
    -p postfile     File containing data to POST. Remember also to set -T
    -u putfile      File containing data to PUT. Remember also to set -T
    -T content-type Content-type header to use for POST/PUT data, eg.
                    'application/x-www-form-urlencoded'
                    Default is 'text/plain'
    -v verbosity    How much troubleshooting info to print
    -w              Print out results in HTML tables
    -i              Use HEAD instead of GET
    -x attributes   String to insert as table attributes
    -y attributes   String to insert as tr attributes
    -z attributes   String to insert as td or th attributes
    -C attribute    Add cookie, eg. 'Apache=1234'. (repeatable)
    -H attribute    Add Arbitrary header line, eg. 'Accept-Encoding: gzip'
                    Inserted after all normal header lines. (repeatable)
    -A attribute    Add Basic WWW Authentication, the attributes
                    are a colon separated username and password.
    -P attribute    Add Basic Proxy Authentication, the attributes
                    are a colon separated username and password.
    -X proxy:port   Proxyserver and port number to use
    -V              Print version number and exit
    -k              Use HTTP KeepAlive feature
    -d              Do not show percentiles served table.
    -S              Do not show confidence estimators and warnings.
    -q              Do not show progress when doing more than 150 requests
    -l              Accept variable document length (use this for dynamic pages)
    -g filename     Output collected data to gnuplot format file.
    -e filename     Output CSV file with percentages served
    -r              Don't exit on socket receive errors.
    -m method       Method name
    -h              Display usage information (this message)
    -I              Disable TLS Server Name Indication (SNI) extension
    -Z ciphersuite  Specify SSL/TLS cipher suite (See openssl ciphers)
    -f protocol     Specify SSL/TLS protocol
                    (SSL2, TLS1, TLS1.1, TLS1.2 or ALL)
    -E certfile     Specify optional client certificate chain and private key
```

ab 工具用来测试 post get 接口请求非常便捷，可以通过参数指定请求数、并发数、请求参数等 

**测试get**    
 <font color='red'>ab -c 10 -n 100 http://www.test.api.com/test/login?userName=test&password=test </font> 

**测试post**  
 <font color='red'>ab -n 100 -c 10 -p 'post.txt' -T 'application/x-www-form-urlencoded' 'http://test.api.com/test/register'</font> 

### 11.1.1 输入参数的含义
:::tip 参数的含义 
post.txt 为存放 post 参数的文档，存储格式如 usernanme=test&password=test&sex=1 
<font color='red'><strong>-n</strong></font> ：总请求次数（最小默认为 1）   
<font color='red'><strong>-c</strong></font> ：并发次数（最小默认为 1 且不能大于总请求次数，例如：10 个请求，10 个并发，实际就是 1 人请求 1 次）   
<font color='red'><strong>-p</strong></font> ：post 参数文档路径（-p 和 -T 参数要配合使用）   
<font color='red'><strong>-T</strong></font> ：header 头内容类型（此处切记是大写英文字母 T）   
:::

### 11.1.2 输出性能指标参考

:::tip 输出性能指标参考
<font color='red'><strong>Requests per second</strong></font>：吞吐率，指某个并发用户数下单位时间内处理的请求数；   
<font color='red'><strong>Time per request</strong></font>：上面的是用户平均请求等待时间，指处理完成所有请求数所花费的时间 /（总请求数 / 并发用户数）；   
<font color='red'><strong>Time per request</strong></font>：下面的是服务器平均请求处理时间，指处理完成所有请求数所花费的时间 / 总请求数；   
<font color='red'><strong>Percentage of the requests served within a certain time</strong></font>：每秒请求时间分布情况，指在整个请求中，每个请求的时间长度的分布情况，例如有 50% 的请求 响应在 8ms 内，66% 的请求响应在 10ms 内，说明有 16% 的请求在 8ms~10ms 之间  
:::


## 11.2 JVM 内存分配的调优案例 
一个高并发系统中的抢购接口，高峰时 5W 的并发请求，且每次请求会产生 20KB 对象（包括订单、用户、优惠券等对象数据）。 我们可以通过一个并发创建一个 1MB 对象的接口来模拟万级并发请求产生大量对象的场景，具体代码如下：
```java
@RestController
@RequestMapping("/jvm")
public class JvmTestController {

    @RequestMapping(value = "/heap", method = RequestMethod.GET)
    public String jvmTest(){
        List<Byte[]> list=new ArrayList<Byte[]>();
        Byte[] b=new Byte[1024*1024];
        list.add(b);
        System.out.println("jvmtest");
        return "success";
    }
}
```
**启动项目**
```sh
[root@TXYUN-NO3 JVMTEST]# java -jar demo-0.0.1-SNAPSHOT.jar 

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.2.2.RELEASE)

2021-07-29 23:58:34.263  INFO 2769452 --- [           main] com.example.demo.DemoApplication         : Starting DemoApplication v0.0.1-SNAPSHOT on TXYUN-NO3 with PID 2769452 (/root/JVMTEST/demo-0.0.1-SNAPSHOT.jar started by root in /root/JVMTEST)
2021-07-29 23:58:34.282  INFO 2769452 --- [           main] com.example.demo.DemoApplication         : No active profile set, falling back to default profiles: default
2021-07-29 23:58:37.718  INFO 2769452 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 9090 (http)
2021-07-29 23:58:37.765  INFO 2769452 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-07-29 23:58:37.766  INFO 2769452 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.29]
2021-07-29 23:58:38.043  INFO 2769452 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2021-07-29 23:58:38.044  INFO 2769452 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 3526 ms
2021-07-29 23:58:39.198  INFO 2769452 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2021-07-29 23:58:39.817  INFO 2769452 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 9090 (http) with context path ''
2021-07-29 23:58:39.819  INFO 2769452 --- [           main] com.example.demo.DemoApplication         : Started DemoApplication in 6.811 seconds (JVM running for 9.691)
2021-07-29 23:59:06.488  INFO 2769452 --- [nio-9090-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2021-07-29 23:59:06.488  INFO 2769452 --- [nio-9090-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2021-07-29 23:59:06.505  INFO 2769452 --- [nio-9090-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 17 ms

```

## 11.3 AB 压测 

对应用服务进行压力测试，模拟不同并发用户数下的服务的响应情况：  
 1. 10 个并发用户/10 万请求量(总)   ab -c 10 -n 100000 http://127.0.0.1:8080/jvm/heap
 2. 100 个并发用户/10 万请求量(总)  ab -c 100 -n 100000 http://127.0.0.1:8080/jvm/heap 
 3. 1000 个并发用户/10 万请求量(总) ab -c 1000 -n 100000 http://127.0.0.1:8080/jvm/heap


**服务器信息1C2G…**
```sh
[root@TXYUN-NO3 ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:          1.8Gi       633Mi       153Mi       2.0Mi       1.0Gi       1.0Gi
Swap:            0B          0B          0B
[root@TXYUN-NO3 ~]# cat /proc/cpuinfo |grep "cores"|uniq
cpu cores	: 1
```

## 11.4 GC 监控 

无监控不调优，所以我们需要监控起来。JVM 中我们使用 jstat 命令监控一下 JVM 的GC情况。 统计 GC 的情况：

```sh 
[root@TXYUN-NO3 JVMTEST]# jps 
2769452 jar
2773445 Jps
[root@TXYUN-NO3 JVMTEST]# jstat -gc 2769452 5000 20 | awk '{print $13,$14,$15,$16,$17}'
YGC YGCT FGC FGCT GCT
34 0.137 1 0.034 0.171
34 0.137 1 0.034 0.171
34 0.137 1 0.034 0.171
34 0.137 1 0.034 0.171
34 0.137 1 0.034 0.171
34 0.137 1 0.034 0.171
```

## 11.5 堆空间监控 

在默认不配置 JVM 堆内存大小的情况下，JVM 根据默认值来配置当前内存大小。 我们可以通过以下命令来查看堆内存配置的默认值：  
**java -XX:+PrintFlagsFinal -version | grep HeapSize**  

```sh
[root@TXYUN-NO3 JVMTEST]# java -XX:+PrintFlagsFinal -version | grep HeapSize
    uintx ErgoHeapSizeLimit                         = 0                                   {product}
    uintx HeapSizePerGCThread                       = 87241520                            {product}
    uintx InitialHeapSize                          := 31457280                            {product}
    uintx LargePageHeapSizeThreshold                = 134217728                           {product}
    uintx MaxHeapSize                              := 480247808                           {product}
java version "1.8.0_211"
Java(TM) SE Runtime Environment (build 1.8.0_211-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.211-b12, mixed mode)
```
JVM 默认最大堆内存为 480MB，初始化大小为 32MB  
**使用 jmap -heap &lt;pid&gt; 这种方式，我们看到这个 JVM 应用占据的堆空间大小**
jmap -heap  2769452

```sh
root@TXYUN-NO3 JVMTEST]# jmap -heap  2769452
Attaching to process ID 2769452, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.211-b12

using thread-local object allocation.
Mark Sweep Compact GC

Heap Configuration:
   MinHeapFreeRatio         = 40
   MaxHeapFreeRatio         = 70
   MaxHeapSize              = 480247808 (458.0MB)
   NewSize                  = 10485760 (10.0MB)
   MaxNewSize               = 160038912 (152.625MB)
   OldSize                  = 20971520 (20.0MB)
   NewRatio                 = 2
   SurvivorRatio            = 8
   MetaspaceSize            = 21807104 (20.796875MB)
   CompressedClassSpaceSize = 1073741824 (1024.0MB)
   MaxMetaspaceSize         = 17592186044415 MB
   G1HeapRegionSize         = 0 (0.0MB)

Heap Usage:
New Generation (Eden + 1 Survivor Space):
   capacity = 9502720 (9.0625MB)
   used     = 6891048 (6.571815490722656MB)
   free     = 2611672 (2.4906845092773438MB)
   72.51658472521552% used
Eden Space:
   capacity = 8454144 (8.0625MB)
   used     = 6357008 (6.0625152587890625MB)
   free     = 2097136 (1.9999847412109375MB)
   75.19398770591086% used
From Space:
   capacity = 1048576 (1.0MB)
   used     = 534040 (0.5093002319335938MB)
   free     = 514536 (0.49069976806640625MB)
   50.930023193359375% used
To Space:
   capacity = 1048576 (1.0MB)
   used     = 0 (0.0MB)
   free     = 1048576 (1.0MB)
   0.0% used
tenured generation:
   capacity = 20971520 (20.0MB)
   used     = 10445832 (9.961921691894531MB)
   free     = 10525688 (10.038078308105469MB)
   49.809608459472656% used

11316 interned Strings occupying 957152 bytes.

```
## 11.6 压测方案

### 11.6.1  直接使用默认jvm参数运行

java -jar  demo-1.0-SNAPSHOT.jar

ab -c 10 -n 100000 http://1.117.13.88:9090/jvm/heap

```sh
[root@TXYUN-NO3 JVMTEST]# ab -c 10 -n 100000 http://1.117.13.88:9090/jvm/heap
This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 1.117.13.88 (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        1.117.13.88
Server Port:            9090

Document Path:          /jvm/heap
Document Length:        7 bytes

Concurrency Level:      10
Time taken for tests:   761.489 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      13900000 bytes
HTML transferred:       700000 bytes
Requests per second:    131.32 [#/sec] (mean)
Time per request:       76.149 [ms] (mean)
Time per request:       7.615 [ms] (mean, across all concurrent requests)
Transfer rate:          17.83 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        3   23 187.4      5    7150
Processing:     4   53 253.9     10   12593
Waiting:        4   51 253.0     10   12593
Total:          7   76 321.8     15   12597

Percentage of the requests served within a certain time (ms)
  50%     15
  66%     17
  75%     18
  80%     20
  90%     40
  95%    229
  98%   1056
  99%   1689
 100%  12597 (longest request)

root@TXYUN-NO3 JVMTEST]# jstat -gc 2769452 5000 20 | awk '{print $13,$14,$15,$16,$17}'
YGC YGCT FGC FGCT GCT
16384 27.951 5 0.305 28.257
16622 28.298 6 0.375 28.673
16873 28.677 6 0.375 29.052
17140 29.038 6 0.375 29.413
17453 29.444 6 0.375 29.819
17737 29.798 6 0.375 30.172
18111 30.268 6 0.375 30.642
18445 30.711 6 0.375 31.085
18764 31.099 6 0.375 31.473
19144 31.587 6 0.375 31.962
19425 31.947 6 0.375 32.321
19881 32.537 6 0.375 32.912
20137 32.853 6 0.375 33.228
20505 33.314 6 0.375 33.689
20815 33.775 6 0.375 34.150
21171 34.187 6 0.375 34.561
21492 34.580 6 0.375 34.954
21822 34.977 6 0.375 35.351
21979 35.168 6 0.375 35.542
22283 35.544 6 0.375 35.918

```
ab -c 10 -n 100000 http://1.117.13.88:9090/jvm/heap

### 11.6.2 增大堆内存空间

**java -jar -Xms1500m -Xmx1500m demo-1.0-SNAPSHOT.jar** 

使用 AB 进行压力测试： ab -c 10 -n 100000 http://1.117.13.88:9090/jvm/heap

### 11.6.3 增大堆内存新生代比例

**java -jar -Xms1500m -Xmx1500m -Xmn1000m -XX:SurvivorRatio=8 demo-1.0-SNAPSHOT.jar**

使用 AB 进行压力测试： ab -c 10 -n 100000 http://1.117.13.88:9090/jvm/heap


## 11.7 GC 调优策略

### 11.7.1 降低 Minor GC 频率 

由于新生代空间较小，Eden 区很快被填满，就会导致频繁 Minor GC，因此我们可以通过增大新生代空间来降低 Minor GC 的频率。 单次 Minor GC 时间是由两部分组成：T1（扫描新生代）和 T2（复制存活对象）。 

情况 1：假设一个对象在 Eden 区的存活时间为 500ms，Minor GC 的时间间隔是 300ms，因为这个对象存活时间>间隔时间，那么正常情况下，Minor GC 的时间为 ：T1+T2。   

情况 2：当我们增大新生代空间，Minor GC 的时间间隔可能会扩大到 600ms，此时一个存活 500ms 的对象就会在 Eden 区中被回收掉，此时就不 存在复制存活对象了，所以再发生 Minor GC 的时间为：即 T1*2（空间大了）+T2*0 可见，扩容后，Minor GC 时增加了 T1，但省去了 T2 的时间。     

-------------

在 JVM 中，复制对象的成本要远高于扫描成本。  
如果在堆内存中存在较多的长期存活的对象，此时增加年轻代空间，反而会增加 Minor GC 的时间。如 果堆中的短期对象很多，那么扩容新生代，单次 Minor GC 时间不会显著增加。

因此，单次 Minor GC 时间更多取决于 GC 后存活对象的数量，而非 Eden 区的大小。 这个就解释了之前的内存调整方案中，方案一为什么性能还差些，但是到了方案二话，性能就有明显的上升。

### 11.7.1 降低 Full GC 的频率 

由于堆内存空间不足或老年代对象太多，会触发 Full GC，频繁的 Full GC 会带来上下文切换，增加系统的性能开销。 

<font color='red'><strong>减少创建大对象</strong></font>：在平常的业务场景中，我们一次性从数据库中查询出一个大对象用于 web 端显示。比如，一次性查询出 60 个字段的业务操作，这种大对象如果超过年轻代最大对象阈值，会被直接创建在老年代；即使被创建在了年轻代，由于年轻代的内存空间有限，通过 Minor GC 之后也会进入到老年代。这种大对象很容易产生较多的 Full GC。 

<font color='red'><strong>增大堆内存空间</strong></font>：在堆内存不足的情况下，增大堆内存空间，且设置初始化堆内存为最大堆内存，也可以降低 Full GC 的频率。  

<font color='red'><strong>选择合适的 GC 回收器</strong></font>: 如果要求每次操作的响应时间必须在 500ms 以内。这个时候我们一般会选择响应速度较快的 GC 回收器，堆内存比较小的情况下（&lt;6G）选择 CMS （Concurrent Mark Sweep）回收器和堆内存比较大的情况下（&gt;8G）G1 回收器.

