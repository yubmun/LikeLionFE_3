import React, { useState } from 'react';

function Resume(props) {
  const [str, setStr] = useState(0);
  let three = str.toString().match(/[369]/)? '짝' : '';
  const [message, setMessage] = useState('hello');

  function handleClickLike() {
    setStr(str + 1);
  }

  function handleMouseOver(){
    console.log('hello');
    setMessage('world')
  }

  return(
      <div>
          <button onClick={handleClickLike}>369 : {str}</button>
          <button onMouseOver={handleMouseOver}>마우스 오버해보세요.</button>
          <p>{message}</p>
          {/**
           * useState()는, 변수를 기억해줌. 변수가 변하는걸 감시해주고, 변하면 렌더링을 다시 해줌. 때문에 handleClickLike를 해도 handleMouseOver의 변수는 초기화되지 않고 가만히 있음. real good.
           */}
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;