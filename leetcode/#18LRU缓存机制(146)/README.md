### 146. LRU 缓存
**难度**：中等

请你设计并实现一个满足 <code>LRU</code>（最近最少使用）缓存约束的数据结构。

实现 <code>LRUCache</code> 类：
- <code>LRUCache(int capacity)</code>：以正整数作为容量 <code>capacity</code> 初始化 <code>LRU</code> 缓存。
- <code>int get(int key)</code>：如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code>。
- <code>void put(int key, int value)</code>：如果关键字 <code>key</code> 已经存在，则变更其数据值 <code>value</code>；如果不存在，则向缓存中插入该组 <code>key-value</code>。如果插入操作导致关键字数量超过 <code>capacity</code>，则应该逐出最久未使用的关键字。

函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。

#### 示例
**输入**：
```
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
```
**输出**：
```
[null, null, null, 1, null, -1, null, -1, 3, 4]
```
**解释**：
```
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

#### 提示
- <code>1 <= capacity <= 3000</code>
- <code>0 <= key <= 10000</code>
- <code>0 <= value <= 10<sup>5</sup></code>
- 最多调用 <code>2 * 10<sup>5</sup></code> 次 <code>get</code> 和 <code>put</code>

**通过次数**：773.8K
**提交次数**：1.4M
**通过率**：54.2%