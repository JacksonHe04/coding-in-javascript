/**
 * (失败案例)
 * 在 moveZeroes 函数中，当遇到数组中的零时，会执行以下操作：
 * 1. 使用 splice 方法从当前索引位置删除一个元素。
 * 2. 将删除的零 push 到数组末尾。
 * 这种操作会导致数组长度变化，进而影响后续元素的索引。
 * 具体来说，每次删除一个元素后，后续元素的索引会向前移动一位.
 * 但循环变量 i 仍然递增，这可能导致某些元素被跳过。
 * 对于输入 [0, 0, 1]，函数的执行过程如下：
 * 第一次迭代 (i = 0)：
 * nums[0] === 0，删除 nums[0]，数组变为 [0, 1]。
 * 将 0 添加到数组末尾，数组变为 [0, 1, 0]。
 * numOfZero 增加 1，变为 1。
 * 第二次迭代 (i = 1)：
 * nums[1] === 1，不执行任何操作。
 * 第三次迭代 (i = 2)：
 * 循环结束，因为 i 已经等于 lengthOfNums。
 * 最终数组变为 [0, 1, 0]，而不是预期的 [1, 0, 0]。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let numOfZero = 0;
  const lengthOfNums = nums.length;
  for (let i = 0; i < lengthOfNums; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      numOfZero += 1;
      nums.push(0);
      console.log(nums);
    }
  }
};

function main() {
  const nums = [0, 1, 0, 3, 12];
  const nums2 = [0];
  const nums3 = [0, 0, 1];
  // moveZeroes(nums);
  // console.log(nums);
  // moveZeroes(nums2);
  // console.log(nums2);
  moveZeroes(nums3);
  console.log(nums3);
}

main();
