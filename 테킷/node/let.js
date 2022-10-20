let hello = "first hello";

if(true){
  let hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello

/**
 * var와의 차이점은, 중괄호 스코프를 인정한다는 점
 */