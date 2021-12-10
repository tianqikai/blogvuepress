# 4. ShardingJDBC实战

## 4.1 核心概念

1. **逻辑表**：水平拆分的数据库的相同逻辑和数据结构表的总称
2. **真实表**：在分片的数据库中真实存在的物理表。
3. **数据节点**：数据分片的最小单元。由数据源名称和数据表组成
4. **绑定表**：分片规则一致的主表和子表。
5. **广播表**：也叫公共表，指素有的分片数据源中都存在的表，表结构和表中的数据在每个数据库中都完全一致。例如字典表。
6. **分片键**：用于分片的数据库字段，是将数据库(表)进行水平拆分的关键字段。SQL中若没有分片字段，将会执行全路由，性能会很差。
7. **分片算法**：通过分片算法将数据进行分片，支持通过=、BETWEEN和IN分片。分片算法需要由应用开发者自行实现，可实现的灵活度非常高。
8. **分片策略**：真正用于进行分片操作的是分片键+分片算法，也就是分片策略。在ShardingJDBC中一般采用基于Groovy表达式的inline分片策略，通过一个包含
分片键的算法表达式来制定分片策略，如t_user_$->{u_id%8}标识根据u_id模8，分成8张表，表名称为t_user_0到t_user_7。


## 4.2 快速实战

### 4.2.1 application.properties

```yml
#配置数据源
spring.shardingsphere.datasource.names=m1

spring.shardingsphere.datasource.m1.type=com.alibaba.druid.pool.DruidDataSource
spring.shardingsphere.datasource.m1.driver-class-name=com.mysql.cj.jdbc.Driver
spring.shardingsphere.datasource.m1.url=jdbc:mysql://localhost:3306/coursedb?serverTimezone=GMT%2B8
spring.shardingsphere.datasource.m1.username=root
spring.shardingsphere.datasource.m1.password=root
#配置真实表分布
spring.shardingsphere.sharding.tables.course.actual-data-nodes=m1.course_$->{1..2}
#主键生成策略
spring.shardingsphere.sharding.tables.course.key-generator.column=cid
spring.shardingsphere.sharding.tables.course.key-generator.type=SNOWFLAKE
spring.shardingsphere.sharding.tables.course.key-generator.props.worker.id=1
#配置分表策略
spring.shardingsphere.sharding.tables.course.table-strategy.inline.sharding-column=cid
spring.shardingsphere.sharding.tables.course.table-strategy.inline.algorithm-expression=course_$->{cid%2+1}
#其他运行属性
spring.shardingsphere.props.sql.show = true
spring.main.allow-bean-definition-overriding=true
```


## 4.3 ShardingJDBC的分片算法

ShardingJDBC的整个实战完成后，可以看到，整个分库分表的核心就是在于配置的分片算法。

我们的这些实战都是使用的inline分片算法，即提供一个分片键和一个分片表达式来制定分片算法。这种方式配置简单，功能灵活，是分库分表最佳的配置方式，并且对于绝大多数的分库分片场景来说，都已经非常好用了

但是如果**针对一些更为复杂的分片策略，例如多分片键、按范围分片等场景**，inline分片算法就有点力不从心了。所以我们还需要学习下ShardingSphere提供的其他几种分片策略

### 4.3.1 NoneShardingStrategy


不分片。这种严格来说不算是一种分片策略了。只是ShardingSphere也提供了这么一个配置

### 4.3.2 InlineShardingStrategy

**最常用的分片方式**

**配置参数**： inline.shardingColumn 分片键；inline.algorithmExpression分片表达式

**实现方式**： 按照分片表达式来进行分片。


### 4.3.3 StandardShardingStrategy

只支持单分片键的标准分片策略。
:::tip 配置参数
1. standard.sharding-column 分片键；

2. standard.precise-algorithm-class-name 精确分片算法类名；

3. standard.range-algorithm-class-name 范围分片算法类名
:::

-----------------------------

:::tip 实现方式

1. shardingColumn指定分片算法。

2. preciseAlgorithmClassName 指向一个实现了
io.shardingsphere.api.algorithm.sharding.standard.PreciseShardingAl

3. gorithm接口的java类名，提供按照 = 或者 IN 逻辑的精确分片 示例：
com.roy.shardingDemo.algorithm.MyPreciseShardingAlgorithm

4. rangeAlgorithmClassName 指向一个实现了
io.shardingsphere.api.algorithm.sharding.standard.RangeShardingAlg

5. orithm接口的java类名，提供按照Between 条件进行的范围分片。示例：
com.roy.shardingDemo.algorithm.MyRangeShardingAlgorithm
:::

说明：
其中**精确分片算法是必须提供的**，而范围分片算法则是可选的。

### 4.3.4 ComplexShardingStrategy

**支持多分片键的复杂分片策略**

:::tip 配置参数：
1. complex.sharding-columns 分片键(多个);
2. complex.algorithm-class-name 分片算法实现类。
:::

:::tip 实现方式：
1. shardingColumn指定多个分片列。

2. algorithmClassName指向一个实现了org.apache.shardingsphere.api.sharding.complex.ComplexKeysShardi

3. ngAlgorithm接口的java类名。提供按照多个分片列进行综合分片的算法。
:::

**示例：**
com.roy.shardingDemo.algorithm.MyComplexKeysShardingAlgorithm


### 4.3.5 HintShardingStrategy

不需要分片键的强制分片策略。这个分片策略，简单来理解就是说，他的分片键
不再跟SQL语句相关联，而是用程序另行指定。对于一些复杂的情况，例如
select count(*) from (select userid from t_user where userid in (1,3,5,7,9))
这样的SQL语句，就没法通过SQL语句来指定一个分片键。这个时候就可以通过
程序，给他另行执行一个分片键，例如在按userid奇偶分片的策略下，可以指定
1作为分片键，然后自行指定他的分片策略。

:::tip 配置参数：
hint.algorithm-class-name 分片算法实现类。
:::

:::tip 实现方式：
1. algorithmClassName指向一个实现了org.apache.shardingsphere.api.sharding.hint.HintShardingAlgorithm
接口的java类名。 示例：com.roy.shardingDemo.algorithm.MyHintShardingAlgorithm


在这个算法类中，同样是需要分片键的。而分片键的指定是通过
HintManager.addDatabaseShardingValue方法(分库)和
HintManager.addTableShardingValue(分表)来指定。

使用时要注意，这个分片键是线程隔离的，只在当前线程有效，所以通常建
议使用之后立即关闭，或者用try资源方式打开。

而Hint分片策略并没有完全按照SQL解析树来构建分片策略，是绕开
了SQL解析的，所有对某些比较复杂的语句，Hint分片策略性能有可
能会比较好(情况太多了，无法一一分析)。
:::

但是要注意，Hint强制路由在使用时有非常多的限制：

```sql
-- 不支持UNION 
SELECT * FROM t_order1 UNION SELECT * FROM t_order2 INSERT INTO tbl_name (col1, col2, …) SELECT col1, col2, … FROM tbl_name WHERE col3 = ? 
-- 不支持多层子查询 
SELECT COUNT(*) FROM (SELECT * FROM t_order o WHERE o.id IN (SELECT id FROM t_order WHERE status = ?)) 
-- 不支持函数计算。ShardingSphere只能通过SQL字面提取用于分片的值 
SELECT * FROM t_order WHERE to_date(create_time, 'yyyy-mm-dd') = '2019-01-01';
```


## 4.4 ShardingSphere的SQL使用限制

参见官网文档: [https://shardingsphere.apache.org/document/current/cn/features/sharding/use-norms/sql/] 

文档中详细列出了非常多ShardingSphere目前版本支持和不支持的SQL类型。这些东西要经常关注。