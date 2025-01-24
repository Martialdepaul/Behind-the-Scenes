import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header.jsx";
import ConfigureCounter from "./components/Counter/ConfigureCounter";
import { log } from "../log";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevChoseCount) => newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
