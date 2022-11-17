import {useState, useEffect} from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
//첫번째 아규먼트는 콜백함수를 넣어준다.
// 두번째 아규먼트는 감시하고자 하는 변수를 배열에 넣어준다. 하나만 감시하는게 아니라는 의미.
  useEffect(()=>{
    if(count % 2){
      return alert('홀수입니다')
    }
    return alert('짝수입니다')
  },[count])
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
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