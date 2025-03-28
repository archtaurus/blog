# ⚙ 配置及测试

## 安装依赖 {#install}

```sh
yay -S mkdocs-material mkdocs-material-extensions mkdocs-material-pymdownx-extras
mkdocs new blog && cd blog
mkdocs serve
```

## 新标签页

创建脚本文件：

```javascript title="docs/javascripts/external_links.js"
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

引入脚本文件：

```yaml title="mkdocs.yml"
extra_javascript:
  - javascripts/external_links.js
```

## 数学公式

配置：

```yaml title="mkdocs.yml"
markdown_extensions:
  - pymdownx.arithmatex: # 数学公式支持
      generic: true # 允许通用 LaTeX 语法

theme:
  features:
    - content.code.annotate  # 更好的代码和公式渲染

extra_javascript:
  - https://polyfill.io/v3/polyfill.min.js?features=es6 # ES6兼容垫片（可选）
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js # MathJax 3
  # 国内备用CDN（注释状态）:
  # - https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js
```

这是一个行内公式：$E=mc^2$。

下面是个块级公式：

$$
\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}
$$

## 按钮链接

配置：

```yaml title="mkdocs.yml"
markdown_extensions:
  - attr_list
```

代码：

```md
[老赵杂记](https://io-oi.cc/blog){ .md-button }
```

效果：

[老赵杂记](https://io-oi.cc/blog){ .md-button }

## 表情符号

配置：

```yaml title="mkdocs.yml"
markdown_extensions:
  - pymdownx.emoji
```

代码：

```md
:smile: :heart: :thumbsup:
```

效果：

:smile: :heart: :thumbsup:

## 目录居右

```css title="docs/stylesheets/custom.css"
/* 右侧目录布局 */
@media screen and (min-width: 76.25em) {
    .md-main__inner {
        display: flex;
        flex-direction: row-reverse;
        /* 反向排列 */
    }

    .md-content {
        margin-left: 0;
        margin-right: 1.2rem;
    }

    .md-sidebar--secondary {
        left: auto;
        right: 0;
        border-left: 1px solid var(--md-default-fg-color--lightest);
        border-right: none;
    }
}

/* 调整目录宽度 */
.md-sidebar--secondary {
    width: 15rem;
}
```

## 语法高亮

安装依赖

```sh
pip install pygments
```

配置：

```yaml title="mkdocs.yml"
# 主题功能中与语法高亮相关的开关
theme:
  features:
    - content.code.annotate  # 代码注释增强
    - content.code.copy     # 代码复制按钮

# Markdown扩展中与语法高亮相关的配置
markdown_extensions:
  # 代码块高亮核心配置
  - pymdownx.highlight:
      use_pygments: true    # 使用Pygments引擎
      auto_title: true      # 自动生成代码块标题
      linenums: true        # 启用行号显示
      line_spans: __line    # 行号跨度标记
      anchor_linenums: true # 行号可锚点跳转
      pygments_lang_class: true # 添加语言类名

  # 配套扩展
  - pymdownx.superfences    # 高级代码块支持
  - pymdownx.inlinehilite   # 行内代码高亮
  - pymdownx.mark           # 标记文本高亮
```

效果：

```c++
#include <bits/stdc++.h>
using namespace std;

/**
 * 判断一个整数是否为质数的函数
 * 使用6k±1优化算法，时间复杂度为O(√n)
 * @param n 要判断的整数
 * @return 如果是质数返回true，否则返回false
 */
bool isPrime(const int n) {
    if (n < 2) return false;                    // 小于 2 不是质数
    if (n < 4) return true;                     // 2 和 3 是质数
    if (n % 2 == 0 || n % 3 == 0) return false; // 其它 2 或 3 的倍数不是质数
    int sqrtN = static_cast<int>(std::sqrt(n)); // 预先计算 sqrt(n)，避免在循环中重复计算
    // 因为除了 2 和 3 以外的质数都可以表示为 6k±1 的形式，所以从 5 开始只需每次增加 6 检查 6k±1 形式的数。
    for (int i = 5; i <= sqrtN; i += 6) {
        // 检查 n 是否能被 i 或 i + 2 整除。如果能整除，说明 n 不是质数。
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true; // 如果通过了所有检查，n 是质数
}
```
