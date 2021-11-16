# 1. Mybatis开发应用

## 1.1 为什么需要ORM框架？

:::tip 传统的JDBC编程存在的弊端：
1. 工作量大，操作数据库至少要5步；
2. 业务代码和技术代码耦合；
3. 连接资源手动关闭，带来了隐患；
:::

### 1.1.1 JDBC代码演示

```java
public class JdbcDemo {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://49.233.34.168:6699/STD?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true";

	// Database credentials
	static final String USER = "root";
	static final String PASS = "12345@tqk";

	@Test
	public void QueryPreparedStatementDemo() {
		Connection conn = null;
		PreparedStatement stmt = null;
		List<TUser> users = new ArrayList<>();
		try {
			// STEP 2: 注册mysql的驱动
			Class.forName("com.mysql.jdbc.Driver");

			// STEP 3: 获得一个连接
			System.out.println("Connecting to database...");
			conn = DriverManager.getConnection(DB_URL, USER, PASS);

			// STEP 4: 创建一个查询
			System.out.println("Creating statement...");
			String sql;
			sql = "SELECT * FROM t_user where user_name= ? ";
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, "tqk");
			System.out.println(stmt.toString());//打印sql
			ResultSet rs = stmt.executeQuery();
			

			// STEP 5: 从resultSet中获取数据并转化成bean
			while (rs.next()) {
				System.out.println("------------------------------");
				// Retrieve by column name
				TUser user = new TUser();
				user.setId(rs.getInt("id"));
				user.setUserName(rs.getString("user_name"));
				user.setRealName(rs.getString("real_name"));
				user.setSex(rs.getByte("sex"));
				user.setMobile(rs.getString("mobile"));
				user.setEmail(rs.getString("email"));
				user.setNote(rs.getString("note"));
				System.out.println(user.toString());				
				users.add(user);
			}
			// STEP 6: 关闭连接
			rs.close();
			stmt.close();
			conn.close();
		} catch (SQLException se) {
			// Handle errors for JDBC
			se.printStackTrace();
		} catch (Exception e) {
			// Handle errors for Class.forName
			e.printStackTrace();
		} finally {
			// finally block used to close resources
			try {
				if (stmt != null)
					stmt.close();
			} catch (SQLException se2) {
			}// nothing we can do
			try {
				if (conn != null)
					conn.close();
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}
		System.out.println("-------------------------");
		System.out.println("there are "+users.size()+" users in the list!");
	}
}
```
#### 执行结果
```cpp
Connecting to database...
Creating statement...
com.mysql.jdbc.JDBC4PreparedStatement@63e31ee: SELECT * FROM t_user where user_name= 'tqk' 
------------------------------
TUser{id=203, userName='tqk', realName='田起凯', sex=1, mobile='18562328330', email='xxoo@163.com', note='0', positionId=null}
-------------------------
there are 1 users in the list!
```
## 1.2 MyBatis核心类简介

MyBatis 前身是 iBatis,其源于“Internet”和“ibatis”的组合，本质是一种半自动的 ORM 框架，除了 POJO 和映射关系之外，还需要编写 SQL 语句；Mybatis 映射文件三要素：SQL、映射规则和 POJO；

:::tip 核心类分析：
1. **SqlSessionFactoryBuilder**：读取配置信息创建 SqlSessionFactory，**建造者模式**，方法级别生命周期；
2. **SqlSessionFactory**：创建 Sqlsession，**工厂单例模式**，存在于程序的整个生命周期；
3. **SqlSession**：代表一次数据库连接，一般通过调用 Mapper 访问数据库，也可以直接发送SQL 执行；线程不安全，要保证线程独享（方法级）；
4. **SQL Mapper**：由一个 Java 接口和 XML 文件组成，包含了要执行的 SQL 语句和结果集映射规则。方法级别生命周期；
:::


```java
public class MybatisDemo {
	

	private SqlSessionFactory sqlSessionFactory;
	
	@Before
	public void init() throws IOException {
		//--------------------第一阶段---------------------------
	    // 1.读取mybatis配置文件创SqlSessionFactory
		String resource = "mybatis-config.xml";
		InputStream inputStream = Resources.getResourceAsStream(resource);
		// 1.读取mybatis配置文件创SqlSessionFactory
		sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		inputStream.close();
	}
	
	@Test
	// 快速入门
	public void quickStart() throws IOException {
		//--------------------第二阶段---------------------------
		// 2.获取sqlSession	
		SqlSession sqlSession = sqlSessionFactory.openSession();
		// 3.获取对应mapper
		TUserMapper mapper = sqlSession.getMapper(TUserMapper.class);
		
		//--------------------第三阶段---------------------------
		// 4.执行查询语句并返回单条数据
		TUser user = mapper.selectByPrimaryKey(1);
		System.out.println(user);
		
		System.out.println("----------------------------------");
		
		// 5.执行查询语句并返回多条数据
		List<TUser> users = mapper.selectAll();
		for (TUser tUser : users) {
			System.out.println(tUser);
		}
	}
}
```

```cpp
2021-11-16 18:38:13.896 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectByPrimaryKey - ==>  Preparing: select id, user_name, real_name, sex, mobile, email, note, position_id from t_user where id = ? 
2021-11-16 18:38:13.930 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectByPrimaryKey - ==> Parameters: 203(Integer)
2021-11-16 18:38:13.980 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectByPrimaryKey - <==      Total: 1
TUser{id=203, userName='tqk', realName='田起凯', sex=1, mobile='18562328330', email='xxoo@163.com', note='0', positionId=1, position=null, jobs=null, healthReports=null, roles=null}
----------------------------------
2021-11-16 18:38:13.982 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectAll - ==>  Preparing: select id, user_name, real_name, sex, mobile, email, note from t_user 
2021-11-16 18:38:13.984 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectAll - ==> Parameters: 
2021-11-16 18:38:14.026 [main] DEBUG c.e.mybatis.mapper.TUserMapper.selectAll - <==      Total: 9
TUser{id=1, userName='lison', realName='李小宇', sex=1, mobile='13125858455', email='lison@qq.com', note='lison的备注', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=2, userName='james', realName='陈大雷', sex=1, mobile='18677885200', email='james@qq.com', note='james的备注', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=3, userName='cindy', realName='王美丽', sex=2, mobile='18695988747', email='xxoo@163.com', note='cindy's note', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=196, userName='mark', realName='毛毛', sex=1, mobile='18695988747', email='xxoo@163.com', note='mark's note', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=197, userName='test1', realName='realname1', sex=null, mobile='null', email='myemail1', note='null', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=198, userName='iuguig', realName='huhuh', sex=null, mobile='null', email='null', note='null', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=201, userName='mark', realName='毛毛', sex=1, mobile='18695988747', email='xxoo@163.com', note='mark's note', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=202, userName='mark', realName='毛毛', sex=1, mobile='18695988747', email='xxoo@163.com', note='mark's note', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
TUser{id=203, userName='tqk', realName='田起凯', sex=1, mobile='18562328330', email='xxoo@163.com', note='0', positionId=null, position=null, jobs=null, healthReports=null, roles=null}
```

## 1.3 resultType与resultMap之间的选择

### 1.3.1 resultType

**resultType**：当使用 resultType 做 SQL 语句返回结果类型处理时，对于 SQL 语句查询出的字段在相应的 pojo 中必须有和它相同的字段对应，而 resultType 中的内容就是 pojo 在本项目中的位置。

:::tip 自动映射注意事项 :
1. 前提：SQL 列名和 JavaBean 的属性是一致的；
2. 使用 resultType，如用简写需要配置 **typeAliases （别名）**；
3. 如果列名和 JavaBean 不一致，但列名符合单词下划线分割，Java 是驼峰命名法，则mapUnderscoreToCamelCase 可设置为 true；
:::
<a data-fancybox title="SQL 列名" href="./image/alibabashouce512.jpg">![SQL 列名](./image/alibabashouce512.jpg)</a>


#### resultType测试案例

```java
	@Test
	//知识点：resultType
	public void testResultType() throws IOException {
		// 2.获取sqlSession
		SqlSession sqlSession = sqlSessionFactory.openSession();
		// 3.获取对应mapper
		TUserMapper mapper = sqlSession.getMapper(TUserMapper.class);
		// 4.执行查询语句并返回多条数据
		TUser user = mapper.selectOne(203);
		System.out.println(user);
	}
```
```xml
	<select id="selectOne" resultType="TUser">
		select
			id, user_name, real_name, sex, mobile, email, note
		from t_user where id = #{id,jdbcType=INTEGER}
	</select>
```

### 1.3.2 resultMap

**resultMap** 元素是 MyBatis 中最重要最强大的元素。它可以让你从 90% 的 JDBC ResultSets 
数据提取代码中解放出来,在对复杂语句进行联合映射的时候，它很可能可以代替数千行的
同等功能的代码。 ResultMap 的设计思想是，简单的语句不需要明确的结果映射，而复杂
一点的语句只需要描述它们的关系就行了

:::tip
1. **id** 当前命名空间中的一个唯一标识，用于标识一个 result map.
2. **type** 类的完全限定名, 或者一个类型别名.
3. **autoMapping** 如果设置这个属性，MyBatis 将会为这个 ResultMap 开启或者关闭自动映射。这
个属性会覆盖全局的属性 autoMappingBehavior。默认值为：unset。
```xml
    <!-- 设置自动驼峰转换		 -->
    <setting name="mapUnderscoreToCamelCase" value="true" />
```
:::
#### 代码演示

```xml
    <resultMap id="UserResultMap" type="TUser" autoMapping="true">
		<id column="id" property="id" />
		<result column="user_name" property="userName"/>
		<result column="real_name" property="realName" />
		<result column="sex" property="sex" />
		<result column="mobile" property="mobile" />
		<result column="email" property="email" />
		<result column="note" property="note" />
		<association property="position" javaType="TPosition" columnPrefix="post_">
			<id column="id" property="id"/>
			<result column="name" property="postName"/>
			<result column="note" property="note"/>
		</association>
	</resultMap>
	<select id="selectTestResultMap" resultMap="UserResultMap" >
		select
			a.id,
			user_name,
			real_name,
			sex,
			mobile,
			email,
			a.note,
			b.id  post_id,
			b.post_name,
			b.note post_note
		from t_user a,
			 t_position b
		where a.position_id = b.id
	</select>
```
```java
	@Test
	//知识点：resultMap
	public void testResultMap() throws IOException {
		//--------------------第二阶段---------------------------
		// 2.获取sqlSession	
		SqlSession sqlSession = sqlSessionFactory.openSession();
		// 3.获取对应mapper
		TUserMapper mapper = sqlSession.getMapper(TUserMapper.class);
		
		//--------------------第三阶段---------------------------
		// 4.执行查询语句并返回单条数据
		List<TUser> users = mapper.selectTestResultMap();
		for (TUser tUser : users) {
			System.out.println(tUser.getUserName()+": "+tUser.getPosition().getPostName());
		}
	}
```

```
lison: 总经理
james: 零时工
cindy: 总经理
tqk: 总经理
```


**autoMappingBehavior**
mybatis核心配置文件中settings中配置,指定 MyBatis 应如何自动映射列到字段或属性。 NONE 表示取消自动映射；PARTIAL 只会自动映射没有定义嵌套结果集映射的结果集。 FULL 会自动映射任意复杂的结果集（无论是否嵌套）。默认是partial，这是一种全局设置

**autoMapping**
在resultMap或者association,collections中使用，是一个局部开关，开启后会自动设置嵌套查询中的属性，局部开关优先级大于全部开关，当全部开关开启FULL映射时，局部开关关闭，这时候仍然不会进行映射。


### 1.3.3 到底应该用 resultType 还是 resultMap?

强制使用 resultMap, 不要用 resultClass 当返回参数，即使所有类属性名与数据库字段一一
对应，也需要定义；--**目的代码和表结构解耦**


<a data-fancybox title="SQL 列名" href="./image/alibabashouce543.jpg">![SQL 列名](./image/alibabashouce543.jpg)</a>

见《Java 开发手册 1.5》之 5.4.3；