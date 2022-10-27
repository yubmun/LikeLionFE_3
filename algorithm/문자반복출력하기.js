function solution(my_string, n) {
  var answer = '';
  let arr = [];
  for(let i=0; i<my_string.lenght; i++){
      for(let j=1; j <= n; j++){
          arr.push(my_string[i]);
      }
  }
  console.log(arr);
  answer = arr.join('');
  return answer;
}

// my_string.split('').map(v=> v.repeat(n)).join('');
// 킹도영.
// [...my_string].map(e=>e.repeat(n)).join('');
// 갓지혜