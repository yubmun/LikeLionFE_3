import HomePage from './pages/HomePage/HomePage'

import './assets/css/reset.css'
import './app.css'
// 이 공간에서 다른 페이지로 라우팅이 되게 해주세요.

function App() {
  return (
    <HomePage/>
    // HomePage 컴포넌트를 통해 App으로 전송
  );
}

export default App;