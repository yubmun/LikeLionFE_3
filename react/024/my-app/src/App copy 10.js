import './App.css';

function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((v,i)=><p key={i}>안녕, {name} {v}호</p>);
  // key를 index로 잡는것은 권장하지 않는다.

  console.log(numComponentsArray);

  return(
    <div>
      {/* 리스트로 렌더링 됨, helloworld345 , */}
      {['hello', 'world', 3,4,5]}
      {numComponentsArray}
      {/* 드물지만 키가 중복되서 나는 에러, concat에서 두 배열이 모두 같은 키를 갖기 때문에,, 이런 경우가 생길 수 있으므로 권장하지 않는다. */}
      {/* {numComponentsArray.concat(numComponentsArray)} */}
    </div>
  )
}

export default App;