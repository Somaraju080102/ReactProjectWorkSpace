import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { ShoppingProducts } from "./Shooping-products";
import { ShopProdList } from "./Shopping-prodlist";
import { ShopDetails } from "./ShoopingDetails";

export function ShoppingHome(){
    
    return(

        <BrowserRouter>
        <div className="container-fluid">
            <header className="bg-black d-flex text-white justify-content-between">
                <div className="text-white me-2">
                    <h2>Shopify</h2>
                </div>
                <div>
                 <Link to="/home">   <button className="btn text-white  text-decoration-none">Home</button></Link>
                    <button className="btn text-white  text-decoration-none">Electronics</button>
                    <button className="btn text-white  text-decoration-none">Jewelry</button>
                    <button className="btn text-white  text-decoration-none">Men's Fashion</button>
                    <button className="btn text-white  text-decoration-none">Women's Fashion</button>
                </div>
                <div>
                  <button className="btn text-white  text-decoration-none">  <span className="bi bi-cart me-2"></span></button>
                 <button className="btn text-white  text-decoration-none">   <span className="bi bi-search me-2"></span></button>
                 <button className="btn text-white  text-decoration-none">   <span className="bi bi-heart me-2"></span></button>
                </div>
            </header>
            <section className="overflow-auto">
                <Routes>
                    <Route path="/home" element={<ShoppingProducts/>} />
                    <Route path="*" element={<div>
                        <h1>Page Not Found</h1>
                        <p>The page you are looking for does not exist.</p> 
                    </div>}/>
                    <Route path="products/:catName" element={<ShopProdList/>} ></Route>
                    <Route path="products/:catName/:id/:name/:price" element={<ShopDetails/>}> </Route>
                </Routes>
            </section>
        </div>
        </BrowserRouter>
    )
}