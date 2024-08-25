const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// @desc 로그인폼(화면)
// @route GET /
const getLogin = (req, res) => {
  res.render("home-2");
};

// @desc 로그인 처리(액션)
// @route POST /
const loginUser = asyncHandler(async (req, res) => {
  // 로그인 처리를 위해서는 아이디/암호를 로그인 폼으로부터 받아온다.
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.send("로그인 성공!");
  } else {
    res.send("로그인 실패!");
  }
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
  // 사용자가 입력한 암호 해시암호화. 두번째 파라미터는 해시돌리는 횟수
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword });
  res.status(201).json({ message: "사용자 등록되었습니다.", user });
});

module.exports = { getLogin, loginUser, getRegister, registerUser };
