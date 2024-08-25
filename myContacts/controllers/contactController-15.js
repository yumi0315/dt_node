const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc 전체 연락처 가져오기
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find(); // sql : select * from table;
  res.render("index-4", { contacts });
});

// @desc 새 연락처 추가하기
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  // 객체 구조분해할당, key와 value가 동일함.
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않음");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  // res.redirect("/contacts");
  getAllContacts(req, res);
});

// @desc 연락처 상세보기 => 업데이트 화면으로 상세보기
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-3", { contact }); // PUT방식 요청하기
});

// @desc 연락처 수정하기 액션(UI없이 DB동작만)
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  //   res.status(200).send(`연락처 수정하기 ID: ${req.params.id}`);
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true } // 수정한 후의 도큐먼트로 반환해 주는 옵션
  );

  res.redirect("/contacts");
});

// @desc 연락처 삭제하기
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`연락처 삭제하기 ID: ${req.params.id}`);
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/contacts");
});

// @desc 연락처 추가폼
// @route GET /add
const addContactForm = (req, res) => {
  res.render("add-2");
};

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
};
