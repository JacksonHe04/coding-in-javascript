function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)){
      throw new TypeError("argument must be a array");
    }

    let promiseNum = promises.length;
    let resolvedPromise = 0;
    let resolvedResults = [];

    for(let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (res) => {
          resolvedPromise++;
          resolvedResults[i]=res;
          if(resolvedPromise === promiseNum){
            return resolve(resolvedResults);
          }
        },
        (error) => {
          return reject(error);
        }
    )
    }
  });
}

let p1 = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(1);
  }, 1000)
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(2);
  }, 2000)
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve(3);
  }, 3000)
});

promiseAll([p3, p2, p1]).then(res => {
  console.log(res);
})