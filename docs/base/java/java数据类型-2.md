# 2.java数据类型

**JAVA基础知识图解** 

 ![JAVA基础知识图解](../image/java_base.png)

## 2.1 关键字与保留字

### 关键字（keyword）的定义和特点 

**定义：** <font color='blue'>被java语言赋予了特殊含义，用做专业用途的字符串（单词）--java语言预先使用的单词，开发人员不能再用它表示其他含义了；</font>  

**特点：** <font color='blue'>关键字中的所有字母全是小写</font>

<table>
    <tr>
        <th colspan="6">用于定义数据类型的关键字 </th>
    </tr>
    <tr>
        <td>short</td>
        <td>int</td>
        <td>long</td>
        <td>double</td>
        <td>float</td>
        <td>char</td>
    </tr>
    <tr>
        <td>boolean</td>
        <td>void</td>
        <td>enum</td>
        <td>byte</td>
        <td>class</td>
        <td>interface</td>
    </tr>
    <tr>
        <th colspan="6">用于定义流程控制的关键字 </th>
    </tr>
    <tr>
        <td>if</td>
        <td>else</td>
        <td>switch</td>
        <td>case</td>
        <td>default</td>
        <td>while</td>
    </tr>
    <tr>
        <td>do</td>
        <td>for</td>
        <td>break</td>
        <td>continue</td>
        <td>return</td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于定义访问权限的关键字 </th>
    </tr>
    <tr>
        <td>private</td>
        <td>protected</td>
        <td>public</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于定义类，函数，变量的修饰符的关键字 </th>
    </tr>
    <tr>
        <td>abstract</td>
        <td>final</td>
        <td>static</td>
        <td>synchronized</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于定义类与类之间的关系 </th>
    </tr>
    <tr>
        <td>extends</td>
        <td>implements</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于定义建立实例及引用实例，判断实例的关键字 </th>
    </tr>
    <tr>
        <td>new</td>
        <td>this</td>
        <td>super</td>
        <td>instanceof</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于异常处理的关键字 </th>
    </tr>
    <tr>
        <td>try</td>
        <td>catch</td>
        <td>throw</td>
        <td>throws</td>
        <td>finally</td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于包的关键字 </th>
    </tr>
    <tr>
        <td>package</td>
        <td>import</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">其他修饰符关键字 </th>
    </tr>
    <tr>
        <td>volatile</td>
        <td>assert</td>
        <td>native</td>
        <td>strictfp</td>
        <td>transient</td>
        <td></td>
    </tr>
    <tr>
        <th colspan="6">用于定义数据类型的字面值 </th>
    </tr>
    <tr>
        <td>true</td>
        <td>false</td>
        <td>null</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

### 保留字（reserved word）

**Java保留字：** 现有Java版本中没有使用，但以后版本可能作为关键字使用。
自己命名标识符时，避免使用这些保留字

<font color='red'><strong>goto、const</strong></font> --c语言中有使用。goto为跳转执行，const修改标识符函数指针等作用

## 2.2 标识符

**●标识符：**
java对各种 **变量、类、方法** 等命名是使用的字符串序列称之为标识符  
技巧：凡是自己可以起名字的地方都叫标识符。


**●定义合法标识符规则：**   
▶由26个英文字母大小写，0-9 ，_或 $ 组成  
▶数字不可以开头。  
▶不可以使用关键字和保留字，但能包含关键字和保留字。  
▶Java中严格区分大小写，长度无限制。  
▶标识符不能包含空格。

<font color='red'>●Java中的名称命名规范：</font>  
▶**包名** ：多单词组成时所有字母都小写：xxxyyyzzz  
▶**类名、接口名**：多单词组成时，所有单词的首字母大写：XxxYyyZzz    
▶**变量名、方法名**：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写:xxxYyyZzz  
▶**常量名**：所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ  

详细可参考《阿里巴巴Java开发手册》

## 2.3 变量
### 2.3.1 基本数据类型
### 2.3.2 基本数据类型变量间转换
### 2.3.3 基本数据类型与String间转换
### 2.3.4 进制与进制之间转换

## 2.4 运算符
