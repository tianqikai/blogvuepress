//config.js
// const sortFn = key => (a, b) => a[key].split("-")[1][length - 1] > b[key].split("-")[1][length - 1] ? 1 : -1;
const sortFn = (a, b) => {
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
                    { text: 'java', link: '/base/java/' },
                    { text: 'javascript', link: '/base/es6/' },
                    { text: 'shell脚本', link: '/base/shell/' },
                    { text: 'python', link: '/base/python/' },
                    { text: 'c语言', link: '/base/c/' },
                ]
            },
            {
                text: '数据库',
                ariLabel: '数据库',
                items: [  //多级导航栏
                    { text: 'mysql', link: '/db/mysql/' },
                    { text: 'redis', link: '/db/redis/' },
                    { text: 'oracle', link: '/db/oracle/' },
                    { text: 'mongdb', link: '/db/mongdb/' },
                    { text: 'db2', link: '/db/db2/' }
                ]
            },
            {
                text: '常用框架',
                ariLabel: '常用框架',
                items: [  //多级导航栏
                    { text: 'Spring', link: '/db/mysql/' },
                    { text: 'SpringMVC', link: '/db/mysql/' },
                    { text: 'mybatis', link: '/db/redis/' },
                    { text: 'springboot', link: '/db/redis/' },
                    { text: 'dubbo', link: '/db/oracle/' },
                    { text: 'vue', link: '/db/mongdb/' },
                    { text: 'springcloud-alibaba', link: '/db/db2/' }
                ]
            },
            {
                text: '中间件',
                ariLabel: '中间件',
                items: [  //多级导航栏
                    { text: 'nginx', link: '/middleware/nginx/' },
                    { text: 'getways', link: '/middleware/getways/' },
                    { text: 'zookeeper', link: '/middleware/zookeeper/' },
                    { text: 'zuul', link: '/middleware/zuul/' },
                    { text: 'nocas', link: '/middleware/nocas/' },
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
                    { text: 'k8s', link: '/middleware/k8s/' },
                ]
            },
            {
                text: '其他',
                ariLabel: '其他',
                items: [  //多级导航栏
                    { text: '数据结构与算法', link: '/other/data-structure/' },
                    { text: '设计模式', link: '/other/design-pattern/' },
                    { text: 'JVM', link: '/other/JVM/' },
                    { text: '源码分析', link: '/other/source-code/' },
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
            { text: '编程英语', link: '/english/' },
            { text: 'github', link: 'https://github.com/zeroonbush/blog.git' }
        ],
    }
}
