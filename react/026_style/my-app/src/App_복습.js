// const arr = [10, 20, 30, 40, 50]
// function App() {
//   step 1
//   return (
//     <div>
//       {arr.map(v=> <p key={v.toString()}>{v}</p>)}
//   key값은, 문자열뿐만 아니라, 숫자도 가능은 함. 호준님은 문자로만 하셨음.
//       {arr.map(v=> <p>{v}</p>)}
//     </div>
//   );
// }

// step2
// const value = 1;
// function App(){
//   if(value === 1){
//     return <h1>hello 1</h1>
//   } else if(value === 2){
//     return <h1>hello 2</h1>
//   } else if(value === 3){
//     return <h1>hello 3</h1>
//   }
// }

//step 3
// npm install styled-components
// npm i styled-reset
import styled from "styled-components"

const DivBlue = styled.div`
  color: blue;
`
const DivRed = styled.div`
  color: red;
`

function App(){
  return(
    <>
      <DivBlue>안녕</DivBlue>
      <DivRed>안녕</DivRed>
    </>
  )
}

export default App;