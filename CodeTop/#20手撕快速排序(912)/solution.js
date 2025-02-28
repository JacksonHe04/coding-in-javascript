/**
 * 快速排序算法的入口函数
 * @param {number[]} nums - 需要排序的数组
 * @return {number[]} - 排序后的数组
 */
var sortArray = function(nums) {
    // 如果数组长度小于2，直接返回原数组（已经有序）
    if (nums.length < 2) return nums;
    // 调用快速排序主函数进行排序，并返回结果
    return quickSort(nums, 0, nums.length - 1);
};

/**
 * 快速排序主函数，递归地对数组进行排序
 * @param {number[]} nums - 需要排序的数组
 * @param {number} left - 当前处理区间的左边界索引
 * @param {number} right - 当前处理区间的右边界索引
 */
function quickSort(nums, left, right) {
    // 如果区间不合法（即left >= right），直接返回
    if (left >= right) return;

    // 随机选择一个枢轴元素，并将其与左边界元素交换位置
    let randomPivot = Math.floor(Math.random() * (right - left + 1)) + left;
    [nums[left], nums[randomPivot]] = [nums[randomPivot], nums[left]];

    // 使用partition函数对数组进行划分，返回两个指针lt和gt
    let [lt, gt] = partition(nums, left, right);

    // 递归地对小于枢轴的部分进行排序
    quickSort(nums, left, lt - 1);
    // 递归地对大于枢轴的部分进行排序
    quickSort(nums, gt + 1, right);

    // 返回排序后的数组
    return nums;
}

/**
 * 划分函数，根据枢轴将数组划分为三部分：小于枢轴、等于枢轴、大于枢轴
 * @param {number[]} nums - 需要划分的数组
 * @param {number} left - 当前处理区间的左边界索引
 * @param {number} right - 当前处理区间的右边界索引
 * @return {number[]} - 返回两个指针lt和gt，分别指向小于枢轴部分的最后一个元素和大于枢轴部分的第一个元素
 */
function partition(nums, left, right) {
    // 选择最左边的元素作为枢轴
    let pivot = nums[left];

    // 初始化三个指针：
    // lt: 指向小于枢轴部分的最后一个元素
    // gt: 指向大于枢轴部分的第一个元素
    // i: 用于遍历数组，寻找需要调整位置的元素
    let lt = left;           // nums[left+1...lt] < pivot
    let gt = right;         // nums[gt...right] > pivot
    let i = left + 1;       // nums[lt+1...i) == pivot

    // 遍历数组，根据元素与枢轴的关系进行调整
    while (i <= gt) {
        if (nums[i] < pivot) {
            // 如果当前元素小于枢轴，将其与lt位置的元素交换，并更新lt和i
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt++;
            i++;
        } else if (nums[i] > pivot) {
            // 如果当前元素大于枢轴，将其与gt位置的元素交换，并更新gt
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            gt--;
        } else {
            // 如果当前元素等于枢轴，继续向后遍历
            i++;
        }
    }

    // 返回两个指针lt和gt，用于后续的递归调用
    return [lt, gt];
}