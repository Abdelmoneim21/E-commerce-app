import "./flash.css"
import { useState, useEffect } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux-toolkit/productReducer";
import { addToCart } from "../../redux-toolkit/Cart-slice";
import { Link } from "react-router-dom";
function Flash(){

  const products = useSelector(state => state.products);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
    
    
  },[dispatch])


  // const [products,setProducts] = useState([])
  
  // useEffect(()=>{
  //   fetch("https://dummyjson.com/products").then(res => res.json()).then(data => 
  //     setProducts(data.products)
  //   )

  //   console.log(products)
  // },[])
  const[start,setStart] = useState(0)
  const[end,setEnd] = useState(3)
    const calculateTimeLeft = () => {


        const discountEndDate = new Date('2024-12-31T23:59:59'); // Set your discount end date
        const now = new Date();
        const difference = discountEndDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    const DecreaseCounter =()=>{
      if(start >= 0){
        setStart(start-1)
          setEnd(end-1)
          console.log(start)
          console.log(end)
      }
    }

    const IncreaseCounter =()=>{
      if(start >= 0){
        setStart(start+3)
          setEnd(end+3)
          console.log(start)
          console.log(end)
      }
    }

    const showAll =()=>{
      setStart(0);
      setEnd(products.length)
    }
    return(
      
        <div className="flash mt-[100px] pb-8 border-b-4" >
            <div className="banner p-4 mb-10 my-auto text-center md:text-left">
  <h1 className="text-[#db4444] font-bold text-[20px] md:text-[28px]">Today's Deals</h1>
</div>

<div className="sales flex flex-wrap justify-around items-center space-y-4 md:space-y-0">
  {/* Flash Sales Title */}
  <h1 className="text-[20px] font-bold md:text-[24px]">Flash Sales</h1>

  {/* Countdown Timer */}
  <div className="flex space-x-4 items-center justify-center text-center text-gray-800">
    <div className="flex flex-col">
      <span className="text-3xl font-bold md:text-4xl">{timeLeft.days || '00'}</span>
      <span className="text-sm md:text-base">Days</span>
    </div>
    <span className="text-3xl md:text-4xl">:</span>
    <div className="flex flex-col">
      <span className="text-3xl font-bold md:text-4xl">{timeLeft.hours || '00'}</span>
      <span className="text-sm md:text-base">Hours</span>
    </div>
    <span className="text-3xl md:text-4xl">:</span>
    <div className="flex flex-col">
      <span className="text-3xl font-bold md:text-4xl">{timeLeft.minutes || '00'}</span>
      <span className="text-sm md:text-base">Minutes</span>
    </div>
    <span className="text-3xl md:text-4xl">:</span>
    <div className="flex flex-col">
      <span className="text-3xl font-bold md:text-4xl">{timeLeft.seconds || '00'}</span>
      <span className="text-sm md:text-base">Seconds</span>
    </div>
  </div>

  {/* Arrows for Navigation */}
  <div className="arrows flex gap-3 my-auto">
    <FaArrowCircleLeft 
      size={30} 
      onClick={DecreaseCounter} 
      className="cursor-pointer hover:opacity-80" 
    />
    <FaArrowCircleRight 
      size={30} 
      onClick={IncreaseCounter} 
      className="cursor-pointer hover:opacity-80" 
    />
  </div>
</div>

    <div className="products grid md:grid-cols-3 mt-4 justify-center  gap-4">
    {products.slice(start,end).map((product) =>{
      return(
      
              <Card key={product.id}
              className="max-w-sm  md:w-[70%]"
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              imgSrc={product.images && product.images.length > 0 ? product.images[0] : 'default-image-url'}


            >
              <Link to={`/products/${product.id}`} key={product.id}>
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <div className="mb-5 mt-2.5 flex items-center">
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  5.0
                </span>
              </div>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <button
                  href="#"
                  className="rounded-lg bg-[#db4444] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                onClick={()=>{dispatch(addToCart(product))}}
                
                >
                  Add to cart
                </button>
              </div>
            </Card>
     )
    })}
    </div>
    <button className="bg-[#db4444] mt-[05%] p-4 m-auto block text-white font-bold rounded mb-5"
    onClick={showAll}
    >View All Products</button>
        </div>
    )
}
export default Flash;