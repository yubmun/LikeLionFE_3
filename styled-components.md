# 스타일드 컴포넌트 ?

## react에서 가장 인기있는 리액트 라이브러리
### 관련 키워드
  - `npm i styled-components`
  - `import styled from "styled-components"`
  - `import {createGlobalStyle} from "styled-components"`
  - `npm i styled-reset`

#### 리셋 css 설정
```js
import { createGlobalStyle } from "styled-components'
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  margin: 0;
  ...
`

function App(){
  return(
    <>
      <GlobalStyle>
    </GlobalStyle>
  )
}
```
### props 활용
  - 컴포넌트에서 props 활용하듯이, 조건에 따라 스타일을 적용할 수 있음
  - ${} 안에 자바스크립트 코드를 입력할 수 있음
  - props를 활용하여 조건식 추가 가능

### style 상속
  - 이미 만들어져있는 컴포넌트에 다른 스타일을 추가하고자 할 때 사용
  - styled() 함수로 활용.
```js
import 되어있다고 가정

const Button = styled.button`
  border-radius: 15px;
  background-color: pink;
`

const SubmitButton = styled(Button)`
  width: 150px;
  font-size: 24px;
  background-color: yellow;
`
```
  위와 같이 작성 시 `SubmitButton`에도 border-radius가 공통사항이기에 적용이 됨.
  <hr>

```js
function Compo1 ({ className }){
  return(
    <>
      <div>
        <h1 className={className}>가나다라</h1>
      </div>
    </>
  )
}

const $Compo = styled(Compo1)`
  color: red;
  border: 1px solid black;
`

function App(){
  <div>
    <$Compo/>
  </div>
}
```
props로 클래스명을 넘겨야, 원하는 태그에 스타일을 적용한다.

### 공통된 속성값은 css 함수 사용
  - 공통된 속성값이 여러번 들어가는 경우엔, 변수, 함수처럼 사용할 수 있다.

```js
const SIZES = {
  large: 24px,
  medium: 20px,
  small: 18px,
}

const Button = styled.button`
  font-size: ${({size}) => SIZES[size] ?? SIZES['medium']}px;
`

const Input2 = styled.input`
  font-size: ${({size}) => SIZES[size] ?? SIZES['medium']}px;
```
  이렇게 동일한 함수가 반복된다고 가정하면, font-size라는 함수를 ${font-size} 로만 작성할 수 있게 만들 수 있다.
```js
const fontSize = css`
  font-size: ${({size}) => SIZES[size] ?? SIZES['medium']}px;
`

const Button = styled.button`
  ${fontSize}
`
const Input2 = styled.input`
  ${fontSize}
`
```

<hr>

### 전역 스타일?