/**
 * forEach 와 map 은 거의 유사하지만 반환값이 다름.
 * forEach는 반환값이 없지만, map은 배열을 반환함.
 * 둘이 동작은 똑같음. 배열의 반복작업을 진행함.
 * 
 * 단, forEach, map 모두 호출했을때 당시의 배열의 요소만 반복작업을 함. forEach나 map에서 추가된 요소는 포함하지 않음.
 * 
 */

/**
 * forEach나 map에도 indexing을 할 수 있음.
 * 번호 순서를 매길수 있고 ( 1,2,3,4 )
 * 순환하며 인덱스를 고를 수 있음.
 * 
 * arr.map((index, i) => console.log(`${index}, ${i}번째에 있는`)) 등등
 * 
 * 세번째 인자로는 this를 써줄수 있음.
 * 콜백함수에서의 this는 undefined를 가르키지만, 세번째 인자를 통해서 this를 설정해줄 수 있음.. 아직 뭔말인지 잘 모르겠음
 */


