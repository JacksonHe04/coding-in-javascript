// 为 Array 原型添加一个自定义的 myMap 方法，用于模拟原生 map 方法的功能
// callback 是一个回调函数，会对数组中的每个元素进行处理
Array.prototype.myMap = function(callback) {
    // 使用数组的 reduce 方法来遍历数组元素
    // accumulator 是累加器，用于存储每次回调函数处理后的结果
    return this.reduce((accumulator, currentValue, index, array) => {
        // 将当前元素经过回调函数处理后的结果添加到累加器中
        accumulator.push(callback(currentValue, index, array));
        // 返回更新后的累加器，供下一次迭代使用
        return accumulator;
    }, []); // 初始化累加器为一个空数组
};

// 示例
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.myMap((num) => num * num);
console.log(squaredNumbers); // 输出: [1, 4, 9, 16]