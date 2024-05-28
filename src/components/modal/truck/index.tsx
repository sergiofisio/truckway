import { truckInfo } from "../../../data/data";

export default function TruckModal({
  modal,
  showModal,
  windowHeight,
}: {
  modal: string;
  showModal: (text: string | boolean) => void;
  windowHeight: number;
}) {
  const truck = truckInfo.find((truck) =>
    truck.type.toLowerCase().includes(modal)
  );

  return (
    <div className="fixed top-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 bg-red">
      {truck && (
        <div className="flex flex-col items-center w-4/5 max-h-[95%] h-[100%] p-5 bg-white rounded-3xl relative drop-shadow-[0_0_20px_#fff]">
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
          <h2 className="text-center text-3xl font-black">{truck.type}</h2>
          <img
            className={` ${windowHeight < 900 ? "h-40 w-40" : "h-96 w-96"} `}
            src={truck.img}
            alt={`img ${truck.type}`}
          />
          <div className="flex flex-col gap-2 max-h-[90%] overflow-y-auto scrollbar scrollbar-thumb-red scrollbar-track-white prose !max-w-full px-4">
            {truck.info.map((item, key) => (
              <p key={key} className="font-text text-justify text-xl m-0">
                {item.paragrafo}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
