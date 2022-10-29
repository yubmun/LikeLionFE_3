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
 */