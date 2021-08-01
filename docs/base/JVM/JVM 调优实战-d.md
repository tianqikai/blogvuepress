# 13.JVM调优实战

## 13.1 代码介绍

**模拟多线程处理业务，内存溢出**

```java
package com.tqk.ex13;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * VM参数： -XX:+PrintGC -Xms200M -Xmx200M
 *  GC调优---生产服务器推荐开启(默认是关闭的)
 *  -XX:+HeapDumpOnOutOfMemoryError
 */

public class FullGCProblem {
    //线程池
    private static ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(50,
            new ThreadPoolExecutor.DiscardOldestPolicy());

    public static void main(String[] args) throws Exception {
        //50个线程
        executor.setMaximumPoolSize(50);
        while (true){
            calc();
            Thread.sleep(100);
        }
    }
    //多线程执行任务计算
    private static void calc(){
        List<UserInfo> taskList = getAllCardInfo();
        taskList.forEach(userInfo -> {
            executor.scheduleWithFixedDelay(() -> {
                userInfo.user();
            }, 2, 3, TimeUnit.SECONDS);
        });
    }
    //模拟从数据库读取数据，返回
    private static List<UserInfo> getAllCardInfo(){
        List<UserInfo> taskList = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            UserInfo userInfo = new UserInfo();
            taskList.add(userInfo);
        }
        return taskList;
    }
    private static class UserInfo {
        String name = "tqk";
        int age = 18;
        BigDecimal money = new BigDecimal(999999.99);

        public void user() {
            //
        }
    }
}
```

```sh
//在 Linux 服务跑起来 
java -cp JVM.jar -XX:+PrintGC -Xms200M -Xmx200M com.tqk.ex13.FullGCProblem
```