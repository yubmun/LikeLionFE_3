const stack = []; // 스택 공간
const STACK_SIZE = 5; // 스택의 최대 사이즈
let top = 0; // 초기값 필요

/**
 * 조건
 * 0. init을 통해 stack안에 STACK_SIZE만큼 null 값이 들어간다.
 * 1. stack의 크기는 STACK_SIZE를 초과할 수 없다.
 * 2. stack의 크기가 꽉찼을 때 추가로 push를 실행할 경우 console.log를 통해 에러메세지를 출력한다.
 * 3. push와 pop이 호출될때 마다 top의 값이 바뀐다.
 * 4. stack이 비어있을 때 pop을 호출하면 -1이 반환된다.
 */

/**
 * stack 초기화
 */
function init() {
  for(let i=0; i < STACK_SIZE; i++){
    stack[i] = null;
  }
  return stack;
}
// init();
// console.log(stack);
/**
 * stack에 값을 집어 넣는다.
 */
function push(num) {
  for(let i=0; i < STACK_SIZE; i++){
    if(stack[i] === null){
      stack[i] = num;
      top = num;
      break;
    }
  }
  if(stack.indexOf(null) === -1){
    console.log("Error");
  }
  return stack;
}

/**
 * stack에서 값을 빼낸다.
 */
function pop() {
  for(let i=STACK_SIZE; i >= 0; i--){
    if(stack[i] === top){
      let j = stack[i];
      stack[i] = null;
      top = stack[i-1];
      return j;
    }
  }
  
}

/**
 * 현재 top의 위치를 반환한다.
 */
function peek() {
  return top;
}

console.log(init()); // [null, null, null, null, null]
console.log(push(5)); // [5, null, null, null, null]
console.log(push(10)); // [5, 10, null, null, null]
console.log(peek()); // 10 반환
console.log(pop()); // [5, null, null, null, null] -> 10반환
console.log(peek()); // 5 반환