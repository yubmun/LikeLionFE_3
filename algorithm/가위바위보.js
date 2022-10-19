function solution(rsp) {
  var answer = '';
  let arr = [];
  for(let i=0; i<rsp.length; i++){
      if(rsp[i] === '2'){
          arr.push('0');
      } else if(rsp[i] === '0'){
          arr.push('5');
      } else if(rsp[i] === '5'){
          arr.push('2');
      }
  }
  answer = arr.join('');
  return answer;
}

/**
 * map() 을 쓰는 연습도 해보자.
 */