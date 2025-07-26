// JSON.parse(JSON.stringify(obj))
console.log("1. JSON.parse(JSON.stringify(obj))");
let obj = {
  a: 1,
  info: {
    b: 1,
    c: 98,
  },
};
let newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj);
obj.info.b = 2;
console.log(obj);
console.log(newObj);

// 函数库 lodash 的 _.cloneDeep 方法
console.log("\n2. 函数库 lodash 的 _.cloneDeep 方法");
let _ = require("lodash");
let obj1 = {
  a: 1,
  b: {
    f: {
      g: 1,
    },
  },
  c: [1, 2, 3],
};
let obj2 = _.cloneDeep(obj1);
console.log(obj2)
console.log(obj1.b.f === obj2.b.f); // false