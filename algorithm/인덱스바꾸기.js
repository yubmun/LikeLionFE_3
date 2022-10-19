function solution(my_string, num1, num2) {
  var answer = '';
  let arr = my_string.split('');
  let curVal = my_string[num1];
  arr.splice(num1, 1, arr[num2]);
  arr.splice(num2, 1, curVal);
  
  answer = arr.join('');
  return answer;
}