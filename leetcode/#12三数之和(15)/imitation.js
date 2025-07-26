const threeSum = function(nums) {
  let ans = [];
  const l = nums.length;
  if(l < 3) return ans;
  nums.sort((a, b) => a - b);
  for(let i = 0; i < l; i++) {
    if(nums[i] > 0) break
    if(nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = l - 1;
    while(L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if(sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while(nums[L] === nums[L + 1]) L++;
        while(nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      }
      else if(sum < 0) L++;
      else if(sum > 0) R--;
    }
  }
  return ans;
}