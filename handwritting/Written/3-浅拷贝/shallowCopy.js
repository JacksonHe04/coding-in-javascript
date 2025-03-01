// 对于数组或对象的浅拷贝的实现
function shallowCopy(object) {
  // 如果传入的不是一个对象，则返回undefined
  if (!object || typeof object !== "object") return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    // 避免遍历到 object 的原型链上的属性
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

let obj = {
  a: 1,
  s: "SEU",
  innerPro: {
    b: "南京",
    c: 211189,
  },
};

let newObj = shallowCopy(obj);
console.log(newObj);
console.log(newObj === obj);
obj.innerPro.b = "北京";
// 属性innerPro是一个对象，浅拷贝只复制该对象的引用
console.log(newObj); // 南京 -> 北京
obj.a=2;
// 属性a是一个基本类型，浅拷贝复制的是该基本类型的值
console.log(newObj); // 1 -> 1