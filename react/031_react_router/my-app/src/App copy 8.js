import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}
function Login(){
  return <div>login</div>
}
function Study(){
  return <div>study</div>
}
function StudyDetail(props){
  useLocation()
  const {num} = useParams()
  console.log(num)

  return(
      <>
        <p>{num}번 게시물에 오신것을 환영합니다.</p>
        <Outlet></Outlet>
      </>
    )
}
function Notice(){
  return <div>notice</div>
}

function Chat(){
  const location = useLocation();
  const num = location.pathname.split('/')[2];

  return(
    <>
      <p>{num}번 게시물의 채팅방입니다 나중에 fetch를 통해 백엔드에서 채팅 정보를 받아와야 합니다.</p>
    </>
  )
}

function Memo(){
  const {num} = useParams()
  console.log(num)

  return(
    <>
      <p>{num}번 게시물의 메모방입니다. 나중에 fetch를 통해 백엔드에서 메모 정보를 받아와야 합니다.</p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/study/:num/*" element={<StudyDetail />}>
          <Route path="chat" element={<Chat/>}/>
          <Route path="memo" element={<Memo/>}/>
        </Route>
        <Route path="/notice" element={<Notice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;