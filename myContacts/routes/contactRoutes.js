const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middleware/checkLogin");
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
} = require("../controllers/contactController");

// 미들웨어 등록
router.use(cookieParser());
router.use(checkLogin);

// localhost:3000/contacts 아래의 경로들
// get일 때 checkLogin 실행하고 next()시 getAllContacts
router.route("/").get(getAllContacts);
router.route("/add").get(addContactForm).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
