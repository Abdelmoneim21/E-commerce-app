import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux-toolkit/Cart-slice";
import { Link } from "react-router-dom";

export default function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist); // Ensure wishlist is an array
  const dispatch = useDispatch();

  return (
    <div className="wishlist p-6">
      <div className="title flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Wishlist ({wishlist.length}) {/* Dynamic wishlist count */}
        </h1>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {wishlist.length > 0 ? (
          wishlist.map((wish) => (
            <Card
              key={wish.id} // Ensure each card has a unique key
              className="max-w-sm"
              imgAlt={wish.description || "Product image"}
              imgSrc={wish.images && wish.images.length > 0 ? wish.images[0] : 'default-image-url'} // Default image fallback
            >
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {wish.title || "Product Title"}
              </h5>



              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${wish.price || "N/A"}
                </span>
                <Link to={`/products/${wish.id}`} key={wish.id}>
                <button
                  className="rounded-lg bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none"
                >
                  view product
                </button>
                </Link>
                <button
                  onClick={() => dispatch(addToCart(wish))} // Add to Cart button handler
                  className="rounded-lg bg-[#db4444] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none"
                >
                  Add to Cart
                </button>
                
              </div>
            </Card>
          ))
        ) : (
          <p>Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
}
