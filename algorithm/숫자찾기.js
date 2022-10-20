function solution(num, k) {
  let str = '' + num;
  let what = 0;
  for(let i=0; i < str.length; i++){
      if(str[i] === "" + k){
          what = i;
          return what + 1;
      } else{
          what = -1;
      }
  }
  return what;
}

console.log(1/3);