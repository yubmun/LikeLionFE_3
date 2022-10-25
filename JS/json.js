/**
 * json이란?
 * JavaScript Object Notation
 * json 자바스크립트 문법과 거의 비슷하다.
 * 100% 문법이 똑같지는 않다.
 * json의 경우에는 프로퍼티에 반드시 ":" 쌍따옴표를 붙여야 된다.
 * 또한 undefined, NaN, Infinity와 같은 값을 넣을 수 없다.
 * json은 데이터 포맷이기 때문에, 데이터 안에 주석을 포함할 수 없다.
 * 
 */

/**
 * string 타입의 데이터를 JSON.parse() 메서드를 사용해주면, 자바스크립트 객체로 변환해줄 수 있다.
 * 이 작업을 진행해야, 해당 데이터를 쓸 수 있다.
 */


/**
 * request의 종류
 * 4개의 종류로 나뉜다.
 * 1. 데이터 조회 GET Request
 * 2. 데이터 추가 POST Request
 * 3. 데이터 수정 (기존 데이터) PUT Request
 * 4. 데이터 삭제 (기존 데이터) DELETE Request
 */

/**
 * Request Head
 * Request에 대한 부가정보
 * 메소드(method)
 * 
 * Request Body
 * 실제 데이터를 담는 부분
 */

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering'
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
// fetch로 method, body 등 프로퍼티를 추가하여 조회 추가 수정 삭제 등을 할 수 있다.
.then((response) => response.text())
.then((result) => {console.log(result);});