const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 3. 第一个宏任务
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  // 4. 微任务
  throw new Error("error!!!"); // 5. 未捕获的错误
});
console.log("promise1", promise1); // 1. 同步代码
console.log("promise2", promise2); // 2. 同步代码
setTimeout(() => {
  // 6. 第二个宏任务
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// promise1 Promise {<pending>}
// promise2 Promise {<pending>}
// Uncaught (in promise) Error: error!!!
// promise1 Promise {<fufilled>: "success"}
// promise2 Promise {<rejected>: Error: error!!!}
