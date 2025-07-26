// Promise 微任务
// 创建一个Promise对象，该对象封装了异步操作
const promise = new Promise((resolve, reject) => {
  // 执行器函数，在创建 Promise 对象时立即执行
  console.log(1);
  console.log(2);
});

// 为Promise对象添加then方法，处理异步操作成功时的逻辑
promise.then(() => {
  // 当Promise中的异步操作成功时，输出数字表示操作完成
  console.log(3);
});

// 输出数字，表示Promise之外的同步代码执行顺序
console.log(4);
// 打印出Promise状态为pending
console.log(promise);