// 관리자 등록하기
// 사용자 정보 DB에 등록하기

// 암호(비밀번호)를 암호화하여 DB에 저장하기
// BCrypt 모듈을 사용하여 사용자 정보를 암호화(해시함수)하여 DB에 저장한다.
// 해시 : 특정 키워드(문자열)을 통해 암호화하는 방법, 단방향(원문을 알 수 없음)
// npm i bcrypt

// 로그인 관련파일
// ./routes/loginRoutes-4.js
// ./controllers/loginController-4.js
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
