
Mybatis源码分析（一）: 下载Mybatis源码安装并导入IDEA
https://zhuanlan.zhihu.com/p/145101691



按上述文档进行执行，其中子项目中需要改一下插件配置
pom.xml

```xml
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
        
          <verbose>true</verbose>
          <fork>true</fork>
          <testCompilerArgument>${maven.compiler.testCompilerArgument}</testCompilerArgument>
          <!-- 自己的jdk地址 -->
          <executable>C:/Program Files/Java/jdk1.8.0_144/bin/javac</executable>
        </configuration>
      </plugin>
```

```sh
[INFO] Excluding org.apache.ant:ant-launcher:jar:1.10.3 from the shaded jar.
[INFO] Replacing original artifact with shaded artifact.
[INFO] Replacing E:\mybatis源码\mybatis-3-mybatis-3.5.3\target\mybatis-3.5.3.jar with E:\mybatis源码\mybatis-3-mybatis-3.5.3\target\mybatis-3.5.3-shaded.jar
[INFO]
[INFO] --- maven-site-plugin:3.7.1:attach-descriptor (attach-descriptor) @ mybatis ---
[INFO] Skipping because packaging 'jar' is not pom.
[INFO]
[INFO] --- modernizer-maven-plugin:1.7.1:modernizer (modernizer) @ mybatis ---
[INFO]
[INFO] --- maven-install-plugin:3.0.0-M1:install (default-install) @ mybatis ---
[INFO] Installing E:\mybatis源码\mybatis-3-mybatis-3.5.3\target\mybatis-3.5.3.jar to E:\Maven_Repo\org\mybatis\mybatis\3.5.3\mybatis-3.5.3.jar
[INFO] Installing E:\mybatis源码\mybatis-3-mybatis-3.5.3\pom.xml to E:\Maven_Repo\org\mybatis\mybatis\3.5.3\mybatis-3.5.3.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:23 min
[INFO] Finished at: 2021-11-18T17:48:38+08:00
[INFO] Final Memory: 49M/1053M
[INFO] ------------------------------------------------------------------------
```