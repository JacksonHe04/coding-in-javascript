/**
 * 检查二叉树中是否存在从根到叶子的路径，其路径上的所有节点值之和等于给定的目标和
 *
 * @param {TreeNode} root - 二叉树的根节点
 * @param {number} targetSum - 目标和
 * @return {boolean} - 如果存在符合条件的路径，则返回true，否则返回false
 */
var hasPathSum = function(root, targetSum) {
  // 如果根节点为空，则不存在路径，返回false
  if (root === null) {
    return false;
  }

  // 从目标和中减去根节点的值
  targetSum -= root.val;

  // 如果根节点是叶子节点，检查目标和是否减到了0，这说明找到了一条符合条件的路径
  if (root.left === root.right) { // root 是叶子
    return targetSum === 0;
  }

  // 递归检查左子树和右子树是否存在符合条件的路径，只要有一边存在即可返回true
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
