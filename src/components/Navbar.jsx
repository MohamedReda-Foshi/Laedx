import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="fixed bg-gray-100">
      <div className="md:hidden md:flex-row block absolute top-16 w-full left-0 right-0 z-30 bg-gray-100 shadow-gray-400 shadow-md">
        <ul>
          <BrowserRouter>
            <Link spy={true} smooth={true} to="Home">
              <li className="my-2 py-4 border-b flex items-center hover:bg-red-500 hover:rounded">HOME</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="my-2 py-4 border-b hover:bg-red-500 hover:rounded">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="my-2 py-4 border-b hover:bg-red-500 hover:rounded">Services</li>
            </Link>
            <Link spy={true} smooth={true} to="FAQ">
              <li className="my-2 py-4 border-b hover:bg-red-500 hover:rounded">FAQ</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="py-4 border-b hover:bg-red-600 hover:rounded">Contact</li>
            </Link>
          </BrowserRouter>
          <li>
            <button className="px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center" onClick={toggleDarkMode}>
              {darkMode ? <FaSun size={30} /> : <MdDarkMode size={30} />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="hamburger-menu">
      <div className=" ">
        <div className="z-30 flex justify-between items-center py-5 px-3 fixed bg-gray-100 dark:bg-stone-900 w-full shadow-md">
          <div className="w-40 object-cover">
            
            { darkMode ?  <img src="/logo_dark.png" alt="log.dark"/>:<img src="/logo.png" alt="logo" />}

          </div>
          <nav className="flex items-center flex-row">
            <button className="hamburger-icon lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
            </button>
            <ul className="lg:flex gap-x-8 font-bold hidden sm:block">
              <Link spy={true} smooth={true} to="Home">
                <li>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li>About</li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li>Services</li>
              </Link>
              <Link spy={true} smooth={true} to="FAQ">
                <li>FAQ</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li>Contact</li>
              </Link>
              <li>
                <button className="px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center" onClick={toggleDarkMode}>
                  {darkMode ? <FaSun size={30} /> : <MdDarkMode size={30} />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>{isOpen && content}</div>
      <button className="block sm:hidden transition"></button>
    </div>
  );
};

export default Navbar;
