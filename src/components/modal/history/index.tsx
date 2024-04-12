import bj from "../../../assets/bj.png";
import kirk from "../../../assets/douglasKirk.svg";

export default function History({
  showModal,
}: {
  showModal: (text: string | boolean) => void;
}) {
  return (
    <div
      id="history"
      className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full bg-opacity-50 bg-red"
    >
      <div className="flex flex-col w-4/5 max-h-80% h-[80%] p-5 bg-white rounded-3xl relative drop-shadow-[0_0_20px_#fff]">
        <button
          className="rounded-[100%] border-red border-2 absolute top-4 right-4 text-red hover:bg-red hover:text-white transition-all duration-500 ease-in-out"
          onClick={() => showModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="font-title text-center text-3xl font-black">
          História da Truckway: Uma Jornada de Estradas e Inovação
        </h2>
        <div className="flex flex-col gap-2 font-text text-xl max-h-[90%] overflow-y-scroll prose !max-w-full px-4">
          <div className="flex justify-center items-center m-0">
            <img
              className="m-0 rounded-3xl drop-shadow-2xl"
              src={bj}
              alt="BJ"
            />
            <div className="px-4 m-0">
              <p className="text-center m-0">
                Em uma jornada iniciada em 1988, nasceu a Truckway...
              </p>
              <p className="flex m-0">
                A TRUCKWAY é uma instituição reconhecida e respeitada no mundo
                da logística e transporte rodoviário. Fundada pelo visionário
                ex-caminhoneiro B.J. Mackey, nossa história é marcada por
                determinação, inovação e um compromisso incansável com a
                excelência.
              </p>
              <h3 className="font-title text-3xl text-center font-bold m-0">
                Os Primeiros Passos
              </h3>

              <p className="m-0">
                B.J. Mackey, com sua visão audaciosa e paixão inabalável pelo
                transporte, lançou as bases da Truckway em 1988. Seus anos de
                experiência nas estradas moldaram sua visão de uma empresa que
                não apenas entregava mercadorias, mas superava expectativas e
                definia novos padrões de excelência.
              </p>
            </div>
          </div>
          <div className="text-justify">
            <h3 className="font-title text-3xl text-center font-bold m-0">
              Desafios e Conquistas
            </h3>

            <p className="m-0">
              Os primeiros anos foram desafiadores, mas com determinação e um
              compromisso inabalável com a qualidade, a Truckway superou todas
              as adversidades. Investimos em tecnologia de ponta, treinamento
              especializado e uma frota moderna, garantindo que cada entrega
              fosse realizada com segurança e eficiência.
            </p>
          </div>
          <div className="text-justify">
            <h3 className="font-title text-3xl text-center font-bold m-0">
              Expansão e Reconhecimento
            </h3>

            <p className="m-0">
              Ao longo dos anos, expandimos nossas operações além das
              fronteiras, tornando-nos parceiros confiáveis para os maiores
              clientes. Nossa reputação de excelência nos permitiu estabelecer
              parcerias com marcas renomadas como Volvo, DAF, Scania, MAN e
              Iveco.
            </p>
          </div>
          <div className="text-justify">
            <h3 className="font-title text-3xl text-center font-bold m-0">
              Compromisso com a Sustentabilidade
            </h3>

            <p className="m-0">
              Além de sermos líderes no setor, a Truckway é uma empresa
              comprometida com a sustentabilidade. Implementamos rotas
              otimizadas, tecnologias de baixa emissão e práticas conscientes,
              garantindo que nossas operações tenham o menor impacto possível no
              meio ambiente.
            </p>
          </div>
          <div className="flex items-center text-justify">
            <img
              className="m-0 rounded-3xl drop-shadow-2xl"
              src={kirk}
              alt="img douglas kirk"
            />
            <div className="px-4 m-0">
              <h3 className="font-title text-3xl text-center font-bold m-0">
                O Futuro da Truckway
              </h3>
              <p className="m-0 ">
                Hoje, a Truckway é mais do que uma empresa - é uma marca de
                confiança, inovação e excelência. Continuamos a expandir nossas
                operações, liderando o caminho em um setor em constante
                evolução. Junte-se a nós nesta emocionante jornada, onde cada
                quilômetro é uma oportunidade para fazer a diferença.
              </p>
              <p className="m-0">
                Em 1995, a empresa foi adquirida por Douglas Tiberuis Kirk, um
                líder visionário com décadas de experiência no setor de
                transporte e logística.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
