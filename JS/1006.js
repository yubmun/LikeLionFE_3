//1. 두 개의 인자(parameter)를 받아 더한 값을 반환 하는 함수.
function plus(a,b){
  return a + b;
}

//2. 두 개의 인자(parameter)를 받아 뺀 값을 반환 하는 함수.

function minus(a,b){
  return a-b;
}

//3. 두 개의 인자(parameter)를 받아 곱한 값을 반환 하는 함수.

function multiply(a,b){
  return a*b;
}

//4. 두 개의 인자(parameter)를 받아 나눈 값을 반환 하는 함수.

function divide(a,b){

  if(a === 0 || b === 0){
    console.log('0으로 나눌수 없습니다.')
  } else{
    return a/b;
  }
}

// 위 1 ~ 4 함수를 이용하여 계산기 함수를 만든다.
let input = '' + prompt('덧셈, 뺄셈, 곱셈, 나눗셈');
console.log(input);
let inputFirstNum = parseInt(prompt('첫번째 입력할 수'));
console.log(inputFirstNum);
let inputSecondNum = parseInt(prompt('두번째 입력할 수'));
console.log(inputSecondNum);

calculator(input, inputFirstNum, inputSecondNum);

function calculator(input, inputFirstNum, inputSecondNum){
  const value = document.querySelector('.value');

  while(!!input){
    if(input === '덧셈'){
      value.innerHTML = plus(inputFirstNum, inputSecondNum);
      break;
    }
    else if(input === '뺄셈'){
      value.innerHTML = minus(inputFirstNum, inputSecondNum);
      break;

    } else if(input === '곱셈'){
      value.innerHTML = multiply(inputFirstNum, inputSecondNum);
      break;

    } else if (input === '나눗셈'){
      if(inputFirstNum === 0 || inputSecondNum === 0){
        value.innerHTML = '0으로 나눌수없습니다. 새로고침하세요.'
        break;
      }

      value.innerHTML = divide(inputFirstNum, inputSecondNum);
      break;

    } else{
      value.innerHTML = '입력값이 잘못되었습니다. 새로고침하세요.';
      break;
    }
  }
}
