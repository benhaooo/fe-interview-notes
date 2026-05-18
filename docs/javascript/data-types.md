# JavaScript 数据类型与类型判断

---

## 一、原理篇

### 1.1 数据类型分类

JavaScript 的数据类型分为两大类，核心区别在于**内存存储方式**不同：

```
┌─────────────────────────────────────────────────────┐
│                  JavaScript 数据类型                   │
├──────────────────────┬──────────────────────────────┤
│    基本类型(原始类型)    │        引用类型               │
│    存储在【栈内存】      │   指针在栈,值在【堆内存】       │
├──────────────────────┼──────────────────────────────┤
│  number              │  Object (普通对象)             │
│  string              │  Array                       │
│  boolean             │  Function                    │
│  undefined           │  Date                        │
│  null                │  RegExp                      │
│  symbol (ES6)        │  Map / Set (ES6)             │
│  bigint (ES2020)     │  ...                         │
└──────────────────────┴──────────────────────────────┘
```

### 1.2 内存存储原理

```
// 基本类型 —— 值直接存在栈中
let a = 10;
let b = a;      // 复制了一份独立的值
b = 20;
console.log(a); // 10（互不影响）

// 引用类型 —— 栈中存指针，堆中存实际对象
let obj1 = { name: 'Tom' };
let obj2 = obj1;  // 复制的是指针（地址）
obj2.name = 'Jerry';
console.log(obj1.name); // 'Jerry'（共享同一块堆内存）
```

**内存示意图：**

```
  栈内存 Stack              堆内存 Heap
┌──────────────┐      ┌─────────────────────┐
│ a    │  10   │      │                     │
│ b    │  20   │      │  0x001: {           │
│ obj1 │ 0x001─│──────│──  name: 'Jerry'    │
│ obj2 │ 0x001─│──────│──}                  │
└──────────────┘      └─────────────────────┘
```

---

### 1.3 类型判断的四种方法（核心原理）

#### ① `typeof` — 基于二进制标识判断

**原理**：JS 在底层存储变量时，会在变量的机器码低位 1-3 位标识类型信息：
- `000` → 对象
- `010` → 浮点数
- `100` → 字符串
- `110` → 布尔
- `1` → 整数
- `null` → 全是 0（所以被误判为 `object`）

```js
typeof 42;           // "number"
typeof 'hello';      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof Symbol();     // "symbol"
typeof 10n;          // "bigint"
typeof null;         // "object"  ⚠️ 历史 Bug！
typeof {};           // "object"
typeof [];           // "object"  ⚠️ 无法区分数组
typeof function(){}; // "function" ✅ 唯一能识别的引用类型
```

> **结论**：`typeof` 适合判断基本类型（除 `null`），不适合判断具体引用类型。

---

#### ② `instanceof` — 基于原型链查找

**原理**：沿着左边对象的 `__proto__` 链逐级向上查找，看右边构造函数的 `prototype` 是否在链上。

```
L.__proto__.__proto__... === R.prototype ?
```

```js
[] instanceof Array;   // true
[] instanceof Object;  // true（因为 Array.prototype.__proto__ === Object.prototype）

// 手写 instanceof
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    const prototype = right.prototype;
    while (proto !== null) {
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}
```

> **局限**：不能判断基本类型，且在跨 iframe 时失效（不同 window 的 Array 不是同一个构造函数）。

---

#### ③ `Object.prototype.toString.call()` — 终极方案

**原理**：每个对象内部都有一个 `[[Class]]` 内部属性，`Object.prototype.toString` 会读取这个标签返回 `[object Xxx]` 格式的字符串。

```js
Object.prototype.toString.call(42);          // "[object Number]"
Object.prototype.toString.call('str');        // "[object String]"
Object.prototype.toString.call(true);        // "[object Boolean]"
Object.prototype.toString.call(undefined);   // "[object Undefined]"
Object.prototype.toString.call(null);        // "[object Null]"
Object.prototype.toString.call({});          // "[object Object]"
Object.prototype.toString.call([]);          // "[object Array]"
Object.prototype.toString.call(function(){}); // "[object Function]"
Object.prototype.toString.call(new Date());  // "[object Date]"
Object.prototype.toString.call(/regex/);     // "[object RegExp]"
Object.prototype.toString.call(new Map());   // "[object Map]"
Object.prototype.toString.call(new Set());   // "[object Set]"
```

> **结论**：这是**最准确、最全面**的类型判断方法。

---

#### ④ `Array.isArray()` — 专门判断数组

```js
Array.isArray([]);           // true
Array.isArray({});           // false
Array.isArray(new Array());  // true
```

---

### 1.4 四种方法对比表

| 方法 | 基本类型 | 引用类型 | null | 跨iframe | 推荐场景 |
|------|---------|---------|------|----------|---------|
| `typeof` | ✅ (除null) | ❌ (只能识别function) | ❌ 返回"object" | ✅ | 快速判断基本类型 |
| `instanceof` | ❌ | ✅ | ❌ | ❌ | 判断某个类的实例 |
| `toString.call()` | ✅ | ✅ | ✅ | ✅ | **万能方案** |
| `Array.isArray()` | — | 仅数组 | — | ✅ | 专判数组 |

---

## 二、例子篇

### 2.1 封装一个万能类型判断函数

```js
function getType(value) {
    // 处理 null
    if (value === null) return 'null';

    // 基本类型用 typeof 即可
    if (typeof value !== 'object' && typeof value !== 'function') {
        return typeof value;
    }

    // 引用类型用 toString
    const typeStr = Object.prototype.toString.call(value);
    // "[object Array]" → "array"
    return typeStr.slice(8, -1).toLowerCase();
}

// 测试
console.log(getType(42));           // "number"
console.log(getType('hello'));      // "string"
console.log(getType(true));         // "boolean"
console.log(getType(undefined));    // "undefined"
console.log(getType(null));         // "null"
console.log(getType(Symbol()));     // "symbol"
console.log(getType(10n));          // "bigint"
console.log(getType({}));           // "object"
console.log(getType([]));           // "array"
console.log(getType(function(){})); // "function"
console.log(getType(new Date()));   // "date"
console.log(getType(/abc/));        // "regexp"
console.log(getType(new Map()));    // "map"
console.log(getType(new Set()));    // "set"
console.log(getType(new Error()));  // "error"
console.log(getType(Promise.resolve())); // "promise"
```

---

### 2.2 类型转换的经典陷阱

```js
// == 隐式转换
console.log([] == false);     // true  ([] → '' → 0, false → 0)
console.log([] == ![]);       // true  ⚠️ 经典面试题
console.log('' == false);     // true
console.log(null == undefined); // true
console.log(null === undefined); // false

// + 运算符
console.log(1 + '2');         // '12'  (数字转字符串)
console.log(1 + true);        // 2     (true → 1)
console.log(1 + null);        // 1     (null → 0)
console.log(1 + undefined);   // NaN   (undefined → NaN)
console.log('5' - 3);         // 2     (字符串转数字)

// 特殊值
console.log(typeof NaN);      // "number"  ⚠️
console.log(NaN === NaN);     // false     ⚠️
console.log(Number.isNaN(NaN)); // true (推荐用法)
```

### 2.3 `[] == ![]` 为什么是 true？（逐步拆解）

```js
// 第一步：! 优先级高，先算 ![]
// [] 是对象，是 truthy → ![] = false

// 第二步：变成 [] == false
// == 触发隐式转换，false → 0

// 第三步：变成 [] == 0
// [] 是对象，调用 [].valueOf() → []（不是原始值）
// 再调用 [].toString() → ""

// 第四步：变成 "" == 0
// "" → 0

// 第五步：0 == 0 → true ✅
```

---

## 三、应用场景篇

### 场景 1：函数参数类型校验

```js
function ajax(options) {
    if (getType(options) !== 'object') {
        throw new TypeError('options must be a plain object');
    }
    if (options.url && getType(options.url) !== 'string') {
        throw new TypeError('url must be a string');
    }
    if (options.headers && getType(options.headers) !== 'object') {
        throw new TypeError('headers must be an object');
    }
    // ...
}
```

### 场景 2：深拷贝中的类型判断

```js
function deepClone(source, cache = new WeakMap()) {
    // 基本类型直接返回
    if (source === null || typeof source !== 'object') {
        return source;
    }

    // 防止循环引用
    if (cache.has(source)) return cache.get(source);

    // 根据类型创建对应的容器
    const type = getType(source);
    let target;

    switch (type) {
        case 'array':
            target = [];
            break;
        case 'date':
            target = new Date(source.getTime());
            return target; // Date 不需要递归
        case 'regexp':
            target = new RegExp(source.source, source.flags);
            return target;
        case 'map':
            target = new Map();
            cache.set(source, target);
            source.forEach((val, key) => {
                target.set(deepClone(key, cache), deepClone(val, cache));
            });
            return target;
        case 'set':
            target = new Set();
            cache.set(source, target);
            source.forEach(val => {
                target.add(deepClone(val, cache));
            });
            return target;
        default:
            target = Object.create(Object.getPrototypeOf(source));
    }

    cache.set(source, target);

    // 递归拷贝属性
    for (const key of Reflect.ownKeys(source)) {
        target[key] = deepClone(source[key], cache);
    }

    return target;
}
```

### 场景 3：模板引擎 / 序列化中的类型分发

```js
function serialize(value) {
    const type = getType(value);
    switch (type) {
        case 'string':    return `"${value}"`;
        case 'number':
        case 'boolean':   return String(value);
        case 'null':      return 'null';
        case 'undefined': return undefined;  // JSON 会忽略
        case 'array':     return `[${value.map(serialize).join(',')}]`;
        case 'object':
            const pairs = Object.keys(value)
                .map(k => `"${k}":${serialize(value[k])}`);
            return `{${pairs.join(',')}}`;
        default:
            throw new Error(`Unsupported type: ${type}`);
    }
}
```

### 场景 4：防御性编程 — 安全取值

```js
function safeGet(obj, path, defaultValue = undefined) {
    if (getType(obj) !== 'object' && getType(obj) !== 'array') {
        return defaultValue;
    }
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let result = obj;
    for (const key of keys) {
        result = result?.[key];
        if (result === undefined) return defaultValue;
    }
    return result;
}

// 使用
const data = { user: { list: [{ name: 'Tom' }] } };
safeGet(data, 'user.list[0].name');     // 'Tom'
safeGet(data, 'user.list[5].name', ''); // ''
```

---

## 四、面试常见追问

### 🔥 追问 1：`typeof null` 为什么返回 `"object"`？

> 这是 JS 最初版本（1995年）的设计 Bug。在 V8 的前身 JS 引擎中，值在底层以 32 位单元存储，低 3 位表示类型标签：
> - `000`：对象
> - `1`：整型
> - `010`：浮点
> - `100`：字符串
> - `110`：布尔
> 
> 而 `null` 的二进制表示全是 `0`，低三位自然也是 `000`，被误判为对象。
> 后来 TC39 曾提案修复，但因为**太多老代码依赖这个行为**，无法改了。

---

### 🔥 追问 2：如何准确判断 `null`？

```js
// 方法1：严格相等（推荐）
value === null

// 方法2：toString
Object.prototype.toString.call(null) === '[object Null]'

// 方法3：组合判断
typeof value === 'object' && !value
```

---

### 🔥 追问 3：`0.1 + 0.2 !== 0.3` 怎么解释？怎么解决？

```js
// 原因：JS 用 IEEE 754 双精度浮点数（64位），
// 0.1 和 0.2 转二进制是无限循环小数，存储时截断导致精度丢失

0.1 + 0.2  // 0.30000000000000004

// 解决方案
// 1. 使用 Number.EPSILON 容差比较
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON  // true

// 2. 转整数运算
(0.1 * 10 + 0.2 * 10) / 10 === 0.3  // true

// 3. toFixed（注意返回字符串）
(0.1 + 0.2).toFixed(1) === '0.3'  // true

// 4. 使用第三方库 big.js / decimal.js
```

---

### 🔥 追问 4：手写 `instanceof`

```js
function myInstanceof(left, right) {
    // 基本类型直接返回 false
    if (left === null || (typeof left !== 'object' && typeof left !== 'function')) {
        return false;
    }

    let proto = Object.getPrototypeOf(left);
    const target = right.prototype;

    while (proto !== null) {
        if (proto === target) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

// 验证
console.log(myInstanceof([], Array));     // true
console.log(myInstanceof([], Object));    // true
console.log(myInstanceof({}, Array));     // false
console.log(myInstanceof(1, Number));     // false
```

---

### 🔥 追问 5：`Symbol.hasInstance` 可以自定义 instanceof 行为？

```js
class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log([] instanceof MyArray);  // true
console.log({} instanceof MyArray);  // false
```

---

### 🔥 追问 6：基本类型为什么能调用方法（如 `'hello'.toUpperCase()`）？

> **装箱（Boxing）机制**：当对基本类型调用方法时，JS 引擎会临时创建对应的包装对象：
> 
> ```js
> 'hello'.toUpperCase();
> // 等价于：
> new String('hello').toUpperCase();
> // 调用完后，包装对象立即销毁
> ```
> 
> 这就是为什么不能给基本类型添加属性：
> ```js
> let str = 'hello';
> str.foo = 'bar';
> console.log(str.foo);  // undefined
> // 因为临时包装对象已经被销毁了
> ```

---

### 🔥 追问 7：`Object.is()` 和 `===` 的区别？

```js
// === 的两个特殊情况
+0 === -0;         // true  ⚠️
NaN === NaN;       // false ⚠️

// Object.is 修正了这两个
Object.is(+0, -0);   // false ✅
Object.is(NaN, NaN); // true  ✅

// 手写 Object.is
function objectIs(a, b) {
    if (a === b) {
        // 处理 +0 !== -0
        return a !== 0 || 1 / a === 1 / b;
    }
    // 处理 NaN === NaN
    return a !== a && b !== b;
}
```

---

### 🔥 追问 8：隐式类型转换的规则是什么？

```
┌─────────────────────────────────────────────────────────┐
│                  隐式转换核心规则                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  对象 → 原始值 (ToPrimitive):                            │
│    1. 调用 [Symbol.toPrimitive](hint) 如果存在           │
│    2. hint 为 "number": valueOf() → toString()          │
│    3. hint 为 "string": toString() → valueOf()          │
│                                                         │
│  == 比较规则:                                            │
│    null == undefined  → true                            │
│    null/undefined == 其他  → false                       │
│    number == string   → string 转 number                │
│    boolean == any     → boolean 先转 number              │
│    object == 原始值    → object 转 ToPrimitive           │
│                                                         │
│  + 运算规则:                                             │
│    有字符串 → 全转字符串拼接                                │
│    否则 → 全转数字相加                                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

```js
// 经典题：让 a == 1 && a == 2 && a == 3 为 true
const a = {
    value: 1,
    [Symbol.toPrimitive]() {
        return this.value++;
    }
};
console.log(a == 1 && a == 2 && a == 3);  // true
```

---

### 面试总结速记卡片

```
📝 一句话总结:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 基本类型 7 种：number string boolean undefined null symbol bigint
• 引用类型：Object 及其子类型
• typeof：快速判断基本类型，但 null 返回 "object"
• instanceof：查原型链，不能判断基本类型
• toString.call()：万能方案，最推确
• 隐式转换：ToPrimitive → valueOf → toString
• 0.1+0.2：IEEE 754 精度问题，用 EPSILON 解决
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
