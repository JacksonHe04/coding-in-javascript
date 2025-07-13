const http = require("http");

/**
 * 创建JSONP服务器
 * 处理跨域请求并返回JSONP格式的响应
 */
const server = http.createServer((req, res) => {
  // 解析URL参数
  const url = new URL(req.url, "http://localhost:8080");
  const callback = url.searchParams.get("callback");
  const name = url.searchParams.get("name");

  // 构建JSONP响应数据
  const responseData = {
    status: "success",
    message: `Hello, ${name}`,
    timestamp: new Date().toISOString()
  };

  // 返回JSONP格式的响应
  res.writeHead(200, { 
    "Content-Type": "application/javascript",
    "Access-Control-Allow-Origin": "*" // 允许跨域
  });
  res.end(`${callback}(${JSON.stringify(responseData)})`);
});

// 启动服务器
server.listen(8080, () => {
  console.log("JSONP服务器已启动，监听端口8080");
});