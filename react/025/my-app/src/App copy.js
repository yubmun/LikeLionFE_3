function Hello({name}){
  if(name){
    return(
      <div>{name}</div>
    )
  }
  return(
    <div>
      이름이 입력되지 않았습니다.
    </div>
  )
}

function App() {
  return (
    <Hello name="준엽"/>
  );
}

export default App;
