import { useState } from "react";
import { FaRegHeart, FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Search from "./Search";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="Navbar px-4 flex flex-col md:flex-row justify-between items-center mt-3 md:py-4 bg-white lg:mb-[3%] sm:mb[10%]">
      {/* Logo */}
      <div className="Logo font-bold text-xl md:text-2xl">Shopify</div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleNav} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:flex list-none flex-col md:flex-row justify-between md:space-x-6 text-lg w-full md:w-auto md:items-center mt-4 md:mt-0`}
      >
        <Link to="/" className="mr-3 md:mr-0">
          Home
        </Link>
        <Link to="/contact" className="mr-3 md:mr-0">
          Contact
        </Link>
        <Link to="/about" className="mr-3 md:mr-0">
          About
        </Link>
        <Link to="/" className="mr-3 md:mr-0">
          Sign Up
        </Link>
        <Link to="/add" className="mr-3 md:mr-0">
          Add product
        </Link>
      </div>

      {/* Search Component */}
      <div className="mt-4 md:mt-0">
        <Search />
      </div>

      {/* Icons */}
      <div className="icons flex justify-between align-middle space-x-4 mt-4 md:mt-0">
        <Link to="/wishlist" className="m-auto">
          <FaRegHeart size={30} />
        </Link>
        <Link to="/cart" className="m-auto">
          <MdOutlineShoppingCart size={30} />
        </Link>
        <Link to="/profile" className="m-auto">
          <CgProfile size={30} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
