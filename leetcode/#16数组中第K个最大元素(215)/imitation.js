/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let size = nums.length;
    buildMaxHeap(nums, size);
    for(let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);
        size--;
        maxHeapify(nums, 0, size);
    }

    return nums[0];

    function buildMaxHeap(nums, size) {
        for(let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            maxHeapify(nums, i, size);
        }
    }

    function maxHeapify(nums, i, size) {
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let largest = i;

        if (l < size && nums[l] > nums[largest]) {
            largest = l;
        }

        if (r < size && nums[r] > nums[largest]) {
            largest = r;
        }

        if (largest !== i) {
            swap(nums, i, largest);
            maxHeapify(nums, largest, size);
        }
    }

    function swap(nums, a, b) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
};