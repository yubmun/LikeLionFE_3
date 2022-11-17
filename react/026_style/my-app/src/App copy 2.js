import styled from 'styled-components'

const ContentsDivOne = styled.div`
  color: red;
`
const ContentsDivTwo = styled.div`
  color: green;
`
const ContentsDivThree = styled.div`
  color: blue;
`
const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`

function App() {
  return (
    <>
      <SectionTitle>hello~</SectionTitle>
      <ContentsDivOne>hello world</ContentsDivOne>
      <ContentsDivTwo>hello world</ContentsDivTwo>
      <ContentsDivThree>hello world</ContentsDivThree>
      {/* 이렇게 해주면, class 명이 어렵게 되어서, 보안적인 측면에서도 좋다. */}
    </>
  );
}

export default App;