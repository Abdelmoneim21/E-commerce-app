import "./sidebar.css";
import { Carousel } from "flowbite-react";
function SideBar() {
  return (
    <div className="flex flex-col md:flex-row w-[80%] m-auto">
      {/* Sidebar */}
      <div className="sidebar font-bold text-sm md:text-[15px] align-middle text-center  border-b md:border-r-4 md:border-b-0 flex-col justify-center list-none w-full md:w-[20%] md:h-[80vh]">
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Women's Fashion</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Men's Fashion</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Electronics</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Home & Lifestyle</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Medicine</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Sports & Outdoor</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Baby & Toys</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Groceries & Pets</li>
        <li className="py-2 hover:bg-gray-200 cursor-pointer">Health & Beauty</li>
      </div>

      {/* Carousel */}
      <div className="carousel flex-grow h-56 sm:h-64 xl:h-80 2xl:h-96 md:mt-8 xs:mt-3 w-full md:w-[80%]">
        <Carousel>
          <img
            src="/Frame 561.png"
            alt="..."
            className="w-full h-full object-cover"

          />
          <img
            src="/Frame 561.png"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="/Frame 561.png"
            className="w-full h-full object-cover"
          />
          <img
            src="/Frame 561.png"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img
            src="/Frame 561.png"
            alt="..."
            className="w-full h-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default SideBar;
