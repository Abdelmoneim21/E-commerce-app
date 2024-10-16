import { useState } from "react"

function TopBar(){
    const[language,setLanguage]=useState("English")
    const handleLanguage =(e)=>{
        setLanguage(e.target.value)
        console.log(language)
    }
    return(
        <div className="cont  bg-[#000] text-white p-0 md:shrink-0 ">

        
        <div className="Top-bar flex justify-around align-middle p-3">
            <h2 className="text-end w-[60%]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="ml-2 font-bold underline">ShopNow</span> </h2>
            <div className="languages ">
                <select value={language} onChange={handleLanguage} className="bg-black border-none text-white p-2 rounded">
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                </select>
            </div>
        </div>
        </div>
    )
}
export default TopBar