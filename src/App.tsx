import { useState } from "react";
import Header from "./components/header";
import Presentation from "./components/presentation";
import History from "./components/history";

function App() {
  const [modal, showModal] = useState("");

  return (
    <>
      <Header />
      <Presentation showModal={showModal} />
      {modal === "history" && <History showModal={showModal} />}
    </>
  );
}

export default App;
