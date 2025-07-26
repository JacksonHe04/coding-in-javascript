function maxSubArray(nums) {
  let tem = 0, max = nums[0];
  nums.forEach((x) => {
    tem = Math.max(tem + x, x);
    max = Math.max(tem, max);
  });
  return max;
}