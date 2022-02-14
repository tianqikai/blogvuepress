# 3. MySQL 数据库 

## 3.1 建表规约 

### 3.1.1 表达是与否概念的字段，必须使用 is_xxx 的方式命名
1. <font color='red'>【强制】</font>表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（ 1 表示是，0 表示否）

<font color='#8e7437'>说明：</font>任何字段如果为非负数，必须是 unsigned。

<font color='#1d953f'>正例：</font>表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。

### 3.1.2 表名、字段名必须使用小写字母或数字
2. <font color='red'>【强制】</font>表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。

<font color='#1d953f'>正例：</font>getter_admin，task_config，level3_name
<font color='#f47920'>反例：</font>GetterAdmin，taskConfig，level_3_name

### 3.1.3 表名不使用复数名词
3. <font color='red'>【强制】</font>表名不使用复数名词。

<font color='#8e7437'>说明：</font>表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数
形式，符合表达习惯。

### 3.1.4 禁用保留字
4. <font color='red'>【强制】</font>禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。

### 3.1.5 主键索引名为 pk_字段名
5. <font color='red'>【强制】</font>主键索引名为 pk_字段名；唯一索引名为 uk_字段名；普通索引名则为 idx_字段名。

<font color='#8e7437'>说明：</font>pk_ 即 primary key；uk_ 即 unique key；idx_ 即 index 的简称。

### 3.1.6 禁止使用 float 和 double
6. <font color='red'>【强制】</font>小数类型为 decimal，禁止使用 float 和 double。

<font color='#8e7437'>说明：</font>float 和 double 在存储的时候，存在精度损失的问题，很可能在值的比较时，得到不
正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数分开存储。

### 3.1.7 存储的字符串长度几乎相等，使用char定长字符串类型
7. <font color='red'>【强制】</font>如果存储的字符串长度几乎相等，使用 char 定长字符串类型。

### 3.1.8 varchar 是可变长字符串不预先分配存储空间
8. <font color='red'>【强制】</font>varchar 是可变长字符串，不预先分配存储空间，

长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。

### 3.1.9 表必备三字段：id, gmt_create, gmt_modified
9. <font color='red'>【强制】</font>表必备三字段：id, gmt_create, gmt_modified。

<font color='#8e7437'>说明：</font>

其中 `id` 必为主键，类型为 unsigned bigint、单表时自增、步长为 1。
`gmt_create`,   
`gmt_modified` 的类型均为 date_time 类型。

### 3.1.10 表的命名最好是加上“业务名称_表的作用”
10. <font color='#7fb80e'>【推荐】</font>表的命名最好是加上“业务名称_表的作用”。

<font color='#1d953f'>正例：</font>tiger_task / tiger_reader / mpp_config

### 3.1.11 库名与应用名称尽量一致

11. <font color='#7fb80e'>【推荐】</font>库名与应用名称尽量一致。

### 3.1.12 如果修改字段含义或对字段表示的状态追加时需要及时更新字段注释
12. <font color='#7fb80e'>【推荐】</font>如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。

### 3.1.13 字段允许适当冗余，以提高查询性能
13. <font color='#7fb80e'>【推荐】</font>字段允许适当冗余，以提高查询性能，但必须考虑数据一致。

:::tip 冗余字段应遵循：
- 1）不是频繁修改的字段。
- 2）不是 varchar 超长字段，更不能是 text 字段。
:::
<font color='#1d953f'>正例：</font>商品类目名称使用频率高，字段长度短，名称基本一成不变，可在相关联的表中冗余存
储类目名称，避免关联查询。

### 3.1.14 单表行数超过500万行或者单表容量超过2GB，才推荐进行分库分表

14. <font color='#7fb80e'>【推荐】</font>单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。
<font color='#8e7437'>说明：</font>如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。

### 3.1.15 合适的字符存储长度
15. <font color='#8552a1'>【参考】</font>合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。

<font color='#1d953f'>正例：</font>如下表，其中无符号值可以避免误存负数，且扩大了表示范围。

<table>
    <tr>
        <th >对象 </th>
        <th >年龄区间 </th>
        <th >类型 </th>
        <th >表示范围 </th>
    </tr>
    <tr>
        <td>人</td>
        <td>150 岁之内</td>
        <td>unsigned tinyint</td>
        <td>无符号值:0 到 255</td>
    </tr>
    <tr>
        <td>龟</td>
        <td>数百岁</td>
        <td>unsigned smallint</td>
        <td>无符号值：0 到 65535</td>
    </tr>
    <tr>
        <td>恐龙化石</td>
        <td>数千万年</td>
        <td>unsigned int</td>
        <td>无符号值：0 到约 42.9 亿</td>
    </tr>
    <tr>
        <td>太阳</td>
        <td>约 50 亿年</td>
        <td>unsigned bigint</td>
        <td>无符号值：0 到约 10 的 19 次方</td>
    </tr>
</table>

## 3.2 索引规约 

### 3.2.1 业务上具有唯一特性的字段，即使是多个字段的组合，也必须建成唯一索引
1. <font color='red'>【强制】</font>业务上具有唯一特性的字段，即使是多个字段的组合，也必须建成唯一索引。

<font color='#8e7437'>说明：</font>不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明
显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必然有脏数据产生。

### 3.2.2 超过三个表禁止 join
2. <font color='red'>【强制】</font> 超过三个表禁止 join。需要 join 的字段，数据类型必须绝对一致；多表关联查询
时，保证被关联的字段需要有索引。

<font color='#8e7437'>说明：</font>即使双表 join 也要注意表索引、SQL 性能。

### 3.2.3 在 varchar 字段上建立索引时，必须指定索引长度
3. <font color='red'>【强制】</font>在 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据
实际文本区分度决定索引长度即可。

<font color='#8e7437'>说明：</font>索引的长度与区分度是一对矛盾体，

一般对字符串类型数据，长度为 20 的索引，区分度会高达 90%以上，可以使用 `count(distinct left(列名, 索引长度))/count(*)`的区分度来确定。

首先你要知道 mysql的索引都是排好序的。如果区分度高排序越快，区分度越低，排序慢；

举个例子：  （张，张三，张三哥），如果索引长度取1的话，那么每一行的索引都是 张 这个字，完全没有区分度，你让他怎么排序？结果这样三行完全是随机排的，因为索引都一样；

如果长度取2，那么排序的时候至少前两个是排对了的，如果取3，区分度达到100%，排序完全正确；

等等，那你说是不是索引越长越好？  答案肯定是错的，比如 (张,李,王)  和 （张三啦啦啦，张三呵呵呵，张三呼呼呼）；前者在内存中排序占得空间少，排序也快，后者明显更慢更占内存，在大数据应用中这一点点都是很恐怖的；

 

所以要做一个取舍；这个取舍不是没有一个固定的量；需要跟你自己的数据库里面的数据来判断；比较常规的公式是：

test是要加索引的字段，5是索引长度，

select count(distinct left(test,5))/count(*) from table; 

### 3.2.4 页面搜索严禁左模糊或者全模糊
4. <font color='red'>【强制】</font>页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决。

<font color='#8e7437'>说明：</font>索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。

### 3.2.5 如果有 order by 的场景，请注意利用索引的有序性
5. <font color='#7fb80e'>【推荐】</font>如果有 order by 的场景，请注意利用索引的有序性。order by 最后的字段是组合
索引的一部分，并且放在索引组合顺序的最后，避免出现 file_sort 的情况，影响查询性能。

<font color='#1d953f'>正例：</font> 

```sql
where a=? and b=? order by c;
`索引：a_b_c`
```

<font color='#f47920'>反例：</font>索引中有范围查找，那么索引有序性无法利用，如：

```sql
WHERE a>10 ORDER BY b; 索引
a_b 无法排序。
```

### 3.2.6 利用覆盖索引来进行查询操作，避免回表
6. <font color='#7fb80e'>【推荐】</font>利用覆盖索引来进行查询操作，避免回表。

<font color='#8e7437'>说明：</font>如果一本书需要知道第 11 章是什么标题，会翻开第 11 章对应的那一页吗？目录浏览
一下就好，这个目录就是起到覆盖索引的作用。

<font color='#1d953f'>正例：</font>能够建立索引的种类：主键索引、唯一索引、普通索引，而覆盖索引是一种查询的一种
效果，用 explain 的结果，extra 列会出现：using index。

### 3.2.7 利用延迟关联或者子查询优化超多分页场景
7. <font color='#7fb80e'>【推荐】</font>利用延迟关联或者子查询优化超多分页场景。

<font color='#8e7437'>说明：</font>MySQL 并不是跳过 offset 行，而是取 offset+N 行，然后返回放弃前 offset 行，返回
N 行，那当 offset 特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行 SQL 改写。

<font color='#1d953f'>正例：</font>先快速定位需要获取的 id 段，然后再关联：

```sql
 SELECT a.* FROM 表 1 a, (select id from 表 1 where 条件 LIMIT 100000,20 ) b where a.id=b.id
```

### 3.2.8 性能优化的目标：至少要达到 range 级别
8. <font color='#7fb80e'>【推荐】</font>SQL 性能优化的目标：至少要达到 range 级别，要求是 ref 级别，如果可以是 consts
最好。

<font color='#8e7437'>说明：</font>

- 1）consts 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。
- 2）ref 指的是使用普通的索引（normal index）。
- 3）range 对索引进行范围检索。

<font color='#f47920'>反例：</font>explain 表的结果，`type=index`，索引物理文件全扫描，速度非常慢，这个 index 级
别比较 range 还低，与全表扫描是小巫见大巫。

:::tip SQL性能优化的目标
出现比较多的是 system>const>eq_ref>ref>range>index>ALL

- ref 表示上述表的连接匹配条件，即哪些列或常量被用于查找索引列上的值
- range 仅检索给定范围内的行，使用索引选择行

一般来说，得保证查询至少达到 range 级别，最好能达到 ref
:::

### 3.2.9 建组合索引的时候，区分度最高的在最左边

9. <font color='#7fb80e'>【推荐】</font>建组合索引的时候，区分度最高的在最左边。

<font color='#1d953f'>正例：</font>如果 where a=? and b=? ，a 列的几乎接近于唯一值，那么只需要单建 idx_a 索引即可。

<font color='#8e7437'>说明：</font>存在非等号和等号混合判断条件时，在建索引时，请把等号条件的列前置。如：where a>? 
and b=? 那么即使 a 的区分度更高，也必须把 b 放在索引的最前列。

### 3.2.10 防止因字段类型不同造成的隐式转换，导致索引失效
10. <font color='#7fb80e'>【推荐】</font>防止因字段类型不同造成的隐式转换，导致索引失效。

### 3.2.11 创建索引时避免有如下极端误解

11. <font color='#8552a1'>【参考】</font>创建索引时避免有如下极端误解：

:::tip 创建索引时避免有如下极端误解
- 1）宁滥勿缺。误认为一个查询就需要建一个索引。
- 2）宁缺勿滥。误认为索引会消耗空间、严重拖慢更新和新增速度。
- 3）抵制惟一索引。误认为业务的惟一性一律需要在应用层通过“先查后插”方式解决。
:::


## 3.3 SQL 语句 

### 3.3.1 count(*)是 SQL92 定义的标准统计行数的语法
1. <font color='red'>【强制】</font>不要使用 count(列名)或 count(常量)来替代 count(*)，count(*)是 SQL92 定义的
标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。

<font color='#8e7437'>说明：</font>count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。

### 3.3.2  count(distinct col) 计算该列除 NULL 之外的不重复行数
2. <font color='red'>【强制】</font>count(distinct col) 计算该列除 NULL 之外的不重复行数，注意 count(distinct
col1, col2) 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。

### 3.3.3 使用 sum()时需注意 NPE 问题
3. <font color='red'>【强制】</font>当某一列的值全是 NULL 时，count(col)的返回结果为 0，但 sum(col)的返回结果为
NULL，因此使用 sum()时需注意 NPE 问题。

<font color='#1d953f'>正例：</font>可以使用如下方式来避免 sum 的 NPE 问题：

```sql
SELECT IF(ISNULL(SUM(g)),0,SUM(g))FROM table;
```

### 3.3.4 NULL 与任何值的直接比较都为 NULL
4. <font color='red'>【强制】</font>使用 ISNULL()来判断是否为 NULL 值。注意：NULL 与任何值的直接比较都为 NULL。
<font color='#8e7437'>说明：</font>

- 1） NULL<>NULL 的返回结果是 NULL，而不是 false。
- 2） NULL=NULL 的返回结果是 NULL，而不是 true。
- 3） NULL<>1 的返回结果是 NULL，而不是 true。

### 3.3.5 若count为0应直接返回
5. <font color='red'>【强制】</font>在代码中写分页查询逻辑时，若 count 为 0 应直接返回，避免执行后面的分页语句。

### 3.3.6 一切外键概念必须在应用层解决
6. <font color='red'>【强制】</font>不得使用外键与级联，一切外键概念必须在应用层解决。

<font color='#8e7437'>说明：</font>（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。

如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，则为级联更新。

外键与级联更新适用于单机低并发，不适合分布式、高并发集群；

级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。

### 3.3.7 禁止使用存储过程
7. <font color='red'>【强制】</font>禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。

### 3.3.8 删除和修改记录时，要先 select
8. <font color='red'>【强制】</font>数据订正时，删除和修改记录时，要先 select，避免出现误删除，确认无误才能执行更新语句。

### 3.3.9 in 操作能避免则避免,控制在 1000 个之内
9. <font color='#7fb80e'>【推荐】</font>in 操作能避免则避免，若实在避免不了，需要仔细评估 in 后边的集合元素数量，控制在 1000 个之内。

### 3.3.10 所有的字符存储与表示，均以 utf-8 编码
10. <font color='#8552a1'>【参考】</font>如果有全球化需要，所有的字符存储与表示，均以 utf-8 编码，注意字符统计函数的区别。

<font color='#8e7437'>说明：</font>

```sql
 SELECT LENGTH("轻松工作")； 返回为 12
 SELECT CHARACTER_LENGTH("轻松工作")； 返回为 4
 ```

 如果要使用表情，那么使用 utfmb4 来进行存储，注意它与 utf-8 编码的区别。

### 3.3.11 不建议在开发代码中使用TRUNCATE语句

11. <font color='#8552a1'>【参考】</font>TRUNCATE TABLE 比 DELETE 速度快，且使用的系统和事务日志资源少，

但 TRUNCATE无事务且不触发 trigger，有可能造成事故，故不建议在开发代码中使用此语句。

<font color='#8e7437'>说明：</font>TRUNCATE TABLE 在功能上与不带 WHERE 子句的 DELETE 语句相同。

## 3.4 ORM 映射 

### 3.4.1 一律不要使用 * 作为查询的字段列表
1. <font color='red'>【强制】</font>在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。

<font color='#8e7437'>说明：</font>

- 1）增加查询分析器解析成本。
- 2）增减字段容易与 resultMap 配置不一致。

### 3.4.2 POJO 类的布尔属性不能加is而数据库字段必须加 is_
2. <font color='red'>【强制】</font>POJO 类的布尔属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行
字段与属性之间的映射。

<font color='#8e7437'>说明：</font>参见定义 POJO 类以及数据库字段定义规定，在&lt;resultMap&gt;中增加映射，是必须的。
在 MyBatis Generator 生成的代码中，需要进行对应的修改。

### 3.4.3 不要用 resultClass 当返回参数
3. <font color='red'>【强制】</font>不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一对应，也需
要定义；反过来，每一个表也必然有一个与之对应。

<font color='#8e7437'>说明：</font>配置映射关系，使字段与 DO 类解耦，方便维护。

### 3.4.4 不要使用${} 此种方式容易出现 SQL 注入
4. <font color='red'>【强制】</font>sql.xml 配置参数使用：#{}，#param# 不要使用${} 此种方式容易出现 SQL 注入。

### 3.4.5 iBATIS的queryForList不推荐使用
5. <font color='red'>【强制】</font>iBATIS 自带的 queryForList(String statementName,int start,int size)不推荐使用。

<font color='#8e7437'>说明：</font>其实现方式是在数据库取到statementName对应的SQL语句的所有记录，再通过subList取 start,size 的子集合。

<font color='#1d953f'>正例：</font>


```java
Map<String, Object> map = new HashMap<String, Object>(); 
map.put("start", start); 
map.put("size", size); 
```

### 3.4.6 不允许直接拿HashMap作为查询结果集的输出

6. <font color='red'>【强制】</font>不允许直接拿 HashMap 与 Hashtable 作为查询结果集的输出。

<font color='#8e7437'>说明：</font>resultClass=”Hashtable”，会置入字段名和属性值，但是值的类型不可控。

### 3.4.7 gmt_modified字段值为当前时间
7. <font color='red'>【强制】</font>更新数据表记录时，必须同时更新记录对应的 gmt_modified 字段值为当前时间。

 

### 3.5.1 聚集索引非聚集索引
聚集索引一个表只能有一个，而非聚集索引一个表可以存在多个聚集索引存储记录是物理上连续存在，而非聚集索引是逻辑上的连续，物理存储并不连续
聚集索引:物理存储按照索引排序；聚集索引是一种索引组织形式，索引的键值逻辑顺序决定了表数据行的物理存储顺序。
非聚集索引:物理存储不按照索引排序；非聚集索引则就是普通索引了，仅仅只是对数据列创建相应的索引，不影响整个表的物理存储顺序。
索引是通过二叉树的数据结构来描述的，我们可以这么理解聚簇索引：索引的叶节点就是数据节点。而非聚簇索引的叶节点仍然是索引节点，只不过有一个指针指向对应的数据块。