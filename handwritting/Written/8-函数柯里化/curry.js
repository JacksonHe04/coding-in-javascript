/**
 * 函数柯里化方法的实现
 *
 * @param {Function} f 需要进行柯里化的函数
 * @param {Array} args 已经传入的参数数组
 * @returns {Function|Any} 返回一个柯里化后的函数，或者当传入足够的参数时，执行函数并返回结果
 */
function curry(f, args) {
  // 获取函数需要的参数长度
  let length = f.length;

  // 初始化参数数组，如果没有传入参数，则创建一个空数组
  // || 运算符会在左侧表达式为假值时返回右侧表达式的值
  args = args || [];

  // 返回一个新的函数，该函数将处理传入的参数
  return function () {
    // 复制已有参数数组，以避免修改原始数组
    let subArgs = args.slice(0);

    // 将新传入的参数添加到已有参数数组中
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数并返回结果
      return f.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回柯里化的函数，等待更多参数的传入
      return curry.call(this, f, subArgs);
    }
  };
}

// test
function add(a, b, c) {
  return a + b + c;
}
let curriedAddNull = curry(add);
console.log(curriedAddNull(1)(2)(3));

let curriedAdd = curry(add, [1]);
console.log(curriedAdd(2)(3));
