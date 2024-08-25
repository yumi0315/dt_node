const fs = require("fs");

const appendData = "추가되는 내용입니다.";

const fileName = "./test-1.txt";
if (fs.existsSync(fileName)) {
  console.log(`${fileName}이 존재함`);
  fs.writeFileSync(fileName, appendData, { flag: "a" });
}

fs.appendFile("./test-2.txt", "\n\n 새로운 내용추가", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("파일 내용 추가 완료!");
});
