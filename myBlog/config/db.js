const mongoose = require("mongoose");
const asynchandler = require("express-async-handler");
require("dotenv").config();

const connectDb = asynchandler(async () => {
  // .env 파일에 있는 DB_CONNECT값 사용
  const connect = await mongoose.connect(process.env.DB_CONNECT);
  console.log(`DB connected: ${connect.connection.host}`);
});

module.exports = connectDb;
