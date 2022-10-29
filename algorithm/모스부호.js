morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}

function solution(letter) {
  var answer = '';
  let arr = letter.split(' ');
  for(let i=0; i<arr.length; i++){
      for(const sign in morse){
          if(arr[i] === sign){
              answer += morse[sign];
          }
      }
  }
  return answer;
}

// for in이 for문 안으로 들어와야 정답처리가 되는 이유에 대해 잘 모르겠음.

/**
 * for(const sign in morse){
 *   for(let i=0; i<arr.length; i++){
 *     if(sign === arr[i]){
 *       answer += morse[sign];
 *     }
 *   }
 * }
 * 이건 왜 결과값이 다르게 나오는가?
 * 
 * for in도 배열에 정의된 key 순서대로 반복이 진행되기 때문에 answer 결과값의 순서가 다르게 나온다. h보다 e를 먼저 찾기 때문에.
 */