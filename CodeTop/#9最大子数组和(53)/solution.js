/**
 * 寻找数组中连续子数组的最大和
 *
 * @param {number[]} nums - 输入的整数数组
 * @returns {number} - 返回连续子数组的最大和
 */
function maxSubArray(nums) {
  // 初始化当前子数组的最大和为0，整个数组的最大和为数组第一个元素
  let pre = 0,
    maxAns = nums[0];

  // 遍历数组中的每个元素
  nums.forEach((x) => {
    // 更新当前子数组的最大和，如果加上当前元素后大于当前元素，就保留原值，否则取当前元素的值
    pre = Math.max(pre + x, x);
    // 更新整个数组的最大和，比较当前最大和与当前子数组的最大和，取较大值
    maxAns = Math.max(maxAns, pre);
  });

  // 返回整个数组的最大和
  return maxAns;
}
