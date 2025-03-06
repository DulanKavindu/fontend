import axios from "axios";

export default function AdminHomepage(){
    axios.get("http://localhost:3000/api/product").then((res)=>{
        console.log(res)
    })

    return(
        <div>
            <h1> this is the AdminHomepage</h1>
        </div>
    )
}