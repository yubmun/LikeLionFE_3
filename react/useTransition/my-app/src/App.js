import { useState } from "react";
import SearchPage from "./pages/SearchPage";

function App() {
  const [keyword, setKeyword] = useState();

  return (
    <div>
      <SearchPage keyword={keyword} setKeyword={setKeyword}/>
    </div>
  );
}
export default App;
