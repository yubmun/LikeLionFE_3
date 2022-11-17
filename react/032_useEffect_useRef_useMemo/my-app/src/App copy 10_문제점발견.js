import {useState, useEffect} from 'react'

export default function App() {
  const [study, setStudy] = useState('수업중');
  const [money, setMoney] = useState(1000)

  const handleZoomOut = (e) => {
    setStudy('수업종료')
  }

  if(study === '수업종료' && money >= 200){
    alert('카페로 출발');
    setMoney(800)
  }

  return (
    <div>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <p>{study}</p>
      <p>{money}</p>
    </div>
  )
}
