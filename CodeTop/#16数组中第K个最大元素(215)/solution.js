/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 整个流程就是上浮下沉
var findKthLargest = function(nums, k) {
    // 初始化堆的大小为数组的长度
    let heapSize=nums.length
    // 构建好了一个大顶堆
    buildMaxHeap(nums,heapSize)
    // 进行下沉 大顶堆是最大元素下沉到末尾
    for(let i=nums.length-1;i>=nums.length-k+1;i--){
        // 交换堆顶元素和当前末尾元素
        swap(nums,0,i)
        // 下沉后的元素不参与到大顶堆的调整
        --heapSize
        // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
    }
    // 返回堆顶元素，即第k大元素
    return nums[0]
    // 自下而上构建一颗大顶堆
    function buildMaxHeap(nums,heapSize){
        // 从最后一个非叶子节点开始向上构建大顶堆
        for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
            // 对每个非叶子节点进行调整，使其满足大顶堆的性质
            maxHeapify(nums,i,heapSize)
        }
    }
    // 从左向右，自上而下的调整节点
    function maxHeapify(nums,i,heapSize){
        // 计算左子节点的索引
        let l=i*2+1
        // 计算右子节点的索引
        let r=i*2+2
        // 初始化最大值索引为当前节点索引
        let largest=i
        // 如果左子节点存在且大于当前最大值，则更新最大值索引
        if(l < heapSize && nums[l] > nums[largest]){
            largest=l
        }
        // 如果右子节点存在且大于当前最大值，则更新最大值索引
        if(r < heapSize && nums[r] > nums[largest]){
            largest=r
        }
        // 如果最大值索引不是当前节点索引，则交换节点位置并递归调整子树
        if(largest!==i){
            // 交换当前节点和最大值节点的位置
            swap(nums,i,largest)
            // 继续调整下面的非叶子节点
            maxHeapify(nums,largest,heapSize)
        }
    }
    // 交换数组中两个元素的位置
    function swap(a,  i,  j){
        // 临时变量用于存储交换的值
        let temp = a[i];
        // 将j位置的值赋给i位置
        a[i] = a[j];
        // 将临时变量的值赋给j位置
        a[j] = temp;
    }
};
