function curry(f, args) {
  let length = f.length;
  args = args || [];
  return function() {
    let subArgs = args.slice();
    for(let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    if (subArgs.length >= length) {
      return f.apply(this, subArgs);
    } else {
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