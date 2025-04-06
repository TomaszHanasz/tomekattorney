import "./App.css";
import { useState } from "react";
import Homepage2 from "./main/homepage2";
import Homepage from "./main/homepage";
import Homepage3 from "./main/homepage3";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      {page === 1 && <Homepage />}
      {page === 2 && <Homepage2 />}
      {page === 3 && <Homepage3 />}
      <div>
        <button
          style={{ width: 30 }}
          onClick={() => {
            window.scrollTo(0, 0);
            setPage(1);
          }}
        >
          1
        </button>
        <button
          style={{ width: 30 }}
          onClick={() => {
            window.scrollTo(0, 0);
            setPage(2);
          }}
        >
          2
        </button>
        <button
          style={{ width: 30 }}
          onClick={() => {
            window.scrollTo(0, 0);
            setPage(3);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default App;
