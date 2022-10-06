// sort 추가설명
const arrNum = [13, 9, 10, 2];
let arrNum_test = [13, 9, 19, 2];
let test2 = [...arrNum_test].sort();   // 원본을 만지지 않음 

console.log(arrNum_test);  // [ 13, 9, 19, 2 ]
console.log(test2);  //  [ 13, 19, 2, 9 ]

// 조건식 ? 참일경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

let item = true ? console.log('true') : console.log('false');

console.log(item);
// true

// let price = 5000;

// let message = (price>6000) ? '비싸요!' : (price<3000) ? '엄청싸요!' : '적당해요!';

// // 위의 코드는 아래와 같다.
// let price = 5000;
// let message = '';

// if (price > 6000) {
//   message = '비싸요!';
// } else if (price < 3000) {
//   message = '엄청싸요!';
// } else {
//   message = '적당해요!';
// }