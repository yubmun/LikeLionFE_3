function solution(my_string) {
  var answer = [];
  let arr = my_string.split('');
  answer = arr.filter(x => /[^0-9]/g);
  console.log(answer);
  
  return answer;
}

solution("hi12392");