// 전체연락처표시하기

// 관련파일
// ./routes/contactRoutes-3.js
// ./controllers/contactController-10.js
// ./views/index-2.ejs
// ./views/include/_header-1.ejs
// ./views/include/_footer.ejs

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
