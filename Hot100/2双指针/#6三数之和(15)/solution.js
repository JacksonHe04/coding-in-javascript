/**
 * 双指针
 * 先固定第一个数
 * 然后对该数右边的数集进行两边夹近
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const result = [];
  const length = nums.length;
  const resultSet = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let secondIndex = i + 1;
    let thirdIndex = length - 1;

    while (secondIndex < thirdIndex) {
      if (nums[i] + nums[secondIndex] + nums[thirdIndex] === 0) {
        resultSet.add(JSON.stringify([nums[i], nums[secondIndex], nums[thirdIndex]]));
        secondIndex++;
        thirdIndex--;
      }
      if (nums[i] + nums[secondIndex] + nums[thirdIndex] < 0) {
      secondIndex++;
      }
      if (nums[i] + nums[secondIndex] + nums[thirdIndex] > 0) {
      thirdIndex--;
      }
    }
  }

  resultSet.forEach(item => result.push(JSON.parse(item)));
  return result;
};

function main() {
  console.log(threeSum([-1, 0, 1, 2, -1, -4]));
  console.log(threeSum([0, 0, 0]));
  console.log(threeSum([0, 1, 1]));
  console.log(threeSum([-1, 0, 1, 2, -1, -4, 0, 1]));
  console.log(threeSum([3, 0, -2, -1, 1, 2]));
  console.log(threeSum([-2, 0, 0, 2, 2]));
}

main();
