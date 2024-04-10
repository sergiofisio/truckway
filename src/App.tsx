import { useState } from "react";
import Header from "./components/header";
import Presentation from "./components/presentation";
import History from "./components/modal/history";
import Trucks from "./components/trucks";
import TruckModal from "./components/modal/truck/truck";

export default function App() {
  const [modal, showModal] = useState<string | boolean>(false);

  return (
    <>
      <Header />
      <Presentation showModal={showModal} />
      <Trucks showModal={showModal} />
      {modal === "history" ? (
        <History showModal={showModal} />
      ) : typeof modal === "string" ? (
        <TruckModal modal={modal} showModal={showModal} />
      ) : null}
    </>
  );
}
