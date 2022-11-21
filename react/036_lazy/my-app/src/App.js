import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {

  /**
   * useLayoutEffect는 useEffect보다 빨리 실행됩니다.
   * 따라서 useEffect보다 먼저 실행하고 싶은 무언가가
   * 있다면, useLayoutEffect를 사용해야 한다.
   * 
   * 렌더링 되었을 때, useLayoutEffect return이 실행됨.
   * 그리고 useLayoutEffect가 실행되고, useEffect return의 콜백함수가 실행됩니다.
   * 
   * 깜빡임을 해결하고 싶다? useLayoutEffect를 사용해라.
   */

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;