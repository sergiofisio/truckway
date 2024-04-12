export default function Return() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="fixed bottom-8 left-8 bg-red border-white border-2 border-solid w-10 h-10 rounded-[100%]"
      onClick={scrollToTop}
      style={{ fontSize: "24px", color: "white" }}
    >
      &#8679;
    </button>
  );
}
