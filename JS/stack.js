const stack = []; // 스택 공간
const STACK_SIZE = 5; // 스택의 최대 사이즈
let top; // 초기값 필요

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

}

/**
 * stack에 값을 집어 넣는다.
 */
function push() {

}

/**
 * stack에서 값을 빼낸다.
 */
function pop() {

}

/**
 * 현재 top의 위치를 반환한다.
 */
function peek() {

}

init(); // [null, null, null, null, null]
push(5); // [5, null, null, null, null]
push(10); // [5, 10, null, null, null]
peek(); // 1 반환
pop(); // [5, null, null, null, null] -> 10반환
peek(); // 0 반환