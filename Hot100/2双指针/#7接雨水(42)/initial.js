/**
 * 失败
 * 对于 [4,2,3] 输入，返回 0，正确答案是 1
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  let water = 0;
  const length = height.length;
  let lastRight = 0;
  for (let leftWall = 0; leftWall < length - 2; leftWall++) {
    if (leftWall < lastRight) {
      continue;
    }
    let rightWall = leftWall + 1;
    let tempBottom = 0;
    let countBottom = 0;
    let tempWater = 0;

    while (height[leftWall] >= height[rightWall]) {
      // if (height[rightWall] < height[rightWall + 1]) {
      //
      // }
      tempBottom += height[rightWall];
      countBottom += 1;

      if (height[rightWall + 1] >= height[leftWall]) {
        const depth =
          height[leftWall] < height[rightWall + 1]
            ? height[leftWall]
            : height[rightWall + 1];
        tempWater += depth * countBottom - tempBottom;
        lastRight = rightWall + 1;
      }
      rightWall++;
    }
    console.log("water of", leftWall, "is", tempWater);
    water += tempWater;
  }
  return water;
};

function main() {
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
  console.log(trap([4, 2, 0, 3, 2, 5]));
  console.log(trap([4, 2, 3]));
}

main();
