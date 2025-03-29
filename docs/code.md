# 编程

## 算法

### 获取[因数](../math/#factor) {#factor}

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

### [质数](../math/#prime)相关算法 {#prime}

判断质数

```c++
#include <cmath> // 用于 sqrt 函数

/**
 * 判断一个整数是否为质数
 * 使用 6k±1 优化算法，时间复杂度为 O(√n)
 * @param n 待判断的整数
 * @return 是质数返回 true，否则返回 false
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

[埃拉托斯特尼筛法](https://zh.wikipedia.org/zh-hans/埃拉托斯特尼筛法)求 n 以内的质数

```c++
#include <iostream>
#include <vector>

std::vector<bool> eratosthenes(const int upperbound) {
	std::vector<bool> flag(upperbound + 1, true);
	flag[0] = flag[1] = false; //exclude 0 and 1
	for (int i = 2; i * i <= upperbound; ++i) {
		if (flag[i]) {
			for (int j = i * i; j <= upperbound; j += i)
				flag[j] = false;
		}
	}
	return flag;
}

int main() {
	std::vector<bool> isPrime = eratosthenes(100);
	for (int i = 2; i <= 100; ++i) {
		if (isPrime[i])	std::cout << i << ' ';
	}
	return 0;
}

// 输出：2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```
