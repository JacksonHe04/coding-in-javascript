// 函数节流的实现
function throttle(fn, delay) {
  // 记录上一次函数执行的时间戳
  let curTime = Date.now();

  // 返回一个新的函数，该函数将在适当的时间间隔内调用原始函数 `fn`
  return function() {
    // 保存当前的执行上下文（this）和参数（arguments）
    let context = this,
      args = arguments,
      // 获取当前时间的时间戳
      nowTime = Date.now();

    // 检查当前时间与上次执行时间的时间差是否大于或等于设定的延迟时间 `delay`
    if (nowTime - curTime >= delay) {
      // 如果时间间隔满足条件，更新上次执行时间为当前时间
      curTime = Date.now();
      // 使用保存的上下文和参数调用原始函数 `fn`
      return fn.apply(context, args);
    }
  };
}

function Hello() {
  console.log("Hello World!");
}

const throttleHello = throttle(Hello, 1000);

throttleHello();
setTimeout(throttleHello, 1500); // 1.5秒后调用
setTimeout(throttleHello, 3000); // 3秒后调用
