function solution(array) {
  var answer = [];
  // 매개변수 array에 가장 큰수 찾기
  let big = Math.max(...array);
  answer.push(big);

  // 매개변수 array에서 가장 큰수가 어디위치하는지 찾기
  let what = array.indexOf(big);
  answer.push(what);
  return answer;
}