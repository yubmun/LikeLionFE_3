function solution(num_list, n) {
  var answer = [];
  let arr = num_list;
  let arr1 = [];
  for(let i=0; i < arr.length;){
      for(let j=0; j < n; j++){
          arr1.push(arr[j]);
      }
      arr.splice(0, n);
      answer.push(arr1);
      arr1 = [];
  }
  return answer;
}