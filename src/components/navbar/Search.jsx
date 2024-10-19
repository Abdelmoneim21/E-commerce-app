import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux-toolkit/Cart-slice";
import { fetchProducts } from "../../redux-toolkit/productReducer";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../redux-toolkit/wishlistSlice";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchProducts = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    // Fetch products once on mount
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value); // Update search term first
  };

  // Filter products based on the search input
  const filteredProducts =
    search.length > 2
      ? searchProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  return (
    <div>
      {/* Search bar */}
      <div className="search-bar flex relative justify-center w-full md:w-[100%] mx-auto my-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="What are you looking for?"
          className="bg-[#f5f5f5] border-none px-4 py-2 rounded w-full md:w-full lg:w-[100%] focus:outline-none"
        />
        {/* <FaSearch className="absolute right-4 top-[25%] text-gray-500" /> */}
      </div>

      {/* Display the filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white shadow-lg rounded-lg object-cover w-full"
            >
              <Link to={`/products/${product.id}`} key={product.id}>
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "default-image-url"
                  }
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
                <p className="text-gray-500 mb-2">Price: ${product.price}</p>
              </Link>
              <button
                className="rounded-lg bg-amber-500 w-full mb-2 px-4 py-2 text-center text-sm font-medium text-white hover:bg-amber-600 focus:outline-none"
                onClick={() => dispatch(addToWishlist(product))}
              >
                View Product
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="rounded-lg bg-[#db4444] w-full px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
              >
                Add to Cart
              </button>
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
