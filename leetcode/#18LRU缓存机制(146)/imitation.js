/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail
    this.tail.next = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.moveToHead(node);
    } else {
        const node = new ListNode(key, value);
        this.cache.set(key, node);
        this.addToHead(node);
        if (this.cache.size > this.capacity) {
            const tail = this.removeTail();
            this.cache.delete(tail.key);
        }
    }
};

function ListNode (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

LRUCache.prototype.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

LRUCache.prototype.addToHead = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addToHead(node);
;}

LRUCache.prototype.removeTail = function () {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */