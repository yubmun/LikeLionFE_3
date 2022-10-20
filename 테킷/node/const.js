const hello = "first hello";

// hello = "second hello"; // 에러

if(true){
  const hello = "second hello";
  console.log(hello); // second hello
}
console.log(hello); // first hello

/**
 * const는 한번 정의 후 바뀔수 없는 값일 때 선언한다.
 * let과 마찬가지로 {} 블록 스코프를 ㅇㅈ
 * 
 */