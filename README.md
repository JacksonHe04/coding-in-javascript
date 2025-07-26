# Coding in JavaScript

> 题目来源：[LeetCode 力扣](https://leetcode.cn/) | [CodeTop 企业题库](https://codetop.cc/home) | 
[前端充电宝](https://www.yuque.com/cuggz/interview/wm7x19)

## 一、仓库简介
本仓库用于存放我的 Leetcode 算法题和 JavaScript 手写题的解答与学习记录。目前仓库包含五个主要目录：`leetcode`、`hot100`、`handwritting`、`output` 和 `scene`，分别对应不同的刷题计划和学习内容。所有题目均使用 JavaScript 实现，特别适合前端开发工程师和 Node.js 开发工程师学习和参考。

## 二、目录说明

### [LeetCode](./leetcode)
这是当前我主要维护和更新的目录，包含按照 CodeTop 网站高频题目顺序刷题的记录。该目录会持续更新，题目编号格式为 `#xx题目名称(题号)`，每道题目都包含详细的解题思路和代码实现。

### [Hand Writting](./handwritting)
这是专门用于存放 JavaScript 手写题的实现目录。包含了前端面试中常见的手写题，如防抖、节流、深浅拷贝、Promise.all 实现、new 关键字实现、instanceof 实现、函数柯里化、AJAX 封装、JSONP 实现等。每个手写题都有详细的实现代码和注释说明，帮助理解 JavaScript 核心概念和编程技巧。

### [Output](./output)
该目录存放 JavaScript 基础概念的学习和练习代码，主要包含：
- **event-loop**：事件循环机制相关的练习题，包含微任务、Promise 状态变化、then/catch 处理等13个练习文件
- **this**：this 指向相关的练习题，包含全局 this、函数绑定、箭头函数、构造函数等9个练习文件

### [Hot100](./hot100)
该目录存放的是 Leetcode Hot100 题集的部分解答。已完成的题目按照不同的解题思路和算法类型进行了分类，如哈希表、双指针等。目前包含7道经典题目，每道题都有完整的解题思路和代码实现。

### [Scene](./scene)
该目录存放特定场景下的代码实现，目前包含腾讯相关的面试题或项目代码。

### [Docs](./docs)
存放学习笔记和文档，记录学习过程中的重要知识点和总结。

## 三、项目结构详情

### 算法题目录结构
每个算法题都是一个独立的子目录，包含以下文件：
- `README.md`：题目描述、解题思路和注意事项
- `solution.js`：常见解法的实现，包含详细的注释说明
- `imitation.js`：我个人提交的代码，相对简洁，可作为快速参考
- `review-xx-xx-xx.js`：复习时的代码实现（部分题目包含）

### 手写题目录结构
每个手写题通常包含：
- `written.js`：手写实现的代码
- 对应功能的具体实现文件（如 `debounce.js`、`throttle.js` 等）
- 相关的测试用例和示例

### 练习题目录结构
`output` 目录下的练习题按主题分类，每个 `.js` 文件都是一个独立的练习案例，包含具体的代码实现和注释说明。

## 四、手写题清单

`handwritting` 目录目前包含以下手写题实现：

1. **防抖（Debounce）** - 防止函数频繁调用的优化技术
2. **节流（Throttle）** - 控制函数执行频率的优化技术
3. **浅拷贝（Shallow Copy）** - 对象浅层复制的多种实现方法
4. **深拷贝（Deep Copy）** - 对象深层复制的完整实现
5. **Promise.all** - 并发执行多个 Promise 的实现
6. **new 关键字** - 模拟 new 操作符的完整实现
7. **instanceof 操作符** - 类型检测操作符的手写实现
8. **函数柯里化（Curry）** - 函数式编程中的重要概念
9. **AJAX 封装** - 原生 XMLHttpRequest 的封装实现
10. **Promise 封装 AJAX** - 使用 Promise 封装异步请求
11. **JSONP** - 跨域请求的经典解决方案
12. **reduce 实现 map** - 使用 reduce 方法实现 map 功能

每个手写题都包含详细的注释说明和多种实现方式，帮助深入理解 JavaScript 核心机制。

## 五、更新计划
我会定期对 `leetcode` 目录进行更新，持续记录高频面试算法题的解题过程和思路。`handwritting` 目录将持续添加前端面试中常见的手写题实现。`output` 目录会根据学习进度添加新的 JavaScript 基础概念练习。更新频率会根据实际学习进度调整，但会保持较为稳定的更新节奏。

## 六、使用建议
- 如果您想了解当前我正在学习的算法题，请查看 `leetcode` 目录
- 如果您对 Leetcode 热门 100 题感兴趣，可以参考 `hot100` 目录中的已完成题目
- 如果您正在准备前端面试或想深入理解 JavaScript 核心概念，推荐查看 `handwritting` 目录
- 如果您想学习 JavaScript 基础概念（如事件循环、this 指向），可以参考 `output` 目录
- 每道题目通常包含多种解法，并附有详细的注释说明
- 建议先阅读 `README.md`，然后查看 `solution.js` 了解详细解法，最后可以参考 `imitation.js` 作为简洁实现的示例

在查看代码和解题思路时，若发现任何问题或有更好的解法建议，欢迎随时与我交流。

## 七、联系方式
若您有任何关于本仓库内容的疑问或建议，可以通过以下方式联系我：
- 邮箱：JacksonHe04c@gmail.com

希望本仓库能够对您在算法学习和面试准备方面有所帮助，特别是对前端开发工程师和 Node.js 开发工程师的朋友们！