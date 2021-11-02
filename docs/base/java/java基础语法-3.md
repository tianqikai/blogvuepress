# 3.java基础语法
[[toc]]
**JAVA基础知识图解** 

 ![JAVA基础知识图解](../image/java_base.png)

## 3.1 顺序结构
Java中定义成员变量时采用合法的前向引用。如
```java
//
```
## 3.2 分支结构
## 3.2.1 if...else

分支结构：if-else使用说明  
● 条件表达式必须是布尔表达式（关系表达式或逻辑表达式）、布尔变量  
● 语句块只有一条执行语句时，一对{}可以省略，但建议保留  
● if-else语句结构，根据需要可以嵌套使用  
● 当if-else结构是“多选一”时，最后的else是可选的，根据需要可以省略  
● 当多个条件是“互斥”关系时，条件判断语句及执行语句间顺序无所谓  
当多个条件是“包含”关系时，“小上大下 / 子上父下”  
**if...else语法**
```java
 第一种结构：
            if(boolean表达式){
                java语句;
            }

        解释：如果if后面的boolean表达式是true就执行大括号里面的java语句
             如果是false就不执行大括号中的java语句                


        第二种结构：
            if(boolean表达式){
                java语句;
            }else{
                java语句;
            }

        解释：如果if后面的boolean表达式是true，就执行if大括号中的java语句，
             不执行else大括号中的java语句。
             如果if后面的boolean表达式是false，就不执行if大括号中的java语句，
             会执行else大括号中的java语句。

        第三种结构：
            if(boolean表达式){
                java语句;
            }else if(boolean表达式){
                java语句;
            }else if(boolean表达式){
                java语句;
            }else if(boolean表达式){
                java语句;
            }else{
                java语句;
            }

        解释：当if后面的boolean表达式是true时，才会执行当前if大括号中的java语句，
             如果if后面的boolean表达式都不是true的话，会执行else中的语句。
             注意：如果有两个以上（包括两个）的if后面boolean表达式是true时，会按照从上到下的顺序只执行最上面if大括号中的语句，最多只会执行一个大括号中的语句。
```
## 3.2.2 switch-case
**switch-case语法**
```java
switch(表达式){

case 值1:
    java语句;
    break;

case 值2:
    java语句;
    break;

case 值3:
    java语句;
    break;

default:
    java语句;
}
```
**示例：**
```java
    //输入数字返回时星期几的程序
   int week = 1;

    switch(week) {
        case 1:
            System.out.println("今天是星期一");
            break;
        case 2:
            System.out.println("今天是星期二");
            break;
        case 3:
            System.out.println("今天是星期三");
            break;
        case 4:
            System.out.println("今天是星期四");
            break;
        case 5:
            System.out.println("今天是星期五");
            break;
        case 6:
            System.out.println("今天是星期六");
            break;
        case 7:
            System.out.println("今天是星期日");
            break;
        default:
            System.out.println("数字错误");
    }
```

**注意：**
– 程序遇到break语句结束了，可以不写break，如果不写，则会发生case穿透现象  
– defalut语句也可以没有。  
– switch后面的括号中可以填写byte、short、char、int类型，即能够自动转换为int类型的都可以，在jdk7版本之后可以填写String类型。  
– case后面只能是常量，不能是变量，而且，多个case后面的值不能出现相同的  
``` java
//写一个输入月份，返回季节的程序

```
## 3.3 循环结构
## 3.2.1 while
**while语法**
```java
    初始化语句;
    while(boolean表达式) {
         循环体语句;
         控制条件语句;
    }
```
**执行过程：**

只要boolean表达式里面的结果是true，就会执行while大括号里面的语句，直到boolean表达式的结果变为false，循环结束。while循环的次数是：0-N次  

while循环本质上和for循环是一样的，可以相互替换，作用相同，格式不同，实际工作中建议使用for循环，因为变量会及早的从内存中消失，可以提高内存的使用效率。  
## 3.2.2 do...while
**do...while语法**
```java
    初始化语句;
    do {
        循环体语句;
        控制条件语句;
    }while(boolean表达式);
```
**执行过程：**

首先会执行do循环体中的语句，然后运算while中的boolean表达式，如果是true则继续执行do循环体中的语句，如果是false，则循环执行结束。  

do里面的语句至少会执行一次，执行之后根据while里面的条件判断语句来判定是否继续循环执行do里面的语句。  

注意：while后面的;不要忘记，否则会报错。  
## 3.2.3 for
**for语法**
```java
for(初始化表达式;条件表达式;循环后的操作表达式) {
    循环体;
}
```
1.执行初始化语句，并且在整个循环过程里面只执行一次  

2.执行判断条件语句,看其返回值是true还是false  

* 如果是true，就继续执行  
* 如果是false，就结束循环，整个流程结束  

3.执行循环体语句  

4.执行循环后的操作表达式  

5.程序回到步骤2继续。
**练习**
```java
1.打印1~100之间所有奇数的和
2.打印1~100之间所有是7的倍数的整数的个数及总和（体会设置计数
器的思想）
3.输出所有的水仙花数，所谓水仙花数是指一个3位数，其各个位上数
字立方和等于其本身。
```  
## 3.3 控制语句_break和continue

break是java语言中的关键字，中文是打断，终止的意思

可以用在switch语句中，结束分支语句，防止case穿透现象的发生.
可以出现在循环当中，作用是结束整个循环的执行，默认情况下结束离它最近的一个循环.
默认情况下break;语句跳出的是离它最近的循环。
**示例：**
```java

```

continue
程序执行到continue语句时，直接结束本次循环，进入下一次循环。
```java

```
## 3.4 return关键字

**return关键字**  
<font color='red'>程序执行到方法里面的return语句时，方法就会返回，return下面的语句不会被执行。</font>


