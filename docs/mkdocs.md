# MkDocs

## 基本命令

```sh
pip install mkdocs
mkdocs new blog
cd blog
mkdocs serve
mkdocs build
mkdocs gh-deploy
```

## 使外链在新标签打开

在 MkDocs 生成的 HTML 中注入 JavaScript，自动为所有外链添加 target="_blank"。

创建自定义脚本文件`docs/js/external_links.js`

```js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a")
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute("target", "_blank")
            link.setAttribute("rel", "noopener noreferrer") // 安全建议
        }
    })
})
```

在 `mkdocs.yml` 中引入脚本

```yaml
extra_javascript:
  - js/external_links.js
```

## 相关文档

- [MkDocs](https://www.mkdocs.org)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material)
