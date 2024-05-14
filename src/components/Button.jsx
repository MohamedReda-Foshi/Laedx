import  PropTypes  from "prop-types"
function Button({text}) {
    
  return (  
    
    <button className="px-6 py-4 rounded-full bg-[#F23030] dark:bg-[#f230308d] text-white relative font-extrabold text-lg shadow-md transition duration-250 overflow-hidden hover:text-black-200 hover:bg-gray-200 ">
    {text}
    

    </button> 
  )
}


Button.protoType={
    text: PropTypes.string.isRequired,

}

export default Button;