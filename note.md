### css属性overflow属性定义溢出元素内容区的内容会如何处理。
参数是scroll时候，必会出现滚动条。
参数是auto时候，子元素内容大于父元素时出现滚动条。
参数是visible时候，溢出的内容出现在父元素之外。
参数是hidden时候，溢出隐藏。

### flash和js通过什么类如何交互?
Flash提供了ExternalInterface接口与JavaScript通信，ExternalInterface有两个方法，call和addCallback，call的作用是让Flash调用js里的方法，addCallback是用来注册flash函数让js调用。


### 元素的alt和title有什么异同，选出正确的说法？
同时设置时，alt是在图片未加载完成的时候做完图片的替代文字线性，title是图片的解释文字
图片加载完成后是看不到alt的

### 用js让一个input的背景颜色变成红色。
+ 思路：
获取该元素
通过该元素拥有的属性或方法来改变元素的样式。
+ 细节：
获取元素可以借助document.getElementById()/document.getElementsByTagName()等若干方法，也可以利用层级关系（父子关系、兄弟关系等）。而这一点题目已经直接略过了，它直接给出了该元素的引用名称inputElement。
通过js来改变元素样式的两个最常见的API为：style、className。使用style接口一次只能改变一个样式，而使用className则可以同时改变多个样式，当然前提是已经用css定义该类名的相关样式。
backgroundColor? background-color?
简单说一下：在使用点运算符时，浏览器看到“-”就没法正确解析了，在那种情况下，只能将该变量使用驼峰命名法来表示。而使用方括号表示法，"-"被理解为字符串中的内容，该字符串能被正确解析。
eg:
inputElement.style.backgroundColor = 'red'; // 这是没问题的
inputElement.style.background-color = 'red'; // 这是错的，浏览器看不懂啊...
inputElement.style["background-color"] = 'red'; // 这也是可以的
+ 表示红色有若干种方法:
颜色名：red
百分数：rgb(100%, 0%, 0%)
数值：rgb(255, 0, 0)
十六进制：#FF0000
简写的十六进制：#F00 