const http = require("http");

// 라우팅(routing) : 클라이언트 요청에 따라 다른 함수를 수행하는 것

const server = http.createServer((req, res) => {
  console.log("HTTP 요청 발생!");
  const { method, url } = req;

  res.setHeader("Content-Type", "text/plain;charset=UTF-8");
  // URL에 따른 다른 응답을 구현 : 라우팅
  // === 내용과 타입을 함께 비교한다
  if (method === "GET" && url === "/home") {
    res.statusCode = 200; // 정상적인 응답
    res.end("HOME");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200; // 정상적인 응답
    res.end("ABOUT");
  } else {
    res.statusCode = 404; // 없는 경로(요청)
    res.end("알 수 없는 요청잆니다.(경로나 자원이 없음)");
  }
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중...");
});
