(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{569:function(t,s,a){t.exports=a.p+"assets/img/arrays1.23f818d0.jpg"},570:function(t,s,a){t.exports=a.p+"assets/img/arrays2.ee54b976.jpg"},747:function(t,s,a){"use strict";a.r(s);var n=a(26),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_4-数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-数组"}},[t._v("#")]),t._v(" 4.数组")]),t._v(" "),n("h2",{attrs:{id:"_4-1-数组概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-数组概述"}},[t._v("#")]),t._v(" 4.1 数组概述")]),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("数组(Array)，是多个相同类型数据按一定顺序排列的集合，并使用一个名字命名，并通过编号的方式对这些数据进行统一管理")])])],1),t._v(" "),n("p",[n("strong",[t._v("数组的常见概念")]),n("br"),t._v("\n▷  数组名"),n("br"),t._v("\n▷  下标(或索引)"),n("br"),t._v("\n▷  元素"),n("br"),t._v("\n▷  数组的长度")]),t._v(" "),n("p",[t._v("数组本身是引用数据类型，而数组中的元素可以是"),n("font",{attrs:{color:"red"}},[n("strong",[t._v("任何数据类型")])]),t._v(" ，包括基本数据类型和引用数据类型")],1),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建数组对象会在内存中开辟一整块连续的空间，而"),n("font",{attrs:{color:"red"}},[n("strong",[t._v("数组名中引用的是这块连续空间的首地址")])])],1)]),t._v(" "),n("li",[n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("数组的长度一旦确定，就不能修改")])])],1)]),t._v(" "),n("li",[n("p",[t._v("我们可以直接通过下标(或索引)的方式调用指定位置的元素，速度很快。")])]),t._v(" "),n("li",[n("p",[t._v("数组的分类：\n▷  按照维度：一维数组、二维数组、三维数组、…\n▷  按照元素的数据类型分：基本数据类型元素的数组、引用数据类型元素的数组(即对象数组)")])])]),t._v(" "),n("h2",{attrs:{id:"_4-2-一维数组的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-一维数组的使用"}},[t._v("#")]),t._v(" 4.2 一维数组的使用")]),t._v(" "),n("p",[n("strong",[t._v("一维数组的声明方式：")]),t._v(" "),n("font",{attrs:{color:"red"}},[n("strong",[t._v("type var[] 或 type[] var；")])])],1),t._v(" "),n("p",[n("strong",[t._v("例如:")]),t._v("\nint a[];"),n("br"),t._v("\nint[] a1;"),n("br"),t._v("\ndouble b[];"),n("br"),t._v("\nString[] c; //引用类型变量数组"),n("br"),t._v("\n▷ ava语言中声明数组时不能指定其长度(数组中元素的数)， 例如： int a[5]; //非法")]),t._v(" "),n("p",[n("strong",[t._v("一维数组的使用：初始化")])]),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("动态初始化：数组声明且为数组元素分配空间与赋值的操作分开进行")])])],1),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" names"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnames "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnames"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"钱学森"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnames"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邓稼先"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnames"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"袁隆平"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("静态初始化：在定义数组的同时就为数组元素分配空间并赋值")])])],1),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" names"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四光"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"茅以升"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"华罗庚"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("strong",[t._v("■ 数组是引用类型，它的元素相当于类的成员变量，因此数组一经分配空间，其中的每个元素也被按照成员变量同样的方式被"),n("font",{attrs:{color:"red"}},[t._v("隐式初始化")])],1),t._v(" 例如：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a[3]的默认值为0 ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("▷对于基本数据类型而言，默认初始化值各有不同")])]),t._v(" "),n("font",{attrs:{color:"red"}},[n("strong",[t._v("▷对于引用数据类型而言，默认初始化值为null(注意与0不同！)")])])],1),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"数组元素的默认初始化值",href:"../image/arrays1.jpg"}},[n("img",{attrs:{src:a(569),alt:"数组元素的默认初始化值"}})])]),t._v(" "),n("h2",{attrs:{id:"_4-3-多维数组的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-多维数组的使用"}},[t._v("#")]),t._v(" 4.3 多维数组的使用")]),t._v(" "),n("p",[n("font",{attrs:{color:"#4C8BF4"}},[n("strong",[t._v("二维数组[][]：数组中的数组")])])],1),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("格式1（动态初始化）：int[][] arr = new int[3][2];")])]),n("br"),t._v("\n定义了名称为arr的二维数组"),n("br"),t._v("\n二维数组中有3个一维数组"),n("br"),t._v("\n每一个一维数组中有2个元素"),n("br"),t._v("\n一维数组的名称分别为arr[0], arr[1], arr[2]"),n("br"),t._v("\n给第一个一维数组1脚标位赋值为78写法是：arr[0][1] = 78;")],1),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("格式2（动态初始化）：int[][] arr = new int[3][];")])]),n("br"),t._v("\n二维数组中有3个一维数组。"),n("br"),t._v("\n每个一维数组都是默认初始化值null (注意：区别于格式1）"),n("br"),t._v("\n可以对这个三个一维数组分别进行初始化"),n("br"),t._v("\narr[0] = new int[3]; arr[1] = new int[1]; arr[2] = new int[2];"),n("br"),t._v(" "),n("font",{attrs:{color:"blue"}},[n("strong",[t._v("注：int[][]arr = new int[][3]; //非法")])])],1),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("格式3（静态初始化):")])])],1),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("定义一个名称为arr的二维数组，二维数组中有三个一维数组"),n("br"),t._v("\n每一个一维数组中具体元素也都已初始化"),n("br"),t._v("\n第一个一维数组 arr[0] = {3,8,2};"),n("br"),t._v("\n第二个一维数组 arr[1] = {2,7};"),n("br"),t._v("\n第三个一维数组 arr[2] = {9,0,1,6};"),n("br"),t._v("\n第三个一维数组的长度表示方式：arr[2].length;")]),t._v(" "),n("p",[t._v("▷ 注意特殊写法情况：int[] x,y[]; x是一维数组，y是二维数组"),n("br"),t._v("\n▷ Java中多维数组不必都是规则矩阵形式")]),t._v(" "),n("h4",{attrs:{id:"多维数组的使用-二维数组内存解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多维数组的使用-二维数组内存解析"}},[t._v("#")]),t._v(" 多维数组的使用：二维数组内存解析")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"二维数组内存解析",href:"../image/arrays2.jpg"}},[n("img",{attrs:{src:a(570),alt:"二维数组内存解析"}})])]),t._v(" "),n("h2",{attrs:{id:"_4-3-数组中涉及的常见算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-数组中涉及的常见算法"}},[t._v("#")]),t._v(" 4.3 数组中涉及的常见算法")]),t._v(" "),n("ol",[n("li",[t._v("数组元素的赋值(杨辉三角、回形数等)")]),t._v(" "),n("li",[t._v("求数值型数组中元素的最大值、最小值、平均数、总和等")]),t._v(" "),n("li",[t._v("数组的复制、反转、查找(线性查找、二分法查找)")]),t._v(" "),n("li",[t._v("数组元素的排序算法")])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("十大内部排序算法")]),t._v(" "),n("ol",[n("li",[t._v("选择排序"),n("br"),t._v("\n▷  直接选择排序、堆排序")]),t._v(" "),n("li",[t._v("交换排序"),n("br"),t._v("\n▷  冒泡排序、快速排序")]),t._v(" "),n("li",[t._v("插入排序"),n("br"),t._v("\n▷  直接插入排序、折半插入排序、Shell排序")]),t._v(" "),n("li",[t._v("归并排序")]),t._v(" "),n("li",[t._v("桶式排序")]),t._v(" "),n("li",[t._v("基数排序")])])]),t._v(" "),n("h2",{attrs:{id:"_4-4-arrays工具类的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-arrays工具类的使用"}},[t._v("#")]),t._v(" 4.4 Arrays工具类的使用")]),t._v(" "),n("ol",[n("li",[t._v("boolean equals(int[] a,int[] b) 判断两个数组是否相等。")]),t._v(" "),n("li",[t._v("String toString(int[] a) 输出数组信息。")]),t._v(" "),n("li",[t._v("void fill(int[] a,int val) 将指定值填充到数组之中。")]),t._v(" "),n("li",[t._v("void sort(int[] a) 对数组进行排序。")]),t._v(" "),n("li",[t._v("int binarySearch(int[] a,int key) 对排序后的数组进行二分法检索指定的值。")])]),t._v(" "),n("h2",{attrs:{id:"_4-5-数组使用中的常见异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-数组使用中的常见异常"}},[t._v("#")]),t._v(" 4.5 数组使用中的常见异常")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[n("font",{attrs:{color:"red"}},[n("strong",[t._v("数组使用中的常见异常")])])],1),t._v(" "),n("ol",[n("li",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("数组脚标越界异常(ArrayIndexOutOfBoundsException)")])])],1)]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问到了数组中的不存在的脚标时发生")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("font",{attrs:{color:"red"}},[n("strong",[t._v("空指针异常(NullPointerException)")])])],1)]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arr引用没有指向实体，却在操作实体中的元素时")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);