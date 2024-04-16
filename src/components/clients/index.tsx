import { clients } from "../../data/data";
import Client from "./client";

export default function Clients() {
  return (
    <div id="clients" className="text-red flex flex-col items-center">
      <h2 className="font-title text-6xl font-bold">Nossos clientes</h2>
      <div className="flex items-center flex-wrap justify-center gap-x-40">
        {clients.map(({ img, text }, key) => (
          <div key={key}>
            <Client img={img} text={text} />
          </div>
        ))}
      </div>
      <h2 className="font-title text-5xl font-bold text-center px-40">
        Venha ser um dos nossos clientes e eleve o transporte da sua carga para
        um <strong className="font-black text-6xl">NOVO PATAMAR</strong>
        !!
      </h2>
    </div>
  );
}
