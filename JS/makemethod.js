/**
 * include 함수 만들기
 * 파라미터 : targetString(찾김당할문자열)searchString(찾을문자)
 * 기능 : 문자열에 해당하는 문자가 있는지 확인 있으면 true를 반환, 없으면 false를 반환
 */

// targetString의 모두에서 searchString을 찾는다.
function mkInclude(targetString, searchString, startIndex){
  
  let result = false;

  if(startIndex === undefined){
    for(let i = 0; i < targetString.length; i++){
      if(targetString[i] === searchString){
        result = true;
      }
    }
    return result;
  } else {
    for(let i = startIndex; i < targetString.length; i++){
      if(targetString[i] === searchString){
        result = true;
      }
    }
    return result;
  }

}
// console.log(mkInclude('apple','p'));

// 질문 : stratIndex의 조건을 null로 하면 작동이 되질 않지만, undefined로 하면 작동이 된다. 그 이유는 무엇인지 정확하게는 모르겠다. null 이 object여서,,?

/**
 * indexOf 함수 만들기
 * 파라미터 : targetString(찾아질 문자열), searchString(찾을문자열), position(searchString의 위치)
 * 
 * 기능 : targetString에서 searchString이 있는지 확인하고, 있다면 position을 반환, 없다면 -1을 반환한다.
 */

function mkIndexOf(targetString, searchString, startIndex){
  
  let position = -1;

  if(startIndex === undefined){
    for(let i = 0; i < targetString.length; i++){
      if(targetString[i] === searchString){
        position = i;
      }
    } return position;
  } else{
    for(let i = startIndex; i < targetString.length; i++){
      if(targetString[i] === searchString){
        position = i;
      }
    } return position;
  }
}
// console.log(mkIndexOf('apple', 'c'));
// 질문 : 중복되는 것이 나오게 되면, 먼저 찾은 index가 아닌 나중에 찾은 index의 값을 반환하게 되는데, 먼저 찾은 index가 나오게 하려면 어떻게 해야할지 모르겠다.


/**
 * at 함수 만들기
 * 
 * 파라미터 : targetArray(조사받을 배열),index(반환받을 index 값)
 * 
 * 기능 : 정수값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환. 양수와 음수 모두 지정할 수 있으며, 음수 값의 경우 배열의 뒤에서부터 인덱스를 센다. 있는경우 해당 인덱스 요소를 반환하고 없다면 undefined를 반환한다.
 */

function mkAt(targetArray, index){

  let result = 0;

  if(index > 0){
    if(index > targetArray.length){
      return undefined;
    } else{
      result = targetArray[index];
      return result;
    }
  } else {
    
  }

}

let fruit = 'apple';
console.log(fruit[3]);