/*
*
* *//**
 * 计算给定高度图下雨后能接多少雨水
 * @param {number[]} height - 一个非负整数数组表示高度图
 * @returns {number} 接到的雨水总量
 */
const trap = function (height) {
  let water = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    // 根据左右指针位置更新左右最高的高度
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};

const trap = function (height) {
  let water = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};

function main() {
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  console.log(trap([4, 2, 0, 3, 2, 5])); // 9
  console.log(trap([4, 2, 3])); // 1
}

main();
