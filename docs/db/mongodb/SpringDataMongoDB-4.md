# 5. SpringDataMongoDB使用

使用Spring Data 框架都是按照面向对象思想操作用于的工具。

使用Spring Data Mongodb 也是使用面向对象的方式进行操作MongoDB，`省略了使用Mongodb的Java客户端API把Document转换为实体类的过程`

## 5.1 搭建项目环境

### 5.1.1 创建项目

<a data-fancybox title="" href="./image/MongoDB05.png">![RDBMS vs. NoSQL](./image/MongoDB05.png)</a>


<a data-fancybox title="" href="./image/MongoDB04.png">![RDBMS vs. NoSQL](./image/MongoDB04.png)</a>

### 5.1.2 MongoDB依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

### 5.1.3 配置文件

```yml
spring:
  data:
    # mongodb配置
    mongodb:
      # 服务器地址
      host: 192.168.10.101
      # 端口
      port: 27017
      # 用户名
      username: uaad
      # 密码
      password: uaad
      # 认证数据库
      authentication-database: admin
      # 操作的数据库
      database: test
```

## 5.2 创建实体类


### 5.2.1 文档操作相关注解

:::tip 相关注解
1. **@Document**
- 修饰范围: 用在类上
- 作用: 用来映射这个类的一个对象为mongo中一条文档数据。
- 属性:( value 、collection )用来指定操作的集合名称

2. **@Id**
- 修饰范围: 用在成员变量、方法上
- 作用: 用来将成员变量的值映射为文档的_id的值

3. **@Field**
- 修饰范围: 用在成员变量、方法上
- 作用: 用来将成员变量及其值映射为文档中一个key:value对。
- 属性:( name , value )用来指定在文档中 key的名称,默认为成员变量名

4. **@Transient**
- 修饰范围:用在成员变量、方法上
- 作用:用来指定此成员变量不参与文档的序列化
:::

------------------------------------

```java
package com.tqk.mongo.pojo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;

/**
 * @author tianqikai
 * @since 1.0.0
 * 把一个java类声明为mongodb的文档，可以通过collection参数指定这个类对应的文档
 * 可以省略，如果省略，则默认使用类名小写映射集合
 * 若未加 @Document ，则 save 到 people
 * 若添加 @Document ，则 save 到 collection1
 */
@Document("collection1")
public class People implements Serializable {
	/**
	 * 	主键标识，该属性的值会自动对应mongodb的主键字段"_id"，如果该属性名就叫“id”,则该注解可以省略，否则必须写
	 */
	@Id
	private String id;

	/**
	 * 	该属性对应mongodb的字段的名字，如果一致，则无需该注解
	 */
	@Field("name")
	private String name;

	private int age;

	public People() {
	}

	public People(String id, String name, int age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "People{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				", age=" + age +
				'}';
	}
}
```


## 5.3 添加文档

### 5.3.1 单个添加

```java
    /**
     * 插入文档
     */
    @Test
    public void insert() {
        People people = new People();
        people.setAge(15);
        people.setName("李四");
        People result = mongoTemplate.insert(people);
        System.out.println(result);
    }
```

```java
    /**
     * 插入文档
     */
    @Test
    public void save() {
        People people = new People();
        people.setAge(15);
        people.setName("嘿嘿");
        People result = mongoTemplate.insert(people);
        System.out.println(result);
    }
```

### 5.3.2 批量添加

```java
  /**
     * 插入文档
     */
    @Test
    public void insertAll() {
        ArrayList<People> list = new ArrayList<>();
        People people = new People();
        people.setAge(15);
        people.setName("李四");
        list.add(new People("1","张三",25));
        list.add(new People("2","李四",35));
        list.add(new People("3","王五",45));
        ArrayList<People> result = (ArrayList<People>) mongoTemplate.insertAll(list);
        System.out.println(result);
    }
```

## 5.4 更新文档

在Mongodb中无论是使用客户端API还是使用Spring Data，更新返回结果一定是受行数影响。**如果更新后的结果和更新前的结果是相同，返回0**。

- `updateFirst()` 只更新满足条件的第一条记录
- `updateMulti()` 更新所有满足条件的记录
- `upsert()` 没有符合条件的记录则插入数据
- `save` 根据唯一id进行更新

### 5.4.1 save

```java
    /**
     * save更新
     */
    @Test
    public void saveUp() {
        People people = new People();
        people.setId("623de27915caac02fc751d50");
        people.setAge(25);
        people.setName("小明");
        // id不存在就是保存，存在就是更新
        People result = mongoTemplate.save(people);
        System.out.println(result);
    }
```

### 5.4.2 updateFirst

```java
   /**
     * updateFirst
     */
    @Test
    public void updateFirst() {
        // 设置查询体，查询条件具体内容
        Criteria criteria = Criteria.where("name").is("张三123").and("age").is(25);
        // query设置查询条件
        Query query = new Query(criteria);
        // 设置修改哪些属性
        Update update = new Update();
        update.set("name", "张三1233456").set("age",29);
        // People.class 告诉Spring Data MongoDB 上面的属性是哪个类。
        // 类对应集合，就知道具体操作集合的哪个属性
        UpdateResult updateResult = mongoTemplate.updateFirst(query, update, People.class);
        // 修改数量，如果修改前和修改后相同，返回0
        System.out.println(updateResult.getModifiedCount());
        // 匹配数量。最多返回1，即使有多个张三返回也是1.
        System.out.println(updateResult.getMatchedCount());
    }
```

### 5.4.3 updateMulti
```java
   /**
     * updateMulti
     */
    @Test
    public void updateMulti() {
        // 设置查询体，查询条件具体内容
        Criteria criteria = Criteria.where("name").is("李四");
        // query设置查询条件
        Query query = new Query(criteria);
        // 设置修改哪些属性
        Update update = new Update();
        update.set("age", 18);
        // People.class 告诉Spring Data MongoDB 上面的属性是哪个类。
        // 类对应集合，就知道具体操作集合的哪个属性
        UpdateResult result = mongoTemplate.updateMulti(query, update, People.class);
        // 修改数量。返回所有匹配结果中真实被修改数量
        System.out.println(result.getModifiedCount());
        // 匹配数量
        System.out.println(result.getMatchedCount());
    }
```

### 5.4.4 upsert

```java
    /**
     * upsert 如果有多个只修改第一个
     */
    @Test
    public void upsert() {
        // 设置查询体，查询条件具体内容
        Criteria criteria = Criteria.where("name").is("李四");
        // query设置查询条件
        Query query = new Query(criteria);
        // 设置修改哪些属性
        Update update = new Update();
        update.set("age", 99);
        // People.class 告诉Spring Data MongoDB 上面的属性是哪个类。
        // 类对应集合，就知道具体操作集合的哪个属性
        UpdateResult result = mongoTemplate.upsert(query, update, People.class);
        // 修改数量。返回所有匹配结果中真实被修改数量
        System.out.println(result.getModifiedCount());
        // 匹配数量
        System.out.println(result.getMatchedCount());
    }
```
## 5.5 删除文档

```java
    /**
     * remove
     */
    @Test
    public void remove(){
        // todo 根据主键删除
        // 使用 remove(Object) 实现根据主键进行删除。
        // 只判断对象的主键，其他属性是否有值没有影响。但是主键必须不能是null的。
        People people = new People();
        people.setId("1");
        DeleteResult deleteResult1 = mongoTemplate.remove(people);
        //todo 根据条件删除
        Criteria criteria = Criteria.where("name").is("小明");
        System.out.println(deleteResult1.getDeletedCount());
        // query设置查询条件
        Query query = new Query(criteria);
        DeleteResult deleteResult = mongoTemplate.remove(query, People.class);
        System.out.println(deleteResult.getDeletedCount());
    }
```

## 5.6 查询文档

### 5.6.1 查询全部文档

```java
    /**
     * 查询所有
     */
    @Test
    public void select() {
        List<People> peopleList = mongoTemplate.findAll(People.class);
        peopleList.forEach(System.out::println);
    }
```


### 5.6.2 查询单个对象

如果查询结果是多个，返回其中第一个文档对象

```java
    /**
     * 查询单个对象
     * 如果查询结果是多个，返回其中第一个文档对象
     */
    @Test
    public void selectOne() {
        //todo 根据条件查询
        Criteria criteria = Criteria.where("name").is("张三");
        // query设置查询条件
        Query query = new Query(criteria);
        People one = mongoTemplate.findOne(query, People.class);
        System.out.println(one.toString());
    }
```

### 5.6.3 带有条件的查询多个

**注意**： 带有条件的查询多个时，使用 find() 方法

```java
    /**
     * 带有条件的查询多个
     *  注意： 带有条件的查询多个时，使用 find() 方法
     *         $gt:大于
     *         $lt:小于
     *         $gte:大于或等于
     *         $lte:小于或等于
     */
    @Test
    public void find(){
        Query age = new Query(Criteria.where("age").gte(3));
        List<People> peopleList = mongoTemplate.find(age, People.class);
        for (People people : peopleList) {
            System.out.println(people.toString());
        }
    }
```


### 5.6.4 根据主键进行查询

```java
    /**
     * 根据主键进行查询
     */
    @Test
    public void findById(){
        People byId = mongoTemplate.findById("3", People.class);
        System.out.println(byId);
    }
```
### 5.6.5 根据字段是否为空进行查询

```java
    /**
     * 根据字段是否为空进行查询
     */
    @Test
    void exists() {
        Query query = new Query(Criteria.where("age").exists(true));
        List<People> list = mongoTemplate.find(query, People.class);
        list.forEach(System.out::println);
    }
```
### 5.6.6 根据正则查询（模糊查询）

```java
    /**
     * 根据正则查询（模糊查询）
     */
    @Test
    void regex() {
        // java中正则不需要有//
        List<People> peopleList = mongoTemplate.find(new Query(Criteria.where("name").regex("张")), People.class);
        peopleList.forEach(System.out::println);
    }
```

### 5.6.7 查询去重复结果
```java
   /**
     * 查询去重复结果
     */
    @Test
    void findDistinct() {
        /**
         * findDistinct:
         * 查询条件query
         * 根据哪个属性去重复。是POJO的属性名称。返回值为此属性去重后的集合。
         * 属性所在实体类。
         * 属性的类型，此类型作为结果中List集合的泛型。
         */
        List<String> list = mongoTemplate.findDistinct(new Query(), "name", People.class,
                String.class);
        list.forEach(System.out::println);
    }
```
## 5.7 多条件查询

### 5.7.1 and

```java
    /**
     * and
     */
    @Test
    void and() {
//        Criteria c = new Criteria();
//        c.andOperator(Criteria.where("name").is("张三123"), Criteria.where("age").is(12));
        Criteria c = Criteria.where("name").is("张三").and("age").is(25);
        Query query = new Query(c);
        List<People> list = mongoTemplate.find(query, People.class);
        list.forEach(System.out::println);
    }
```


### 5.7.2 or 

查询姓名为张三或者年龄是998岁的用户


```java
    @Test
    void or() {
        Criteria c = new Criteria();
        c.orOperator(Criteria.where("name").is("张三123"), Criteria.where("age").is(25));
        Query query = new Query(c);
        List<People> list = mongoTemplate.find(query, People.class);
        list.forEach(System.out::println);
    }
```

### 5.7.3 混合使用

```java
    @Test
    void orAnd() {
        Criteria and1 = new Criteria();
        and1.andOperator(Criteria.where("name").is("张三"), Criteria.where("age").is(25));
        Criteria and2 = new Criteria();
        and2.andOperator(Criteria.where("name").is("李四"), Criteria.where("age").is(35));
        Criteria c = new Criteria();
        c.orOperator(and1, and2);
        List<People> list = mongoTemplate.find(new Query(c), People.class);
        list.forEach(System.out::println);
    }
```

        
## 5.8 结果排序

 Sort只有私有构造，但是提供给了静态的by方法

 Direction是Sort内部枚举。

 age按照那个属性进行排序。属性一定是find方法第二个参数类中的属性。

 ```java
     @Test
    void sort() {
        Query query = new Query(Criteria.where("age").gte(2));
        query.with(Sort.by(Sort.Direction.DESC, "age"));
        List<People> peopleList = mongoTemplate.find(query, People.class);
        peopleList.forEach(System.out::println);
    }
 ```

## 5.9 分页查询
 
 PageRequest是Pageable接口的实现类。里面有protected的构造方法和名称为of的静态方法。

- PageRequest.of(page,size)
- PageRequest.of(page,size,Sort) 先排序后分页
- PageRequest.of(page,size,Direction,properties) 排序后分页
 
 -- page表示第几页，0表示第一页

 -- size表示一页显示几个

 ```java
 @Test 
void page() { 
 Query query = new Query(); 
 //query.with(PageRequest.of(0,2)); 
 query.with(PageRequest.of(0, 2, Sort.Direction.DESC, "age")); 
 List<People> list = mongoTemplate.find(query, People.class); 
 list.forEach(System.out::println); 
}
```

## 5.10 聚合操作

### 5.10.1 查询文档总数

```java
 /** 
 * Aggregation.group(String ...)设置分组条件，如果没有分组，参数省略。
 * count() 取总条数
 * as() 给查询出来的总条数起别名
 */ 
@Test 
void aggregate01() { 
 TypedAggregation<People> aggregation = TypedAggregation.newAggregation(People.class, 
 Aggregation.group().count().as("count")); 
 //执行聚合命令，第二个参数Map表示返回结果放入到Map中。
 AggregationResults<Map> result = mongoTemplate.aggregate(aggregation, Map.class); 
 // 获取到返回结果。
 System.out.println(result.getUniqueMappedResult()); 
 System.out.println(result.getUniqueMappedResult().get("count")); 
}
```

### 5.10.2 分组计算每组总数

```java
    @Test
    void aggregate02() {
        TypedAggregation<People> aggregation = TypedAggregation.newAggregation(People.class,
                Aggregation.group("name").count().as("count"));
        //执行聚合命令，第二个参数Map表示返回结果放入到Map中。
        AggregationResults<Map> result = mongoTemplate.aggregate(aggregation, Map.class);
        // 获取到返回结果。
        result.getMappedResults().forEach(System.out::println);

        result.getMappedResults().stream().forEach(map -> System.out.println(map.get("count")));
    }
```

### 5.10.3 带有查询条件的分组计算

```java
    /**
     * //Aggregation.match写在group前面表示先过滤条件在分组。写在后面表示先分组在过滤条件
     */
    @Test
    void aggregate() {
        //todo Aggregation.match写在group前面表示先过滤条件在分组。写在后面表示先分组在过滤条件
        TypedAggregation<People> aggregation = TypedAggregation.newAggregation(People.class,
                Aggregation.match(Criteria.where("name").is("张三")),
                Aggregation.group("name").count().as("count"));
        AggregationResults<Map> result = mongoTemplate.aggregate(aggregation, Map.class);
        List<Map> list = result.getMappedResults();
        list.forEach(System.out::println);
    }
}
```