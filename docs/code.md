# 编程

## C++

### 基本概念

- 关键字（keywords）：也称保留字，具有特定意义，仅可被用作程序的基础结构，如：int, if, for 等。
- 标识符（identifier）：用来给用户自定义项命名的字符序列，其命名规则如下：
    - 可以由英文字母（A-Z, a-z）、数字（0-9）和下划线（`_`）组成
	- 大小写敏感，这意味着 Variable 和 variable 是两个不同的标识符
	- 长度任意，但某些编译器可能对标识符的长度有限制
	- 不能是 C++ 关键字
	- 不能以数字开头
- 声明（declaration）：告诉编译器一个标识符的存在以及它的一些属性，但不提供完整的定义。
- 字节（byte）：内存中的一个基本单元，由 8 位（bit）组成。
- 数据类型（data types）：注意适用性、储存空间、数值范围
    - 基本数据类型举例
        - 空 void      `void`
        - 布尔 bool      `true`/`false`
        - 字符 char      `'A'`, `'\n'`, `'\0'`
        - 整型 int       `42`, `-6`, `0`
        - 浮点 double    `3.14`, `-1.0`, `0.0`
    - 复合数据类型举例
        - 数组 array     `int a[100]`, `char name[20]`
        - 字符串 string    `"Hello, World!"`, `"%d + %d = %d\n"`

| 类型                 | 字节 | 数值范围                                    | 储存         |
| -------------------- | ---- | ------------------------------------------- | ------------ |
| `bool`               | 1    | true(1) 或 false(0)                         | 真或假       |
| `char`               | 1    | -128 到 127                                 | 单个字符     |
| `unsigned char`      | 1    | 0 到 255                                    | 小自然数     |
| `int`                | 4    | -2147483648 到 2147483647                   | 整数         |
| `unsigned int`       | 4    | 0 到 4294967295                             | 正整数       |
| `long long`          | 8    | -9223372036854775808 到 9223372036854775807 | 更大的整数   |
| `unsigned long long` | 8    | 0 到 18446744073709551615                   | 更大的正整数 |
| `float`              | 4    | 3.4E±38（7 位数字）| 低精度实数   |
| `double`             | 8    | 1.7E±308（15 位数字）| 高精度实数   |

- 表达式（expression）：由运算符（operators）和操作数（operands）组成的代码片段，它表示一个计算过程，可以产生一个结果。重点是运算符优先级、类型转换、计算次序、括号的运用。表达式的类型有：
    - 字面量表达式 `42`, `3.14`, `'A'`, `"Hello"`
    - 赋值表达式 `x = 6`
    - 变量表达式 `x`
    - 运算符表达式 `x + 5`
    - 复合赋值表达式 `x += 5`
    - 函数调用表达式 `sqrt(x)`
    - 逻辑表达式 `x == 4`, `0 <= x && x <= 20`
    - 条件表达式 `int y = (x > 10) ? 20 : 10;`
    - 类型转换表达式 `double d = static_cast<double>(x);`

### 常用代码

声明一个变量。注意：仅声明未赋值时，局部变量的值不确定！

```c++
int x;
char c;
double r;
```

使用 cin 获取从键盘输入的数据

```c++
int m, n;
cin >> m >> n;
```

从键盘输入含有空格的字符串

```c++
string s;
getline(cin, s);
```

用 cout 输出简单内容

```c++
cout << "a+b=" << a + b << endl;
```

用 printf 格式化输出内容

```c++
double r = 2.0;             // 半径，单位厘米
double s = M_PI * r * r;    // 圆面积
printf("半径为 %.2lf 的圆面积约为 %.4lf 平方厘米\n", r, s);  // 保留2位或4位小数的格式化输出
```

```c++
printf("%8d %8d %8d", a, b, c); // 每个整数至少占8个字符宽度，用一个空格间隔
```

交换两个变量的值

```c++
int a = 1, b = 2;
swap(a, b);
cout << a << ' ' << b; // 2 1
```

整数变量相除时应注意所需的结果类型

```c++
int a = 7, b = 4;
int c = a/b; // c = 1
double d = 1.0 * a / b; // d = 1.75
double e = double(a / b); // e = 1.0
```

```c++
int p, d; // 整数数据，p确诊数，d死亡数
cin >> p >> d;
printf("死亡率约为 %.3lf\%\n", 100.0 * d / p); // 已保留3位小数的百分数出输出
```

获取某种类型的大小（以字节为单位）

```c++
sizeof(int); // 当 sizeof 运算符的操作数是一个类型名时，不可以省略圆括号。
```

获取某变量的大小（以字节为单位）

```c++
int a = 100;
cout << sizeof a; // 当 sizeof 运算符的操作数是一个变量时，可以省略圆括号。
```

浮点数的向下取整

```c++
double f = 3.9;
int n = f;
cout << n; // 3
```

```c++
double f = 3.9;
cout << int(floor(x)); // 3
```

浮点数的向上取整

```c++
double f = 3.1;
int n = ceil(f);
cout << n; // 4
```

输出一个字符的编码 (ASCII 码)

```c++
char c = 'A';
cout << int(c) << endl; // 65
printf("%d\n", c); // 65
```

获取一个字母的下一个字母

```c++
char c = 'A';
c += 1; // c = c + 1;
cout << c << endl; // B
```

输出浮点数保留 3 位小数

```c++
double pi = 3.141592654;
printf("%.3lf\n", pi); // 3.142
```

判断字符是大写字符，并将其转成小写

```c++
char c = 'A';
if ('A' <= c && c <= 'Z') c += 32;
cout << c << endl; // a
```

判断奇偶数

```c++
if (n % 2 == 0) {
    cout << "偶数" << endl;
} else {
    cout << "奇数" << endl;
}
```

累加求和

```c++
int x, sum = 0; // 注意，和应初始化为0
for(int i=0; i<10; ++i){
    cin >> x;
    sum += x;
}
cout << sum << endl;
```

### 常用函数

```c++
abs(x) // 取绝对值
ceil(x) // 向上取整
floor(x) // 向下取整
max(x, y) // 取最大值
min(x, y) // 取最小值
pow(a, b) // 求幂 a^b
```

### 算法

#### 获取整数指定位上的数值

```c++
int n = 12345;
int x = n / 100 % 10; // 取百位。取其它位仅需修改其中的100，如千位改为1000、个位改为1。
```

#### 判断闰年

```c++
int y = 2024;
bool leap = (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);
```

#### 求第 k 个斐波拉契数

```c++
int a = 1, b = 1, k;
cin >> k;
while (k > 2) {
    k--;
    swap(a, b);
    b += a;
}
cout << b << endl;
```

#### 求最大公约数

```c++
int gcd(const int a, const int b) {
    return (b == 0) ? a : gcd(b, a % b);
}
```

#### 求最小公倍数

```c++
int lcm(const int a, const int b) {
    return a * b / gcd(a, b);
}
```

#### 获取[因数](math.md#factor) {#factor}

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

#### [质数](math.md#prime)相关算法 {#prime}

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

用[埃拉托斯特尼筛法](https://zh.wikipedia.org/zh-hans/埃拉托斯特尼筛法)求 n 以内的质数

```c++
#include <iostream>
#include <vector>
#include <cmath>

std::vector<bool> eratosthenes(const int upperbound) {
	std::vector<bool> flag(upperbound + 1, true);
	flag[0] = flag[1] = false; //exclude 0 and 1
    int sqrtN = static_cast<int>(std::sqrt(upperbound));
	for (int i = 2; i <= sqrtN; ++i) {
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

分解质因数

```c++
```
