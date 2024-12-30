import { CiSearch } from "react-icons/ci";
import { useState } from 'react';


const Secondnav = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
    <div className="bg-[#3b006a] flex  items-center p-1">
    <div className="w-1/1" >
      {/* Logo or Image section */}
      <div >
      <img src="./images/GHA.svg" alt="Logo" className="h-20 w-full max-w-2xl mx-auto px-6 ml-12 text-white" />
      

      </div>
      </div>
      {/* Search input section */}
      <div className=" relative w-full max-w-md   ml-40  py-1  w-full max-w-sm ">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full px-4 py-1 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        
       /><CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        
      </div>
    </div>
      </>
  );
};

export default Secondnav;
