import { createContext, useContext,useState } from "react";


//create context
const productContext = createContext([]);

const ProductProvider= ({children})=>{

    //state
    const[products,setProducts] = useState([]);

    //fxn to add
    const addNewProduct = (productDetail)=>{
        setProducts([...products,productDetail]);
    }

    //a fxn to delete
    const deleteProduct = (proId)=>{
        setProducts(products.filter((prod)=>prod.id !=proId))
    }

    return(
        <productContext.Provider value={{products,addNewProduct,deleteProduct}}>
            {children}
        </productContext.Provider>
    )
}

//usecontext
function useProductContext(){
    const context = useContext(productContext);
    if(!context){
        console.log("To use this context,you need product context");
    }

    return context;
}



export {ProductProvider,useProductContext}