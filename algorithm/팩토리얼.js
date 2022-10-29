function solution(n) {
  var answer = 0;
  let num = n;
  for(let i=1; i <= 10; i++){
      num /= i;
      if(num === 1){
          return answer = i;
      } else if(num < 1){
          return answer = i-1;
      }
  }
}

/**
 * return을 해줘야, 10까지 안가고 멈춘다~
 */
