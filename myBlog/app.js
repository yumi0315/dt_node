// 블로그 앱 만들기

// npm 초기화(node.js 앱 초기화)
// npm init -y
// -y 옵션 : 선택사항을 기본으로 처리

// 노드몬 : 소스변경시 자동으로 app.js 재시작
// npm i nodemon

// package.json
// "start": "nodemon app.js"

// 익스프래스, dotenv 설치
// npm i express dotenv

// ejs 관련 패키지
// npm i ejs express-ejs-layouts

// 일반사용자 모드
// 1. 자기 게시물(Post) - 보기, 작성, 수정, 삭제 가능
// 2. 타인 게시물 - 보기만 가능
// 관리자 모드
// 1. 모든 게시물 - 보기, 작성, 수정, 삭제 가능

const express = require("express");
require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(cookieParser());

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행중...`);
});
