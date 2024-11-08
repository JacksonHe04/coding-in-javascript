/**
 * @param {number[]} nums
 * @return {number} result
 */
const longestConsecutive = function (nums) {
  const map = new Map();
  nums.sort((a, b) => a - b);

  let countSort = [0];
  if (nums.length !== 0) {
    countSort[0]++;
  }
  let check = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      countSort[check]++;
    } else if (nums[i] === nums[i - 1]) {
    } else {
      check++;
      countSort.push(1);
    }
  }
  return Math.max(...countSort);
};

function main() {
  console.log(longestConsecutive([1, 2, 0, 1]));
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
  console.log(longestConsecutive([]));
}

main();
