import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

import { useState } from 'react';





{
  /* 
            <nav className="to-blue-950     ">
            <ul className="flex flex-col  justify-between  gap-x-8 lg:gap-x-14 font-bold md:flex-row">
            <li >Home</li>
            <li >About</li>
            <li >Services</li>
            <li >FAQ</li>
            <li >Contact</li>

            </ul>
            </nav> */
}

  const Navbar = ({ toggleDarkMode, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    



    const content = 
      <div className="fixed bg-gray-100  ">
        <div className=" md:hidden md:flex-row block absolute top-16 w-full left-0  right-0  z-30 bg-gray-100  shadow-gray-400 shadow-md ">
          <ul className=" ">
            <Link spy={true} 
            smooth={true} 
            to="Home"
        
            
            >
              <li className="my-2 py-4 border-b flex  items-center hover:bg-red-500 hover:rounded ">HOME</li>
            </Link>

            <Link  spy={true} smooth={true} to="About"
      
            duration={500}
            >
              <li className="my-2 py-4 border-b  hover:bg-red-500 hover:rounded ">About</li>
            </Link>

            <Link spy={true} smooth={true} to="Services">
              <li className="my-2 py-4 border-b  hover:bg-red-500 hover:rounded ">Services</li>
            </Link>

            <Link spy={true} smooth={true} to="FAQ">
              <li className="my-2 py-4 border-b  hover:bg-red-500 hover:rounded ">FAQ</li>
            </Link>

            <Link spy={true} smooth={true} to="Contact">
              <li className=" py-4 border-b  hover:bg-red-600 hover:rounded ">Contact</li>
            </Link>
            <li>
                    <button className=" px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center" onClick={toggleDarkMode}>
                    {darkMode ?  <FaSun size={30} />: <MdDarkMode size={30}/>}  
                    </button>
                  </li>

            {/* <li>About</li>
                                <li>Services</li>
                                <li>FAQ</li>
                                <li>Contact</li> */}
          </ul>
        </div>
      </div>
    

    return (
      <div className="hamburger-menu">
        <div className=" ">
          <div className="z-30 flex justify-between items-center py-5 px-3 fixed bg-gray-100 dark:bg-stone-900  w-full  shadow-md">
            <div className="w-40 object-cover">
              <img src="/logo.png" alt="logo" />
            </div>

            <nav className=" flex items-center flex-row">

              
              <button
                className="hamburger-icon lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                
                {isOpen ? <RxCross2 size={30}/> : <RxHamburgerMenu size={30} />}
              </button>

              <ul className="  lg:flex  gap-x-8 font-bold hidden sm:block">

                
              <Link to="Home">
                <li href="./" to="Home">
                  Home 
                </li>
              </Link>
                <Link spy={true} smooth={true} to="About">
              <li>
                  About
              </li>
                </Link>
                <Link spy={true} smooth={true} to="Services">
              <li>
                  Services
              </li>
                </Link>
                <Link spy={true} smooth={true} to="FAQ">
              <li>
                  FAQ
              </li>
                </Link>
              <li>
                <Link spy={true} smooth={true} to="Contact">
                  Contact
                </Link>
              </li>
                  <li>
                    <button className=" px-1 text-white bg-black dark:bg-white dark:text-black w-10 h-10 bottom-16 right-16 rounded-md items-center" onClick={toggleDarkMode}>
                    {darkMode ? <FaSun size={30} />: <MdDarkMode size={30}/>}  
                    </button>
                  </li>
              </ul>



            </nav>
          </div>
        </div>

        <div>{isOpen && content}</div>

        <button className="block sm:hidden transtion">
         
          
        </button>
      </div>
    );
  };
  export default Navbar;

/*
            
              const toggleMenu = () => {
                setIsOpen(!isOpen);
              };
            
              return (
 
              );
            };
             */

/*
  const main =useRef(null);
  
  const contact=useRef(null);
  const contact=useRef(null);
  const contact=useRef(null);
  */

//  const scrollToSection=(elementRef)=>{
//  window.scrollTo({
//  top:element.current.offsetTop,
// behavior:'smooth',
//})
// }

/*
    {isOpen && (
      <div className=" z-50 flex  justify-between items-center  py-5 px-3 fixed bg-gray-100 w-full shadow-gray-400 shadow-md  ">
      
      <div className="w-40 object-cover "><img src="/public/logo.png " alt="logo" /></div>
      
      <nav className="to-blue-950  hidden lg:block  ">
      <ul className="flex flex-col  justify-between  gap-x-8 lg:gap-x-14 font-bold md:flex-row">
      <li >HOME</li>
      <li >About</li>
      <li >Services</li>
      <li >FAQ</li>
      <li >CONTACT</li>
      
      </ul>
      </nav>
    )}
    */

// <div className="flex flex-rows font-bold  py-5 px-3 ">
//   <div className="basis-1/3 w-32 px-8">LOGO</div>
/*
       <nav className="list-none basis-1/4">
         <ul className="flex flex-row ">
           <li className="flex-initial w-32">
             <a>HOME</a>
           </li>
           <li className="flex-initial w-32">
             <a>ABOUT</a>
           </li>
           <li className="flex-initial w-32">
             <a>SERVICES</a>
           </li>
           <li className="flex-initial w-32">
             <a>BLOG</a>
           </li>
           <li className="flex-initial w-32">
             <a>FAQ</a>
           </li>
         </ul>
       </nav>
*/
//   <div className="basis-1/5 flex-row px-12 ">
//     <IoMdMailOpen color="red" size="1.7rem" />
//     <h6 className="px-4">Contat</h6>
//   </div>
// </div>
