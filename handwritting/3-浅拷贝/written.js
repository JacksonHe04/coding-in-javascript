function shallowCopy(object) {
  if(!object || typeof object !== "object") return;

  let newObj = Array.isArray(object) ? [] : {};

  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      newObj[key] = object[key];
    }
  }

  return newObj;
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
console.log(newObj);
obj.a=2;
// 属性a是一个基本类型，浅拷贝复制的是该基本类型的值
console.log(newObj);