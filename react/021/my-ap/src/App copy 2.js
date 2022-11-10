import './app.css'
import One from './Components/One'
import Two from './Components/Two'

function App() {
  return (
    <div className="App">
      <h1>test2</h1>
      {/**주석은 이렇게 */}
      {/* class는 className으로, class도 되지만, 쓰지말자. */}
      <h2 className="hello">hello</h2>
      <One/>
      <Two/>
    </div>
  );
}

export default App;