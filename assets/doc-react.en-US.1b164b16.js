import{d as a,c as t,a as n,o as l}from"./vue.782b0469.js";const e={class:"markdown-body"},c=n(`<h1>Sticky</h1><h3>Intro</h3><p>When the component rolls out of screen range, it will always be fixed at the top of the screen.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;17vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;basic usage&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Sticky</span>&gt;</span>
</code></pre><h3>Offset Top</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;45vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;offset top&quot;</span>&gt;</span>Offset Top<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Sticky</span>&gt;</span>
</code></pre><h3>Other Units</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;150px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Other Units&quot;</span>&gt;</span>Other Units<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Sticky</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Unit</th><th>Default</th></tr></thead><tbody><tr><td>offsettop</td><td>Offset top</td><td><code class="">vw</code> or <code class="">vh</code> or <code class="">px</code> or <code class="">rem</code> or <code class="">%</code></td><td><code class="">0vw</code></td></tr><tr><td>zindex</td><td>z-index when sticky</td><td><code class="">number</code></td><td><code class="">99</code></td></tr></tbody></table>`,14),p=[c],i={},g="",j=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),t("div",e,p))}});export{j as default,g as excerpt,i as frontmatter};
