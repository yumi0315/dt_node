// 일반함수와 화살표함수(ES6 - ES2015)

// 함수형 변수(함수 표현식)

let hi = function () {
  return "안녕하세요?";
};
console.log(hi());

// 일반함수의 매개변수로 전달
function sayHi(method) {
  console.log(method());
}
sayHi(hi);

// 화살표 함수로 변환
let hi2 = () => {
  return "안녕하세요?";
};
console.log(hi2());
sayHi(hi2);

let sum = (a, b) => a + b;
