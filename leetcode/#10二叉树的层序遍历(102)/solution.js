/**
 * 对二叉树进行层序遍历
 * 层序遍历是指从树的根节点开始，按照层次结构，一层一层地从上到下、从左到右访问每个节点
 * 如果根节点存在，则首先访问根节点，然后依次访问根节点的左子节点和右子节点，接着访问下一层的节点，以此类推
 *
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number[][]} - 返回一个二维数组，其中每个内部数组表示二叉树每一层的节点值
 */
function levelOrder(root) {
  // 初始化一个空数组用于存储层序遍历的结果
  const arr = [];

  // 如果根节点为空，则直接返回空数组
  if (!root) {
    return arr;
  }

  // 初始化一个队列，用于辅助进行层序遍历
  const aux = [];
  // 将根节点加入队列
  aux.push(root);

  // 当队列不为空时，继续进行层序遍历
  while (aux.length !== 0) {
    // 获取当前层的节点数量
    const currentLevelSize = aux.length;
    // 在结果数组中添加一个新层的数组
    arr.push([]);

    // 遍历当前层的所有节点
    // 遍历当前层的所有节点
    for (let i = 0; i < currentLevelSize; i++) {
      // 从队列中取出一个节点
      const node = aux.shift();
      // 将该节点的值添加到当前层的结果数组中
      arr[arr.length - 1].push(node.val);

      // 如果当前节点有左子节点，则将左子节点加入队列
      if (node.left) aux.push(node.left);
      // 如果当前节点有右子节点，则将右子节点加入队列
      if (node.right) aux.push(node.right);
    }
  }

  // 返回层序遍历的结果
  return arr;
}
