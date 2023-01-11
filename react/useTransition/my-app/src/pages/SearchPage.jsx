import React from 'react'
import Result from '../components/Result'

function SearchPage({keyword, setKeyword}) {
  return (
    <div>
      <input type="text" onKeyUp={(e) => {setKeyword(e.target.value)}} />

      <Result keyword={keyword}/>
    </div>
  )
}

export default SearchPage