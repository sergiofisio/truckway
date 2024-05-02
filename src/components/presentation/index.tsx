import imgTruck from "../../assets/logo-truck.svg";
import Button from "../button";

export default function Presentation({
  showModal,
}: {
  showModal: (modalName: string | boolean) => void;
}) {
  return (
    <div id="history" className="bg-red flex flex-col items-center p-4">
      <div className="flex items-center justify-center text-3xl text-white md:text-xl sm:text-base">
        <h2 className="font-text text-center">
          Bem-vindo à Truckway! Somos uma empresa de transporte e logística
          comprometida com a excelência e a sustentabilidade. Explore nossos
          serviços, conheça nossa história e descubra como podemos atender às
          suas necessidades.
        </h2>
        <img className="w-1/3" src={imgTruck} alt="truck" />
      </div>
      <Button
        className="bg-white text-red border-white transition-all duration-500 ease-in-out border-2 border-solid hover:bg-red hover:text-white h-12 w-1/2 text-2xl font-bold uppercase px-8 sm:text-sm"
        text="Conheça nossa história"
        onClick={() => {
          showModal("history");
        }}
        type="button"
      />
    </div>
  );
}
