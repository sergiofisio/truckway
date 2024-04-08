import logo from "../../assets/logo-truckRED.svg";
import { Link, useNavigate } from "react-router-dom";

const nav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Quem somos",
    link: "#quem",
  },
  {
    name: "Serviços",
    link: "#servicos",
  },
  {
    name: "Clientes",
    link: "#clientes",
  },
  {
    name: "Responsabiliade ambiental",
    link: "#responsabilidade",
  },
  {
    name: "Contato",
    link: "#contato",
  },
];

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-around h-full w-full p-10">
      <img
        className="w-52 cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
      <nav className="flex gap-10">
        {nav.map((item, key) => {
          return (
            <Link
              key={key}
              className="text-red text-3xl transition-all duration-500 ease-in-out hover:underline"
              to={item.link}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
