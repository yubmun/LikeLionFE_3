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
  let result = useMemo(()=>{
    return 부하();
  }, [])

  const handleCountUp = (e) =>{
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h1>계산결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </div>
  );
}
export default App;
