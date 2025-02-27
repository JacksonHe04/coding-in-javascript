/**
 * @param {number[]} nums - 输入的数字数组
 * @param {number} k - 需要找到的第K个最大元素的位置
 * @return {number} - 返回数组中第K大的元素
 */
var findKthLargest = function (nums, k) {
    // 初始化堆的大小为数组的长度
    let size = nums.length;

    // 构建大顶堆：通过调整每个非叶子节点来确保整个数组满足大顶堆的性质
    buildMaxHeap(nums, size);

    // 开始下沉操作：将前k-1个最大元素依次移至数组末尾
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        // 将当前堆顶（最大值）与数组末尾元素交换位置
        swap(nums, 0, i);

        // 减小堆的大小，使得已下沉的最大元素不再参与后续调整
        --size;

        // 重新调整剩余部分为大顶堆，以保证下次下沉时堆顶仍为最大值
        maxHeapify(nums, 0, size);
    }

    // 经过k-1次下沉后，此时堆顶即为第k大元素，直接返回
    return nums[0];

    /**
     * 自下而上构建大顶堆
     * @param {number[]} nums - 数组
     * @param {number} size - 堆的大小
     */
    function buildMaxHeap(nums, size) {
        // 从最后一个非叶子节点开始向上调整，确保每个子树都满足大顶堆性质
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            maxHeapify(nums, i, size);
        }
    }

    /**
     * 调整以索引i为根节点的子树，使其满足大顶堆性质
     * @param {number[]} nums - 数组
     * @param {number} i - 当前节点索引
     * @param {number} size - 堆的大小
     */
    function maxHeapify(nums, i, size) {
        // 计算左子节点的索引
        let l = i * 2 + 1;
        // 计算右子节点的索引
        let r = i * 2 + 2;
        // 假设当前节点是最大值所在位置
        let largest = i;

        // 如果左子节点存在且大于当前最大值，则更新最大值索引
        if (l < size && nums[l] > nums[largest]) {
            largest = l;
        }

        // 如果右子节点存在且大于当前最大值，则更新最大值索引
        if (r < size && nums[r] > nums[largest]) {
            largest = r;
        }

        // 如果最大值不在当前节点，则需要交换，并递归调整子树
        if (largest !== i) {
            swap(nums, i, largest);
            maxHeapify(nums, largest, size);
        }
    }

    /**
     * 交换数组中两个元素的位置
     * @param {number[]} a - 数组
     * @param {number} i - 第一个元素索引
     * @param {number} j - 第二个元素索引
     */
    function swap(a, i, j) {
        // 使用临时变量进行交换
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
};