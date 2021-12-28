
# 4. SpringMvc文件上传

## 4.1 pom.xml文件修改
```xml
    <!-- 添加commons-fileupload 依赖 -->
    <dependency>
        <groupId>commons-fileupload</groupId>
        <artifactId>commons-fileupload</artifactId>
        <version>1.3.2</version>
    </dependency>
```
## 4.2 servlet-context.xml修改
```xml
    <!--上传文件大小-->
    <bean id="multipartResolver"
          class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <property name="maxUploadSize">
            <value>104857600</value>
        </property>
        <property name="maxInMemorySize">
            <value>4096</value>
        </property>
    </bean>
```
## 4.3 代码实现
```java
package com.tqk.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

/**
 * @author tianqikai
 */
@Controller
public class FileController {

    @RequestMapping("uploadFile")
    public String uploadFile(HttpServletRequest request){
        MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
        MultipartFile mf = mhsr.getFile("file");
        try {
            if(null !=mf && mf.getSize()>0){
                //todo 获取项目所在地址(绝对路径)
                String basePath = request.getSession().getServletContext().getRealPath("/");
                File upload = new File(basePath+"/upload");
                if(!(upload.exists())){
                    //todo 文件夹不存在  创建文件夹
                    upload.mkdir();
                }
                //todo 设置文件名称  系统当前时间毫秒数 命名上传文件
                //todo getOriginalFilename() 文件原始文件名
                String fileName = System.currentTimeMillis()+
                        mf.getOriginalFilename().substring(mf.getOriginalFilename().lastIndexOf("."));
                //todo 文件copy
                mf.transferTo(new File(upload,fileName));
                request.setAttribute("msg","文件上传成功!");
            }else{
                request.setAttribute("msg","文件上传失败!");
            }
        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("msg","文件上传失败!");
        }
        return "result";
    }
}

```
## 4.4 准备表单

```jsp
<%--
  Created by IntelliJ IDEA.
  User: lp
  Date: 2020/2/15
  Time: 14:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Title</title>
    </head>
    <body>
    <form action="uploadFile.do" method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit"> 提交</button>
    </form>
    </body>
</html>
```