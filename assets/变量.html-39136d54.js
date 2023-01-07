import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h2 id="一、变量声明" tabindex="-1"><a class="header-anchor" href="#一、变量声明" aria-hidden="true">#</a> 一、变量声明</h2><h3 id="_1-1-var声明" tabindex="-1"><a class="header-anchor" href="#_1-1-var声明" aria-hidden="true">#</a> 1.1 var声明</h3><p>（1）作用：创建一个具体类型的变量，赋予它名字以及初值</p><p>（2）通用声明格式如下：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// [ var ] ：关键字，表示使用var声明变量
// [ name ] ：变量名
// [ type ] ：变量类型
// [ expression ] ：表达式部分，可以是字面量或者是任意的表达式
var name type = expression

// 注意：type 和 expression 可以省略一个，但是不能都省略。
//		- type 省略，则变量的类型由表达式部分决定
//		- expression 省略，则变量的值初始化为对应类型的零值。对于数字是0，对于布尔值是false，对于字符串是&quot;&quot;，对于接口和引用类型(slice、指针、map、通道、函数)是nil，对于复合类型则是其所有元素或成员的零值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）单变量声明示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一个变量，变量名为s，变量类型为string，该值被初始化为&quot;&quot;</span>
<span class="token keyword">var</span> s <span class="token builtin">string</span>	

<span class="token comment">// 声明一个变量，变量名为s，变量类型为int，该值被初始化为0</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token number">0</span>		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）多变量声明示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一组变量，变量名分别为i、j、k，三个变量的类型均为int，三个变量的值都被初始化为0</span>
<span class="token comment">// 这种方式可以连续声明多个相同类型的变量</span>
<span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token builtin">int</span>		

<span class="token comment">// 声明一组变量，变量名分别为i、j、k，三个变量的类型分别为bool、float64、string，三个变量的值分别被初始化为false、2.4、&quot;OK&quot;</span>
<span class="token comment">// 这种方式可以连续声明多个相同或者不同类型的变量</span>
<span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">,</span> <span class="token string">&quot;OK&quot;</span>	

<span class="token comment">// 声明一组变量，变量名分别为f、err，用于接收os.Open函数的返回值</span>
<span class="token keyword">var</span> f<span class="token punctuation">,</span> err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-短变量声明" tabindex="-1"><a class="header-anchor" href="#_1-2-短变量声明" aria-hidden="true">#</a> 1.2 短变量声明</h3><p>（1）作用：创建一个变量，并赋予它名字以及初值</p><p>（2）通用声明格式如下：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// [ name ] ：变量名
// [ expression ] ：表达式部分，可以是字面量或者是任意的表达式
name := expression

// 注意：name 的类型由 expression 的类型决定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）单变量声明示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一个变量，变量名为i，变量类型为int，该值被初始化为100</span>
i <span class="token operator">:=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）多变量声明示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 声明一组变量，变量名分别为i、j，两个个变量的类型分别为int、string，两个变量的值分别被初始化为0、&quot;hello&quot;</span>
<span class="token comment">// 这种方式可以连续声明多个相同或者不同类型的变量</span>
i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span>

<span class="token comment">// 声明一组变量，变量名分别为f、err，用于接收os.Open函数的返回值</span>
f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）注意点</p><ul><li>短变量声明不需要声明所有在左边的变量。如果一些变量在同一个词法块中声明，那么对于那些变量，短声明的行为等同于赋值。短声明最少声明一个新变量，否则代码编译无法通过。解释示例如下：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 可以看到下面是一个词法块</span>
<span class="token comment">// 第一行代码声明了两个变量，分别是i和j，均赋予初值0</span>
<span class="token comment">// 第二行代码声明了一个新变量err并赋值500，并对旧变量重新赋值为100</span>
<span class="token punctuation">{</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    i<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span>		<span class="token comment">//编译通过</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以看到下面是一个词法块</span>
<span class="token comment">// 第一行代码声明了两个变量，分别是i和j，均赋予初值0</span>
<span class="token comment">// 第二行代码对两个旧变量重新赋值为100，500</span>
<span class="token punctuation">{</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span>		<span class="token comment">//编译错误，没有声明新的变量，可以使用普通的赋值语句来修复该错误</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果在某一词法块外已经声明了一些变量，又在词法块内声明使用相同的变量，则词法块内的变量相当于是新的变量，当程序执行到词法块外，词法块内的变量生命周期结束，后续将会使用词法块外的变量：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//测试代码</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//词法块外声明变量i和j</span>
	i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">300</span>		
	<span class="token punctuation">{</span>
        <span class="token comment">//词法块内声明变量i和j</span>
		i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;In : i = %d, j = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Out : i = %d, j = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//执行结果，输出窗口打印如下语句</span>
In <span class="token punctuation">:</span> i <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">500</span>
Out <span class="token punctuation">:</span> i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-指针" tabindex="-1"><a class="header-anchor" href="#_1-3-指针" aria-hidden="true">#</a> 1.3 指针</h3><p>（1）作用：指示变量的地址，可以间接读取或更新变量的值</p>`,25),p=[t];function l(o,c){return s(),a("div",null,p)}const d=n(i,[["render",l],["__file","变量.html.vue"]]);export{d as default};
