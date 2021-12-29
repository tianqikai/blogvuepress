(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1423:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_3-java基础语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-java基础语法"}},[s._v("#")]),s._v(" 3.java基础语法")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_3-1-顺序结构"}},[s._v("3.1 顺序结构")])]),n("li",[n("a",{attrs:{href:"#_3-2-分支结构"}},[s._v("3.2 分支结构")])]),n("li",[n("a",{attrs:{href:"#_3-2-1-if-else"}},[s._v("3.2.1 if...else")])]),n("li",[n("a",{attrs:{href:"#_3-2-2-switch-case"}},[s._v("3.2.2 switch-case")])]),n("li",[n("a",{attrs:{href:"#_3-3-循环结构"}},[s._v("3.3 循环结构")])]),n("li",[n("a",{attrs:{href:"#_3-2-1-while"}},[s._v("3.2.1 while")])]),n("li",[n("a",{attrs:{href:"#_3-2-2-do-while"}},[s._v("3.2.2 do...while")])]),n("li",[n("a",{attrs:{href:"#_3-2-3-for"}},[s._v("3.2.3 for")])]),n("li",[n("a",{attrs:{href:"#_3-3-控制语句-break和continue"}},[s._v("3.3 控制语句_break和continue")])]),n("li",[n("a",{attrs:{href:"#_3-4-return关键字"}},[s._v("3.4 return关键字")])])])]),s._v(" "),n("strong",[s._v("JAVA基础知识图解")]),n("p"),s._v(" "),n("p",[n("img",{attrs:{src:t(308),alt:"JAVA基础知识图解"}})]),s._v(" "),n("h2",{attrs:{id:"_3-1-顺序结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-顺序结构"}},[s._v("#")]),s._v(" 3.1 顺序结构")]),s._v(" "),n("p",[s._v("Java中定义成员变量时采用合法的前向引用。如")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-2-分支结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-分支结构"}},[s._v("#")]),s._v(" 3.2 分支结构")]),s._v(" "),n("h2",{attrs:{id:"_3-2-1-if-else"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-if-else"}},[s._v("#")]),s._v(" 3.2.1 if...else")]),s._v(" "),n("p",[s._v("分支结构：if-else使用说明"),n("br"),s._v("\n● 条件表达式必须是布尔表达式（关系表达式或逻辑表达式）、布尔变量"),n("br"),s._v("\n● 语句块只有一条执行语句时，一对{}可以省略，但建议保留"),n("br"),s._v("\n● if-else语句结构，根据需要可以嵌套使用"),n("br"),s._v("\n● 当if-else结构是“多选一”时，最后的else是可选的，根据需要可以省略"),n("br"),s._v("\n● 当多个条件是“互斥”关系时，条件判断语句及执行语句间顺序无所谓"),n("br"),s._v("\n当多个条件是“包含”关系时，“小上大下 / 子上父下”"),n("br"),s._v(" "),n("strong",[s._v("if...else语法")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v(" 第一种结构：\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        解释：如果"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("就执行大括号里面的java语句\n             如果是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("就不执行大括号中的java语句                \n\n\n        第二种结构：\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        解释：如果"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，就执行"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("大括号中的java语句，\n             不执行"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("大括号中的java语句。\n             如果"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("，就不执行"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("大括号中的java语句，\n             会执行"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("大括号中的java语句。\n\n        第三种结构：\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        解释：当"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("时，才会执行当前"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("大括号中的java语句，\n             如果"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式都不是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("的话，会执行"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("中的语句。\n             注意：如果有两个以上（包括两个）的"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("后面"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式是"),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("时，会按照从上到下的顺序只执行最上面"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("大括号中的语句，最多只会执行一个大括号中的语句。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("h2",{attrs:{id:"_3-2-2-switch-case"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-switch-case"}},[s._v("#")]),s._v(" 3.2.2 switch-case")]),s._v(" "),n("p",[n("strong",[s._v("switch-case语法")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" 值"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" 值"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" 值"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    java语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[n("strong",[s._v("示例：")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入数字返回时星期几的程序")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" week "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("week"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期一"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期二"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期三"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期四"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期五"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期六"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"今天是星期日"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"数字错误"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[n("strong",[s._v("注意：")]),s._v("\n– 程序遇到break语句结束了，可以不写break，如果不写，则会发生case穿透现象"),n("br"),s._v("\n– defalut语句也可以没有。"),n("br"),s._v("\n– switch后面的括号中可以填写byte、short、char、int类型，即能够自动转换为int类型的都可以，在jdk7版本之后可以填写String类型。"),n("br"),s._v("\n– case后面只能是常量，不能是变量，而且，多个case后面的值不能出现相同的")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写一个输入月份，返回季节的程序")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_3-3-循环结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-循环结构"}},[s._v("#")]),s._v(" 3.3 循环结构")]),s._v(" "),n("h2",{attrs:{id:"_3-2-1-while"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-while"}},[s._v("#")]),s._v(" 3.2.1 while")]),s._v(" "),n("p",[n("strong",[s._v("while语法")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("    初始化语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         循环体语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         控制条件语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("执行过程：")])]),s._v(" "),n("p",[s._v("只要boolean表达式里面的结果是true，就会执行while大括号里面的语句，直到boolean表达式的结果变为false，循环结束。while循环的次数是：0-N次")]),s._v(" "),n("p",[s._v("while循环本质上和for循环是一样的，可以相互替换，作用相同，格式不同，实际工作中建议使用for循环，因为变量会及早的从内存中消失，可以提高内存的使用效率。")]),s._v(" "),n("h2",{attrs:{id:"_3-2-2-do-while"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-do-while"}},[s._v("#")]),s._v(" 3.2.2 do...while")]),s._v(" "),n("p",[n("strong",[s._v("do...while语法")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("    初始化语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        循环体语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        控制条件语句"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v("表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("执行过程：")])]),s._v(" "),n("p",[s._v("首先会执行do循环体中的语句，然后运算while中的boolean表达式，如果是true则继续执行do循环体中的语句，如果是false，则循环执行结束。")]),s._v(" "),n("p",[s._v("do里面的语句至少会执行一次，执行之后根据while里面的条件判断语句来判定是否继续循环执行do里面的语句。")]),s._v(" "),n("p",[s._v("注意：while后面的;不要忘记，否则会报错。")]),s._v(" "),n("h2",{attrs:{id:"_3-2-3-for"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-for"}},[s._v("#")]),s._v(" 3.2.3 for")]),s._v(" "),n("p",[n("strong",[s._v("for语法")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("初始化表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("条件表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("循环后的操作表达式"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    循环体"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("1.执行初始化语句，并且在整个循环过程里面只执行一次")]),s._v(" "),n("p",[s._v("2.执行判断条件语句,看其返回值是true还是false")]),s._v(" "),n("ul",[n("li",[s._v("如果是true，就继续执行")]),s._v(" "),n("li",[s._v("如果是false，就结束循环，整个流程结束")])]),s._v(" "),n("p",[s._v("3.执行循环体语句")]),s._v(" "),n("p",[s._v("4.执行循环后的操作表达式")]),s._v(" "),n("p",[s._v("5.程序回到步骤2继续。\n"),n("strong",[s._v("练习")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("打印"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("之间所有奇数的和\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("打印"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("之间所有是"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("的倍数的整数的个数及总和（体会设置计数\n器的思想）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("输出所有的水仙花数，所谓水仙花数是指一个"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("位数，其各个位上数\n字立方和等于其本身。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_3-3-控制语句-break和continue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-控制语句-break和continue"}},[s._v("#")]),s._v(" 3.3 控制语句_break和continue")]),s._v(" "),n("p",[s._v("break是java语言中的关键字，中文是打断，终止的意思")]),s._v(" "),n("p",[s._v("可以用在switch语句中，结束分支语句，防止case穿透现象的发生.\n可以出现在循环当中，作用是结束整个循环的执行，默认情况下结束离它最近的一个循环.\n默认情况下break;语句跳出的是离它最近的循环。\n"),n("strong",[s._v("示例：")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("continue\n程序执行到continue语句时，直接结束本次循环，进入下一次循环。")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-4-return关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-return关键字"}},[s._v("#")]),s._v(" 3.4 return关键字")]),s._v(" "),n("p",[n("strong",[s._v("return关键字")]),n("br"),s._v(" "),n("font",{attrs:{color:"red"}},[s._v("程序执行到方法里面的return语句时，方法就会返回，return下面的语句不会被执行。")])],1)])}),[],!1,null,null,null);a.default=e.exports},308:function(s,a,t){s.exports=t.p+"assets/img/java_base.fff96432.png"}}]);