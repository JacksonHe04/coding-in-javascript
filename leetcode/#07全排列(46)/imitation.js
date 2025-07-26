function permute(nums) {
  const l = nums.length;
  let res = [];

  function backtrack(first = 0) {
    if(first === l) {
      res.push([...nums]);
    }

    for(let i = first; i < l; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
  }
  backtrack();
  return res;
}