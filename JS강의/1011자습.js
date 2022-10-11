/**
 * 구조분해할당 복습
 */
let value = [10, 1, 100, 200, 300, 10];
let value2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};

console.log(Object.keys(value));
console.log(Object.keys(value2));

// Object.values() 라는 메서드도 있다. 아규먼트만 넣어주면 됨.
console.log(Object.values(value));
console.log(Object.values(value2));

console.log(Object.entries(value));
console.log(Object.entries(value2));

for([i,j] of Object.entries(value2)){
  console.log(`key는 ${i}고, value는 ${j}입니다.`);
}

let data = {
  name : 'hojun',
  age : 10,
  money : 10,
  company : 'weniv'
};
// 변수를 선언하는데 이름도 없음. 근데 콘솔에는 찍힘. 이게 무슨일인가 싶음. 심지어 변수로 사용도 가능.
let {name, age, ...rest} = data;
console.log(name);
console.log(age);
console.log(rest);

console.log(name + age + rest);


/**
 * 렉시컬 스코프에 관하여
 */

var x= 'global x'

function foo(){
  var x = 'local x'
  bar();
}
function bar(){
  console.log(x);
}

foo();
bar();