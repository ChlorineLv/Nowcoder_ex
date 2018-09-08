#### CSS属性overflow属性定义溢出元素内容区的内容会如何处理。
参数是scroll时候，必会出现滚动条。
参数是auto时候，子元素内容大于父元素时出现滚动条。
参数是visible时候，溢出的内容出现在父元素之外。
参数是hidden时候，溢出隐藏。

#### flash和js通过什么类如何交互?
Flash提供了ExternalInterface接口与JavaScript通信，ExternalInterface有两个方法，call和addCallback，call的作用是让Flash调用js里的方法，addCallback是用来注册flash函数让js调用。


#### 元素的alt和title有什么异同，选出正确的说法？
同时设置时，alt是在图片未加载完成的时候做完图片的替代文字线性，title是图片的解释文字
图片加载完成后是看不到alt的

#### 用js让一个input的背景颜色变成红色。
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

#### 有关css属性position的属性值的描述
position | 含义 
:-:|:-:
absolute|生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
fixed|生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
relative|生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
static|默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
inherit|规定应该从父元素继承 position 属性的值。

#### html的DOCTYPE
##### 文档类型
DTD（文档类型定义）是一组机器可读的规则，他们定义 XML 或 HTML 的特定版本中允许有什么，不允许有什么。在解析网页时，浏览器将使用这些规则检查页面的有效性并且采取相应的措施。浏览器通过分析页面的 DOCTYPE 声明来了解要使用哪个 DTD ，由此知道要使用 HTML 的哪个版本。

DOCTYPE 当前有两种风格，严格（ strict ）和过渡（ transitional ）。过渡 DOCTYPE 的目的是帮助开发人员从老版本迁移到新版本。
如果发送具有正确的 MIME 类型的 XHTML 文档，理解 XML 的浏览器将不显示无效的页面。
##### 浏览器模式
浏览器有两种呈现模式：标准模式和混杂模式（quirks mode）。在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
##### DOCTYPE 切换
对于 HTML 4.01 文档，
包含严格 DTD 的 DOCTYPE 常常导致页面以标准模式呈现。
包含过度 DTD 和 URI 的 DOCTYPE 也导致页面以标准模式呈现。
但是有过度 DTD 而没有 URI 会导致页面以混杂模式呈现。
DOCTYPE 不存在或形式不正确会导致 HTML 和 XHTML 文档以混杂模式呈现。

#### javascript的call和apply
call（）方法和apply（）方法的作用相同，他们的区别在于接收参数的方式不同。对于call（），第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。（在使用call（）方法时，传递给函数的参数必须逐个列举出来。使用apply（）时，传递给函数的是参数数组）如下代码做出解释：

function add(c, d){ 
return this.a + this.b + c + d; 
} 
var o = {a:1, b:3}; 
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16 
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34 

#### CSS的border
当定义border:none时，表示无边框样式，浏览器并不会对边框进行渲染，也就没有实际的宽度；
定义边框时，除了设置宽度外，还必须设置边框的样式才能显示出来。

#### CSS Sprites
CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去，这样一来，当访问该页面时，载入的图片就不会像以前那样一幅一幅地慢慢显示出来了。
利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。
利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这也是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
CSS Sprites能减少图片的字节，曾经比较过多次3张图片合并成1张图片的字节总是小于这3张图片的字节总和。所以C错误
解决了网页设计师在图片命名上的困扰，只需对一张集合的图片上命名就可以了，不需要对每一个小元素进行命名，从而提高了网页的制作效率。
更换风格方便，只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变。维护起来更加方便。

#### Wekbit、Gecko、Trident
Wekbit是一个开源的Web浏览器引擎，也就是浏览器的内核。Apple的Safari, Google的Chrome, Nokia S60平台的默认浏览器，Apple手机的默认浏览器，Android手机的默认浏览器均采用的Webkit作为器浏览器内核。Webkit的采用程度由 此可见一斑，理所当然的成为了当今主流的三大浏览器内核之一。
另外两个分别是Gecko和Trident，大名鼎鼎的Firefox便是使用的Gecko 内核，而微软的IE系列则使用的是Trident内核。
另外，搜狗浏览器是双核的，双核并不是指一个页面由2个内核同时处理,而是所有网页（通常是标准通用标记语言的应用超文本标记语言）由webkit内核处理,只有银行网站用IE内核