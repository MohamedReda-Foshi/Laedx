import "./App.css";
import React from 'react';
import { useState } from 'react';
 import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Allcard from "./components/Allcard";
import First from "./components/First";
import Info from "./components/Info";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Who from "./components/Who";
import Compan from "./components/Compan";

function App() {

  
  const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="text-black bg-white dark:text-white dark:bg-stone-900">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />



      <div className="flex flex-col min-h-screen">
        <First  />
        <Info />
        <div className="max-w-5xl mx-auto">
          <Slider />
        </div>
        <Compan/>
        <Who/>
        <Allcard />
        <Contact  />

      </div>

       <Footer /> 

    
    </div>
    </div>
  );
}

export default App;
