var 변수 = 50;

function 함수(a,b) {
  return a*b;
}

let arr = [1,2,3,4,5];
let result = arr.reduce((a,b)=>a+b);
console.log(result);

let result2 = arr.reduce(((a,b)=>a+b), 10);
console.log(result2);

let names = ['Alice','Bob','Tiff','Bruce','Alice'];
let result3 = names.reduce(function(allNames, name){
  if(name in allNames){
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(result3);


const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result4 = numbers.reduce((a,b)=>{
  if(b<0){
    a[0]++;
  } else if(b >0){
    a[1]++;
  }
  return a;
}, [0,0]);
console.log(result4);

