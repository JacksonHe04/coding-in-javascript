// 构造函数
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})

// 微任务
const promise2 = promise1.then(res => {
  console.log(res)
})

// 同步任务
console.log('1', promise1);
console.log('2', promise2);