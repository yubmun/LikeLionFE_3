function solution(sides) {
  var answer = 0;
  let big = Math.max(...sides);
  let what = sides.indexOf(big);
  
  sides.splice(what,1);
  
  let sum = 0;
  for (let i=0; i < sides.length; i++){
      sum += sides[i];
  }
  
  if(big < sum){
      answer = 1;
  } else {
      answer = 2;
  }
  
  return answer;
}

// sort 하면 최대값이 가장 맨 앞으로 온다로 풀어도 된다.
