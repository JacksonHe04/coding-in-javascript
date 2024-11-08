/**
 * 该解法使用了双指针，是推荐的解法
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let numNotZero = 0;
  for (let i =0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[numNotZero] = nums[i];
      numNotZero += 1;
    }
  }
  for (let i = numNotZero; i < nums.length; i++) {
    nums[i] = 0;
  }
};

function main() {
  const nums = [0, 1, 0, 3, 12];
  const nums2 = [0];
  const nums3 = [0, 0, 1];
  moveZeroes(nums);
  console.log(nums);
  moveZeroes(nums2);
  console.log(nums2);
  moveZeroes(nums3);
  console.log(nums3);
}

main();
