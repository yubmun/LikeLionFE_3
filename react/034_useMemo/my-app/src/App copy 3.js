import {useState, useMemo} from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}
// useMemo는 useEffect랑 다른게 뭐냐?: 매모이제이션을 통해 부하가 걸리는 작업을 관리할 수 있다.
function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  let result = useMemo(()=>{
    return 부하();
  }, [countTwo])

  const handleCountUp = (e) =>{
    setCount(count + 1);
    console.log(count);
  }
  const handleCountTwoUp = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  }

  return (
    <div>
      <h1>계산결과 : {result}</h1>
      <div>count : {count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>countTwo : {countTwo}</div>
      <button onClick={handleCountTwoUp}>up!</button>
    </div>
  );
}
export default App;
