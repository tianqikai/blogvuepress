//config.js
// const sortFn = key => (a, b) => a[key].split("-")[1][length - 1] > b[key].split("-")[1][length - 1] ? 1 : -1;
const sortFn = (a, b) => {
    console.log('-----------strat')
    console.log(a.filename)
    console.log(b.filename)
    console.log('-----------end')
    const lastA = a.filename.split("-")[1].split(".")[0]
    const lastB = b.filename.split("-")[1].split(".")[0]

    return lastA > lastB ? 1 : -1
  }
module.exports = {
    // theme: '@vuepress/blog',
    // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar 插件文档
    // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#collapse-%E6%8A%98%E5%8F%A0
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            collapsable: true,
            sidebarDepth: 4,
            sort: {
                mode: 'custom',
                fn: sortFn
            },
            collapse: {
                open: true
            }
        },
        '@vuepress/back-to-top':true
    },
    markdown: {
        //每个代码块显示行号
        lineNumbers: true
    },
    title: 'TQK的个人博客',  //标题
    keywords: '个人笔记',
    description: 'TQK的个人博客',
    repo: 'https://github.com/tianqikai',  //仓库地址
    base: '/',  // 配合部署项目
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        //seo
        ["meta", { name: "author", content: "冰岛红茶" }],
        ["meta", { name: "keywords", content: "个人博客 ，java ，后端" }]
        // // add jquert and fancybox 支持图片放大功能
        //  img format   img reset format 
        // ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        // ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        // ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        logo: '/images/logo.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            {
                text: '入门基础',
                ariLabel: '入门基础',
                link:'/base/',
                items: [  //多级导航栏
                    { text: 'Java基础', link: '/base/java/' },
                    { text: 'Java基础(高级)', link: '/base/seniorJava/' },
                    { text: '数据结构与算法', link: '/base/data-structure/' },
                    { text: '设计模式', link: '/base/design-pattern/' },
                    { text: 'JVM', link: '/base/JVM/' },
                    { text: 'Javascript', link: '/base/es6/' },
                    { text: 'Shell脚本', link: '/base/shell/' },
                    { text: 'Python', link: '/base/python/' },
                    { text: 'C语言', link: '/base/c/' },
                ]
            },
            {
                text: '数据库',
                ariLabel: '数据库',
                items: [  //多级导航栏
                    { text: 'Mysql', link: '/db/mysql/' },
                    { text: 'Redis', link: '/db/redis/' },
                    { text: 'Mongdb', link: '/db/mongdb/' },
                    { text: 'Oracle', link: '/db/oracle/' },
                    { text: 'DB2', link: '/db/db2/' }
                ]
            },
            {
                text: '常用框架',
                ariLabel: '常用框架',
                items: [  //多级导航栏
                    { text: 'Spring', link: '/framework/Spring/' },
                    { text: 'SpringMVC', link: '/framework/SpringMVC/' },
                    { text: 'Mybatis', link: '/framework/mybatis/' },
                    { text: 'Springboot', link: '/framework/springboot/' },
                    { text: 'Dubbo', link: '/framework/dubbo/' },
                    { text: 'Vue', link: '/framework/vue/' },
                    { text: 'SpringCloud-Alibaba', link: '/framework/SpringCloud/' }
                ]
            },
            {
                text: '中间件',
                ariLabel: '中间件',
                items: [  //多级导航栏
                    { text: 'nginx', link: '/middleware/nginx/' },
                    { text: 'gateway', link: '/middleware/gateway/' },
                    { text: 'zookeeper', link: '/middleware/zookeeper/' },
                    { text: 'zuul', link: '/middleware/zuul/' },
                    { text: 'nocas', link: '/middleware/nocas/' },
                    { text: 'seata', link: '/middleware/seata/' },
                    {   text: 'MQ消息队列',
                        ariLabel:"MQ",
                        link:'/middleware/MQ消息队列/'
                        // items:[
                        //     { text: 'kafka', link: '/middleware/kafka/' },
                        //     { text: 'ActiveMQ', link: '/middleware/ActiveMQ/' },
                        //     { text: 'RocketMQ', link: '/middleware/RocketMQ/' },
                        // ]
                    },
                    { text: 'docker', link: '/middleware/docker/' },
                    { text: 'kubernetes', link: '/middleware/kubernetes/' },
                    { text: 'Elasticsearch', link: '/middleware/Elasticsearch/' }
                ]
            },
            {
                text: '其他',
                ariLabel: '其他',
                items: [  //多级导航栏
                    // { text: '源码分析', link: '/other/source-code/' },
                    { text: '阿里巴巴Java开发手册', link: '/other/alibaba/' },
                    { text: '编程英语', link: '/other/english/' },
                    { text: 'IDEA快捷键', link: '/other/idea/' },
                    { text: '常用网站', link: '/other/url/' },
                    { text: 'Liunx安装jdk', link: '/other/jdk/' },
                    { text: 'Liunx集群', link: '/other/jiqun/' }
                ]
            },
            {
                text: '工具',
                ariLabel: '工具',
                items: [  //多级导航栏
                    { text: 'maven', link: '/tool/maven/' },
                    { text: 'git', link: '/tool/git/' },
                    { text: 'jemeter', link: '/tool/jemeter/' },
                    { text: 'postman', link: '/tool/postman/' },
                    { text: 'PowerDesigner', link: '/tool/PowerDesigner/' },
                ]
            },
            { text: 'github', link: 'https://github.com/zeroonbush/blog.git' }
        ],
    }
}
