/**
 * 该解法是基于我的初始解法的改进，但是用时会稍长
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let lengthOfNums = nums.length;
  for (let i = 0; i < lengthOfNums; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      lengthOfNums--;
    }
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
