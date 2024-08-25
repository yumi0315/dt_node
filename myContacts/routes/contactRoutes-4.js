const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm, // 연락처 추가폼
} = require("../controllers/contactController");
// 라우터와 컨트롤러 분리 contactController-11.js

// localhost:3000/contacts 아래의 경로들
router.route("/").get(getAllContacts).post(createContact);
router.get("/add", addContactForm);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
