# 10.多线程

### 10.1程序、进程、线程

1. <font color='blue'><strong><Badge text="程序(program)"/> </strong></font>是为完成特定任务、用某种语言编写的一组指令的集合。即指<font color='red'>一段静态的代码</font>，静态对象。  
2. <font color='blue'><strong><Badge text="进程(process)"/> </strong></font>是程序的一次执行过程，或是正在运行的一个程序。是一个动态的过程：有它自身的产生、存在和消亡的过程。——生命周期  
　▶如：运行中的QQ，运行中的MP3播放器  
　▶程序是静态的，进程是动态的  
　▶进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域  
3. <font color='blue'><strong><Badge text="线程(thread)"/> </strong></font>，进程可进一步细化为线程，是一个程序内部的一条执行路径。  
　▶若一个进程同一时间并行执行多个线程，就是支持多线程的  
　▶线程作为调度和执行的单位，每个线程拥有独立的<font color='red'>运行栈和程序计数器(pc)</font> ，线程切换的开销小   
　▶一个进程中的多个线程共享相同的内存单元/内存地址空间(堆内存和方法区内存)  
　▶它们从同一堆中分配对象，可以访问相同的变量和对象。这就使得线程间通信更简便、高效。但多个线程操作共享的系统资源可能就会带来<font color='red'>安全的隐患</font>  

:::tip 进程和线程对比
1. 一个进程中可以包含多个线程
2. 线程是最小的调度单位，进程是最小的资源分配单位
3. 线程之间的通信简单（有共享的内存），进程之间的通信复杂
4. 线程的上下文切换成本低，进程上下文切换成本高
:::

:::tip 并行和并发
<font color='red' size=4><strong>并行</strong></font>就是两个或两个以上的任务同时运行，就是甲任务进行的同时，乙任务也在进行。(需要多核CPU)  
<font color='red' size=4><strong>并发</strong></font>是指两个或两个以上的任务都请求运行，而CPU只能接受一个任务，就把这两个任务安排轮流进行，由于时间间隔较短，使人感觉两个任务都在运行。比如：秒杀、多个人做同一件事。
:::

:::tip 多线程的缺点
1. 设计复杂
2. 多线程中<font color='red'><strong>共享堆内存和方法区</strong></font>，因此里面的一些数据是可以共享的，在设计时要确保数据的准确性，否则会出现线程安全问题
3. 资源消耗增多
4. 栈内存是不共享的，如果启用多个线程的话会占用更多的内存
:::

## 线程的创建和使用--Thread类

:::tip Thread类的特性
◆ 每个线程都是通过某个特定Thread对象的run()方法来完成操作的，经常把run()方法的主体称为线程体  
◆ 通过该Thread对象的start()方法来启动这个线程，而非直接调用run()  
:::

:::tip Thread构造器
◆ <font color='red'><strong>Thread(String threadname)：</strong></font>创建线程并指定线程实例名  
◆ <font color='red'><strong>Thread(Runnable target)：</strong></font>指定创建线程的目标对象，它实现了Runnable接口中的run方法   
◆ <font color='red'><strong>Thread(Runnable target, String name)：</strong></font>创建新的Thread对象    
:::

:::tip 方式一：继承Thread类
1) 定义子类继承Thread类。  
2) 子类中重写Thread类中的run方法。  
3) 创建Thread子类对象，即创建了线程对象。  
4) 调用线程对象start方法：启动线程，调用run方法。  
:::


```java
public class ThreadTest {
    public static void main(String[] args) {
        //3. new 创建Thread子类对象，即创建了线程对象。
        Thread thread=new MyThread();
        //4. 调用线程对象start方法：启动线程，调用当前线程的run方法。
        thread.start();
        for (int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName()+": 主线程main" + i);
        }
    }
}
// 1.定义子类继承Thread类
public class MyThread extends Thread{
    // 2.重写run方法
    @Override
    public void run() {
        for (int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName()+":子线程===="+i);
        }
    }
}
```
## 线程的创建和使用--Runnable接口

:::tip 方式二：实现Runnable接口
1) 定义子类，实现Runnable接口。  
2) 子类中重写Runnable接口中的run方法。  
3) 通过Thread类含参构造器创建线程对象。  
4) 将Runnable接口的子类对象作为实际参数传递给Thread类的构造器中。  
5) 调用Thread类的start方法：开启线程，调用Runnable子类接口的run方法。  
:::

```java
import java.util.Scanner;

/**
 * @ClassName：ThreadTest4
 * @description: Runable实现
1) 定义子类，实现Runnable接口。
2) 子类中重写Runnable接口中的run方法。
3) 通过Thread类含参构造器创建线程对象。
4) 将Runnable接口的子类对象作为实际参数传递给Thread类的构造器中。
5) 调用Thread类的start方法：开启线程，调用Runnable子类接口的run方法。
 */
public class ThreadTest4 {
    public static void main(String[] args) {
        System.out.println("请输入今天的总票数：");
        Scanner sc = new Scanner(System.in);
        int ticket = sc.nextInt();
        System.out.println("开始售票！");
        MyThread4 myThread4=new MyThread4();
        myThread4.setTicket(ticket);
        Thread thread1=new Thread(myThread4);
        Thread thread2=new Thread(myThread4);
        Thread thread3=new Thread(myThread4);
        thread1.start();
        thread2.start();
        thread3.start();
    }
}
class MyThread4 implements Runnable{
    private  int ticket;

    public void setTicket(int ticket) {
        this.ticket = ticket;
    }

    @Override
    public   void run() {
        while(true){
            synchronized(this){
                if (this.ticket>0){
                    System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+this.ticket);
                }
                this.ticket--;
                if(this.ticket<=0){
                    break;
                }
            }
        }
    }
}
```

```java
//开启两个子线程 输出100以内的奇数和偶数
public class ThreadTest1 {
    public static void main(String[] args) {
        //创建Thread匿名类对象
        new Thread(){
            @Override
            public void run() {
                for (int i=0;i<100;i++){
                    if(i%2==0){
                        System.out.println(Thread.currentThread().getName()+":"+i);
                    }
                }
            }
        }.start();
        new Thread(){
            @Override
            public void run() {
                for (int i=0;i<100;i++){
                    if(i%2!=0){
                        System.out.println(Thread.currentThread().getName()+":"+i);
                    }
                }
            }
        }.start();
    }
}
```
:::warning <font color='red'>注意点：</font>
1. 如果自己手动调用run()方法，那么就只是普通方法，没有启动多线程模式。
2. run()方法由JVM调用，什么时候调用，执行的过程控制都有操作系统的CPU
调度决定。
3. 想要启动多线程，必须调用start方法。
4. 一个线程对象只能调用一次start()方法启动，如果重复调用了，则将抛出以上
的异常“IllegalThreadStateException”。
:::

:::tip Thread中的方法
1. <font color='red'><strong>void start():</strong></font> 启动线程，并执行对象的run()方法
2. <font color='red'><strong>run():</strong></font> 线程在被调度时执行的操作
3. <font color='red'><strong>String getName():</strong></font> 返回线程的名称
4. <font color='red'><strong>void setName(String name):</strong></font>设置该线程名称
5. <font color='red'><strong>static Thread currentThread():</strong></font> 返回当前线程。在Thread子类中就是this，通常用于主线程和Runnable实现类
6. <font color='red'><strong>static void yield()：</strong></font>线程让步  
　▶暂停当前正在执行的线程，把执行机会让给优先级相同或更高的线程  
　▶若队列中没有同优先级的线程，忽略此方法  
7. <font color='red'><strong>join() ：</strong></font>当某个程序执行流中调用其他线程的 join() 方法时，调用线程将被阻塞，直到 join() 方法加入的 join 线程执行完为止  
　▶低优先级的线程也可以获得执行  
9. <font color='red'><strong>static void sleep(long millis)：</strong></font>(指定时间:毫秒) 令当前活动线程在指定时间段内放弃对CPU控制,使其他线程有机会被执行,时间到后重排队。  
　▶抛出InterruptedException异常  
10. <font color='red'><strong>stop():</strong></font> 强制线程生命期结束，不推荐使用(已过时)
11. <font color='red'><strong>boolean isAlive()：</strong></font>返回boolean，判断线程是否还活着
:::

```java
package javabase.thread;
/**
 * @ClassName：
 * @description:
 * @author: tianqikai
 * @date : 16:09 2021/5/5
 * void start(): 启动线程，并执行对象的run()方法
 * run(): 线程在被调度时执行的操作
 * String getName(): 返回线程的名称
 * void setName(String name):设置该线程名称
 * static Thread currentThread(): 返回当前线程。在Thread子类中就是this，通常用于主线程和Runnable实现类
 * static void yield()：线程让步
 * 暂停当前正在执行的线程，把执行机会让给优先级相同或更高的线程
 * 若队列中没有同优先级的线程，忽略此方法
 * join() ：当某个程序执行流中调用其他线程的 join() 方法时，调用线程将
 * 被阻塞，直到 join() 方法加入的 join 线程执行完为止
 * 低优先级的线程也可以获得执行
 * static void sleep(long millis)：(指定时间:毫秒) 令当前活动线程在指定时间段内放弃对CPU控制,使其他线程有机会被执行,时间到后重排队。
 * 抛出InterruptedException异常
 * stop(): 强制线程生命期结束，不推荐使用
 * boolean isAlive()：返回boolean，判断线程是否还活着
 */
public class ThreadTest2 {
    public static void main(String[] args) throws InterruptedException {
        //3. new 创建Thread子类对象，即创建了线程对象。
        Thread thread=new YourThread();
        thread.setName("子线程");//设置线程名称
        //4. 调用线程对象start方法：启动线程，调用当前线程的run方法。
        // 不能直接使用run方法启动子线程
        thread.start();
//        YourThread.sleep(5000);//令当前活动线程在指定时间段内放弃对CPU控制,使其他线程有机会被执行,时间到后重排队。
        Thread.currentThread().setName("主线程");
        for (int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName()+": 主线程main" + i);
            if(i==20){
                thread.join();//某个程序执行流中调用其他线程的 join() 方法时，调用线程将被阻塞，直到 join() 方法加入的 join 线程执行完为止
            }
        }
        System.out.println(thread.isAlive());//返回boolean，判断线程是否还活着
    }
}
// 1.定义子类继承Thread类
 class YourThread extends Thread{
    // 2.重写run方法
    @Override
    public void run() {
        for (int i=0;i<100;i++){
            //getName()获取当前线程名称
            System.out.println(this.getName()+":子线程===="+i);
            if(i==60){
                yield();//线程让步  暂停当前正在执行的线程，把执行机会让给优先级相同或更高的线程,也可能还是自己本身这个线程
            }
        }
    }
}
```
:::tip 线程的优先级
1. 线程的优先级等级  
　<font color='red'>▶MAX_PRIORITY：10</font>   
　<font color='red'>▶MIN _PRIORITY：1</font>   
　<font color='red'>▶NORM_PRIORITY：5</font>   
2. 涉及的方法  
　<font color='red'>▶getPriority() </strong></font>：返回线程优先值  
　<font color='red'>▶setPriority(int newPriority) </font>：改变线程的优先级  
3. 说明  
　▶线程创建时继承父线程的优先级  
　▶低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调用  
:::

```java
public class ThreadTest3 {
    public static void main(String[] args) {
        //3. new 创建Thread子类对象，即创建了线程对象。
        Thread thread=new MyThread3();
        //4. 调用线程对象start方法：启动线程，调用当前线程的run方法。
        // 不能直接使用run方法启动子线程
        thread.start();
        thread.setPriority(Thread.MAX_PRIORITY);
        System.out.println(thread.getName()+"优先级:"+thread.getPriority());
        Thread.currentThread().setPriority(Thread.MIN_PRIORITY);
        System.out.println(Thread.currentThread().getName()+"优先级:"+thread.getPriority());
        for (int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName()+": 主线程main" + i);
        }
    }
}
// 1.定义子类继承Thread类
class MyThread3 extends Thread{
    // 2.重写run方法
    @Override
    public void run() {
        for (int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName()+":子线程===="+i);
        }
    }
}
```
## 线程的生命周期
JDK中用Thread.State类定义了线程的几种状态要想实现多线程，必须在主线程中创建新的线程对象。Java语言使用Thread类及其子类的对象来表示线程，在它的一个完整的生命周期中通常要经历如下的五种状态： 
1. <font color='red'><strong>新建</strong></font> ：当一个Thread类或其子类的对象被声明并创建时，新生的线程对象处于新建状态
2. <font color='red'><strong>就绪</strong></font> ：处于新建状态的线程被start()后，将进入线程队列等待CPU时间片，此时它已具备了运行的条件，只是没分配到CPU资源
3. <font color='red'><strong>运行</strong></font> ：当就绪的线程被调度并获得CPU资源时,便进入运行状态， run()方法定义了线程的操作和功能
4. <font color='red'><strong>阻塞</strong></font> ：在某种特殊情况下，被人为挂起或执行输入输出操作时，让出 CPU 并临时中止自己的执行，进入阻塞状态
5. <font color='red'><strong>死亡</strong></font> ：线程完成了它的全部工作或线程被提前强制性地中止或出现异常导致结束

## 线程的同步 --synchronized

:::tip synchronized的锁是什么？
 ◆ 任意对象都可以作为同步锁。所有对象都自动含有单一的锁（监视器）。   
 ◆ 同步方法的锁：<font color='red'>静态方法（类名.class）、非静态方法（this）</font>   
 ◆ 同步代码块：自己指定，很多时候也是指定为this或类名.class  
:::

:::tip  注意：
◆ 必须确保使用同一个资源的多个线程共用一把锁，这个非常重要，否则就无法保证共享资源的安全  
◆ 一个线程类中的所有静态方法共用同一把锁（类名.class），所有非静态方法共用同一把锁（this），同步代码块（指定需谨慎）  
:::

**Runable 方式**
```java
import java.util.Scanner;

/**
 * @ClassName：ThreadTest4
 * @description: Runable实现
1) 定义子类，实现Runnable接口。
2) 子类中重写Runnable接口中的run方法。
3) 通过Thread类含参构造器创建线程对象。
4) 将Runnable接口的子类对象作为实际参数传递给Thread类的构造器中。
5) 调用Thread类的start方法：开启线程，调用Runnable子类接口的run方法。
 */
public class ThreadTest4 {
    public static void main(String[] args) {
        System.out.println("请输入今天的总票数：");
        Scanner sc = new Scanner(System.in);
        int ticket = sc.nextInt();
        System.out.println("开始售票！");
        MyThread4 myThread4=new MyThread4();
        myThread4.setTicket(ticket);
        Thread thread1=new Thread(myThread4);
        Thread thread2=new Thread(myThread4);
        Thread thread3=new Thread(myThread4);
        thread1.start();
        thread2.start();
        thread3.start();
    }
}
class MyThread4 implements Runnable{
    private  static int ticket;

    public void setTicket(int ticket) {
        MyThread4.ticket = ticket;
    }

    @Override
    public   void run() {
        while(true){
//            synchronized(this){// 主方法中只new了一个对象，所以锁this是可以的，锁的就是myThread4这个对象
//            synchronized(MyThread4.class){
//                if (this.ticket>0){
//                    System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+this.ticket);
//                    this.ticket--;
//                }
//            }
//            method();
            method2();
            if(MyThread4.ticket<=0){
                break;
            }
        }
    }

    public synchronized void method(){ //这里锁住的是this 当前类的对象
        if (MyThread4.ticket>0){
            System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+MyThread4.ticket);
        }
        MyThread4.ticket--;
    }
    // 需要 ticket是静态变量才可以使用
    public static synchronized void method2(){//这里锁住的是this 当前类的对象
        if (MyThread4.ticket>0){
            System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+MyThread4.ticket);
        }
        MyThread4.ticket--;
    }
    /**
     * 方式一：同步代码块
     *  synchronized(同步监视器){
     *      需要同步的代码块
     *  }
     *  说明：
     *  1.同步代码块-》即操作共享数据的代码块 不能多了，也不能少了；多了可能导致效率低，少了可能会锁不住
     *  2.共享数据：多个线程共同操作的变量叫做共享数据 比如：上边的 ticket
     *  3.同步监视器：俗称锁，可以为任意类的对象；要求必须是多线程必须共用一把锁
     *
     *  方式二：同步方法
     *  把操作共享数据的方法整个放在一个方法中，我们称这个方法为同步方法
     *
     *  同步方式优点缺点
     *  优点：解决了线程安全问题
     *  缺点：效率低
     *
     */
}
```
**Thread方式**

```java
public class ThreadTest5 {
    public static void main(String[] args) {
        System.out.println("请输入今天的总票数：");
        Scanner sc = new Scanner(System.in);
        int ticket = sc.nextInt();
        System.out.println("开始售票！");

        MyThread5 thread1=new MyThread5();
        MyThread5 thread2=new MyThread5();
        MyThread5 thread3=new MyThread5();
        //
        thread1.setTicket(ticket);
        thread2.setTicket(ticket);
        thread3.setTicket(ticket);

        thread1.start();
        thread2.start();
        thread3.start();

    }
}
class MyThread5 extends Thread {
    private static  int ticket;
    Object object=new Object();

    public void setTicket(int ticket) {
        MyThread5.ticket = ticket;
    }

    @Override
    public void run() {
        while (true) {
//            synchronized (this) {// 主方法中是三个不同的对象，这种方式不可取
//            synchronized (MyThread5.class) {
//                if (MyThread5.ticket > 0) {
//                    System.out.println(Thread.currentThread().getName() + " |卖出去的票号：" + MyThread5.ticket);
//                    MyThread5.ticket--;
//                }
//            }
            try {
                MyThread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            method2();
            if (MyThread5.ticket <= 0) {
                break;
            }

        }
    }
    // 需要 ticket是静态变量才可以使用
    public static synchronized void method2(){//这里锁住的是MyThread5.class 当前类的对象
        if (MyThread5.ticket>0){
            System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+MyThread5.ticket);
        }
        MyThread5.ticket--;
    }
}
```

## 线程的死锁问题

:::tip 死锁
◆ 不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁  
◆ 出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态，无法继续  
:::

:::tip 解决方法
◆ 专门的算法、原则  
◆ 尽量减少同步资源的定义  
◆ 尽量避免嵌套同步  
:::

```java
package javabase.thread;
/**
 * @ClassName：死锁测试
 * @description:
 * @author: tianqikai
 * @date : 21:45 2021/5/5
 */
public class DeadLock1 {
    public static void main(String[] args) {
        StringBuffer a=new StringBuffer();
        StringBuffer b=new StringBuffer();
        new Thread(){
            @Override
            public void run() {
                synchronized (a){
                    a.append("a");
                    b.append("1");
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized(b){
                        a.append("b");
                        b.append("2");
                    }
                }
            }
        }.start();

        new Thread(new Runnable() {
            @Override
            public void run() {
                synchronized (b){
                    System.out.println("1");
                    a.append("c");
                    b.append("3");
                    System.out.println("aa:"+a.toString());
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized(a){
                        System.out.println("2");
                        a.append("d");
                        System.out.println("aaa:"+a.toString());
                        b.append("4");
                    }
                }
            }
        }).start();

        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(a.toString());
        System.out.println(b.toString());
    }
}

```

```java
package javabase.thread;

class A {
	public synchronized void foo(B b) {
		System.out.println("当前线程名: " + Thread.currentThread().getName()
				+ " 进入了A实例的foo方法"); // ①
		try {
			Thread.sleep(200);
		} catch (InterruptedException ex) {
			ex.printStackTrace();
		}
		System.out.println("当前线程名: " + Thread.currentThread().getName()
				+ " 企图调用B实例的last方法"); // ③
		b.last();
	}

	public synchronized void last() {
		System.out.println("进入了A类的last方法内部");
	}
}

class B {
	public synchronized void bar(A a) {
		System.out.println("当前线程名: " + Thread.currentThread().getName()
				+ " 进入了B实例的bar方法"); // ②
		try {
			Thread.sleep(200);
		} catch (InterruptedException ex) {
			ex.printStackTrace();
		}
		System.out.println("当前线程名: " + Thread.currentThread().getName()
				+ " 企图调用A实例的last方法"); // ④
		a.last();
	}

	public synchronized void last() {
		System.out.println("进入了B类的last方法内部");
	}
}

public class DeadLock implements Runnable {
	A a = new A();
	B b = new B();

	public void init() {
		Thread.currentThread().setName("主线程");
		// 调用a对象的foo方法
		a.foo(b);
		System.out.println("进入了主线程之后");
	}

	@Override
	public void run() {
		Thread.currentThread().setName("副线程");
		// 调用b对象的bar方法
		b.bar(a);
		System.out.println("进入了副线程之后");
	}

	public static void main(String[] args) {
		DeadLock dl = new DeadLock();
		new Thread(dl).start();
		dl.init();
	}
}

```

## 线程的同步--Lock(锁)

:::tip Lock(锁)
从JDK 5.0开始，Java提供了更强大的线程同步机制——通过显式定义同步锁对象来实现同步。同步锁使用Lock对象充当。   
1. java.util.concurrent.locks.Lock接口是控制多个线程对共享资源进行访问的工具。锁提供了对共享资源的独占访问，每次只能有一个线程对Lock对象加锁，线程开始访问共享资源之前应先获得Lock对象。   
2. <font color='red'>ReentrantLock 类</font> 实现了 Lock ，它拥有与 synchronized 相同的并发性和内存语义，在实现线程安全的控制中，比较常用的是ReentrantLock，<font color='red'>可以显式加锁、释放锁。 </font>  
::: 

**示例**
```java
class A{
    private final ReentrantLock lock = new ReenTrantLock();
    public void m(){
        lock.lock();
        try{
            //保证线程安全的代码; }
        finally{
            lock.unlock(); 
        } 
    }
}
```

```java
package javabase.thread;

import java.util.Scanner;
import java.util.concurrent.locks.ReentrantLock;
public class LockTest {
    public static void main(String[] args) {
        System.out.println("请输入今天的总票数：");
        Scanner sc = new Scanner(System.in);
        int ticket = sc.nextInt();
        System.out.println("开始售票！");
        MyThreadLock myThreadLock=new MyThreadLock();
        myThreadLock.setTicket(ticket);
//        Window myThreadLock=new Window();
        Thread thread1=new Thread(myThreadLock);
        Thread thread2=new Thread(myThreadLock);
        Thread thread3=new Thread(myThreadLock);
        thread1.start();
        thread2.start();
        thread3.start();
    }
}
class Window implements Runnable{
    int ticket = 1000;
    private final ReentrantLock lock = new ReentrantLock();
    @Override
    public void run(){

        while(true){
            try{
                lock.lock();
                if(ticket > 0){
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + " |卖出去的票号：" +ticket--);
                }else{
                    break;
                }
            }finally{
                lock.unlock();
            }
        }
    }
}
class MyThreadLock implements Runnable {
    private static int ticket;

    public void setTicket(int ticket) {
        MyThreadLock.ticket = ticket;
    }

    private final ReentrantLock lock = new ReentrantLock();

    @Override
    public void run() {
        while (true) {
            try{
                lock.lock();
                Thread.sleep(10);
                if (MyThreadLock.ticket > 0) {
                    System.out.println(Thread.currentThread().getName() + " |卖出去的票号：" + MyThreadLock.ticket);
                    MyThreadLock.ticket--;
                }
            }catch(Exception e){
                e.printStackTrace();
            }finally {
                lock.unlock();
            }
            if (MyThreadLock.ticket <= 0) {
                break;
            }
        }
    }
}
```

:::tip Lock锁和synchronized锁比较
1. Lock是显式锁（手动开启和关闭锁，别忘记关闭锁），synchronized是隐式锁，出了作用域自动释放
2. Lock只有代码块锁，synchronized有代码块锁和方法锁
3. 使用Lock锁，JVM将花费较少的时间来调度线程，性能更好。并且具有更好的扩展性（提供更多的子类）
:::

## 线程的通信

:::tip <font color='red'>wait() 与 notify() 和 notifyAll()</font>
◆ <strong>wait()</strong>：令当前线程挂起并放弃CPU、同步资源并等待，使别的线程可访问并修改共享资源，而当前线程排队等候其他线程调用notify()或notifyAll()方法唤醒，唤醒后等待重新获得对监视器的所有权后才能继续执行。  
◆ <strong>notify()</strong>：唤醒正在排队等待同步资源的线程中优先级最高者结束等待  
◆ <strong>notifyAll()</strong>：唤醒正在排队等待资源的所有线程结束等待.    
★ 这三个方法只有在synchronized方法或synchronized代码块中才能使用，否则会报<font color='red'>java.lang.IllegalMonitorStateException</font>异常。  
★ 因为这三个方法必须有锁对象调用，而任意对象都可以作为synchronized的同步锁，因此这三个方法只能在Object类中声明  
:::

:::tip wait() 方法
1. 在当前线程中调用方法： <font color='red'>对象名.wait()</font>  
2. 使当前线程进入等待（某对象）状态 ，直到另一线程对该对象发出 notify (或notifyAll) 为止。  
3. 调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）  
4. <font color='red'><strong>调用此方法后，当前线程将释放对象监控权 ，然后进入等待</strong></font>  
5. 在当前线程被notify后，要重新获得监控权，然后从断点处继续代码的执行。  
:::


:::tip notify()/notifyAll()
1. 在当前线程中调用方法： 对象名.notify()  
2. 功能：<font color='red'><strong>唤醒等待该对象监控权的一个/所有线程。</strong></font>    
3. 调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）  
:::

```java
public class ThreadTest6 {
    public static void main(String[] args) {
        System.out.println("请输入今天的总票数：");
        Scanner sc = new Scanner(System.in);
        int ticket = sc.nextInt();
        System.out.println("开始售票！");
        MyThread6 myThread6=new MyThread6();
        myThread6.setTicket(ticket);
        Thread thread1=new Thread(myThread6);
        Thread thread2=new Thread(myThread6);
        thread1.start();
        thread2.start();
    }
}
class MyThread6 implements Runnable{
    private   int ticket;

    public void setTicket(int ticket) {
        this.ticket = ticket;
    }

    @Override
    public   void run() {
        while(true){
            synchronized(this){// 主方法中只new了一个对象，所以锁this是可以的，锁的就是myThread4这个对象
                this.notify();
                if (this.ticket>0){
                    System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+this.ticket);
                    this.ticket--;
                    if(this.ticket>0){
                        try {
                            this.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
            if(this.ticket<=0){
                break;
            }
        }
    }
}
```
```java
public class CallableThread {
    public static void main(String[] args) {
        MyCallable myCallable=new MyCallable();
        myCallable.setTicket(100);

        FutureTask<Integer> futureTask = new FutureTask<Integer>(myCallable);
        FutureTask<Integer> futureTask1 = new FutureTask<Integer>(myCallable);
        new Thread(futureTask).start();
        new Thread(futureTask1).start();
        try {
            Integer value = futureTask.get();
            System.out.println("返回值："+value);
            Integer value1 = futureTask1.get();
            System.out.println("返回值1："+value1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
class MyCallable implements Callable<Integer>{
    private  int ticket;

    public void setTicket(int ticket) {
        this.ticket = ticket;
    }

    @Override
    public Integer call() throws Exception {
        while(true){
            synchronized(this){
                if (this.ticket>0){
                    System.out.println(Thread.currentThread().getName()+" |卖出去的票号："+this.ticket);
                    this.ticket--;
                }else{
                    break;
                }
            }
        }
        return 200;
    }
}
```

:::tip 经典例题：生产者/消费者问题
　生产者(Productor)将产品交给店员(Clerk)，而消费者(Customer)从店员处取走产品，店员一次只能持有固定数量的产品(比如:20），如果生产者试图生产更多的产品，店员会叫生产者停一下，如果店中有空位放产品了再通知生产者继续生产；如果店中没有产品了，店员会告诉消费者等一下，如果店中有产品了再通知消费者来取走产品。  

★这里可能出现两个问题：   
　※生产者比消费者快时，消费者会漏掉一些数据没有取到。    
　※消费者比生产者快时，消费者会取相同的数据。  
:::  
## 线程的创建方式--Callable

:::tip 与使用Runnable相比， Callable功能更强大些
1. 相比run()方法，可以有返回值
2. 方法可以抛出异常
3. 支持泛型的返回值
4. 需要借助FutureTask类，比如获取返回结果
:::

:::tip Future接口
1. 可以对具体Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等。
2. FutrueTask是Futrue接口的唯一的实现类
3. FutureTask 同时实现了Runnable, Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值
:::

```java
package javabase.thread;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/*创建多线程的方式：
1.继承Thread
2.实现Runnable
3.实现Callable
4.使用线程池

*/
class MyThread01 extends Thread {
    @Override
    public void run() {
        System.out.println("-----MyThread01");
    }
}

class MyThread02 implements Runnable {
    @Override
    public void run() {
        System.out.println("-----MyThread02");
    }
}

class MyThread03 implements Callable<Integer> {
    @Override
    public Integer call() throws Exception {
        System.out.println("-----MyThread03");
        return 200;
    }
}

public class ThreadNew {
    public static void main(String[] args) {
        new MyThread01().start();
        new Thread(new MyThread02()).start();

        FutureTask<Integer> futureTask = new FutureTask<Integer>(new MyThread03());
        new Thread(futureTask).start();
        try {
            Integer value = futureTask.get();
            System.out.println("返回值："+value);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```
## 线程的创建方式--线程池
线程池的API
JDK 5.0起提供了线程池相关API：<font color='red'><strong>ExecutorService</strong></font>和<font color='red'><strong>Executors</strong></font>  

　
:::tip <font color='red'>ExecutorService：真正的线程池接口。常见子类ThreadPoolExecutor</font>　
　A. void execute(Runnable command) ：执行任务/命令，没有返回值，一般用来执行Runnable　　
　B. <~> Future<~> submit(Callable<~> task)：执行任务，有返回值，一般又来执行Callable　　
　C. void shutdown():关闭连接池  
:::


--------------------------

:::tip Executors：工具类、线程池的工厂类，用于创建并返回不同类型的线程池　　
　A.Executors.newCachedThreadPool()：创建一个可根据需要创建新线程的线程池　　
　B.Executors.newFixedThreadPool(n): 创建一个可重用固定线程数的线程池　　
　C.Executors.newSingleThreadExecutor() ：创建一个只有一个线程的线程池　　
　D.Executors.newScheduledThreadPool(n)：创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行。　　
:::

------------------------

:::tip 线程池的好处：
1. 提高响应速度（减少了创建新线程的时间）
2. 降低资源消耗（重复利用线程池中线程，不需要每次都创建）
3. 便于线程管理
4. corePoolSize：核心池的大小
5. maximumPoolSize：最大线程数 
6. keepAliveTime：线程没有任务时最多保持多长时间后会终止
:::
<font color='red'><strong>阿里巴巴开发手册---线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险</strong></font>




## 面试题
1. java sleep和wait的区别？  
首先，要记住这个差别，“sleep是Thread类的方法,wait是Object类中定义的方法”。尽管这两个方法都会影响线程的执行行为，但是本质上是有区别的。
Thread.sleep不会导致锁行为的改变，如果当前线程是拥有锁的，那么Thread.sleep不会让线程释放锁。
如果能够帮助你记忆的话，可以简单认为和锁相关的方法都定义在Object类中，因此调用Thread.sleep是不会影响锁的相关行为。
Thread.sleep和Object.wait都会暂停当前的线程，对于CPU资源来说，不管是哪种方式暂停的线程，都表示它暂时不再需要CPU的执行时间。OS会将执行时间分配给其它线程。区别是，调用wait后，需要别的线程执行notify/notifyAll才能够重新获得CPU执行时间。线程的状态参考 Thread.State的定义。新创建的但是没有执行（还没有调用start())的线程处于“就绪”，或者说Thread.State.NEW状态。Thread.State.BLOCKED（阻塞）表示线程正在获取锁时，因为锁不能获取到而被迫暂停执行下面的指令，一直等到这个锁被别的线程释放。BLOCKED状态下线程，OS调度机制需要决定下一个能够获取锁的线程是哪个，这种情况下，就是产生锁的争用，无论如何这都是很耗时的操作

2. Callable比Runable的优势？  
两者最大的不同点是：实现Callable接口的任务线程能返回执行结果；而实现Runnable接口的任务线程不能返回结果；
Callable接口的call()方法允许抛出异常；而Runnable接口的run()方法的异常只能在内部消化，不能继续上抛；
Callable支持泛型


