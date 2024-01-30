import { useState } from "react"

const Addproduct = ({addNewProduct}) => {

    const[data, setData] = useState({
        id:"",
        name:"",
        price:""
    });

   
    function handleNameChange(e){
        //e.target.name: name of the field
        //e.targe.value

        let fieldname = e.target.name;
        setData((prev)=>{return{...prev,name:e.target.value}})
    }

    // const[names, setNames] = useState("");

    // const[price, setPrice] = useState("");

    const handleProductForm = (e)=>{
        e.preventDefault();
       addNewProduct(data);
       setData({
        id:"",
        name:"",
        price:""
    });
       
    }

    return(
        <div>
            <h1>Login Form</h1>

            <form method="post" onSubmit={handleProductForm}>

                <input  type="text" name="name" placeholder="names" value={data.name}
                 onChange={(e)=>{setData((prev)=>{return{...prev, name:e.target.value}})}}/>

                <input  type="text" name="price" placeholder="price" value={data.price}
                 onChange={(e)=>{setData((prev)=>{return{...prev, price:e.target.value}})}}/>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Addproduct