import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}  
span{
    color: red;
  }
`

function One(){
  return(
    <section>
      <h2>hello one</h2>
      <span>hello</span>
    </section>
  )
}

function Two(){
  return(
    <section>
      <h2>hello two</h2>
      <span>hello</span>
    </section>
  )
}

function App() {
  console.log(reset);
  return (
    <>
      <GlobalStyle/>
      <h1>hello world</h1>
      <span>hello world</span>
      <One/>
      <Two/>
    </>
  );
}

export default App;