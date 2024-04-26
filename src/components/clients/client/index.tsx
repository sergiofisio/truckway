export default function Client({ img, text }: { img: string; text: string }) {
  return <img className="w-96 md:w-64 sm:w-52" src={img} alt={`img ${text}`} />;
}
