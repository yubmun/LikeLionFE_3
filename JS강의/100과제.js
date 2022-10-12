/**
 * 다음 값의 평균, 분산을 구하세요
 * 분산 =(각요소 평균)^2의합 / 전체요소의 개수
 */

let one = [10,20,30,10,20,30,40,10];

// one 의 평균
let sum = one.reduce((a,b) => a+b);
let 평균 = sum / one.length;

// one 의 분산
let 분산합 = 0;
for(let i=0; i < one.length; i++){
  분산합 += (one[i] - 평균) ** 2;
}
let 분산 = 분산합 / one.length;

let 표준편차 = 분산 ** 0.5;

// console.log(분산);
// console.log(표준편차);

/**
 * 다음 string의 평균 값을 구하세요.
 * 
 */

let str = '5, 4, 10, 2, 5';
let arr = str.split(',');
let sum2 = 0;
for(let i=0; i<arr.length; i++){
  sum2 += parseInt(arr[i]);
}
let 평균2 = sum2 / arr.length;

/**
 * 다음 array의 각 자리수 합을 구하세요
 */
let arr2 = [11, 22, 33, 111, 2];

let arr3 = [];
for (let i=0; i < arr2.length; i++){
  arr3.push(String(arr2[i]));
}

let result = [];
for (let i=0; i < arr3.length; i++){
  let sum = 0;
  for(let j=0; j < arr3[i].length; j++){
    sum += parseInt(arr3[i][j]);
    
  }
  result.push(sum);
  sum = 0;
}
let 정답 = result.reduce((a,b)=>a+b);

/**
 * 반복문만 사용하여 숫자단위 콤마 찍기
 * 답이어딨지
 */


/**
 * 로또만들기
 * 난수 6개 생성하는 코드를 작성
 */

function 로또(){
  let sixNum = [];

  for(let i=1; i < 7; i++){
    let ran = parseInt(Math.random() * 50 + 1);
    if(sixNum.includes(ran)){
      i--;
      continue;
    } else{
      sixNum.push(ran);
    }
  }
  sixNum.sort((a,b) => a-b);
  return console.log(sixNum);
}

// 로또();





