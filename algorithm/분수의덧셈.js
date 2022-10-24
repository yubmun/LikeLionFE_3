function solution(denum1, num1, denum2, num2) {
  var answer = [];
  let topNumber = (denum1*num2) + (denum2*num1);
  let bottomNumber = num1 * num2;
  let maximum = 1;
  
  for(let i=2; i<=Math.min(topNumber, bottomNumber); i++){
      if(topNumber % i === 0 && bottomNumber % i === 0){
          maximum = i;
      }
  }
  answer.push(topNumber / maximum);
  answer.push(bottomNumber / maximum);
  return answer;
}

/**   최대공약수 구하는 공식.
 *    for(let i=2; i<=Math.min(topNumber, bottomNumber); i++){
      if(topNumber % i === 0 && bottomNumber % i === 0){
          maximum = i;
      }
  }
 */