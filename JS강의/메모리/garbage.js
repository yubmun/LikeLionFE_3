let me = {age: 30};
let you = me; // 참조 카운트 : 2

me = null; // 참조 카운트 : 1
you = null; // 참조 카운트 : 0

let x = {
  y: {
    z: 1
  }
}

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2 라고 하겠습니다.

let a = x; // object1의 참조카운트는 2
x = 1; // object1의 참조카운트는 1

let b = a.y // object2의 참조 카운트는 2
a = 2; // object1의 참조카운트는 0
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리누수가 발생했다고 표현합니다.

function outer (){
  let privateVal = ['test']

  function getPrivate(){
    return privateVal
  }
  
  return getPrivate
}

const getPrivateData = outer();
const secretVal = getPrivateData();

let aespa = ["카리나", "윈터", "지젤", "닝닝"];

const aespa2 = aespa.map((i) => {
  return i + '❤️';
})
console.log(aespa2);


