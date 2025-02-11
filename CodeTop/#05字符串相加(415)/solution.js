/**
 * 将两个字符串表示的数字相加
 * @param {string} num1 第一个字符串表示的数字
 * @param {string} num2 第二个字符串表示的数字
 * @returns {string} 返回相加后的结果字符串
 */
function addStrings(num1, num2) {
  // 初始化指针i和j分别指向num1和num2的末尾，add用于进位
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  // 用于存储结果的数组
  const ans = [];
  // 当任一字符串还有字符未处理或有进位时，继续循环
  while (i >= 0 || j >= 0 || add !== 0) {
    // 从右向左获取当前位的数字，若已超出字符串长度则为0
    const x = i >= 0 ? num1.charAt(i) - "0" : 0;
    const y = j >= 0 ? num2.charAt(j) - "0" : 0;
    // 计算当前位的结果，包括进位
    const sum = x + y + add;
    // 将当前位的结果对10取模后添加到结果数组中
    ans.push(sum % 10);
    // 更新进位，除 10 再去掉小数位
    add = Math.floor(sum / 10);
    // 移动指针到下一位
    i -= 1;
    j -= 1;
  }
  // 将结果数组反转再连接为字符串
  return ans.reverse().join("");
}

// test
console.log(addStrings("11", "123")); // "134"
console.log(addStrings("456", "77")); // "533"
console.log(addStrings("0", "0")); // "0"