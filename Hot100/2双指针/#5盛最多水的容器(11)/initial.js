/**
 * 该初始解法能解决大多数情况；
 * 但是在面对一个巨大的案例时用时过长；
 * 因为使用了双重循环，时间复杂度为 O(n^2)
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let maxWater = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const water = height[height[i]<height[j]?i:j]*(j-i)
      console.log("water of", height[i], "and", height[j], "is", water);
      if (water > maxWater) {
        maxWater = water;
      }
    }
  }
  console.log("maxWater is");
  return maxWater;
};

function main() {
    console.log(maxArea([1,8,6,2,5,4,8,3,7]));
    console.log(maxArea([1,1]));
    console.log(maxArea([4,3,2,1,4]));
    console.log(maxArea([1,2,1]));
}

main();