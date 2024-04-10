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
    <section id="truck" className="p-8">
      <h2 className="text-6xl text-red text-center">Conheça nossa Frota</h2>
      <div className="flex flex-wrap items-center justify-center gap-10 p-8">
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
    </section>
  );
}
