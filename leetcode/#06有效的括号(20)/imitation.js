function isValid (s) {
  if(!s.length % 2) return fasle;
  const map = new Map([
    [")", "("], ["]", "["], ["}", "{"]
  ]);

  let stk = [];
  for (let char of s) {
    if (map.has(char)) {
      if(!stk.length || stk[stk.length - 1] !== map.get(char)) return false;
      stk.pop();
    } else {
      stk.push(char);
    }
  }
  return !stk.length;
}