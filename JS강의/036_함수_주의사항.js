// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

function 함수(){
  let x1 = 100;
  let x2 = 100;
  let x3 = 100;
  let x4 = 100;
  let x5 = 100;
  let x6 = 100;
  let x7 = 100;
  // ...
}

함수()

// 연습문제
let data = [{
  반 : 1, 
  번 : 1, 
  이름 : "호준", 
  중간고사점수 : 55
}, {
  반 : 1, 
  번 : 2, 
  이름 : "길동", 
  중간고사점수 : 60
}, {
  반 : 1, 
  번 : 3, 
  이름 : "영희", 
  중간고사점수 : 30
}, {
  반 : 1, 
  번 : 4, 
  이름 : "철수", 
  중간고사점수 : 20
}, {
  반 : 1, 
  번 : 5, 
  이름 : "규리", 
  중간고사점수 : 100
}]

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

// 동현, 준근님 코드
function 평균값구하기(data){
  let sum = 0;
  for(student of data){
      sum += student["중간고사점수"]
  }
  return sum / data.length
}

function 평균값구하기(data) {
  let 중간고사점수 = data.map((x) => x.중간고사점수)
  let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
  return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));

// call by value, reference, sharing

// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다!
// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.

let test = [10, 20, 30]

function 함수(a){
  a[0] = 1000
}

함수(test)

//

let test = 100
function 함수(a){
  a = 1000
}

함수(test)

// 반례
var a = {};
function test(b) {
  b = 1000;
}

test(a)
a

/*
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면

4. 유윤우 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

4. 김태수 — 오늘 오후 3:29
실행시간이 길어질 수 도 있을까요?

4. 이준근 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

4. 이정호 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?
*/

function makeAdder(x) {
  var y = 1;
  return function(z) {
      y = 100;
      return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능