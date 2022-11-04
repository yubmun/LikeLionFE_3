/**
 * 처음접할 때 어려움
 * reduce((acc, el, i, arr) => {
 *  return nextAccValue;
 * }, initialValue);
 * 
 * 각 배열의 요소를 합할때 많이 쓰임..
 * acc 누산기는 el 요소가 반복될때 계속해서 then의 return 값 처럼 다음 요소에서의 acc로 return 됨.
 * 
 * 가급적이면 initialValue를 명시하는것이 안전함.
 * reduce()안에서의 콜백함수가 복잡해질수록 initialValue의 결과가 달라질 수 있기 때문임.
 * 
 */