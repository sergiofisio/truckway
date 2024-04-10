import bau from "../../../assets/trucks/bau.svg";
import camara from "../../../assets/trucks/camaraFria.svg";
import graneleiro from "../../../assets/trucks/graneleiro.svg";
import sider from "../../../assets/trucks/sider.svg";
import tanque from "../../../assets/trucks/tanque.svg";

const truckInfo = [
  {
    type: "Caminhão Baú",
    img: bau,
    info: [
      {
        paragrafo:
          "Este tipo de caminhão possui uma carroceria fechada, semelhante a um grande armário sobre rodas.",
      },
      {
        paragrafo:
          "É usado principalmente para transportar cargas que precisam de proteção contra intempéries, como alimentos, produtos farmacêuticos, eletrônicos, etc.",
      },
      {
        paragrafo:
          "Os caminhões baú são comuns em serviços de entrega de mercadorias para empresas e também são usados em mudanças residenciais e comerciais.",
      },
    ],
  },
  {
    type: "Caminhão graneleiro",
    img: graneleiro,
    info: [
      {
        paragrafo:
          "Este tipo de caminhão possui uma carroceria aberta e é usado principalmente para transportar cargas a granel, como grãos, minérios, areia, entre outros materiais soltos.",
      },
      {
        paragrafo:
          "Sua carroceria geralmente tem uma estrutura com laterais removíveis para facilitar o carregamento e a descarga de materiais a granel.",
      },
    ],
  },
  {
    type: "Caminhão Sider",
    img: sider,
    info: [
      {
        paragrafo:
          "O caminhão sider é semelhante ao caminhão baú, mas tem uma carroceria com laterais de lona ou metal que podem ser abertas para facilitar o carregamento e a descarga de mercadorias.",
      },
      {
        paragrafo:
          "Esse tipo de caminhão é comumente usado para transportar cargas que não precisam de proteção total contra intempéries, mas ainda exigem alguma proteção lateral.",
      },
    ],
  },
  {
    type: "Caminhão Tanque",
    img: tanque,
    info: [
      {
        paragrafo:
          "Esse tipo de caminhão é projetado para transportar líquidos, como água, combustíveis (gasolina, diesel, etc.), produtos químicos, leite, entre outros.",
      },
      {
        paragrafo:
          "Sua carroceria é um grande tanque cilíndrico ou retangular, geralmente feito de metal, plástico reforçado ou outro material resistente, capaz de armazenar e transportar o líquido de forma segura.",
      },
    ],
  },
  {
    type: "Caminhão Fria",
    img: camara,
    info: [
      {
        paragrafo:
          "Não é exatamente um tipo de caminhão, mas sim um equipamento especializado que pode ser instalado em diferentes tipos de caminhões, como baús, para transformá-los em caminhões refrigerados.",
      },
      {
        paragrafo:
          "Uma câmara fria é uma unidade de refrigeração que mantém a temperatura interna da carroceria dentro de faixas específicas, geralmente usada para transportar produtos perecíveis que requerem refrigeração, como alimentos congelados ou resfriados.",
      },
    ],
  },
];

export default function TruckModal({
  modal,
  showModal,
}: {
  modal: string;
  showModal: (text: string | boolean) => void;
}) {
  console.log({ modal });

  return (
    <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full bg-opacity-50 bg-red">
      {truckInfo
        .filter((truck) => truck.type.toLowerCase().includes(modal))
        .map(({ type, img, info }, key) => {
          return (
            <div
              key={key}
              className="flex flex-col w-4/5 max-h-80% h-[80%] p-5 border-4 border-solid border-black bg-white rounded-3xl relative"
            >
              <button
                className="rounded-[100%] border-black border-2 absolute top-4 right-4"
                onClick={() => showModal(false)}
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
              <h2 className="text-center text-3xl font-black">{type}</h2>
              <img src={img} alt={`img ${type}`} />
              {info.map((item, key) => {
                return (
                  <p key={key} className="text-justify">
                    {item.paragrafo}
                  </p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
