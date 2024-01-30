export default function Products({productitems,deletenow}){
    //console.table(productitems)

    return(
        <div>
            <h1>List of Products</h1>
            {
                productitems.map(function(item,key){
                    return(
                        <div key={item.id} style={{border:"1px solid red",margin: "10px",padding:"10px"}}>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>

                            <button onClick={()=>{deletenow(item.id)}}>Delete</button>

                        </div>
                        )
                })
            }

        </div>
    )
}