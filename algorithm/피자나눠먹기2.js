function solution(n) {
  var answer = 1;
  if(n > 3){
      for(let i=1; i < n; i++){
          if((n*i) % 6 === 0){
              answer = (n*i) / 6;
              break;
          }
      }
  }
  
  
  return answer;
}

console.log(solution(7));