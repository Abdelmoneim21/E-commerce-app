import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useDispatch, useSelector } from 'react-redux'  
import { addToCart } from "../../redux-toolkit/Cart-slice";
function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value); // Update search term first
    
    if (value.length > 2) {  // To avoid searching for empty strings or too short queries
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products)) // Use the 'products' field from the response
        // .catch((error) => console.error('Error fetching products:', error))
    } else {
      setProducts([]); // Clear results when the search term is too short
    }
  };

  return (
    <div>
      <div className="search-bar flex relative justify-center w-[100%]">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="What are you looking for?"
          className="bg-[#f5f5f5] border-none px-[20px] rounded w-[200%]"
        />
        <FaSearch className="m-auto absolute right-[5%] top-[30%]" />
      </div>
      
      {/* Display the products */}
      <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg float-left w-[100%] object-cover">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
              <p className="text-gray-500">Price: ${product.price}</p>
              <button className="p-2 text-white mt-[5px] rounded-lg bg-[#db4444]" onClick={ () => {dispatch(addToCart(product))}}>add to cart</button>
            </div>
          ))
        ) : (
          search.length > 2 && (
            <p className="text-center text-gray-500">No products found.</p>
          )
        )}
      </div>
    </div>
  );
}

export default Search;
