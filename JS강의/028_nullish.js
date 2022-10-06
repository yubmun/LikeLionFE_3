let fisrtName = null;
let lastName = null;
let nickName = '바이올렛';
//null 이나 undefined가 아닌 첫번째 피연산자

console.log(firstName ?? lastName ?? nickName ?? '익명의사용자');

// 실행하면 null 값이 아닌 nickName의 값, 바이올렛 이 출력된다.

let a = null;
let b = 20;
let c = null;

let d = a ?? b ?? c;
//d의 값에는 20이 할당된다.

let e;
let f;
let g;

let h = e ?? f ?? g;
// e,f,g 변수가 모두 undefined의 값이기 때문에, h에도 undefined가 할당된다.

let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;
// 별명이라는 변수가 할당되었으니, 채팅창아이디는 별명인 licat이 된다.

let height = 0;

console.log(height || 100); // 100
// || 앞에가 true 면 뒤에것을 안봐도 되지만, 앞에가 false면 뒤에도 봐야된다.
// 그럼 여기서 height이 0이니깐, boolean으로 볼 때 false 이다. 뒤에것도 봐야된다.

console.log(height ?? 100); // 0

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined