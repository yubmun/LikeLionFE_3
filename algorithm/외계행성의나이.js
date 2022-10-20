function solution(age) {
  var answer = '';
  let ag = "" + age;
  for(let i=0; i < ag.length; i++){
      if(ag[i] === '0'){
          answer += 'a';
      } else if(ag[i] === '1'){
          answer += 'b';
      } else if(ag[i] === '2'){
          answer += 'c';
      } else if(ag[i] === '3'){
          answer += 'd';
      } else if(ag[i] === '4'){
          answer += 'e';
      } else if(ag[i] === '5'){
          answer += 'f';
      } else if(ag[i] === '6'){
          answer += 'g';
      } else if(ag[i] === '7'){
          answer += 'h';
      } else if(ag[i] === '8'){
          answer += 'i';
      } else if(ag[i] === '9'){
          answer += 'j';
      }
  }
  return answer;
}

/**
 *
function solution(age) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var answer = "";
    age = age.toString();

    for(let i=0; i<age.length; i++){
        answer += alphabet[age[i]];
    }
    return answer;
}
 */