function levelOrder(root) {
  let res = [];
  if(!root) return res;
  let aux = [];
  aux.push(root);
  while(aux.length) {
    const l = aux.length;
    res.push([]);
    for(let i = 0; i < l; i++) {
      const node = aux.shift();
      res[res.length - 1].push(node.val);
      if(node.left) aux.push(node.left);
      if(node.right) aux.push(node.right);
    }
  }
  return res;
}