import logo from "../../assets/logo-truckRED.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { nav } from "../../data/data";
import Banner from "../banner";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex items-end justify-around h-full w-full p-10 bg-white relative">
      <img
        className="w-52 cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
      <div className="absolute top-0 h-[70%]">
        <Banner />
      </div>
      <nav className="flex gap-10">
        {nav.map((item, key) => {
          return (
            <Link
              key={key}
              className="text-red text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:underline"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
