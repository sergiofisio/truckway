import road from "../../assets/estrada.svg";
import truck from "../../assets/caminhaoLogo.svg";

export default function Banner() {
  return (
    <div className="relative w-1/2 h-full overflow-hidden flex items-center rounded-3xl">
      <div className="absolute top-0 flex flex-col items-center justify-center w-full text-2xl md:text-lg sm:text-lg">
        <h2 className="font-title font-black">
          Sua sua carga, nossa prioridade.
        </h2>
        <h2 className="font-title font-black">
          Entregamos com rapidez, segurança e eficiencia.
        </h2>
      </div>
      <img className="w-full" src={road} alt="road" />
      <img
        className="absolute top-1/2 transform -translate-y-1/2 animate-truck-slide w-1/3 flex"
        src={truck}
        alt="truck"
      />
    </div>
  );
}
