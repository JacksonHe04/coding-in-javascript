/**
 * 创建一个对象的深拷贝
 * 深拷贝意味着创建一个新对象，其属性是原始对象的副本如果这些属性是对象，则递归进行深拷贝
 *
 * @param {Object} object - 需要深拷贝的原始对象可以是数组或普通对象
 * @returns {Object} - 返回原始对象的深拷贝如果输入不是对象或为空，则返回undefined
 */
function deepCopy(object) {
  // 检查输入是否为空或不是对象，如果是，则不进行拷贝，直接返回
  if (!object || typeof object !== "object") return;

  // 初始化新对象，如果原始对象是数组，则新对象也是数组，否则是普通对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历原始对象的所有属性
  for (let key in object) {
    // 确保只处理对象自身的属性，而不是继承的属性
    if (object.hasOwnProperty(key)) {
      // 如果属性值是对象，则递归调用deepCopy进行深拷贝，否则直接复制属性值
      newObject[key] =
        typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
    }
  }

  // 返回深拷贝后的新对象
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

let newObj = deepCopy(obj);
console.log(newObj);
console.log(newObj === obj);
obj.innerPro.b = "北京";
// 由于深拷贝后的newObj.innerPro.b和obj.innerPro.b是两个不同的对象，所以修改一个不会影响另一个
console.log(newObj); // 南京 -> 南京
obj.a=2;
console.log(newObj); // 1 -> 1