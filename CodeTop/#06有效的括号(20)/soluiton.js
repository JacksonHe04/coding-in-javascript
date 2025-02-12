/**
 * 检查字符串中的括号是否有效
 *
 * @param {string} s - 输入的字符串，包含括号字符
 * @returns {boolean} - 如果括号有效则返回true，否则返回false
 */
function isValid(s) {
  // 获取字符串长度
  const l = s.length;
  // 如果长度为奇数，则括号不可能全部匹配
  if (l % 2 === 1) {
    return false;
  }
  // 创建括号对应的Map，用于查找右括号对应的左括号
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  // 初始化栈，用于临时存储左括号
  const stk = [];
  // 遍历字符串中的每个字符
  for (let char of s) {
    // 如果当前字符是右括号
    if (map.has(char)) {
      // 如果栈为空或栈顶元素不是当前右括号对应的左括号，则不匹配
      if (!stk.length || stk[stk.length - 1] !== map.get(char)) {
        return false;
      }
      // 匹配成功，弹出栈顶左括号
      stk.pop();
    } else {
      // 如果当前字符是左括号，压入栈中
      stk.push(char);
    }
  }
  // 如果栈为空，说明所有括号都匹配成功
  return !stk.length;
}

// test
console.log(isValid("()")); // true
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));