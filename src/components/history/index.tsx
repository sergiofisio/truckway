// TruckwayModal.tsx

export default function History({
  showModal,
}: {
  showModal: (text: string) => void;
}) {
  return (
    <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full bg-opacity-50 bg-red">
      <div className="flex flex-col w-4/5 max-h-80% h-[80%] p-5 border-4 border-solid border-black bg-white rounded-3xl relative md:text-xl">
        <button
          className="rounded-[100%] border-black border-2 absolute top-4 right-4"
          onClick={() => showModal("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2>História da Truckway: Uma Jornada de Estradas e Inovação</h2>
        <p>Há muito tempo, em uma estrada sinuosa, nasceu a Truckway...</p>

        <p>
          Fundada em 1988 pelo destemido ex-caminhoneiro B.J. Mackey, nossa
          empresa emergiu das poeiras das rodovias e se tornou uma lenda no
          mundo da logística e transporte.
        </p>

        <h3>Os Primeiros Passos</h3>

        <p>
          B.J. Mackey, com sua barba espessa e olhos que conheciam cada curva,
          sonhava com estradas abertas e horizontes distantes. Ele havia passado
          anos atrás do volante, enfrentando tempestades, sol escaldante e
          noites escuras. Mas sua paixão pelas estradas nunca diminuiu. Ele
          sabia que o transporte poderia ser mais do que apenas entregar cargas
          de um ponto a outro. Assim, com um mapa gasto e um punhado de sonhos,
          ele fundou a Truckway.
        </p>

        <h3>Desafios e Conquistas</h3>

        <p>
          Os primeiros anos foram difíceis. A Truckway enfrentou estradas
          acidentadas, prazos apertados e condições climáticas adversas. Mas
          B.J. Mackey e sua equipe dedicada superaram cada obstáculo. Eles
          investiram em tecnologia de ponta, treinamento contínuo e veículos
          ecologicamente responsáveis. As carretas graneleiras transportavam
          commodities agrícolas, enquanto as carretas tanque deslizavam pelas
          estradas com líquidos preciosos. Os baús protegiam cargas secas e
          sensíveis, e as câmaras frias mantinham alimentos frescos em seu
          ambiente gelado.
        </p>

        <h3>Expansão e Reconhecimento</h3>

        <p>
          À medida que a Truckway crescia, suas rodas giravam além das
          fronteiras. Novas rotas foram traçadas, e nossa frota se multiplicou.
          Os maiores clientes confiavam em nós para transportar suas mercadorias
          com segurança e eficiência. Marcas como Volvo, DAF, Scania, MAN e
          Iveco encontraram na Truckway um parceiro confiável.
        </p>

        <h3>Compromisso com a Sustentabilidade</h3>

        <p>
          Mas a Truckway não era apenas sobre negócios. B.J. Mackey acreditava
          que o transporte não deveria prejudicar o meio ambiente. Ele
          implementou rotas otimizadas, motores de baixa emissão e práticas
          conscientes. A visão da Truckway era liderar o setor, mantendo seu
          compromisso com a responsabilidade ambiental. Os motoristas
          participavam de programas de treinamento em direção econômica e
          conscientização ambiental. Juntos, eles escreviam uma história de
          estradas e inovação.
        </p>

        <h3>O Futuro da Truckway</h3>

        <p>
          Hoje, a Truckway é mais do que uma empresa. É uma trilha de pneus na
          areia, uma canção de motores noturnos e um farol que guia os
          viajantes. Continuamos a escrever nossa história, guiados pela paixão
          de B.J. Mackey e pelo desejo de fazer a diferença. Junte-se a nós
          nessa jornada logística e sustentável, onde cada quilômetro é uma
          página virada.
        </p>
      </div>
    </div>
  );
}
