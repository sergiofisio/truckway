import { clients } from "../../data/data";
import Client from "./client";

export default function Clients() {
  return (
    <div id="clients" className="text-red flex flex-col items-center w-full">
      <h2 className="font-title text-6xl font-bold md:text-4xl sm:text-2xl">
        Nossos clientes
      </h2>
      <div className="flex items-center flex-wrap justify-center gap-x-40">
        {clients.map(({ img, text }, key) => (
          <div key={key}>
            <Client img={img} text={text} />
          </div>
        ))}
      </div>
      <h2 className="font-title text-5xl font-bold text-center px-40 md:text-3xl sm:text-xl sm:px-2">
        Venha ser um dos nossos clientes e eleve o transporte da sua carga para
        um{" "}
        <strong className="font-black text-6xl md:text-4xl sm:text-2xl">
          NOVO PATAMAR
        </strong>
        !!
      </h2>
    </div>
  );
}
