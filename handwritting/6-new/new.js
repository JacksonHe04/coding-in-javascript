/**
 * 模拟 new 关键字的行为，用于创建对象实例。
 *
 * @param {Function} f - 构造函数，用于创建对象实例。
 * @param  {...any} args - 构造函数的参数列表。
 * @returns {Object} 返回新创建的对象实例。
 */
function myNew(f, ...args) {
  let newObject = null;
  let result = null;

  // 检查构造函数是否为函数类型
  if (typeof f !== "function") {
    console.error("构造函数必须是一个函数");
    return;
  }

  // 创建一个空对象，其原型为构造函数的 prototype 对象
  newObject = Object.create(f.prototype);

  // 使用 Reflect.construct 来执行构造函数，并将 this 指向新建对象
  // 第三个参数是新目标（new.target），这里设置为构造函数本身
  result = Reflect.construct(f, args, f);

  // 如果构造函数返回的是对象或函数，则直接返回该结果；否则返回新创建的对象
  return result && (typeof result === "object" || typeof result === "function")
    ? result
    : newObject;
}

// 定义一个示例类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}c

// 使用 myNew 创建 Person 类的实例
let p = myNew(Person, "小明", 18);
console.log(p); // 输出: Person { name: '小明', age: 18 }
p.sayName();
