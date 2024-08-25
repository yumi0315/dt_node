const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
// 라우터와 컨트롤러 분리 contactController-3.js

// localhost:3000/contacts 아래의 경로들
router
  .route("/")
  // 모든 연락처 가져오기
  .get(getAllContacts)
  // 연락처 추가하기
  .post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
