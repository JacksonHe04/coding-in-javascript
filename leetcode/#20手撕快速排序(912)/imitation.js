/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    return quickSort(nums, 0, nums.length - 1);
};
function quickSort(nums, l, r) {
    if (l >= r) return;
    let randomPivot = Math.floor(Math.random() * (r - l + 1)) + l;
    [nums[l], nums[randomPivot]] = [nums[randomPivot], nums[l]];
    let [lt, gt] = partition(nums, l, r);
    quickSort(nums, l, lt - 1);
    quickSort(nums, gt + 1, r);

    return nums;
}

function partition(nums, l, r) {
    let pivot = nums[l];
    let lt = l;
    let gt = r;
    let i = l + 1;

    while (i <= gt) {
        if (nums[i] < pivot) {
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt++;
            i++
        } else if (nums[i] > pivot) {
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            gt--;
        } else {
            i++;
        }
    }
    return [lt, gt]
}