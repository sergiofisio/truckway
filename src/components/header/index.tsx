import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo-truckRED.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { nav } from "../../data/data";
import Banner from "../banner";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="home"
      className="flex items-end justify-around h-80 w-full p-2 bg-white relative"
    >
      <img
        className="w-2/12 cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
      <div className="absolute top-0 max-w-full flex justify-center sm:hidden">
        <Banner />
      </div>
      <nav className="flex gap-10 sm:hidden">
        {nav.map((item, key) => {
          return (
            <Link
              key={key}
              className="text-red text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:underline md:text-xl sm:text-base"
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
      <div className="hidden sm:flex">
        <FiMenu onClick={() => setIsOpen(!isOpen)} size={30} />

        <div
          className={`top-0 right-0 bg-white h-screen  flex flex-col  justify-between p-5 transition-all duration-300 ease-in-out z-50 ${
            isOpen ? "fixed opacity-100 w-full" : "hidden opacity-0 w-0"
          }`}
        >
          {nav.map((item, key) => {
            return (
              <Link
                key={key}
                className="content-center text-red text-3xl transition-all h-1/6 duration-500 ease-in-out cursor-pointer hover:underline border-b-2 border-dotted border-opacity-25 last-of-type:border-none text-center border-red "
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
