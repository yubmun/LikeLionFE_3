import styled from 'styled-components'

const One = styled.div`
  color: red;
`
const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size}px;
`
const Three = styled.div`
  color: ${(옵션) => 옵션.option === '하나'? 'red' : 'pink'}
`
const Four = styled.div`
  color: red;
  border: ${(props) => props.border}
`


function App(){
  return(
    <>
      <One>hello</One>
      <Two size={32}>world</Two>
      <Three option={'하나'}>hi</Three>
      <Four border={'1px solid black'}>hello</Four>
    </>
  )
}

export default App;