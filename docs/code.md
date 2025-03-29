# 编程

## 算法

### 获取[因数](http://127.0.0.1:8000/blog/math/#factor) {#factor}

```c++
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

std::vector<int> getFactors(const int n) {
	std::vector<int> factors;
	if (n <= 0) return factors;
	for (int i = 1; i <= std::sqrt(n); ++i) {
		if (n % i == 0) {
			factors.push_back(i);
			if (i != n / i) {
				factors.push_back(n / i);
			}
		}
	}
	std::sort(factors.begin(), factors.end());
	return factors;
}

int main() {
	for (int f : getFactors(12345)) {
		std::cout << f << ' ';
	}
	return 0;
}

// 输出：1 3 5 15 823 2469 4115 12345
```

### [质数](http://127.0.0.1:8000/blog/math/#prime)相关算法 {#factor}

判断质数

```c++
#include <cmath> // 用于 sqrt 函数

/**
 * 判断一个整数是否为质数
 * 使用6k±1优化算法，时间复杂度为O(√n)
 * @param n 待判断的整数
 * @return 是质数返回true，否则返回false
 */
bool isPrime(const int n) {
	if (n < 2) return false;                    // 小于 2 不是质数
	if (n < 4) return true;                     // 2 和 3 是质数
	if (n % 2 == 0 || n % 3 == 0) return false; // 其它 2 或 3 的倍数不是质数
	int sqrtN = static_cast<int>(std::sqrt(n)); // 预先计算 sqrt(n)，避免在循环中重复计算
	// 因为除了 2 和 3 以外的质数都可以表示为 6k±1 的形式，
	// 所以从 5 开始只需每次增加 6 检查 6k±1 形式的数即可。
	for (int i = 5; i <= sqrtN; i += 6) {
		// i = 6k - 1，i+2 = 6k + 1
		if (n % i == 0 || n % (i + 2) == 0) return false;
	}
	return true; // 如果通过了所有检查则 n 是质数
}
```

筛法求 n 以内的质数

```c++
```
