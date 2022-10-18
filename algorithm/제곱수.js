function solution(n) {
  var answer = 0;
  if(Number.isInteger(Math.sqrt(n))){
      answer = 1;
  } else {
      answer = 2;
  }
  return answer;
}

//Number.isInteger 가 정수인지 아닌지 확인하는 메서드이다.