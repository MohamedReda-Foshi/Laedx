


           
function Contact() {
  return (
    <div id="Contact" className="isolatepx-6 py-10 sm:py-10 lg:px-8 ">
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
    </div>
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#203359]  dark:text-white sm:text-4xl">Contact</h2>
    </div>
    <form action="#"  className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-[#203359]  dark:text-white">First name</label>
          <div className="mt-2.5">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359]   dark:text-white dark:bg-stone-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-[#203359]  dark:text-white">Last name</label>
          <div className="mt-2.5">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359]   dark:text-white dark:bg-stone-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#203359]  dark:text-white ">Email</label>
          <div className="mt-2.5">
            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359] shadow-sm ring-1 ring-inset dark:text-white dark:bg-stone-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#203359]  dark:text-white">Message</label>
          <div className="mt-2.5">
            <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#203359]   shadow-sm ring-1 ring-inset dark:text-white dark:bg-stone-900 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button type="submit" className="block w-full rounded-md bg-[#F23030] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#D93030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#A62121]">Submite</button>
        
      </div>
    </form>
  </div>
  )
}

export default Contact