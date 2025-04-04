import { Link } from "react-router-dom";

export function Herder(){
  return(
    <div className="w-full h-[75px] bg-amber-100 flex justify-center items-center">
        <img src='/images.png' className='rounded-full w-[85px] h-[50px] absolute left-[10px] coursor-pointer'></img>
        <div className="h-full w-[500px] flex items-center justify-evenly">
        <Link to="/" className="text-amber-300 hover:border-b border-b-accent border-b-cyan-400 ">HOME</Link>
        <Link to="/" className="text-amber-300  hover:border-b border-b-accent border-b-cyan-400">PRODUCT</Link>
        <Link to="/" className="text-amber-300  hover:border-b border-b-accent border-b-cyan-400 ">ABOUT US</Link>
        <Link to="/" className="text-amber-300  hover:border-b border-b-accent border-b-cyan-400 ">CONTACT US</Link>
        </div>
        
    </div>
  )

}