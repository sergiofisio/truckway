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
      className={`fixed bottom-8 left-8 bg-red border-white border-2 border-solid w-24 h-24 rounded-[100%] flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 ${
        showReturn ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{ fontSize: "24px", color: "white" }}
    >
      <h2 className="text-4xl">&#8679;</h2>
      <h2>Voltar</h2>
    </button>
  );
}
