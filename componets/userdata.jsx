import { useState } from "react"

export default function Userdata() {
    const [count, setCount] = useState(0)
    const [name, setname] = useState("student")
    function impliment() {
        setCount(count + 1)
    }
    function changename(value) {
        setname(value)
    }

    return (
        <>
            <span>
                {count}
            </span>
            <button onClick={impliment}>Add to nomber</button>
            <br>
            </br>
            <br>
            </br>
            <span>
                {name}
            </span>
            <br>
            </br>
            <br>
            </br>
            <button onClick={() => {
                changename("student")
            }}>


                student
            </button >

            <button onClick={() => {
                changename("user")
            }}>
                user
            </button>
            <button onClick={() => {
                changename("admin")
            }}>
                admin
            </button>
        </>
    )

}