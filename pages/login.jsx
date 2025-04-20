import axios from "axios";
import { useState } from "react";
import toast  from "react-hot-toast";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log()
  function login(){
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
      email:email,
      password:password
    }).then((res)=>{
      if(res.data.user==null)
        {
          toast.error(res.data.masseg
          )
          console.log(res)
          return;
        }
       toast.success("user get")
      localStorage.setItem("tokens",res.data.token)
      
      if(res.data.user.type=="admin")
      {
       window.location.href ="/admin"
      }
      else{
        window.location.href="/customer"
      }
    })

  }

    return (
     <div className="bg-green-400 w-full h-screen flex justify-center items-center">
      <div className="bg-blue-600 w-[500px] h-[500px] flex justify-center items-center flex-col">
        <img src="/images.jpg" className="rounded-full w-[100px] h-[100px]"></img>
          <span className="text-2xl text-orange-500">User name</span>
          <input type="text" placeholder="Enter your Email"defaultValue={email} onChange={(e)=>{
            setEmail(e.target.value)

          }} className="bg-amber-50 text-red-500 "></input>
          <span>Password</span>
          <input type="password" placeholder="Enter your Password" defaultValue={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} className="bg-amber-50 text-red-500"></input>
          <button onClick={login} className="bg-red-500 hover:bg-fuchsia-600 m-[15px]">LogIn</button>
      </div>


     </div>
      
    );
  }
  
