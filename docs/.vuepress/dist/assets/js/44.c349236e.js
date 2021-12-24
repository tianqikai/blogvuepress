(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1435:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2-mysql-数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql-数据类型"}},[s._v("#")]),s._v(" 2. MySql 数据类型")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_2-1-int-类型"}},[s._v("2.1 Int 类型")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-1-1-有无符号"}},[s._v("2.1.1 有无符号")])]),n("li",[n("a",{attrs:{href:"#_2-1-1-int-n"}},[s._v("2.1.1 INT(N)")])]),n("li",[n("a",{attrs:{href:"#_2-1-2-auto-increment-自增列"}},[s._v("2.1.2 AUTO_INCREMENT 自增列")])])])]),n("li",[n("a",{attrs:{href:"#_2-2-字符类型"}},[s._v("2.2 字符类型")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-2-1-varchar-和-char-类型"}},[s._v("2.2.1 VARCHAR 和 CHAR 类型")])]),n("li",[n("a",{attrs:{href:"#_2-2-2-排序规则"}},[s._v("2.2.2 排序规则")])])])]),n("li",[n("a",{attrs:{href:"#_2-3-日期和时间类型"}},[s._v("2.3 日期和时间类型")])]),n("li",[n("a",{attrs:{href:"#_2-4-json-类型"}},[s._v("2.4 JSON 类型")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"_2-1-int-类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-int-类型"}},[s._v("#")]),s._v(" 2.1 Int 类型")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql11.jpg"}},[n("img",{attrs:{src:a(692),alt:"MYSQL"}})])]),s._v(" "),n("h3",{attrs:{id:"_2-1-1-有无符号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-有无符号"}},[s._v("#")]),s._v(" 2.1.1 有无符号")]),s._v(" "),n("p",[n("strong",[s._v("在项目中使用 BIGINT，而且是有符号的。")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_unsigned"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_unsigned "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_unsigned"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_unsigned"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--运行出错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--运行出错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" You have an error "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" your "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" syntax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" the manual that corresponds "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" your MySQL server version "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v(" syntax "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" near "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--运行出错'")]),s._v(" at line "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_signed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" signed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" signed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_signed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_signed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_signed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--运行不出错")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql12.jpg"}},[n("img",{attrs:{src:a(693),alt:"MYSQL"}})])]),s._v(" "),n("h3",{attrs:{id:"_2-1-1-int-n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-int-n"}},[s._v("#")]),s._v(" 2.1.1 INT(N)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("INT(N)")]),s._v(" "),n("ol",[n("li",[s._v("int(N)中的 N 是显示宽度， 不表示 存储的数字的 长度 的上限。")]),s._v(" "),n("li",[s._v("zerofill 表示当存储的数字 长度 < N 时，用 数字 0 填充左边，直至补满长度 N")]),s._v(" "),n("li",[s._v("当存储数字的长度 超过 N 时 ，按照实际存储的数字显示")])])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_int_n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" zerofill"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_int_n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_int_n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql13.jpg"}},[n("img",{attrs:{src:a(694),alt:"MYSQL"}})])]),s._v(" "),n("h3",{attrs:{id:"_2-1-2-auto-increment-自增列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-auto-increment-自增列"}},[s._v("#")]),s._v(" 2.1.2 AUTO_INCREMENT 自增列")]),s._v(" "),n("p",[s._v("AUTO_INCREMENT 自增列。这样可以保证数据行是按顺序写入，对于根据主键做关联操作的性能也会更好。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_auto_increment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--Incorrect table definition; there can be only one auto column and it must be defined as a key")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_auto_increment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_auto_increment "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--null 会导致自增，设置非空字段也会自增")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_auto_increment "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_auto_increment "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_auto_increment "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--null 会导致自增，设置非空字段也会自增")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("test_auto_increment1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BTREE")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_auto_increment1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql14.jpg"}},[n("img",{attrs:{src:a(695),alt:"MYSQL"}})])]),s._v(" "),n("h2",{attrs:{id:"_2-2-字符类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-字符类型"}},[s._v("#")]),s._v(" 2.2 字符类型")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql15.jpg"}},[n("img",{attrs:{src:a(696),alt:"MYSQL"}})])]),s._v(" "),n("h3",{attrs:{id:"_2-2-1-varchar-和-char-类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-varchar-和-char-类型"}},[s._v("#")]),s._v(" 2.2.1 VARCHAR 和 CHAR 类型")]),s._v(" "),n("p",[s._v("VARCHAR 和 CHAR 是两种最主要的字符串类型。 VARCHAR VARCHAR 类型用于存储可变长字符串，是最常见的字符串数据类型。它比 定长类型更节省空间，因为它仅使用必要的空间（例如，越短的字符串使用越少的空间)。")]),s._v(" "),n("p",[s._v("在内部实现上，既然是变长，VARCHAR 需要使用 1 或 2 个额外字节记录字符串的长度，如果列的最大长度小于或等于 255 字节,则只使用 1 个字节表示,否 则使用 2 个字节。")]),s._v(" "),n("p",[s._v("VARCHAR 节省了存储空间，所以对性能也有帮助。但是，由于行是变长的， 在 UPDATE 时新值比旧值长时，使行变得比原来更长，这就肯能导致需要做额外 的工作。如果一个行占用的空间增长，并且在页内没有更多的空间可以存储，在 这种情况下，MyISAM 会将行拆成不同的片段存储，InnoDB 则需要分裂页来使行 可以放进页内。")]),s._v(" "),n("p",[s._v("CHAR 类型是定长的，MySQL 总是根据定义的字符串长度分配足够的空间。 当存储 CHAR 值时，MySQL 会删除所有的末尾空格，CHAR 值会根据需要采用空 格进行填充以方便比较。")]),s._v(" "),n("p",[s._v("在 CHAR 和 VARCHAR 的选择上，这些情况下使用 VARCHAR 是合适的：\n字符串列的最大长度比平均长度大很多﹔列的更新很少；使用了像 UTF-8 这 样复杂的字符集，每个字符都使用不同的字节数进行存储。")]),s._v(" "),n("p",[s._v("CHAR 适合存储很短的字符串，或者所有值定长或都接近同一个长度。例如， CHAR 非常适合存储密码的 MD5 值，因为这是一个定长的值。对于经常变更的数据，CHAR 也比 VARCHAR 更好，因为定长的 CHAR 类型不容易产生碎片。")]),s._v(" "),n("p",[s._v("对于非常短的列，CHAR 比 VARCHAR 在存储空间上也更有效率。例如用 CHAR( 1)来存储只有 Y 和 N 的值，如果采用单字节字符集只需要一个字节，但是 VARCHAR(1)却需要两个字节，因为还有一个记录长度的额外字节。")]),s._v(" "),n("p",[s._v("另外，使用 VARCHAR(5)和 VARCHAR(200)存储'hello'在磁盘空间上开销是一 样的。我们随便选择一个就好？应该使用更短的列，为什么? 事实证明有很大的优势。更长的列会消耗更多的内存，因为 MySQL 通常会 分配固定大小的内存块来保存内部值。尤其是使用内存临时表进行排序或操作时 会特别糟糕。在利用磁盘临时表进行排序时也同样糟糕。 所以最好的策略是只分配真正需要的空间")]),s._v(" "),n("h3",{attrs:{id:"_2-2-2-排序规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-排序规则"}},[s._v("#")]),s._v(" 2.2.2 排序规则")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" names utf8mb4 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("collate")]),s._v(" utf8mb4_general_ci "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--按字符存储排序，忽略大小写")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_ci "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_ci "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_ci "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_ci "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--结果是什么？")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql17.jpg"}},[n("img",{attrs:{src:a(697),alt:"MYSQL"}})])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" names utf8mb4 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("collate")]),s._v(" utf8mb4_bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--二进制存储 大小写敏感")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_bin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_bin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_bin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" test_bin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--结果是什么？")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql18.jpg"}},[n("img",{attrs:{src:a(698),alt:"MYSQL"}})])]),s._v(" "),n("h2",{attrs:{id:"_2-3-日期和时间类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-日期和时间类型"}},[s._v("#")]),s._v(" 2.3 日期和时间类型")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"MYSQL",href:"./image/mysql16.jpg"}},[n("img",{attrs:{src:a(699),alt:"MYSQL"}})])]),s._v(" "),n("p",[s._v("大部分时间类型都没有替代品，因此没有什么是最佳选择的问题。唯一的问 题 MySQL 提供两种相似的日期类型:DATETIME 和 TIMESTAMP。对于很多应用程序，它们都能工作，但是在某些场景，需要做些适当选择。")]),s._v(" "),n("p",[s._v("DATETIME 这个类型能保存大范围的值，从 1001 年到 9999 年，精度为秒。它把日期和 时间封装到格式为 YyYYMMDDHHMMSS 的整数中，与时区无关。使用 8 个字节 的存储空间。")]),s._v(" "),n("p",[s._v("TIMETAMP 类型保存了从 1970 年 1 月 1 日午夜（格林尼治标准时间)以来的 秒数，它和 UNIX 时间戳相同。TIMESTAMP 只使用 4 个字节的存储空间，因此它 的范围比 DATETIME 小得多﹔只能表示从 1970 年到 2038 年。TIMESTAMP 显示的 值也依赖于时区。从空间效率来说，当然 TIMETAMP 比 DATETIME 更高。")]),s._v(" "),n("h2",{attrs:{id:"_2-4-json-类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-json-类型"}},[s._v("#")]),s._v(" 2.4 JSON 类型")]),s._v(" "),n("p",[s._v("略")])])}),[],!1,null,null,null);t.default=e.exports},692:function(s,t,a){s.exports=a.p+"assets/img/mysql11.6ffde56d.jpg"},693:function(s,t,a){s.exports=a.p+"assets/img/mysql12.9373b8c1.jpg"},694:function(s,t,a){s.exports=a.p+"assets/img/mysql13.206b5a17.jpg"},695:function(s,t,a){s.exports=a.p+"assets/img/mysql14.b0d94591.jpg"},696:function(s,t,a){s.exports=a.p+"assets/img/mysql15.046109a2.jpg"},697:function(s,t,a){s.exports=a.p+"assets/img/mysql17.7360aa20.jpg"},698:function(s,t,a){s.exports=a.p+"assets/img/mysql18.cdda9cfd.jpg"},699:function(s,t,a){s.exports=a.p+"assets/img/mysql16.16b9128e.jpg"}}]);