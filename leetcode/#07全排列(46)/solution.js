function permute(nums) {
  // 用于存储所有排列结果的数组
  const result = [];
  const l = nums.length;

  // 回溯函数
  function backtrack(first = 0) {
    // 当 first 等于 l 时，表示所有数都已经填完
    if (first === l) {
      result.push([...nums]);
    }
    for (let i = first; i < l; i++) {
      // 交换元素位置，动态维护数组
      [nums[first], nums[i]] = [nums[i], nums[first]];
      // 递归调用，继续填下一个数
      backtrack(first + 1);
      // 撤销操作，恢复原始数组顺序
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }
  // 调用回溯函数
  backtrack();
  return result;
}
