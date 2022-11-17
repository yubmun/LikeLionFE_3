import {useState, useEffect, useRef} from 'react'

export default function App() {

  const searchValue = useRef(null);

  const handleSearch = (e) => {

    console.log('clicked!')
    console.log(searchValue)
    console.log(searchValue.current.value)
    // fetch 코드가 들어온다.
    searchValue.current.value = 'hello';
  }

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
      </label>
      <button onClick={handleSearch}>검색</button>
    </div>
  )
}
