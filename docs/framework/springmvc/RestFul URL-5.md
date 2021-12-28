# 6. RestFul URL

## 6.1. 基本概念
模型-视图-控制器（MVC）是一个众所周知的以设计界面应用程序为基础的设计思想。

Restful风格的API是一种软件架构风格，设计风格而不是标准，只是提供了一组设计原则和约束条件。
它主要用于客户端和服务器交互类的软件。基于这个风格设计的软件可以更简洁，更有层次，更易于实
现缓存等机制。

在Restful风格中，用户请求的url使用同一个url而用请求方式：get，post，delete，put...等方式对请
求的处理方法进行区分，这样可以在前后台分离式的开发中使得前端开发人员不会对请求的资源地址产
生混淆和大量的检查方法名的麻烦，形成一个统一的接口。

:::tip 在Restful风格中，现有规定如下：
- GET（SELECT）：从服务器查询，可以在服务器通过请求的参数区分查询的方式。
- POST（CREATE）：在服务器端新建一个资源，调用insert操作。
- PUT（UPDATE）：在服务器端更新资源，调用update操作。
- PATCH（UPDATE）：在服务器端更新资源（客户端提供改变的属性）。(目前jdk7未实现， tomcat7不支持)。
- DELETE（DELETE）：从服务器端删除资源，调用delete语句。
:::

## 6.2. Spring Mvc 支持RestFul URL 风格设计

- **案例**：如何在java构造没有扩展名的RESTful url,如 /forms/1?

`SpringMvc`是通过`@RequestMapping` 及`@PathVariable annotation`提供的,

通过如`@RequestMapping(value="/blog /{id}",method=RequestMethod.DELETE)`即可处理/blog/1 的delete请求.

### 6.3. RestFul Url 映射地址配置实现

### 6.3.1 Get 请求配置

```java

/**
 * Restful  url 地址配置
 *   1.请求类型  GET POST  PUT  DELETE
 *   2.URL 设置  不体现动作成份(没有动词)  account/1   account/2 account
 *   3.参数格式
 *      路径参数
 *      json 格式| 普通表单参数
 *   4.响应内容:json
 */
@Controller
public class AccountController extends BaseController{

    @Resource
    private AccountService accountService;

    //@RequestMapping("account/queryAccountById")
    // todo http://localhost:8080/ssm/account/1.do
    // todo http://localhost:8080/ssm/account/2.do
    @GetMapping("account/{id}")
    @ResponseBody
    public Account queryAccountById(@PathVariable Integer id){
//        int a=1/0;
        return accountService.selectById(id);
    }

```

### 6.3.2 Post请求配置

```java

    /**
     * 资源添加操作-post
     * @param account   json格式
     * @return
     */
    // todo http://localhost:8080/ssm/account.do

    /**
     {
     "id": 1,
     "aname": "1",
     "type": "1",
     "money": 1.0,
     "userId": 1,
     "createTime": 1640620800000,
     "updateTime": 1640620800000,
     "remark": "1"
     }
     */
    @PostMapping("account")
    @ResponseBody
    public Map<String,Object> saveAccount(@RequestBody  Account account){
        Map<String,Object> map=new HashMap<String,Object>();
        if(accountService.saveAccount(account)>0){
            map.put("code",200);
            map.put("msg","账户添加成功");
        }else{
            map.put("code",500);
            map.put("msg","账户添加失败");
        }
        return map;
    }
```

### 6.3.3 Put请求配置

```java

    /**
     * 资源的更新-put
     * @param account  json
     * @return
     */
    // todo http://localhost:8080/ssm/account.do

    /**
     {
     "id": 1,
     "aname": "雪花",
     "type": "1",
     "money": 99.0,
     "userId": 1,
     "createTime": 1640620800000,
     "updateTime": 1640620800000,
     "remark": "1"
     }
     */
    @PutMapping("account")
    @ResponseBody
    public Map<String,Object> updateAccount(@RequestBody  Account account){
        Map<String,Object> map=new HashMap<String,Object>();
        if(accountService.updateAccount(account)>0){
            map.put("code",200);
            map.put("msg","账户更新成功");
        }else{
            map.put("code",500);
            map.put("msg","账户更新失败");
        }
        return map;
    }
}
```

### 6.3.4 Delete请求配置

```java
    // todo http://localhost:8080/ssm/account/2.do
    @DeleteMapping("account/{id}")
    @ResponseBody
    public Map<String,Object> delAccountById(@PathVariable Integer id){
        Map<String,Object> map=new HashMap<String,Object>();
        if(accountService.delAccount(id)>0){
            map.put("code",200);
            map.put("msg","账户删除成功");

        }else{
            map.put("code",500);
            map.put("msg","账户删除失败");
        }
        return map;
    }
```
