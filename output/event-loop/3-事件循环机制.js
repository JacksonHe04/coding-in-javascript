const promise = new Promise((resolve, reject) => {
  console.log(1); //  1. 同步代码

  setTimeout(() => { // 4. 宏任务
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);

  console.log(2); // 2. 同步代码
});

promise.then((res) => { // 5. 微任务
  console.log(res);
});

console.log(4); // 3. 同步代码