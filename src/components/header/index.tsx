import { slide as Menu } from "react-burger-menu";
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

  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex items-end justify-around h-full w-full p-2 bg-white relative">
      <img
        className="w-2/12 cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />
      <div className="absolute top-0 max-w-full flex justify-center sm:hidden">
        <Banner />
      </div>
      <nav className="hidden md:flex gap-10">
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
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="md:hidden">
        <FiMenu onClick={toggleMenu} size={30} />
        <Menu
          className="bg-white"
          isOpen={isOpen}
          onStateChange={({ isOpen }) => isOpen || closeMenu()}
          right
        >
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
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            );
          })}
        </Menu>
      </div>
    </header>
  );
}
