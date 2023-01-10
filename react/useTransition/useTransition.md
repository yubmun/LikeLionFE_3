# useTransition

input 요소에 값을 입력했을 때 서버와의 통신이 이뤄져 수많은 결과값이 화면상에 렌더링이 된다고 가정해보겠습니다.

만약 10,000개의 데이터가 불러와진다고 가정한다면 input의 value가 변경될 떄 마다 렌더링되는 결과값이 달라진다면, value를 입력하는 도중 반응속도가 느려지게 되고, 사용자가 느끼는 서비스의 질은 현저히 떨어질 것입니다.

사용자의 서비스 편의성을 제공해주려면 아래와 같이 useTransition을 사용합니다.

```jsx
import { useState, useTransition } from "react";

function App(){
  const [searchValue, setSearchValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const [serachData] = axios.get(`API명세에 따른 데이터 수신`)

  return (
    <div>
      <input onChange={(e) => {
        startTransition(()=> {
          setSearchValue(e.target.value)
        })
      }}/>

      {
        isPending ? (
          <div> 로딩중 </div>
        ) : (
          searchData.map((data, i) => {
            <div> 데이터 결과값 {data} </div>
          })
        )
      }
    </div>
  )
}
```