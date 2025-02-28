/**
 * 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表
 * 该函数采用递归方式合并，根据节点值的大小决定合并方式
 * 
 * @param {ListNode} l1 - 第一个有序链表的头节点
 * @param {ListNode} l2 - 第二个有序链表的头节点
 * @return {ListNode} - 合并后的有序链表的头节点
 */
var mergeTwoLists = function(l1, l2) {
    // 如果第一个链表为空，则直接返回第二个链表
    if (l1 === null) {
        return l2;
    // 如果第二个链表为空，则直接返回第一个链表
    } else if (l2 === null) {
        return l1;
    // 如果第一个链表的当前节点值小于第二个链表的当前节点值
    } else if (l1.val < l2.val) {
        // 将第一个链表的当前节点的next指针指向剩余节点的合并结果
        l1.next = mergeTwoLists(l1.next, l2);
        // 返回第一个链表的当前节点作为合并后链表的一部分
        return l1;
    } else {
        // 将第二个链表的当前节点的next指针指向剩余节点的合并结果
        l2.next = mergeTwoLists(l1, l2.next);
        // 返回第二个链表的当前节点作为合并后链表的一部分
        return l2;
    }
};