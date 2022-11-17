import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  let test = 0;
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  const handleTestCountUp = (e) => {
    test += 1;
    console.log(test);
  }

  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  } ,[test])
  // useEffect는 재 렌더링될 때만 실행되기 때문에, useState가 아닌 일반변수가 useEffect의 두번째 아규먼트로 들어가도, 첫번쨰 아규먼트의 콜백함수가 실행되지 않는다.
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{test}</div>
      <button onClick={handleTestCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;