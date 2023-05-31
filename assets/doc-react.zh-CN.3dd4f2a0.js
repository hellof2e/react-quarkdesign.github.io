import{d as t,c as s,a as d,o}from"./vue.f4b2f3b4.js";const a={class:"markdown-body"},e=d(`<h1>Toast \u8F7B\u63D0\u793A</h1><h3>\u4ECB\u7ECD</h3><p>\u9875\u9762\u4E2D\u95F4\u9ED1\u8272\u534A\u900F\u660E\u5F39\u7A97\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u6587\u5B57\u63D0\u793A</h3><pre><code class="language-javascript">Toast.text(<span class="hljs-string">&quot;\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~&quot;</span>);
</code></pre><h3>\u6587\u5B57\u63D0\u793A\u4F4D\u7F6E</h3><p>\u901A\u8FC7 position \u63A7\u5236 \u6587\u5B57\u63D0\u793A\u4F4D\u7F6E\uFF0C\u652F\u6301 <code class="">top</code>\u3001<code class="">bottom</code>,\u9ED8\u8BA4<code class="">middle</code></p><pre><code class="language-javascript">Toast.text(&quot;\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~&quot;, {
  position: &#39;top&#39;
});
### \u6210\u529F\u63D0\u793A

\`\`\`javascript
Toast.success(&quot;\u6210\u529F\u63D0\u793A&quot;);
</code></pre><h3>\u5931\u8D25\u63D0\u793A</h3><pre><code class="language-javascript">Toast.error(<span class="hljs-string">&quot;\u5931\u8D25\u63D0\u793A&quot;</span>);
</code></pre><h3>\u8B66\u544A\u63D0\u793A</h3><pre><code class="language-javascript">Toast.warning(<span class="hljs-string">&quot;\u8B66\u544A\u63D0\u793A&quot;</span>);
</code></pre><h3>\u52A0\u8F7D\u63D0\u793A</h3><pre><code class="language-javascript">Toast.loading(<span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D&quot;</span>);
</code></pre><h3>Toast \u4E0D\u6D88\u5931</h3><pre><code class="language-javascript">Toast.text(msg, {
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
});
</code></pre><h3>\u624B\u52A8\u5173\u95ED</h3><p>\u53EF\u4EE5\u624B\u52A8\u8C03\u7528 <code class="">hide</code> \u65B9\u6CD5\u5173\u95ED\u63D0\u793A\u3002</p><pre><code class="language-js">Toast.hide();
<span class="hljs-comment">// \u6216\u8005 \u975E\u5355\u4F8B\u6A21\u5F0F\u4F7F\u7528</span>
<span class="hljs-keyword">const</span> toast = Toast.loading(<span class="hljs-string">&quot;\u5728js\u6A21\u5757\u4E2D\u4F7F\u7528&quot;</span>);
toast.hide();
</code></pre><h3>close \u56DE\u8C03\u51FD\u6570</h3><pre><code class="language-tsx">Toast.text(<span class="hljs-string">&quot;\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E&quot;</span>, {
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> alert(<span class="hljs-string">&quot;hello&quot;</span>),
});
</code></pre><h3>\u5355\u4F8B\u6A21\u5F0F</h3><p>Toast \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Toast\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Toast\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A</p><pre><code class="language-tsx">Toast.allowMultiple();
<span class="hljs-keyword">const</span> toast1 = Toast.text(<span class="hljs-string">&quot;\u7B2C\u4E00\u4E2A Toast&quot;</span>);
<span class="hljs-keyword">const</span> toast2 = Toast.success(<span class="hljs-string">&quot;\u7B2C\u4E8C\u4E2A Toast&quot;</span>);
toast1.hide();
toast2.hide();
</code></pre><h3>Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>Toast.text</td><td>\u5C55\u793A\u6587\u5B57\u63D0\u793A</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast \u5B9E\u4F8B(message \u652F\u6301\u4F20\u5165 HTML)</td></tr><tr><td>Toast.success</td><td>\u5C55\u793A\u6210\u529F\u63D0\u793A</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.error</td><td>\u5C55\u793A\u5931\u8D25\u63D0\u793A</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.warning</td><td>\u5C55\u793A\u8B66\u544A\u63D0\u793A</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.hide</td><td>\u5173\u95ED\u63D0\u793A</td><td></td><td></td></tr><tr><td>Toast.loading</td><td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.allowMultiple</td><td>\u5F00\u542F\u540C\u65F6\u5B58\u5728\u591A\u4E2A toast</td><td>-</td><td>toast \u5B9E\u4F8B</td></tr></tbody></table><h3>ToastOptions \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u6D88\u5931</td><td><code class="">number</code></td><td><code class="">2000ms</code></td></tr><tr><td>size</td><td>\u56FE\u6807\u5927\u5C0F</td><td><code class="">number</code></td><td><code class="">40px</code></td></tr><tr><td>zIndex</td><td>\u6D6E\u5C42\u5C42\u7EA7</td><td><code class="">number</code></td><td><code class="">9999</code></td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void</code></td><td>-</td></tr><tr><td>loadingIconDirection</td><td>loading \u56FE\u6807\u5C55\u793A\u65B9\u5411\uFF0C\u4EC5 <code class="">type=loading</code> \u65F6\u751F\u6548</td><td><code class="">horizontal</code> \u6216\u8005 <code class="">vertical</code></td><td><code class="">vertical</code></td></tr><tr><td>position</td><td>\u4F4D\u7F6E</td><td><code class="">top</code>\u6216\u8005 <code class="">bottom</code></td><td><code class="">middle</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--toast-min-width</code></td><td>\u6700\u5C0F\u5BBD\u5EA6</td><td><code class="">120px</code></td></tr><tr><td><code class="">--toast-max-width</code></td><td>\u6700\u5927\u5BBD\u5EA6</td><td><code class="">240px</code></td></tr><tr><td><code class="">--toast-text-padding</code></td><td>\u5185\u95F4\u8DDD</td><td><code class="">24px 16px</code></td></tr><tr><td><code class="">--toast-font-size</code></td><td>\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--toast-color</code></td><td>\u5B57\u4F53\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--toast-loading-bottom</code></td><td>loading \u56FE\u6807\u5E95\u90E8\u8FB9\u8DDD</td><td>\u5782\u76F4 loading \u4E3A <code class="">14px</code>\uFF1B\u6C34\u5E73 loading \u4E3A <code class="">0</code></td></tr><tr><td><code class="">--toast-loading-right</code></td><td>loading \u56FE\u6807\u53F3\u8FB9\u8FB9\u8DDD</td><td>\u5782\u76F4 loading \u4E3A <code class="">0</code>\uFF1B\u6C34\u5E73 loading \u4E3A <code class="">8px</code></td></tr><tr><td><code class="">--toast-position-top-distance</code></td><td>\u63D0\u793A\u8DDD\u9876\u90E8\u8DDD\u79BB</td><td>position \u4E3A<code class="">top</code>\u65F6 \u503C\u4E3A <code class="">20%</code>\uFF0C position \u503C\u4E3A<code class="">botton</code>\u65F6\u503C\u4E3A<code class="">80%</code></td></tr></tbody></table>`,32),c=[e],p={},D="",h=t({__name:"doc-react.zh-CN",setup(n,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(l,F)=>(o(),s("div",a,c))}});export{h as default,D as excerpt,p as frontmatter};
