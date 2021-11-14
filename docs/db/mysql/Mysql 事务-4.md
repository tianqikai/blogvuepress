# 5. Mysql 事务 

## 5.1 为什么需要事务 

现在的很多软件都是多用户，多程序，多线程的，对同一个表可能同时有很多人在用，为保持数据的一致性，所以提出了事务的概念。 A 给 B 要划钱，A 的账户-1000 元， B 的账户就要+1000 元，这两个 update 语句必须作为一个整体来执行，不然 A 扣钱了，B 没有加钱这种情况很难处理。

## 5.2 什么存储引擎支持事务

1. 查看数据库下面是否支持事务（InnoDB 支持）？ show engines; 
2. 查看 mysql 当前默认的存储引擎？ show variables like '%storage_engine%'; 
3. 查看某张表的存储引擎？ show create table 表名 ; 
4. 对于表的存储结构的修改？
5. 建立 InnoDB 表：
Create table .... ENGINE=InnoDB； 
Alter table table_name ENGINE=InnoDB;


## 5.3 事务特性

:::tip 事务特性（ACID）
1. 原子性（atomicity） 
2. 一致性（consistency） 
3. 隔离性（isolation） 
4. 持久性（durability）
:::

### 5.3.1 原子性（atomicity） 
一个事务必须被视为一个不可分割的最小单元，整个事务中的所有操作要么全部提交成功， 要么全部失败，对于一个事务来说，不可能只执行其中的一部分操作


比如： 记账操作
A账户给B账户打款
A减少5W；
B增加5W；
**整个事务要么全部成功，要么全部失败**

### 5.3.2 一致性（consistency）

一致性是指事务将数据库从一种一致性转换到另外一种一致性状态，在事务开始之前和事务结束之后数据库中数据的完整性没有被破坏；


扣除的钱（-W） 与增加的钱（5W） 相加应该为 0

**事务的原子性隔离性最终目的保持业务的一致性；**

### 5.3.3 持久性（durability） 

一旦事务提交，则其所做的修改就会永久保存到数据库中。此时即使系统崩溃，已经提交的 修改数据也不会丢失
并不是数据库的角度完全能解决


### 5.3.4 隔离性（isolation） 

一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事 务是隔离的，并发执行的各个事务之间不能互相干扰。 （对数据库的并行执行，应该像串行执行一样） 

:::tip 隔离级别
1. 未提交读（READ UNCOMMITED）脏读 
2. 已提交读 （READ COMMITED）不可重复读 
3. 可重复读（REPEATABLE READ） 
4. 可串行化（SERIALIZABLE）
:::


### 5.3.5 事务并发问题

1. **脏读**： 事务 A 读取了事务 B 更新的数据，然后 B 回滚操作，那么 A 读取到的数据是脏数据 
2. **不可重复读**： 事务 A 多次读取同一数据，事务 B 在事务 A 多次读取的过程中，对数据作了更新并提交，导致事务 A 多次读取同一数据时，结果不一致。 
3. **幻读**： 系统管理员 A 将数据库中所有学生的成绩从具体分数改为 ABCDE 等级，但是系统管理员 B 就在这个时候插入了一条具体分数的记录，当系统管理员 A 改结束后发现 还有一条记录没有改过来，就好像发生了幻觉一样，这就叫幻读。 

不可重复读的和幻读很容易混淆，<font color='#f15b6c'>不可重复读侧重于修改</font>，<font color='#843900'>幻读侧重于新增或删除</font>。

**解决不可重复读的问题只需锁住满足条件的行**，
**解决幻读需要锁表**

**mysql 默认的事务隔离级别为 repeatable-read**

```sql
show variables like '%tx_isolation%';
```

### 5.3.6 未提交读（READ UNCOMMITED）脏读

```sql
--1.查看事务隔离级别，默认可重复读
show variables like '%tx_isolation%'; 
--2.改为未提交读
set SESSION TRANSACTION ISOLATION LEVEL read UNCOMMITTED; 

--3. 一个 session 中 
start TRANSACTION 
update account set balance = balance -50 where id = 1;

--4.另外一个 session 中查询 
select * from account ;

--5. 回到第一个 session 中 回滚事务 
ROLLBACK ;
--6. 在第二个 session 中 
select * from account ；
--7. 在另外一个 session 中读取到了为提交的数据，这部分的数据为脏数据
```


### 5.3.7 已提交读 （READ COMMITED）不可重复读

```sql
--1.查看事务隔离级别，默认可重复读
show variables like '%tx_isolation%'; 
--2.已提交读 （READ COMMITED）
set SESSION TRANSACTION ISOLATION LEVEL read committed; 

--3. 一个 session 中 
start TRANSACTION ;
update account set balance = balance -50 where id = 1 ;

--4. 另外一个 session 中查询 (数据并没改变) 
select * from account ;

--5. 回到第一个 session 中 提交事务 
commit ;
--6. 在第二个 session 中 
start TRANSACTION ;
select * from account; --(数据已经改变)
```

### 5.3.8 可重复读（REPEATABLE READ）

```sql
--1.查看事务隔离级别，默认可重复读
show variables like '%tx_isolation%'; 
--2. 可重复读（REPEATABLE READ）
set SESSION TRANSACTION ISOLATION LEVEL repeatable read; 

--3. 一个 session 中 
start TRANSACTION 
update account set balance = balance -50 where id = 1;

--4. 另外一个 session 中查询 (数据并没改变)
start TRANSACTION ; --开启事务
select * from account;

--5. 回到第一个 session 中回滚事务 
commit ;
--6. 在第二个 session 中 
select * from account;-- (数据并未改变)
```

### 5.3.9 可串行化（SERIALIZABLE）

```sql

show variables like '%tx_isolation%'; 

set SESSION TRANSACTION ISOLATION LEVEL serializable; 

--1.开启一个事务 
begin 
select * from account;
--发现 3 条记录 

--2.开启另外一个事务
begin 
select * from account; 
--发现 3 条记录 

insert into account VALUES(4,'deer',500);
--发现根本就不让插入 

--3. 回到第一个事务 
commit;
```