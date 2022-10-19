function solution(n, k) {
  var answer = 0;
  let discount = parseInt(n / 10);
  
  answer = (n * 12000) + (k - discount) * 2000;
  
  return answer;
}