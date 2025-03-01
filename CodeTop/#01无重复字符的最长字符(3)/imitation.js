function lengthOfLongestSubstring(s) {
  let set = new Set();
  const l = s.length;
  let r = -1;
  let ans = 0;

  for (let i = 0; i < l; ++i) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }

    while (r + 1 < l && !set.has(s.charAt(r + 1))) {
      set.add(s.charAt(r + 1));
      ++r;
    }
    ans = Math.max(ans, r - i + 1);
  }
  return ans;
}