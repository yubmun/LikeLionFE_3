function solution(n) {
  var answer = 0;
  let count = 0;
  for(let i=4; i <= n; i++){
      answer += hap(i);
  }
  return answer;
}
function hap(i){
  let num = i;
  let count = 0;
  while(Number.isInteger(num / 2)|| Number.isInteger(num / 3) || Number.isInteger(num / 5) || Number.isInteger(num / 7)){
      if(Number.isInteger(num / 2)){
          num = num/2;
          count++;
          continue;
      } else if (Number.isInteger(num/3)){
          num = num/3;
          count++;
          continue;
      } else if(Number.isInteger(num/5)){
          num = num/5;
          count++;
          continue;
      } else if(Number.isInteger(num/7)){
          num = num/7;
          count++;
          continue;
      }
  }
  if(count >= 2){
      return 1;
  } else {
      return 0;
  }
}

//오답이다.
function solution(n) {
  var answer = 0;
  for(let i=4; i <= n; i++){
      let count = 0;
      for(let j=1; j <= i; j++){
          if(i % j === 0){
              count++;
          }
      }
      if(count >= 3){
          answer++;
      }
      
  }
  return answer;
}
// 얘가 정답 약수구하는 공식 외울것.