function deepCopy(object) {
  if(!object || typeof object !== "object") return;

  let newObj = Array.isArray(object) ? [] : {};

  for(let key in object) {
    if(object.hasOwnProperty(key)){
      newObj[key] = typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
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

let newObj = deepCopy(obj);
console.log(newObj);
console.log(newObj === obj);
obj.innerPro.b = "北京";
// 由于深拷贝后的newObj.innerPro.b和obj.innerPro.b是两个不同的对象，所以修改一个不会影响另一个
console.log(newObj); // 南京 -> 南京
obj.a=2;
console.log(newObj); // 1 -> 1