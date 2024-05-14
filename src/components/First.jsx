import Button from "./Button"

function First() {
  return (


    <div id="Home"className="flex flex-col-reverse pt-[88px]  md:flex-row  md:justify-center" >

    <div className="pt-0 p-10  flex-col ">


        <div className=" font-bold text-5xl py-5">

          <h1 className="py-3 text-6xl">A better way to </h1>
          <h1 className="py-2 text-6xl">manage your </h1>
          <h1 className="py-1 text-6xl">money </h1>

        </div>
      <div className="w-5px text-xl text-ellipsis ">
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eligendi iusto impedit soluta vitae nam eveniet eius molestias
       
        </p>
      </div>

      <div className=" rounded-lg text-center py-5">
        <Button text="HERE"></Button>
        

      </div>

    </div>

    <div className="p-5 ">
      <img src="/resize.jpg" alt="F" className="h-500px w-800px z-0" />
    </div>

    </div>
  )
}

export default First