 
 :::tip 创建Springcloud父工程
 1.  新建Empty Project，类似工作空间 　
 2.  新project设置    File->Project->Maven->jdk选8
 　　2.1    project都选择8    
 　　2.2    module点击+号，新建一个maven模块  create from archetype   ->***site版本
 3.  新Module的设置    
 　　3.1    由于第一个是pom统一工程，不选择模板create from archetype     
 　　3.2    G:com.atguigu.springcloud         A:microservicecloud         V:1.0-SNAPSHOT     
 　　3.3    Language Level 选择 8  
 4.  新project设置    
 　　4.1    Editor | File Encodings 设置为UTF8    
 　　4.2    Build, Execution, Deployment | Compiler | Annotation Processors 每个module都打勾    
 　　4.3    File | Settings | Build, Execution, Deployment | Compiler | Java Compiler  设置为1.8 
 5.  microservicecloud该模块下鼠标右键新建其下的子module    
 　　5.1    新建子module    microservicecloud-api   可以不勾选create from archetype    
 　　5.2    IDEA工具右边的maven projects视图刷新，出现新的子模块    
 　　5.3    右上角设置，选择Group Modules    
 　　5.4    视图上选择+号，选中api里面的pom.xml 
 6.  IDEA工具隐藏*.iml等    点击File-->setting(或者Ctrl+Alt+S)-->Editor--> Flie Types 在ignore files and folders，然后在输入框最后面跟上*.idea;*.iml;  
 :::