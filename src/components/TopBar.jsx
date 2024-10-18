import { useState } from "react";

function TopBar() {
  const [language, setLanguage] = useState("English");
  
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    console.log(e.target.value); // Log the updated language value
  };

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center p-3">
        <h2 className="text-center md:text-left w-full md:w-[60%] mb-2 md:mb-0">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <span className="ml-2 font-bold underline">Shop Now</span>
        </h2>
        <div className="languages">
          <select 
            value={language} 
            onChange={handleLanguage} 
            className="bg-black border-none text-white p-2 rounded focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
