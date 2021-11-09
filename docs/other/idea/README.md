# IDEA快捷键

1. <Badge text="ctrl +alt +m"/>  选中代码块构建成方法
2. <Badge text="ctrl +alt +T"/>  选中代码块加try if等等
3. <Badge text="alt  + enter"/>  自动生成序列化快捷键  
需要先设置（File -> Settings -> Editor -> Inspections -> 搜索 Serialization issues ，找到 Serializable class without 'serialVersionUID' ->打上勾，Apply->OK ）  

4. <Badge text="alt +7"/>   查看当前类方法    

---------------------------------------

<Badge text="Ctrl+O"/>  快速实现接口方法的快捷键  

5. <Badge text="alt + enter"/>  补全匿名类

6. <Badge text="ctrl + alt + shift + c"/>  复制类的全类名

框架=注解+反射+设计模式

7. <Badge text="Ctrl+Alt+Shift+U"/>  open a UML class diagram in a new editor tab    
   <Badge text="Ctrl+Alt+U "/>to  open a UML class diagram in a popup window.  

8. <Badge text="ctrl + alt +B"/>  IDEA 查找接口的实现 的快捷键

9. <Badge text=" Navigate -> Type Hierarchy"/> 查看类的子类

10. 使用IDEA将普通项目打成jar包
<a href='https://blog.csdn.net/weixin_38201936/article/details/88018493'>使用IDEA将普通项目打成jar包</a>
:::tip 普通项目打成jar包
1. 选中Java项目工程名称，在菜单中选择 File->project structure... (快捷键Ctrl+Alt+Shift+S)
2. 在弹出的窗口中左侧选中"Artifacts"，点击"+"选择jar，然后选择"from modules with dependencies"
3. Module: 一般默认是项目的名称。  
    配置窗口中配置"Main Class"。  
    选择“extract to the target JAR”，这样所有依赖的jar包都会放在生成的jar包中  
4. 如果出现已经存在，在项目中删除原有的MANIFEST.MF,然后重新执行上面的操作  
5. 点击OK保存成功后，点击build->build Artifacts    点击xxx.jar 对应的build  
:::

11. 后按住快捷键即可自动补全 
```java
ctrl+alt+v    // new ArrayList<String>(); 后按住快捷键即可自动补全 
## 方式二
new String("").var
String("").new.var
```
11. <Badge text="ctrl + h"/>  查看当前类的所有子类

export JAVA_HOME=/usr/java/jdk1.8.0_211-amd64
PATH=$PATH:$JAVA_HOME/bin

IDEA 如何自动导入（import）
打开 IDEA 的首选项，找到setting -> Editor | General | Auto Import。勾选上 Add unambiguous imports on the fly 和 Optimize imports on the fly (for current project)


## IDEA 2021.1 最新激活注册码 - 破解教程 https://www.bilibili.com/read/cv11262121

<a herf='https://blog.lupf.cn/articles/2020/12/03/1606959540262.html'>https://blog.lupf.cn/articles/2020/12/03/1606959540262.html</a>

##  idea也可以安装jclasslib插件 查看字节码文件 view ->Show ByteCode with jclasslib


选择重写或实现方法（select methods to override/implements）
Ctrl+O
2.选择实现方法（select methods to implement）
Ctrl+I
3.生成构造方法、toString方法、重写或实现方法及版权（generate...）
Alt+Insert
4.包围（surround with）
Ctrl+Alt+T  
