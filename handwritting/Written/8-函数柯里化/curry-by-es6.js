/**
 * 使用ES6特性实现的函数柯里化方法
 *
 * @param {Function} f 需要进行柯里化的函数
 * @param {...any} args 已经传入的参数
 * @returns {Function|Any} 返回一个柯里化后的函数，或者当传入足够的参数时，执行函数并返回结果
 */
function curry(f, ...args) {
  // 如果传入的参数数量已经达到或超过函数所需参数数量，则执行函数并返回结果
  // 否则，返回一个柯里化后的函数，等待更多参数的传入
  return f.length <= args.length ? f(...args) : curry.bind(null, f, ...args);
}

// test
function add(a, b, c) {
  return a + b + c;
}
let curriedAddNull = curry(add);
console.log(curriedAddNull(1)(2)(3));

let curriedAdd = curry(add, 1, 2);
console.log(curriedAdd(3));
