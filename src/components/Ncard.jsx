function Ncard() {
  return (
    <div className="rom-indigo-500 to-indigo-800 px-4 py-3 ">
      <div className=" text-wrap text-center flex flex-col items-center justify-center  rounded-lg border shadow-lg p-10 max-w-xs  ">
        <img
          className=" mx-auto object-cover  relative inline-block  rounded-full  lg:h-[200px] lg:w-[200px] md:h-[150px] md:w-[150px]"
          
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="preson"
        />
        <h3 className="text-sm  "> Creative Director </h3>
        <h3 className="text-lg leading-relaxed uppercase">name </h3>
        <p className="text-sm  leading-relaxed line-clamp-3 lg:line-clamp-none ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-[#F23030] dark:bg-[#f230308d] ease-in rounded-full px-2 py-3 m-2 hover-colo hover:bg-[#D93030] dark:hover:bg-[#d9303084] text-white font-semibold uppercase transition ">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Ncard;
