function debounce(fn, wait) {
  let timer = null;
  return function() {
    let context = this,
      args = arguments;

    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

function SayHello() {
  console.log("Hello!");
}

const debounceSayHello = debounce(SayHello, 1000);

debounceSayHello();
debounceSayHello();
debounceSayHello();