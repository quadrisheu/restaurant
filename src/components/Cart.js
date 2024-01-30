import { useState } from "react";
const Cart = () => {
    //let cartItemNo = 0;we don't use this here

    //useState(): to handle state, a value that change in our application

    //the name of the state/ a fxn for updating the state are cared for
    const [cartItem, setcartItem] = useState(0);


    function handleCart(){
        // alert("you increased cart items");
        setcartItem((prev)=>{return prev = prev+1})
        console.log(`cart item number is ${cartItem}`)

    }

    return(
        <div>
            <h1>{cartItem}</h1>
            <button onClick={handleCart}>Add To Cart</button>
        </div>
    )
}

export default Cart