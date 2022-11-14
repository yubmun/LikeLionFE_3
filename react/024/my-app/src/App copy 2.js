import {useState} from 'react'

function Resume({name, hobby, info}){
  const [like, setLike] = useState(0)

  function handleClickLike(){
    // like += 1;
    setLike(like + 1); // like += 1;
    console.log(like);
  }

  return(
    <section>
      <h2>이름: {name}</h2>
      <p>취미: {hobby}</p>
      <p>자기소개: {info}</p>
      <button onClick={handleClickLike}>{like}</button>
      {/**https://reactjs.org/docs/events.html */}
      {/**
       * immutable 하지 못하다?
       * 
       */}
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume name={'junyub'} hobby={'coding'} info={'hello my name is junyub'}/>
    </main>
  );
}

export default App;