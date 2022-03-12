# 7. Elasticsearch-项目整合

## 7.1 Elasticsearch-Rest-Client

### 7.1.1. 通过 9300: 
TCPspring-data-elasticsearch:transport-api.jar;springboot版本不同，ransport-api.jar不同，不能适配es版本7.x已经不建议使用，8以后就要废弃

### 7.1.2. 通过 9200: 
HTTPjestClient: 非官方，更新慢；RestTemplate：模拟HTTP请求，ES很多操作需要自己封装，麻烦；

HttpClient：同上；

### 7.1.3 Elasticsearch-Rest-Client
Elasticsearch-Rest-Client：官方RestClient，封装了ES操作，API层次分明，上手简单；最终选择**Elasticsearch-Rest-Client**（elasticsearch-rest-high-level-client）； https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html

## 7.2 创建 Elasticsearch 检索服务模块

### 7.2.1 检索服务模块 pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <artifactId>Mld-mall</artifactId>
        <groupId>com.tqk</groupId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>
    <groupId>com.tqk.mld</groupId>
    <artifactId>mall-search</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>mall-search</name>
    <properties>
        <java.version>1.8</java.version>
        <elasticsearch.version>7.4.2</elasticsearch.version>
    </properties>
    <description>Elasticsearch 检索服务</description>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- elasticsearch客户端       -->
        <dependency>
            <groupId>org.elasticsearch.client</groupId>
            <artifactId>elasticsearch-rest-high-level-client</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.elasticsearch</groupId>
                    <artifactId>elasticsearch</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.elasticsearch.client</groupId>
                    <artifactId>elasticsearch-rest-client</artifactId>
                </exclusion>
            </exclusions>
            <version>${elasticsearch.version}</version>
        </dependency>
        <dependency>
            <groupId>org.elasticsearch</groupId>
            <artifactId>elasticsearch</artifactId>
            <version>${elasticsearch.version}</version>
        </dependency>

        <dependency>
            <groupId>org.elasticsearch.client</groupId>
            <artifactId>elasticsearch-rest-client</artifactId>
            <version>${elasticsearch.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.47</version>
            <scope>test</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### 7.2.2 SpringBoot对应Elasticsearch版本过低问题
参考：多模块开发SpringBoot项目自定义第三方依赖版本

#### 问题说明
当前Maven Pom文件中没有将spring-boot-starter-parent作为父项目依赖。所以会出现下面的问题。
1. 我们用的Springboot版本依赖管理为 2.2.5，对应 es版本为 6.8.6（需要7.4.2）

```xml    
<properties>
        <java.version>1.8</java.version>
        <elasticsearch.version>7.4.2</elasticsearch.version>
</properties>

<dependency>
  <groupId>org.elasticsearch.client</groupId>
  <artifactId>elasticsearch-rest-high-level-client</artifactId>
  <version>${elasticsearch.version}</version>
</dependency>
<dependency>
  <groupId>org.elasticsearch</groupId>
  <artifactId>elasticsearch</artifactId>
  <version>${elasticsearch.version}</version>
</dependency>
<dependency>
  <groupId>org.elasticsearch.client</groupId>
  <artifactId>elasticsearch-rest-client</artifactId>
  <version>${elasticsearch.version}</version>
</dependency>
```

## 7.3 编码测试
具体操作参考：es 操作API

### 7.3.1. 编写配置类
配置客户端Bean
配置请求选项    

```java
package com.tqk.mld.mallsearch.config;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author tianqikai
 */
@Configuration
public class MallElasticSearchConfig {
    public static final RequestOptions COMMON_OPTIONS;

    static {
        RequestOptions.Builder builder = RequestOptions.DEFAULT.toBuilder();
        COMMON_OPTIONS = builder.build();
    }

    @Bean
    public RestHighLevelClient esRestClient(){

        return new RestHighLevelClient(
                RestClient.builder(
                new HttpHost("49.233.34.168", 9200, "http")));
    }
}
```

### 7.3.2 测试配置类依赖注入

```java
@SpringBootTest
@RunWith(SpringRunner.class)
public class MallSearchApplicationTests {

    @Autowired
    RestHighLevelClient client;


    @Autowired
    MallElasticSearchConfig mallElasticSearchConfig;


    @Test
    public void contextLoads() {
        System.out.println(client);
    }
}
```

### 7.3.3 测试存储数据（更新）
```java

    /**
     * 测试保存数据
     * @throws IOException
     */
    @Test
    public void indexData() throws IOException {

        RestHighLevelClient restHighLevelClient = mallElasticSearchConfig.esRestClient();

        IndexRequest indexRequest = new IndexRequest ("users");

        User user = new User();
        user.setUserName("张三");
        user.setAge(20);
        user.setGender("男");
        String jsonString = JSON.toJSONString(user);
        //设置要保存的内容
        indexRequest.source(jsonString, XContentType.JSON);
        //执行创建索引和保存数据
        IndexResponse index = client.index(indexRequest, MallElasticSearchConfig.COMMON_OPTIONS);

        System.out.println(index);

    }
```
### 7.3.4 测试复杂检索
参考： Search API
检索地址中带有 mill 的人员年龄分布和平均薪资

```java
/**
     * 检索地址中带有 mill 的人员年龄分布和平均薪资
     */
    @Test
    public void searchData() throws IOException {
        RestHighLevelClient restHighLevelClient = mallElasticSearchConfig.esRestClient();
        // 1. 创建检索请求
        SearchRequest searchRequest = new SearchRequest();
        // 指定索引
        searchRequest.indices("bank");
        // 指定 DSL 检索条件
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        // 1.1 构建检索条件 address 包含 mill
        searchSourceBuilder.query(QueryBuilders.matchQuery("address", "mill"));
        // 1.2 按照年龄值分布进行聚合
        TermsAggregationBuilder ageAgg = AggregationBuilders.terms("ageAgg").field("age").size(10);
        searchSourceBuilder.aggregation(ageAgg);
        // 1.3 计算平均薪资
        AvgAggregationBuilder balanceAvg = AggregationBuilders.avg("balanceAvg").field("balance");
        searchSourceBuilder.aggregation(balanceAvg);

        System.out.println("检索条件：" + searchSourceBuilder.toString());
        searchRequest.source(searchSourceBuilder);


        // 2. 执行检索, 获得响应
        SearchResponse searchResponse = restHighLevelClient.search(searchRequest, MallElasticSearchConfig.COMMON_OPTIONS);

        // 3. 分析结果
        // 3.1 获取所有查到的记录
        SearchHits hits = searchResponse.getHits();
        SearchHit[] searchHits = hits.getHits();
        for (SearchHit hit : searchHits) {
            // 数据字符串
            String jsonString = hit.getSourceAsString();
            System.out.println("账户信息："+jsonString);
            // 可以通过 json 转换成实体类对象
            // Account account = JSON.parseObject(jsonString, Account.class);
        }

        // 3.2 获取检索的分析信息(聚合数据等)
        Aggregations aggregations = searchResponse.getAggregations();
         for (Aggregation aggregation : aggregations.asList()) {
             System.out.println("当前聚合名：" + aggregation.getName());
         }
        Terms ageAgg1 = aggregations.get("ageAgg");
        for (Terms.Bucket bucket : ageAgg1.getBuckets()) {
            String keyAsString = bucket.getKeyAsString();
            System.out.println("年龄：" + keyAsString + " 岁的有 " + bucket.getDocCount() + " 人");
        }

        Avg balanceAvg1 = aggregations.get("balanceAvg");
        System.out.println("平均薪资: " + balanceAvg1.getValue());
    }
```