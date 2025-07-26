// 定义服务器URL常量
const SERVER_URL = "/server";

// 创建 XMLHttpRequest 对象
let xhr = new XMLHttpRequest();

// 创建 Http 请求
xhr.open("GET", SERVER_URL, true);

// 设置状态监听函数
xhr.onreadystatechange = function() {
  // 检查请求状态，如果不是完成状态则返回
  if (this.readyState !== 4) return;

  // 当请求成功时
  if (this.status === 200) {
    // 调用处理函数处理响应数据
    handle(this.response);
  } else {
    // 输出错误信息
    console.error(this.statusText);
  }
};

// 设置请求失败时的监听函数
xhr.onerror = function() {
  // 输出错误信息
  console.error(this.statusText);
};

// 设置响应类型
xhr.responseType = "json";

// 设置请求头信息
xhr.setRequestHeader("Accept", "application/json");

// 发送 Http 请求
xhr.send(null);
