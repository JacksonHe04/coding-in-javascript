/**
 * 反转一个单链表
 *
 * @param {ListNode} head - 链表的头节点
 * @return {ListNode} - 反转后的链表的头节点
 */
function reverseList(head) {
  // 初始化前一个节点为null，因为链表的第一个节点在反转后将成为最后一个节点，它的next应该指向null
  let prev = null;
  // 初始化当前节点为链表的头节点
  let curr = head;
  // 遍历链表，直到当前节点为空，表示已经反转完整个链表
  while (curr) {
    // 保存当前节点的下一个节点，用于接下来的反转操作
    const next = curr.next;
    // 反转当前节点的next指针，指向前面的节点
    curr.next = prev;
    // 更新前一个节点为当前节点，为下一次反转做准备
    prev = curr;
    // 更新当前节点为下一个节点，继续遍历链表
    curr = next;
  }
  // 返回反转后的链表的头节点
  return prev;
}
