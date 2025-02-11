function lengthOfLongestSubstring(s) {
  let arrSet = new Set();
  const length = s.length;
  let right = -1;
  let ans = 0;

  for (let i = 0; i < length; ++i) {
    if (i !== 0) {
      arrSet.delete(s.charAt(i - 1));
    }

    while (right + 1 < length && !arrSet.has(s.charAt(right + 1))) {
      arrSet.add(s.charAt(right + 1));
      ++right;
    }
    ans = Math.max(ans, right - i + 1);
  }
  return ans;
}

// 测试用例
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 输出 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 输出 3 ("wke")
console.log(lengthOfLongestSubstring("")); // 输出 0 (空字符串)
console.log(lengthOfLongestSubstring(" ")); // 输出 1 (" ")
