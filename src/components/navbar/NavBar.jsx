import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Search from "./Search";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="Navbar px-4 flex justify-around mt-3 md:py-4">
          <div className="Logo font-bold ">
            Logo
          </div>
          <div className="content flex list-none justify-between w-[40%] content-stretch md:text-[20px]">
            <Link to="/" className="mr-3">Home</Link>
            <Link to="/contact" className="mr-3">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/" className="mr-3">Sign Up</Link>
          </div>
            <Search />
          <div className="icons flex justify-between align-middle w-[10%]">
          <Link to="/wishlist" className="m-auto"><FaRegHeart size={30}  /></Link>
          <Link to="/cart" className="m-auto"><MdOutlineShoppingCart size={30}  /></Link>
          <Link to="/profile" className="m-auto"><CgProfile size={30}  /></Link>
          </div>
        </div>
    )

}
export default NavBar;