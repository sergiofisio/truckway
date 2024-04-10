export default function Truck({
  showModal,
  img,
  truckName,
}: {
  showModal: any;
  img: string;
  truckName: string;
}) {
  return (
    <div
      onClick={showModal}
      className="flex flex-col items-center justify-center border-red border-2 border-solid rounded-3xl w-60 h-fit cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-red hover:drop-shadow-[0_0_10px_#000]"
    >
      <img src={img} alt={`img ${truckName}`} />
      <h2 className="text-2xl font-semibold">{truckName}</h2>
    </div>
  );
}
