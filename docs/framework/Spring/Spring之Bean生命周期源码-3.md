# 4. Spring之Bean生命周期
[[toc]]

<a data-fancybox title="Bean的生成过程" href="./image/beancreate.jpg.jpg">![Bean的生成过程](./image/beancreate.jpg.jpg)</a>

## 4.1  生成BeanDefinition

Spring启动的时候会进行扫描，会先调用
```java
org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider#scanCandidateComponents(String basePackage)
```
扫描某个包路径，并得到BeanDefinition的Set集合。

Spring扫描底层流程：https://www.processon.com/view/link/61370ee60e3e7412ecd95d43

1. 首先，通过ResourcePatternResolver获得指定包路径下的所有.class文件（Spring源码中将此文件包装成了Resource对象）
2. 遍历每个Resource对象
3. 利用MetadataReaderFactory解析Resource对象得到MetadataReader（在Spring源码中MetadataReaderFactory具体的实现类为CachingMetadataReaderFactory，MetadataReader的具体实现类为SimpleMetadataReader）
4. 利用MetadataReader进行excludeFilters和includeFilters，以及条件注解@Conditional的筛选（条件注解并不能理解：某个类上是否存在@Conditional注解，如果存在则调用注解中所指定的类的match方法进行匹配，匹配成功则通过筛选，匹配失败则pass掉。）
5. 筛选通过后，基于metadataReader生成ScannedGenericBeanDefinition
6. 再基于metadataReader判断是不是对应的类是不是接口或抽象类
7. 如果筛选通过，那么就表示扫描到了一个Bean，将ScannedGenericBeanDefinition加入结果集

MetadataReader表示类的元数据读取器，主要包含了一个AnnotationMetadata，功能有
1. 获取类的名字、
2. 获取父类的名字
3. 获取所实现的所有接口名
4. 获取所有内部类的名字
5. 判断是不是抽象类
6. 判断是不是接口
7. 判断是不是一个注解
8. 获取拥有某个注解的方法集合
9. 获取类上添加的所有注解信息
10. 获取类上添加的所有注解类型集合