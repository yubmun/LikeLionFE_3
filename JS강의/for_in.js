const person = {fname:"John", lname:"Doe", age:25}; 
let text = "";

for (let x in person) {
  text += person[x] + " ";
}

/**
 * for in 에서의 x 는 person 객체의 프로퍼티 키를 순회하는 역할을 한다.
 */

