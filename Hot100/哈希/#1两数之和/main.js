/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log("complement=", complement);
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
    console.log("i=", i, map);
  }
};

function main() {
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]
}

main();
