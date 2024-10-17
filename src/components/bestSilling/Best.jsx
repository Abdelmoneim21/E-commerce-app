import { useEffect ,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../redux-toolkit/productReducer"
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../redux-toolkit/Cart-slice";
import { Link } from "react-router-dom";

function Best (){


  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  useEffect(()=>{
    dispatch(fetchProducts)
  },[])
//     const [products,setProducts] = useState([])
    const[start,setStart] = useState(0)
  const[end,setEnd] = useState(3)
  
//   useEffect(()=>{
//     fetch("https://dummyjson.com/products").then(res => res.json()).then(data => 
//       setProducts(data.products)
//     )

// },[])
console.log(products)
 const handleProducts=()=>{
    setEnd(products.length -21)
 }
    return(
        <div className="Best mt-[5%]">
            <div className="banner  p-4 mb-10 my-auto">
                <h1 className="text-[#db4444] font-bold text-[20px]">This Month </h1>
            </div>
            <div className="header flex">
                <h1 className="font-bold text-[25px] md:text-[40px] ml-[10%] ">Best Selling Products</h1>
                <button className="bg-[#db4444] p-4 m-auto block text-white font-bold rounded"
                 onClick={handleProducts}>View All Products</button>
            </div>
            <div className="best-products grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 mt-[50px]">
                {
                    products.slice(start,end).map((prod)=>{
                        return(
                          <Link to={`/products/${prod.id}`} key={prod.id}>
                              
                          
                            <div key={prod.id} className="max-w-sm hover:bg-[#db4444]  p-4 w-[100%] m-auto bg-white rounded-lg shadow-md">
  <div className="relative">
    <img
      className="object-cover w-full h-64 rounded-lg"
      src={prod.images && prod.images.length > 0 ? prod.images[0] : 'default-image-url'} 
      alt="The north coat"
    />
    <div className="absolute top-2 right-2 space-y-2">
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100" onClick={()=>{dispatch(addToCart(prod))}}>
      <FaShoppingCart            className="w-5 h-5 "
          // viewBox="0 0 24 24"
          // fill="none"
          // stroke="currentColor"
          />

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3a5.5 5.5 0 014.5 2.09A5.5 5.5 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"
          />
        </svg> */}
      </button>
      <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553 4.553A3.5 3.5 0 0117.553 20.5H6.447A3.5 3.5 0 013.447 14.553L7 10h8z"
          />
        </svg>
      </button>
    </div>
  </div>

  <div className="mt-4">
    <h2 className="text-lg font-semibold">{prod.title}</h2>
    <div className="flex items-center space-x-2 mt-2">
      <span className="text-red-500 text-xl font-bold">${prod.price}</span>
      <span className="text-gray-400 line-through">$ {prod.price + prod.price /5}</span>
    </div>
    <div className="flex items-center mt-2">
      <div className="flex items-center text-yellow-500">
        {<svg className="w-5 h-5" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>}
        {/* Repeat the star icons as necessary */}
      </div>
      <span className="ml-2 text-gray-600">({prod.rating})</span>
    </div>
  </div>
  </div>

                          </Link>
                        )
                       })
                }
            </div>
        </div>

        
    )

}
export default Best 