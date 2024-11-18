/**
 * 用的是穷举的循环
 * 超出时间限制
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let countNum = 0;
  const result = [];
  const resultSet = new Set();
  const length = nums.length;
  let a = 0;
  let b = 1;
  let c = 2;
  while (a !== length - 2) {
    while (b !== length - 1) {
      while (c !== length) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const singleReuslt = [];
          singleReuslt.push(nums[a]);
          singleReuslt.push(nums[b]);
          singleReuslt.push(nums[c]);
          singleReuslt.sort((a, b) => a - b);
          resultSet.add(JSON.stringify(singleReuslt));
        }
        countNum++;
        ++c;
      }
      ++b;
      c = b + 1;
    }
    ++a;
    b = a + 1;
    c = b + 1;
  }
  console.log(countNum);
  for (let str of resultSet) {
    result.push(JSON.parse(str));
  }

  return result;
};

function main() {
  console.log(threeSum([-1, 0, 1, 2, -1, -4]));
  console.log(threeSum([0, 0, 0]));
  console.log(threeSum([0, 1, 1]));
  console.log(threeSum([-1, 0, 1, 2, -1, -4, 0, 1]));
  console.log(threeSum([3, 0, -2, -1, 1, 2]));
}

main();
