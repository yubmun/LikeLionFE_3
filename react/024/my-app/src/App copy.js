function Resume({name, hobby, info}){
  let like = 0

  function clickLike(){
    like += 1;
    console.log(like);
  }

  return(
    <section>
      <h2>이름: {name}</h2>
      <p>취미: {hobby}</p>
      <p>자기소개: {info}</p>
      <button onClick={clickLike}>{like}</button>
      {/**렌더링이 다시 일어나지 않기 때문에 {like} 의 숫자가 늘어나지 않는다. */}
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