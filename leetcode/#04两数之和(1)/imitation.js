function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; ; i++) {
    const x = nums[i];
    if (map.has(target - x)) return [map.get(target - x), i];
    map.set(x, i);
  }
}

// test
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));