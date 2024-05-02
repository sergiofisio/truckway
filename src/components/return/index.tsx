export default function Return({
  showReturn,
  setShowReturn,
}: {
  showReturn: boolean;
  setShowReturn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const scrollToTop = () => {
    setShowReturn(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`bottom-8 left-8 bg-red border-white border-2 border-solid w-24 h-24 rounded-[100%] flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 text-white hover:text-red hover:bg-white hover:border-red sm:w-12 sm:h-12 text-2xl sm:text-xs  sm:left-[85%] ${
        showReturn ? "fixed" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <h2 className="text-4xl sm:hidden">&#8679;</h2>
      <h2>Voltar</h2>
    </button>
  );
}
