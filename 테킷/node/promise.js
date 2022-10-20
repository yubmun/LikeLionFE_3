/**
 * pending : 대기상태
 * pulfilled : 이행상태
 * rejected : 실패상태
 */

function sayHello(){
  return new Promise((resolve, reject) => {
    resolve("hello!!!");
    // reject(new Error());
  })
}

// sayHello()
// .then((resolvedData)=>{
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData)=>{
//   console.log(resolvedData);
//   return resolvedData;
// })
// .then((resolvedData) =>{
//   console.log(resolvedData);
// })
// .catch((error)=> {
//   console.log(error);
// })

async function test(){
  const hello1 = await sayHello();
  console.log(hello1);
  /**
   * sayHello()에 대한 return 값을 hello1 에 저장하여 쓸 수 있으니, then에서의 return값을 다른 then에서 쓸 수 있는 것과 유사하다.
   * Promise 객체의 값을 받아야 하기 때문에, async , await을 사용해야 한다.
   * 
   */
}
test();