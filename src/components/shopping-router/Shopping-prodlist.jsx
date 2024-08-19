import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function ShopProdList(){

    
const params=useParams();

const [prodlist,setProdList]=useState([]);

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${params.catName}`)
    .then(response=>{
        setProdList(response.data);
        console.log(response.data);
    })
},[]);



    return(
        <div className="container-fluid">
            <h1>{params.catName.toUpperCase()} Product List</h1>
            <div className="d-flex"> 
                {
                    prodlist.map(product=>{
                        return(
                            <div key={product.id} className="card m-2" style={{width: "18rem"}}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                <Link to={`/products/${product.category}/${product.id}/${product.title}/${product.price}`} > <button className="btn btn-primary">View Details</button></Link>
                                </div>
                            </div>
                            
                        )

                    })
                }
                                                <Link to="/home"><h2> Back to Home</h2></Link>

            </div>

        </div>
    )
}