function solution(hp) {
  var answer = 0;
  
  let jang = Math.floor(hp / 5);
  answer += jang;
  hp -= jang*5;
  
  let b = Math.floor(hp / 3);
  answer += b;
  hp -= b * 3;
  
  let ill = Math.floor(hp / 1);
  answer += ill;
  hp -= ill;
  
  console.log(answer);
  return answer;
}
solution(23);
/**
 * function solution(hp) {
    var answer = 0;
    
    answer+= Math.floor(hp / 5);
    hp = hp % 5;
    
    answer+= Math.floor(hp / 3);
    hp = hp % 3;
    
    answer += hp;
    
    return answer;
}
 */