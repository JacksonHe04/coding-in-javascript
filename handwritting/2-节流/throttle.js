// 函数节流的实现
function throttle(fn, delay) {
  // 记录上一次函数执行的时间戳，初始化为 0 保证第一次调用能执行
  let curTime = 0;

  // 返回一个新的函数，该函数将在适当的时间间隔内调用原始函数 `fn`
  return function() {
    const nowTime = Date.now();
    // 检查是否达到执行间隔
    if (nowTime - curTime >= delay) {
      curTime = nowTime;
      return fn.apply(this, arguments);
    }
  };
}

function Hello() {
  console.log("Hello World!");
}

const throttleHello = throttle(Hello, 1000);

throttleHello();
setTimeout(throttleHello, 900); // 0.9秒后调用
setTimeout(throttleHello, 1200); // 1.2秒后调用
