// 관리자 등록하기
// 사용자 등록폼 만들고 라이팅하기

// 로그인 관련파일
// ./routes/loginRoutes-3.js
// ./controllers/loginController-3.js
// ./views/home-2.ejs
// ./views/register-1.ejs

// 관련파일
// ./routes/contactRoutes-5.js
// ./controllers/contactController-15.js up
// ./views/index-4.ejs up
// ./views/add-2.ejs
// ./views/update-3.ejs

const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

app.use(express.static("./public"));
// method-override 미들웨어 등록
app.use(methodOverride("_method"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행중...`);
});
