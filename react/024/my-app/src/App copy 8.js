// React의 이벤트는 카멜케이스를 사용한다.
// DOM의 이벤트는 소문자를 활용한다.
// JSX를 사용하여 함수로 이벤트 핸들러를 전달한다.
// DOM에서는 문자열로 이벤트 핸들러를 전달한다.

// 핸들러 함수는 앞에 접두사로 handle을 붙여줌. (관습) 단, 회사 컨벤션에 따라 다를 수 있다.

function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };

  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}

export default App;