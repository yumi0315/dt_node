// 요청 객체 살펴보기
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("HTTP 요청 발생!");
  console.log(req.method);

  res.setHeader("Content-Type", "text/plain"); // 응답헤더
  res.write("Hello Node.js!"); // 응답부분
  res.end(); // 응답종료
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중...");
});
