console.log("1. Object.assign()");
let target = {a: 1};
// 初始化第二个对象
let object2 = {b: 2};
// 初始化第三个对象
let object3 = {c: 3};
// 将object2和object3的属性合并到target中
Object.assign(target,object2,object3);
// 输出合并后的target对象
console.log(target);  // {a: 1, b: 2, c: 3}

console.log("\n2. 扩展运算符 {...obj}");
// 创建一个对象obj1，包含一个整数属性a和一个对象属性b
let obj1 = { a: 1, b: { c: 1 } };
// 使用扩展运算符创建obj2，浅复制obj1的所有属性
let obj2 = { ...obj1 };
// 修改obj1的属性a
obj1.a = 2;
// 输出obj1，显示属性a已被修改，但属性b未变
console.log(obj1); //{a:2,b:{c:1}}
// 输出obj2，显示属性a保持原值，因为是浅复制，所以属性b未变
console.log(obj2); //{a:1,b:{c:1}}
// 修改obj1的属性b.c
obj1.b.c = 2;
// 输出obj1，显示属性b.c已被修改
console.log(obj1); //{a:2,b:{c:2}}
// 输出obj2，显示属性b.c也被修改，因为b是对象，扩展运算符只复制了引用
console.log(obj2); //{a:1,b:{c:2}}

// 数组的浅复制
console.log("\n3. Array.prototype.slice");
let arr1 = [1,2,3,4];
console.log(arr1.slice()); // [1,2,3,4]
console.log(arr1.slice() === arr1); //false

// 数组的浅复制
console.log("\n4. Array.prototype.concat");
let arr2 = [1,2,3,4];
console.log(arr2.concat()); // [1,2,3,4]
console.log(arr2.concat() === arr2); //false