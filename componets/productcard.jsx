export default function Productcard(props){
    return(
        <div>
            <h1>
               {props.name}
            </h1>
            <h1>
               {props.price}

            </h1>
            <button>
                add to cart
            </button>
        </div>
    )
}