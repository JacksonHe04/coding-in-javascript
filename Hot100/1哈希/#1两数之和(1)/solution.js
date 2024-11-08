/**
 * 目标是找到数组中两个数的索引，使这两个数的和等于 target。
 * 使用一个对象 map 来存储数组中的每个元素及其索引。
 * 遍历数组 nums，对于每个元素 nums[i]：
 * 计算补数 complement，即 target - nums[i]。
 * 检查 map 中是否存在 complement：
 * 如果存在，返回 [map[complement], i]。
 * 如果不存在，将 nums[i] 及其索引 i 存入 map 中。
 * 如果找到符合条件的两个数，返回它们的索引。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};

function main() {
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]
}

main();
