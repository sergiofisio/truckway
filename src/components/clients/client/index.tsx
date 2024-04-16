export default function Client({ img, text }: { img: string; text: string }) {
  return <img className="w-96" src={img} alt={`img ${text}`} />;
}
