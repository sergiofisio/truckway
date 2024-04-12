import Truck from "./truck";
import bau from "../../assets/trucks/bau.svg";
import camara from "../../assets/trucks/camaraFria.svg";
import graneleiro from "../../assets/trucks/graneleiro.svg";
import sider from "../../assets/trucks/sider.svg";
import tanque from "../../assets/trucks/tanque.svg";

export default function Trucks({
  showModal,
}: {
  showModal: (text: string) => void;
}) {
  return (
    <div id="truck" className="flex flex-col gap-8">
      <h2 className="font-title text-6xl text-red text-center font-bold">
        Conheça nossa Frota
      </h2>
      <div className="font-text text-2xl flex flex-col justify-center text-justify prose !max-w-full px-4">
        <p className="m-0">
          Nossa frota é a espinha dorsal da Truckway. Com veículos modernos e
          bem-mantidos, estamos prontos para enfrentar qualquer desafio
          logístico.
        </p>
        <p className="m-0">
          Desde carretas graneleiras até carretas tanque, nossos caminhões são
          equipados para transportar cargas de maneira eficiente e segura.
          Acreditamos que uma frota confiável é essencial para o sucesso de
          nossos clientes e para a nossa própria jornada.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 px-8">
        <Truck
          showModal={() => showModal("baú")}
          img={bau}
          truckName="Caminhão baú"
        />
        <Truck
          showModal={() => showModal("graneleiro")}
          img={graneleiro}
          truckName="Caminhão graneleiro"
        />
        <Truck
          showModal={() => showModal("sider")}
          img={sider}
          truckName="Caminhão sider"
        />
        <Truck
          showModal={() => showModal("tanque")}
          img={tanque}
          truckName="Caminhão tanque"
        />
        <Truck
          showModal={() => showModal("fria")}
          img={camara}
          truckName="Câmara Fria"
        />
      </div>
    </div>
  );
}
