import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

/**
 * 1. 
 * 
 */

function App() {
  const user = {
    login: true,
    id: 'licat',
    email: 'paul-lab@naver.com',
    img: 'https://paullab.co.kr/images/ceo.png'
    //암호화 하지 않아도 되는 정보들.
  }
  return (
    <main>
      {user.login ?
      <Homepage
      id={user.id}
      email={user.id}
      img={user.img}
      /> : <Login/>}
    </main>
  );
}

export default App;