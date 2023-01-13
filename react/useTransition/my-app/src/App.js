import { useTransition } from "react";
import { useState } from "react";
import SearchPage from "./pages/Page";

function App() {
  const [keyword, setKeyword] = useState();
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <SearchPage keyword={keyword} setKeyword={setKeyword} isPending={isPending} startTransition={startTransition}/>
    </div>
  );
}
export default App;
