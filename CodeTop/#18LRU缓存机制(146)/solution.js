/**
 * 初始化LRU缓存
 * @param {number} capacity - 缓存的最大容量
 */
var LRUCache = function(capacity) {
    this.capacity = capacity; // 缓存的最大容量
    this.cache = new Map(); // 用于存储缓存项
    this.head = new ListNode(); // 双向链表的头节点
    this.tail = new ListNode(); // 双向链表的尾节点
    this.head.next = this.tail; // 初始化头节点指向尾节点
    this.tail.prev = this.head; // 初始化尾节点指向头节点
};

/** 
 * 获取缓存项的值
 * @param {number} key - 缓存项的键
 * @return {number} - 返回缓存项的值，如果不存在则返回-1
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1; // 如果缓存中没有该项，则返回-1
    const node = this.cache.get(key); // 获取缓存项节点
    this.moveToHead(node); // 将节点移动到双向链表的头部
    return node.value; // 返回缓存项的值
};

/** 
 * 添加或更新缓存项
 * @param {number} key - 缓存项的键
 * @param {number} value - 缓存项的值
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) { // 如果缓存中已存在该项
        const node = this.cache.get(key);
        node.value = value; // 更新值
        this.moveToHead(node); // 将节点移动到双向链表的头部
    } else { // 如果缓存中不存在该项
        const node = new ListNode(key, value); // 创建新的缓存项节点
        this.cache.set(key, node); // 将节点添加到缓存中
        this.addToHead(node); // 将节点添加到双向链表的头部
        if (this.cache.size > this.capacity) { // 如果缓存超出容量
            const tail = this.removeTail(); // 移除双向链表的尾部节点
            this.cache.delete(tail.key); // 从缓存中删除该项
        }
    }
};

/**
 * 创建双向链表节点
 * @param {number} key - 节点的键
 * @param {number} value - 节点的值
 */
function ListNode(key, value) {
    this.key = key; // 节点的键
    this.value = value; // 节点的值
    this.prev = null; // 前一个节点
    this.next = null; // 后一个节点
}

/**
 * 从双向链表中移除节点
 * @param {ListNode} node - 要移除的节点
 */
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next; // 更新前一个节点的next指针
    node.next.prev = node.prev; // 更新后一个节点的prev指针
};

/**
 * 将节点添加到双向链表的头部
 * @param {ListNode} node - 要添加的节点
 */
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head; // 设置节点的prev指针为头节点
    node.next = this.head.next; // 设置节点的next指针为原头节点的next节点
    this.head.next.prev = node; // 更新原头节点的next节点的prev指针
    this.head.next = node; // 更新头节点的next指针为新节点
};

/**
 * 将节点移动到双向链表的头部
 * @param {ListNode} node - 要移动的节点
 */
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node); // 从双向链表中移除节点
    this.addToHead(node); // 将节点添加到双向链表的头部
};

/**
 * 移除双向链表的尾部节点
 * @return {ListNode} - 返回被移除的节点
 */
LRUCache.prototype.removeTail = function() {
    const node = this.tail.prev; // 获取尾节点的前一个节点
    this.removeNode(node); // 从双向链表中移除节点
    return node; // 返回被移除的节点
};