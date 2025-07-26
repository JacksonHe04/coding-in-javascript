function addStrings(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0;
  const ans = [];

  while(i >= 0 || j >= 0 || add !== 0) {
    const x = i < 0 ? 0 : num1.charAt(i) - "0";
    const y = j < 0 ? 0 : num2.charAt(j) - "0";
    const sum = x + y + add;
    ans.push(sum % 10);
    add = Math.floor(sum / 10);
    i -= 1;
    j -= 1;
  }
  return ans.reverse().join("");
}

// test
console.log(addStrings("11", "123")); // "134"
console.log(addStrings("456", "77")); // "533"
console.log(addStrings("0", "0")); // "0"