// 연락처 추가하기
// add.ejs 파일 만들기

// 관련파일
// ./routes/contactRoutes-4.js
// ./controllers/contactController-11.js
// ./views/index-2.ejs
// ./views/add-1.ejs

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

app.use(express.static("./public"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes")); // contactRoutes-3.js

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행중...`);
});
