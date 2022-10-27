function solution(num_list) {
  var answer = [];
  let countHol = 0;
  let countZzak = 0;
  
  for(let num of num_list){
      if(num % 2 !== 0){
          countHol++;
      } else {
          countZzak++;
      }
  }
  answer.push(countZzak, countHol);
  return answer;
}