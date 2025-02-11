function lengthOfLongestSubstring(s) {
  // 创建一个集合用于存储当前窗口内的字符，确保字符不重复
  const charSet = new Set();
  const length = s.length; // 获取字符串的长度

  // 初始化右边界指针和结果变量
  let rightBoundary = -1, // 右边界指针，初始值为-1表示尚未开始遍历
      ans = 0; // 最长无重复子串的长度

  // 遍历字符串，leftIndex作为左边界指针
  for (let leftIndex = 0; leftIndex < length; ++leftIndex) {
    // 当leftIndex不为0时，移除前一个字符，因为窗口向右滑动了一位
    if (leftIndex !== 0) {
      charSet.delete(s.charAt(leftIndex - 1));
    }

    // 尝试扩展右边界，直到遇到重复字符或到达字符串末尾
    while (
      rightBoundary + 1 < length && // 确保右边界在字符串范围内
      !charSet.has(s.charAt(rightBoundary + 1)) // 确保下一个字符不在集合中
    ) {
      charSet.add(s.charAt(rightBoundary + 1)); // 将新字符加入集合
      ++rightBoundary; // 移动右边界指针
    }

    // 更新最长无重复子串的长度
    ans = Math.max(ans, rightBoundary - leftIndex + 1);
  }

  return ans; // 返回最终结果
}

// 测试用例
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 输出 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 输出 3 ("wke")
console.log(lengthOfLongestSubstring("")); // 输出 0 (空字符串)
console.log(lengthOfLongestSubstring(" ")); // 输出 1 (" ")
