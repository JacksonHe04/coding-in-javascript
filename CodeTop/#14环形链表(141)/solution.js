/**
 * 检查链表中是否存在环
 * 使用快慢指针策略，快指针每次移动两步，慢指针每次移动一步
 * 如果链表中存在环，快指针最终会追上慢指针
 * 如果链表中不存在环，快指针会首先到达链表末尾
 * @param {ListNode} head - 链表的头节点
 * @return {boolean} - 返回链表中是否存在环
 */
var hasCycle = function(head) {
  // 初始化快慢指针，都指向链表头节点
  let slow = head, fast = head; // 乌龟和兔子同时从起点出发
  // 遍历链表，直到快指针到达末尾或快指针追上慢指针
  while (fast && fast.next) {
    // 慢指针走一步
    slow = slow.next; // 乌龟走一步
    // 快指针走两步
    fast = fast.next.next; // 兔子走两步
    // 如果快指针追上慢指针，说明链表中存在环
    if (fast === slow) { // 兔子追上乌龟（套圈），说明有环
      // 返回true表示链表中存在环
      return true;
    }
  }
  // 如果快指针到达链表末尾，说明链表中无环，返回false
  return false; // 访问到了链表末尾，无环
};
