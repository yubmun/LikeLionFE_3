function solution(array) {
  var answer = 0;
  let arr = array.sort((a,b) => a-b);
  let center = Math.ceil(array.length / 2) - 1;
  answer = arr[center];
  
  return answer;
}

/**
 * ceil 쓰고 -1 하지 말고, floor를 쓰면 중앙의 인덱스 값을 구할 수 있다.
 */