function throttle(fn, delay) {
  let curTime = Date.now();

  return function(){
    let context = this,
      args = arguments;

    let nowTime = Date.now();
    if(nowTime - curTime >= delay) {
      curTime = nowTime;
      return fn.apply(context, args);
    }
  }
}

function Hello() {
  console.log("Hello");
}

const throttleHello = throttle(Hello, 1000);

throttleHello();
setTimeout(throttleHello, 1500);
setTimeout(throttleHello, 3000);