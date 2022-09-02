/**
 * 동생과 함께 피시방을 간다. 조건문을 이용해서 두 변수를 체크해 결과를 출력한다.
 */
function q1(myAge, broAge){
  if(myAge > 19 && broAge > 19){
    console.log('PC방 입장');
  } else {
    console.log('PC방 입구 컷!');
  }
}

/**
 * 피시방에 가지못한 친구들 노래방이라도 간다.
 * 노래방은 보호자만 19세 이상이면 동생도 같이 들어갈 수 있다.
 */
function q2(myAge, broAge){
  if(myAge > 19 || broAge > 19){
    console.log('노래방 입장');
  } else {
    console.log('노래방 입구 컷!');
  }
}

//민수네
const minsuAge = 21;
const minsuBroAge = 18;
console.log('민수네 결과');
q1(minsuAge, minsuBroAge);
q2(minsuAge, minsuBroAge);

//진수네
const jinsuAge = 30;
const jinsuBroAge = 25;
console.log('진수네 결과');
q1(jinsuAge,jinsuBroAge);
q2(jinsuAge,jinsuBroAge);

//철수네
const chulsuAge = 17;
const chulsuBroAge = 15;
console.log('철수네 결과');
q1(chulsuAge, chulsuBroAge);
q2(chulsuAge, chulsuBroAge);

/**
 * 부모님 중 한분이라도 화나면 용돈 삭제, 화 안나면 내다버린자식
 */
const minsuMomAngry = true;
const minsuDadAngry = false;

const jinsuMomAngry = false;
const jinsuDadAngry = false;

const chulsuMomAngry = true;
const chulsuDadAngry = true;

function q3(momStatus, dadStatus){
  if(momStatus === true || dadStatus === true){
    console.log('용돈 삭제ㅠㅠ');
  } else {
    console.log('내다 버린 자식인가??');
  }
}

console.log('q3 결과');
console.log('민수네 결과');
q3(minsuMomAngry, minsuDadAngry);
console.log('진수네 결과');
q3(jinsuMomAngry, jinsuDadAngry);
console.log('철수네 결과');
q3(chulsuMomAngry, chulsuDadAngry);

/**
 * 평균점수 90 이상이면 A, 75점 이상이면 B, 그 이하면 C
 */
function q4(kor, math, eng, name){
  let average = (kor + math + eng) / 3;

  if(average >= 90){
    console.log(`${name}는(은) 용돈 5만원을 받았습니다.`);
  } else if(average >= 75){
    console.log(`${name}는(은) 용돈 3만원을 받았습니다.`);
  } else {
    console.log(`${name}는(은) 앞으로 용돈이 없을 계획입니다.`);
  }
}
const minsuKor = 85;
const minsuMath = 70;
const minsuEng = 93;
const minsu = '민수';
q4(minsuKor, minsuMath, minsuEng, minsu);

const jinsu = '진수';
const jinsuKor = 70;
const jinsuMath = 57;
const jinsuEng = 63;
q4(jinsuKor, jinsuMath, jinsuEng, jinsu);

const chulsu = '철수';
const chulsuKor = 93;
const chulsuMath = 85;
const chulsuEng = 100;
q4(chulsuKor, chulsuMath, chulsuEng, chulsu);