import {useState, useRef} from 'react'

// 이름 input 나이 input 
export default function App() {

  const nameValue = useRef(null);
  const genderValue = useRef(null);
  const ageValue = useRef(null);

  const [result, setResult] = useState('');

  const handleBtn = (e) => {
    setResult(`제 이름은${nameValue.current.value}
    제 성별은${genderValue.current.value}
    제 나이는${ageValue.current.value} 입니다.`);
  }

  return (
    <div>
      <input type="text" ref={nameValue}/>
      <input type="text" ref={genderValue}/>
      <input type="text" ref={ageValue}/>
      <button onClick={handleBtn}>자기소개</button>
      {result}
    </div>
  )
}
