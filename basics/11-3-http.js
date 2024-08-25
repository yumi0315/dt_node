const http = require("http");
const fs = require("fs");

// html 파일로 응답하기
const server = http.createServer((req, res) => {
  console.log("HTTP 요청 발생!");
  console.log(req.method);

  res.setHeader("Content-Type", "text/html"); // 응답헤더
  const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중...");
});
