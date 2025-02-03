// 函数防抖的实现
function debounce(fn, wait) {
  // 定义一个变量来存储定时器ID
  // 这行代码实际上仅在const debounceSyaHello的时候执行了一次
  let timer = null;

  // 返回一个新的函数，这个函数会在每次调用时重置定时器
  // 在此后的调用debounceSayHello中，执行的都是此处返回的新函数
  return function () {
    // 保存当前的上下文（this）和参数（arguments）
    let context = this,
      args = arguments;

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      // 在指定时间后，使用之前保存的上下文和参数调用原始函数
      fn.apply(context, args);
    }, wait);
  };
}

// 示例函数，用于测试防抖功能
function sayHello() {
  console.log("Hello World!");
}

// 创建一个防抖版本的 sayHello 函数，防抖时间为 1000 毫秒（1 秒）
const debounceSayHello = debounce(sayHello, 1000);

// 调用防抖函数三次
debounceSayHello();
debounceSayHello();
debounceSayHello();
