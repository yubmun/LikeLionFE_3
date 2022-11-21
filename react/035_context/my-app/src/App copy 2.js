import {createContext} from 'react'

const value = createContext(1000);

function Three(props){
  return(
    <div>
      가격 : {props.value}
    </div>
  )
}

function Two(props){
  return(
    <div>
      <Three value={props.value}/>
    </div>
  )
}

function One(props){
  return(
    <div>
      <Two value={props.value}/>
    </div>
  )
}

export default function App() {
  const value = 1000; // 이 값을 Three에서 출력하고 싶다.
  return (
    <div>
      <One value={value}/>
    </div>
  )
}
