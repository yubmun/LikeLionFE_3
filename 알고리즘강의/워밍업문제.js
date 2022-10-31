/**
 * 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
 * 8이 포함되어 이쓴 숫자의 갯수를 카운팅하는게아니라
 * 8이라는 숫자를 모두 카운팅 해야 한다.
 * (8808은 3, 8888은 4로 카운팅해야 함)
 */

function solution(n){
  let str = '';

  for (let i=1; i<=10000; i++){
    str += i;
  }

  return console.log(str.match(/8/g).length);
}

Array(10000).fill(1).map((_,i)=> i+1).join('').match(/8/g).length;
Array(10000).fill(1).map((_,i)=> i+1).toString().match(/8/g).length;

[...Array(10000)].map((_,i)=> i+1).join('').match(/8/g).length;