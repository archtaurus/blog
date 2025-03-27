
### 代码块样式修改

在 `mkdocs.yml` 中引入模板覆盖路径及样式表文件

```yaml
theme:
  custom_dir: theme
extra_css:
  - stylesheets/custom.css
```

在 `docs/theme/main.html` 中引入 `Prism.js`

```html
{% extends "base.html" %}
{% block scripts %}
  {{ super() }}
  <!-- 1. Prism.js 核心 CSS 和 JS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism-tomorrow.min.css"
  >
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"></script>

  <!-- 2. 行号插件 -->
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js"></script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.css"
  >

  <!-- 3. 复制按钮插件 -->
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>

  <!-- 4. 显示语言类型插件 -->
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/show-language/prism-show-language.min.js"></script>
{% endblock %}
```

禁用 `Material` 默认高亮（貌似可忽略）

```yaml
markdown_extensions:
  - pymdownx.highlight:
      use_pygments: false
```

在 `custom.css` 中添加样式

```css
/* docs/stylesheets/custom.css */
pre[class*="language-"] {
    border-radius: 8px;
    margin: 1em 0;
}

.line-numbers .line-numbers-rows {
    border-right: 1px solid #666;
    padding-right: 1em;
}

.language-label {
    position: absolute;
    right: 1em;
    top: 0.5em;
    color: #999;
    font-size: 0.8em;
}
```

