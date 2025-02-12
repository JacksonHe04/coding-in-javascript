let a = 10;
let obj = {
  a: 20,
  say: () => {
    console.log(this.a);
  },
};
obj.say();

let anotherObj = {a: 30};
obj.say.apply(anotherObj);

// 浏览器
// 10
// 10

// Node.js
// undefined
// undefined