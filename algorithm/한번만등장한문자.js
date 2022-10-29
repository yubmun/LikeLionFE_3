function solution(s) {
  var answer = '';
  let arr = s.split('');
  for(let i=0; i<arr.length; i++){
      for(let j=i+1; j < arr.length; j++){
          if(arr[i] === arr[j]){
              arr = arr.filter(x => {
                  return x !== arr[i];
              })
              i--;
          }
      }
  }
  answer = arr.sort().join('');
  
  
  return answer;
}

/**
 * filter() 쓰는것과
 * i -- 해주는 것까지 다 계산했어야됨.
 */