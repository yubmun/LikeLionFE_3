console.log('0' == 0); // true
console.log('0' === 0); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log('true' == true) // false
console.log('true' === true) // false
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있다.
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있다.

console.log(0 == ''); // true, 주의
console.log(0 === ''); // false, 주의

console.log(false == ''); // true 주의
console.log(false === ''); // false

console.log(false == null); // false
console.log(false === null); // false

console.log(false == undefined); // false
console.log(false === undefined); // false

//해당 내용이 많아서 별도 파일로 분리하여 설명.
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

function truthyAndFalsy(value){
  return !!value;
}

truthyAndFalsy([]); // true ,, length 값이 있음.
truthyAndFalsy({}); // true ,, 
truthyAndFalsy(''); // false
truthyAndFalsy(null); // false
truthyAndFalsy(undefined); // false
truthyAndFalsy(NaN); // false
truthyAndFalsy(Infinity); // true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true

/**
 * 드모르간의 법칙
 * not (A or B) = (not A) and (not B)
 * not (A and B) = (not A) or (not B)
 * 
 * or : ||
 * and : &&
 * 
 * !(a%3 == 0 || a%5 == 0) // 아래랑 같다
 * !(a%3 == 0) && !(a%5 == 0) // 위랑 같다
 * 
 */

//카오스
console.log([] == ![]) // true
console.log([] == 0)
// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환 한다.
console.log(0 == ![]);