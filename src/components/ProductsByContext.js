import { useProductContext } from "./context/ProductContext"

export default function ProductsByContext(){
    //console.table(productitems)

    const {products,deleteProduct} = useProductContext();

    return(
        <div>
            <h1>List of Products</h1>
            {
                products.map(function(item,key){
                    return(
                       
                        <div key={item.id} style={{border:"1px solid red",margin: "10px",padding:"10px"}}>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>

                            <button onClick={()=>{deleteProduct(item.id)}}>Delete</button>

                        </div>
                        )
                })
            }

        </div>
    )
}