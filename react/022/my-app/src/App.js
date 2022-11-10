import Title from "./Components/Title";
import Form from "./Components/Form";
import Loading from "./Components/Loading";
import Company from "./Components/Company";
import Modal from "./Components/Modal";

function App() {
  return (
    <main id="App">
      <h1>1만시간의 법칙</h1>
      <Title/>
      <Form/>
      <Loading/>
      <Company/>
      <Modal/>
    </main>
  );
}

export default App;