const fs = require("fs");

// 파일 읽기
// 1. readFileSync(동기)
// 2. readFile(비동기)

const data = fs.readFileSync("./01-hello.js", "utf-8");
console.log(data); // type은 string

fs.readFile("./01-hello.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
