import React, { useState } from 'react';

function Resume(props) {
  const [str, setStr] = useState(0);
  let three = str.toString().match(/[369]/)? '짝' : ''

  function handleClickLike() {
    setStr(str + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>369 : {str}</button>
          <span>{three ? three : ''}</span>
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