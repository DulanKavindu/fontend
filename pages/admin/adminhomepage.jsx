/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link,  } from "react-router-dom";

export default function AdminHomepage() {
  const [product, setProduct] = useState([]);
  const [productlord, setProductlord]=useState(false)
  useEffect(() => {
    if(!productlord)
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then((res) => {
      setProduct(res.data.list);
      setProductlord(true)
    });
  }, [productlord]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Admin Product List</h1>
   <Link to ='/admin/product/productfrom'>
      <button className="text-5xl absolute  border-2 bg-blue-600 hover:bg-blue-400 rounded-[5px] right-[20px] bottom-[25px] hover:rounded-full ">
  +
</button></Link>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
       
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Alt Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Last Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((products, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{products.productid}</td>
                <td className="px-4 py-2">{products.productname}</td>
                <td className="px-4 py-2">{products.altname}</td>
                <td className="px-4 py-2">
                  <img src={products.image} alt={products.productname} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2">{products.price}</td>
                <td className="px-4 py-2">{products.lasprice}</td>
                <td className="px-4 py-2">{products.stock}</td>
                <td className="px-4 py-2">{products.describtion}</td>
                <td className="px-4 py-2 flex items-center space-x-4">

                  <button onClick={()=>{
                   const token =localStorage.getItem("token");
                  console.log(localStorage.getItem("token"))
                  axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+products.productid,{
                    headers:{
                      Authorization: `Bearer ${token}`

                    
                    }
                  
                   }).then((res)=>{
                    console.log(res.data)
                    toast.success("product deleted")
                   }).catch((err)=>{
                    toast.error(err)
                   })
                   setProductlord(false)
                  

                  }} className="text-red-500 hover:text-red-700">
                    <FaTrash size={20} />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaPencilAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
