import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";




export function ShoppingProducts(){
    const [products,setProducts]=useState([]);

    // const params=useParams(){
    //     return{
            
    //     }
    // }

useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then(response=>{
        setProducts(response.data);
        console.log(response.data);
    })
},[]);


    return(
        <div className="">
            <ol>Category</ol>
            {
                products.map(product=>{
                    return(
                     <Link to={`/products/${product}`} >   <li key={product}>{product.toUpperCase()}</li></Link>
                    )
                })
            }
        </div>
    )
}