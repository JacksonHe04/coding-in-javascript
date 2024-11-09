/**
 * 用双指针法将时间复杂度降低到 O(n)。
 * 具体做法是从数组的两端开始，逐步向中间移动指针;
 * 每次移动较短的一边，直到两个指针相遇。
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;
  // 使用 while 循环，两边往里缩进，直到相遇
  while (left < right) {
    const water = height[height[left] < height[right] ? left : right] * (right - left);
    if (water > maxWater) {
      maxWater = water;
    }
    // 每次两边只移动一边
    // water = 较高的一边的值*两边的索引差
    // height[height[left] < height[right] ? left : right]
    // * (right - left) // 两边的索引差每次减小1
    // 所以要使较高的一边的值尽可能大
    // 所以要让较小的那一边往里缩进寻找新的数值
    // 这样就能全部遍历，并且筛去了较小的一边继续遍历的情况
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

function main() {
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  console.log(maxArea([1, 1]));
  console.log(maxArea([4, 3, 2, 1, 4]));
  console.log(maxArea([1, 2, 1]));
}

main();
