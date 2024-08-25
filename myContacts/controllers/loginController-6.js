const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
  res.render("home-3");
};

// @desc 로그인 처리(액션)
// @route POST /
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "일치하는 사용자가 없습니다." });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
  }
  const token = jwt.sign({ id: user._id }, jwtSecret);
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/contacts");
});

// @desc 사용자등록폼
// @route GET /register
const getRegister = (req, res) => {
  res.render("register-1");
};

// @desc 사용자등록 처리(액션)
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
  if (!username || !password) {
    res.send("필수값이 없습니다.");
    return;
  }
  if (!(password === password2)) {
    res.send("비번과 비번2가 틀립니다.");
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword });
  res.status(201).json({ message: "사용자 등록되었습니다.", user });
});

// @desc 로그아웃 처리
// @route GET /logout
const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports = { getLogin, loginUser, getRegister, registerUser, logout };
