import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../../redux-toolkit/productReducer";
import { useState } from "react";

export default function AddProduct(){

    const product = useSelector(state => state.products);
    const dispatch = useDispatch()


    const [productData, setProductData] = useState({
        title: '',
        price: '',
        description: '',
        images: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      };


    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData)); 
    console.log(productData)
    setProductData({ title: '', price: '', description: '', imageUrl: '' }); 
  };
    return(
        <div className="Add w-[80%] m-auto h-[]">
      <form onSubmit={handleSubmit} className="p-4">
        <div>
          <label htmlFor="title" className="block text-[18px]  mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
            className="border bg-neutral-100 p-2  w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="block text-[18px] mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100  w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-[18px] mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="border p-2 bg-neutral-100  w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="imageUrl" className="block text-[18px] mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            required
            className="border p-4 bg-neutral-100  w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6 bg-red-500 text-white p-4 w-[50%] text-2xl rounded  transition duration-200 hover:bg-red-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>

    )
}