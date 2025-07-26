/**
 * 寻找数组中两个数之和等于目标值的下标
 * 通过哈希表实现，以空间换时间的方式提高查找效率
 * 
 * @param {number[]} nums - 输入的数组
 * @param {number} target - 目标值
 * @returns {number[]} - 返回满足条件的两个数的下标
 */
function twoSum(nums, target) {
  // 创建一个空哈希表，用于存储数组元素和对应的下标
  const map = new Map();
  // 枚举数组元素，i 为当前元素的下标
  for (let i = 0; ; i++) {
    // 获取当前元素的值
    const x = nums[i];
    // 在左边找 nums[i]，满足 nums[i]+x=target
    // 如果找到了满足条件的元素，则返回其下标和当前元素的下标
    if (map.has(target - x)) {
      return [map.get(target - x), i];
    }
    // 如果没有找到，则将当前元素和其下标存入哈希表中
    map.set(x, i);
  }
};

// test
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));