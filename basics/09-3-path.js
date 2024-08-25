// path 모듈 사용하기
const path = require("path");

// path 모듈 : window/Mac(Linux)
//  파일경로 : C:\users\me      ios
//              /users/me       window
//  OS 특성을 고려하여 파일경로에 대한 기능을 제공한다.

// 경로 연결하기
const fullPath = path.join("some", "work", "test.txt");
// 순서대로 os에맞는 구분자로 구분하면서 붙임
console.log(fullPath);

// 절대 경로 : C:\users\me\test.txt  /users/me/test.txt
// 상대 경로 : .\test.txt  ./test/txt
// . : 현재 경로(디렉토리, 폴더)
// ..: 현재 경로의 한단계 상위폴더 me폴더의 ..폴더는 users 폴더이다.

// 절대 경로
console.log(`파일 절대 경로 : ${__filename}`); // C:\Users\samsung\Documents\nodejs\basics\09-3-path.js

// 폴더이름만 가져오기
const dir = path.dirname(__filename);
console.log(dir); // C:\Users\samsung\Documents\nodejs\basics

// 파일이름만 가져오기
const filename = path.basename(__filename);
console.log(filename); // 09-3-path.js

// 확장자 제외
const pureFilename = path.basename(__filename, ".js");
console.log(pureFilename); // 09-3-path

// 확장자만 가져오기
const ext = path.extname(__filename);
console.log(ext); // .js

const filename2 = path.basename(__filename, ext);
console.log(filename2); // 09-3-path

// 경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath); // 객체로 나옴
console.log(parsedPath.name);
