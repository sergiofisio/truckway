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
      className="flex flex-col items-center justify-between border-red border-2 border-solid rounded-3xl w-72 h-80 cursor-pointer transition-all duration-500 ease-in-out p-4 gap-2 hover:shadow-2xl hover:shadow-red"
    >
      <img src={img} alt={`img ${truckName}`} />
      <h2 className="font-text text-2xl font-semibold">{truckName}</h2>
    </div>
  );
}
