
import FoterTill from"./FoterTill";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <div className="flex justify-betwee bg-[#f6f6f6] dark:bg-black bottom-0 w-full box-border p-5 ">
        
    <div className="container mx-auto flex justify-between">

    <div className=" text-red-600  col-span-2 justify-around ">

    < img className="object-cover" src="/logo.png" alt="logo" />

        <div className="p-5 flex-row text-gray-600 dark:text-white">
 
       <ul className="flex-col flex  px-3 md:flex-row ">
        <li><a href="#li"><TiSocialLinkedin size={30}/></a></li>
        <li><a href="#https://www.facebook.com"><TiSocialFacebook size={30}/></a></li>
        <li><a href="#about"><FaXTwitter size={30}/></a></li>
        <li><a href="#about"><FaInstagram size={30}/></a></li>
       </ul>
            
        </div>

    </div>

        <div className="flex justify">
            
            <FoterTill/>
            <FoterTill/>
            <div className="hidden md:block ">
            <FoterTill/>
            </div>
            
        </div>


    </div>

    </div>
  )
}

export default Footer