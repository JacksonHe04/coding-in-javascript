const obj = {0: 'f', 1: 'o', 2: 'o', length: 3};
const strArr = Array.from(obj);

console.log('--- 第一次打印 ---');
console.log('原对象:', obj);
console.log('使用 Array.from 创建的数组:', strArr);

// 修改原对象的第一层属性
obj[0] = 'g';
console.log('\n--- 修改原对象第一层属性后 ---');
console.log('原对象:', obj);
console.log('使用 Array.from 创建的数组:', strArr);
console.log('结论: 修改原对象第一层属性，不会影响 Array.from 创建的数组，证明第一层是值拷贝。');

const originalArray = [{ value: 1 }, { value: 2 }];
const copiedArray = Array.from(originalArray);

console.log('\n--- 验证嵌套对象的浅拷贝 ---');
console.log('拷贝前 - 原数组:', originalArray);
console.log('拷贝前 - 拷贝数组:', copiedArray);

// 修改原数组中第一个对象的 value 属性（第二层属性）
originalArray[0].value = 100;

console.log('\n--- 修改原数组中嵌套对象的属性后 ---');
console.log('修改后 - 原数组:', originalArray);
console.log('修改后 - 拷贝数组:', copiedArray);
console.log('结论: 修改原数组中嵌套对象的属性，拷贝数组对应位置的对象属性也会改变，证明嵌套对象是引用拷贝。');