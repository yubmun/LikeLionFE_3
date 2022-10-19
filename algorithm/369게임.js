function solution(order) {
  var answer = 0;
  let or = '' + order;
  for(let i=0; i < or.length; i++){
      if(or[i] === '3'){
          answer++;
      } else if(or[i] === '6'){
          answer++;
      } else if(or[i] === '9'){
          answer++;
      }
  }
  return answer;
}

solution(263);