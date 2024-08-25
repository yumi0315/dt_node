// sendFile()함수를 통해 특정 html파일로 응답해 준다.
// html파일 : assets/contacts.html 생성

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(__dirname + "/assets/contacts.html");
});

app.listen(port, () => {});
