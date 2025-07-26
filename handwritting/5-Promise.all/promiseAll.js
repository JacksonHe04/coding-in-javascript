/**
 * 自定义实现的 Promise.all 方法。
 * 该函数接受一个包含多个 Promise 对象的数组作为输入，并返回一个新的 Promise。
 * 新的 Promise 在所有输入的 Promise 都成功解决时解决，或在任意一个 Promise 被拒绝时拒绝。
 *
 * @param {Promise[]} promises - 包含多个 Promise 对象的数组。
 * @returns {Promise} - 一个新的 Promise，在所有输入 Promise 成功解决时，返回一个包含所有结果的数组；
 *                      如果任意一个 Promise 被拒绝，则返回拒绝的原因。
 */
function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    // 检查输入是否为数组，如果不是则抛出 TypeError。
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`);
    }
    // 初始化已解决的 Promise 计数器。
    let resolvedCounter = 0;
    // 获取 Promise 的数量。
    let promiseNum = promises.length;
    // 初始化存储结果的数组。
    let resolvedResult = [];
    // 遍历每个 Promise。
    for (let i = 0; i < promiseNum; i++) {
      // 使用 Promise.resolve 处理每个 Promise，并添加 then 和 catch 回调。
      Promise.resolve(promises[i]).then(
        (value) => {
          // 每当一个 Promise 解决时，增加计数器。
          resolvedCounter++;
          // 将解决的值存储在结果数组中对应的位置。
          resolvedResult[i] = value;
          // 如果所有 Promise 都已解决，则返回包含所有结果的数组。
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult);
          }
        },
        (error) => {
          // 如果任意一个 Promise 被拒绝，则返回拒绝的原因。
          return reject(error);
        },
      );
    }
  });
}

// 测试
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
