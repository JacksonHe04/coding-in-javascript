/**
 * 将给定的数字添加千位分隔符
 * 例如，给定数字1234567，函数将返回"1.234.567"
 * 这个函数的目的是使大数字更加可读
 * 
 * @param {number} n - 需要格式化的数字
 * @returns {string} - 添加了千位分隔符的数字字符串
 */
var thousandSeparator = function(n) {
    // 初始化计数器，用于跟踪当前数字位数
    let count = 0;
    // 初始化答案字符串，用于构建最终的格式化数字
    let ans = "";
    // 开始处理数字n，直到n为0
    do {
        // 获取当前数字的最后一位
        let cur = n % 10;
        // 更新n，去除最后一位
        n = Math.floor(n / 10);
        // 将当前位添加到答案字符串中
        ans += cur.toString();
        // 增加计数器，表示已处理的数字位数增加
        ++count;
        // 每处理3位数字，如果n不为0，则添加分隔符
        if (count % 3 == 0 && n) {
            ans += '.';
        }
    } while (n); // 当n不为0时继续循环
    // 由于数字是从后向前构建的，因此需要反转字符串以得到正确的格式
    return ans.split('').reverse().join('');
};