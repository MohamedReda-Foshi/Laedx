
import { IoStarSharp } from "react-icons/io5";

function Card() {
  return (
    <div className="rounded-lg  border-2 shadow-lg shadow-red-500/20 p-7  ">

        <div className="flex justify-center items-center gap-4 py-3">
            <div className=" rounded-full flex ">

                <img className="rounded-full object-cover w-20 h-20" src="/resize.jpg"   alt="" />
            </div>
            
            <div className="flex font-medium">
                <h3> Name</h3>
            </div>
        </div>

            

        
        <div className="flex justify-between py-">

        <div  className="flex ">
            <IoStarSharp color='red' outline-color= "blue" className=" w-11 h-11 " />
            <IoStarSharp color='red' className=" w-11 h-11 " />
            <IoStarSharp color='red' className=" w-11 h-11 " />
            <IoStarSharp color='red' className=" w-11 h-11 " />       
            <div className=" dark:outline-white" style={{color: 'black '}}>
            <IoStarSharp className=" w-11 h-11 " />
            </div>

		</div>   

        </div>


        <div className=" font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi minus sed atque deserunt praesentium, doloribus ma
        </div>




    </div>
  )
}

export default Card