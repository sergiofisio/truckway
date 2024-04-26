import eficiente from "../../assets/environment/ecoEficiencia.jpeg";
import reducaoResiduos from "../../assets/environment/reducaoResiduos.jpeg";
import sustentabilidade from "../../assets/environment/sustentabilidade.jpeg";
import treinamento from "../../assets/environment/treinamento.jpeg";

export default function Environement() {
  return (
    <div
      id="environement"
      className="text-red flex flex-col items-center gap-20"
    >
      <h2 className="font-title text-6xl font-bold md:text-4xl sm:text-2xl">
        Responsabilidade Ambiental
      </h2>
      <div className="font-text text-2xl flex justify-center text-center prose !max-w-full px-4">
        <div className="flex flex-col gap-2">
          <img className="w-96 rounded-[100%] m-0" src={eficiente} alt="" />
          <img
            className="w-96 rounded-[100%] m-0"
            src={reducaoResiduos}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-4 md:text-xl sm:text-base">
          <p className="m-0">
            Acreditamos que o transporte pode ser ecologicamente responsável.
            Por isso, investimos em tecnologias limpas e rotas otimizadas.
          </p>
          <p className="m-0">
            Nossos motoristas participam de programas de treinamento em direção
            econômica e conscientização ambiental. Além disso, nossos veículos
            são equipados com motores de baixa emissão.{" "}
          </p>
          <p className="m-0">
            Na Truckway, estamos comprometidos em proteger o meio ambiente
            enquanto entregamos resultados excepcionais.
          </p>
          <p className="m-0">
            Reduzir, reutilizar e reciclar são princípios fundamentais na
            Truckway. Implementamos programas de reciclagem, reduzimos o uso de
            plástico e buscamos constantemente maneiras de minimizar nosso
            impacto ambiental.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img className="w-96 rounded-[100%] m-0" src={treinamento} alt="" />
          <img
            className="w-96 rounded-[100%] m-0"
            src={sustentabilidade}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
