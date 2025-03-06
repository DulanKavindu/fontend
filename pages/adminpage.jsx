import { Link, Route, Routes } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import AdminHomepage from "./admin/adminhomepage";

export default function Adminpage() {
  return (
    <div className="bg-red-300 w-full h-screen flex">

      <div className="bg-blue-300 w-[20%] h-[100%]">
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
          <Link to="/admin/darshbord" className="hover:bg-yellow-500 flex flex-row items-center space-x-2 p-2 rounded">
            <GoGraph />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/product" className="hover:bg-yellow-500 flex flex-row items-center space-x-2 p-2 rounded">
            <FaBoxOpen />
            <span>Product</span>
          </Link>
          <Link to="/admin/customer" className="hover:bg-yellow-500 flex flex-row items-center space-x-2 p-2 rounded">
            <FaUsers />
            <span>Customer</span>
          </Link>
        </div>
      </div>
      <div className="bg-green-800 w-[80%] h-screen">
      <Routes path="/">
      <Route path="/darshbord" element={<h1>this is the dashbord</h1>}></Route>
      <Route path="/product" element={<AdminHomepage></AdminHomepage>}></Route>
      <Route path="/customer" element={<h1>this is the customer</h1>}></Route>
      <Route path="/*" element={<h1>this page notfound 404 erorr</h1>}></Route>
      </Routes>
      </div>
  
    </div>
  );
}
