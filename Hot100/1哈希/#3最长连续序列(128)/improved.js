/**
 * @param {number[]} nums
 * @return {number} result
 */
const longestConsecutive = function (nums) {
  const map = new Map();
  nums.sort((a, b) => a - b);

  let check = 0;
  map.set(check, nums.length === 0 ? 0 : 1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      map.set(check, map.get(check) + 1);
    } else if (nums[i] === nums[i - 1]) {
    } else {
      map.set(++check, 1);
    }
  }
  return Math.max(...map.values());
};

function main() {
  console.log(longestConsecutive([1, 2, 0, 1, 100, 101]));
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
  console.log(longestConsecutive([]));
}

main();
