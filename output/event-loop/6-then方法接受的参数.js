// 创建一个Promise对象，该对象立即以值1解析
Promise.resolve(1)
  // 当前Promise解析后，返回一个新的Promise，其解析值为2
  .then(2)
  // 上一个Promise解析后，返回一个新的Promise，其解析值为传入的Promise对象，该对象立即以值3解析
  .then(Promise.resolve(3))
  // 最后一个Promise解析后，将解析值传入console.log函数进行输出
  .then(console.log)
