# MkDocs的配置及测试

## 安装 ✌ {#install}

```sh
yay -S mkdocs-material mkdocs-material-extensions mkdocs-material-pymdownx-extras
mkdocs new blog && cd blog
mkdocs serve
```

## 新标签页 ✌

创建脚本文件`docs/javascripts/external_links.js`使其为所有外链添加`target="_blank"`。

```javascript
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

在`mkdocs.yml`中引入该脚本文件

```yaml
extra_javascript:
  - javascripts/external_links.js
```

## 数学公式 ✌

在`mkdocs.yml`中添加

```yaml
markdown_extensions:
  - pymdownx.arithmatex:  # 数学公式支持
      generic: true       # 允许通用 LaTeX 语法 \(...\) 和 \[...\]

theme:
  features:
    - content.code.annotate  # 更好的代码和公式渲染

extra_javascript:
  - https://polyfill.io/v3/polyfill.min.js?features=es6  # ES6 兼容（可选）
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js  # MathJax 3
# - https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js # BootCDN（国内）
```

这是一个行内公式：$E=mc^2$。

下面是个块级公式：

$$
\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}
$$

## 按钮链接 ✌

在`mkdocs.yml`中添加：

```yaml
markdown_extensions:
  - attr_list
```

代码：

```md
[老赵杂记](https://io-oi.cc/blog){ .md-button }
```

效果：

[老赵杂记](https://io-oi.cc/blog){ .md-button }

## 表情符号 ✌

在`mkdocs.yml`中添加：

```yaml
markdown_extensions:
  - pymdownx.emoji
```

代码：

```md
:smile: :heart: :thumbsup:
```

效果：

:smile: :heart: :thumbsup:

## 代码块样式

### C++

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
