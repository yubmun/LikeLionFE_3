import React from 'react'
import Result from '../components/Result'

function SearchPage({keyword, setKeyword, isPending, startTransition}) {
  return (
    <div>
      <input type="text" onKeyUp={(e) => {
        startTransition(()=>{
          setKeyword(e.target.value)
        })
      }} />

      <Result keyword={keyword} isPending={isPending}/>
    </div>
  )
}

export default SearchPage