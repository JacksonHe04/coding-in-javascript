const merge = function (nums1, m, nums2, n) {
  // 使用 splice 方法从索引 m 开始删除 nums1 中多余的元素，并将 nums2 的所有元素插入到 nums1 中
  nums1.splice(m, nums1.length - m, ...nums2);

  // 对合并后的数组进行排序，确保 nums1 是有序的。这里使用了 sort 方法和比较函数 (a, b) => a - b 来实现升序排列
  nums1.sort((a, b) => a - b);
};
