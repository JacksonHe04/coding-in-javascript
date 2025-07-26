/**
 * 自定义实现 instanceof 操作符的功能
 * @param {Object} obj - 需要检测的对象
 * @param {Function} f - 构造函数
 * @returns {boolean} - 如果对象的原型链上存在构造函数的 prototype 对象，则返回 true，否则返回 false
 */
function myInstanceof(obj, f) {
  let proto = Object.getPrototypeOf(obj); // 获取对象的原型
  const prototype = f.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false; // 如果原型为 null，说明已经到达原型链的顶端，返回 false
    if (proto === prototype) return true; // 如果找到匹配的原型，返回 true

    proto = Object.getPrototypeOf(proto); // 继续向上查找原型链
  }
}

// 定义一个构造函数
function Animal() {}

// 创建一个 Animal 的实例
const dog = new Animal();

// 测试 myInstanceof 函数
console.log(myInstanceof(dog, Animal)); // 输出: true
console.log(myInstanceof(dog, Object)); // 输出: true
console.log(myInstanceof(dog, Array)); // 输出: false
console.log(myInstanceof({}, Object)); // 输出: true
console.log(myInstanceof([], Array)); // 输出: true
console.log(myInstanceof([], Object)); // 输出: true
console.log(myInstanceof(null, Object)); // 输出: false
console.log(myInstanceof(undefined, Object)); // 输出: false
