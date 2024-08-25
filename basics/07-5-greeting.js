const hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};

const buy = (name) => console.log(`${name}님, 안녕히가세요.`);

// 복수모듈 내보내기
// exports.hello = hello;
// exports.buy = buy;

//단일 모듈 내보내기
module.exports = { hello, buy };
