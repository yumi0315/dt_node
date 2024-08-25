const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

router
  .route("/contacts")
  // 모든 연락처 가져오기
  .get((req, res) => {
    res.status(200).send("연락처 페이지");
  })
  // 새 연락처 추가하기
  .post((req, res) => {
    res.status(201).send("연락처 추가하기");
  });

router
  .route("/contacts/:id")
  // 연락처 상세보기
  .get((req, res) => {
    res.status(200).send(`연락처 상세보기 : ID: ${req.params.id}`);
  })
  // 연락처 수정하기
  .put((req, res) => {
    res.status(200).send(`연락처 수정하기 : ID: ${req.params.id}`);
  })
  // 연락처 삭제하기
  .delete((req, res) => {
    res.status(200).send(`연락처 삭제하기 : ID: ${req.params.id}`);
  });

// 라우터 app에 등록하기
app.use(router);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
