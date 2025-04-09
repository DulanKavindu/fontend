import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function ProductForm() {
  const [productid, setProductid] = useState("");
  const [productname, setProductname] = useState("");
  const [productalt, setProductalt] = useState("");
  const [productimg, setProductimg] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productlprice, setProductlprice] = useState("");
  const [productstok, setProductstok] = useState("");
  const [productdec, setProductdec] = useState("");
  const navi =useNavigate()

 async function additems(){


    const altname=productalt.split(",")
    const imgs =productimg.split(",")
    const product={
    productid:productid,
    productname:productname,
    altname:altname,
    image:imgs,
    price:productprice,
    lasprice:productlprice,
    stock:productstok,
    describtion:productdec

}
const token =localStorage.getItem("token")
try{
    await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product", product, {
        headers: {
          Authorization: "Bearer " + token,
        
      }
})
      
    toast.success("product saved")
    navi("/admin/product")
  
 
 

}catch(err){
    toast.error("cant add product"+err)
}

}


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Product Adding Form
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product ID</label>
            <input
              type="text"
              placeholder="Enter product ID"
              value={productid}
              onChange={(e) => setProductid(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Alternate Name</label>
            <input
              type="text"
              placeholder="Enter product alternate name"
              value={productalt}
              onChange={(e) => setProductalt(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Image URL</label>
            <input
              type="text"
              placeholder="Enter product image link"
              value={productimg}
              onChange={(e) => setProductimg(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Price</label>
            <input
              type="number"
              placeholder="Enter product price"
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Last Price</label>
            <input
              type="number"
              placeholder="Enter product last price"
              value={productlprice}
              onChange={(e) => setProductlprice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Stock</label>
            <input
              type="number"
              placeholder="Enter product stock"
              value={productstok}
              onChange={(e) => setProductstok(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              placeholder="Enter product description"
              value={productdec}
              onChange={(e) => setProductdec(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button onClick={additems} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}