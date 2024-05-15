
function Compan() {
  return (
    <div  className="bg-[#f6f6f6] -150px flex-col dark:bg-stone-900 ">



        <div className=" text-black text-5xl py-5 text-center dark:text-[#f6f6f6]">
          <h1>Our mertchant network </h1>
        </div>

        <div className="justify-around  flex flex-col px-20 items-center md:flex-row ">

            <div className="  justify-around ">

           
            <img className="aspect-square w-40 object-contain" src="/google.png" alt="google" />
            <img className="aspect-square w-40 object-contain" src="/microsoft.png" alt="microsoft" />
            <img className="aspect-square w-40 object-contain" src="/visa.png" alt="visa" />
            </div>

            <div className="flex-row justify-around">
            <img className="aspect-square w-40 object-contain" src="/amazon.png" alt="amazon" />
            <img className="aspect-square w-40 object-contain" src="/meta.png" alt="meta" />
            <img className="aspect-square w-40 object-contain" src="/paypal.png" alt="paypal" />
            </div>

        </div>




    </div>
  )
}

export default Compan