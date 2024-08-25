// 라우트 파라미터로 동적 URL 처리하기

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Express~");
});

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
  res.status(200).send("Get Contacts");
});

// 새 연락처 추가하기
app.post("/contacts", (req, res) => {
  res.status(201).send("Create Contacts");
});

// 연락처 상세보기
// get url : localhost:3000/contacts/10  <- 10이 id로 매핑됨
app.get("/contacts/:id", (req, res) => {
  res.status(200).send(`View Contacts for ID: ${req.params.id}`);
});

// 연락처 수정하기
// put url : localhost:3000/contacts/10  <- 10이 id로 매핑됨
app.put("/contacts/:id", (req, res) => {
  res.status(200).send(`Update Contacts for ID: ${req.params.id}`);
});

// 연락처 삭제하기
// delete url : localhost:3000/contacts/10  <- 10이 id로 매핑됨
app.delete("/contacts/:id", (req, res) => {
  res.status(200).send(`Delete Contacts for ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행중...`);
});

// HTTP Method : 통신방식
// GET : 데이터를 읽어올 때
// POST : 데이터를 쓸 때
// PUT : 데이터를 수정할 때
// DELETE : 데이터를 삭제할 때

// SQL의 CRUD
// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE

// HTML의 FORM태그는 GET/POST만 지원한다.
