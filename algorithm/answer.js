/**
 * 문제
 * [1,2,3] 이라는 배열이 매개변수로 들어올 때 
 * [2,4,6] 을 리턴하도록 함수를 작성하세요.
 */

function answer (arr){
  return arr.map(x=> x*2);
}

console.log(answer([1,2,3]));