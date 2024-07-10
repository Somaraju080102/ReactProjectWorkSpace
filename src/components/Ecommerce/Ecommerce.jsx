import { useEffect, useState } from "react";
import "./Ecommerce.css";

export function EcommerceService() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{ rating: { rate: "" } }]);
    const [cartCount, setCartCount] = useState(0);
    const [itemCart, setItemCart] = useState([]);

    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("ALL");
                setCategories(data);
            });
    }

    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products/");
    }, []);

    function HandleCategory(event) {
        const category = event.target.value;

        if (category === "ALL") {
            LoadProducts("https://fakestoreapi.com/products/");
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${category}`);
        }
    }

    function HandleCartClick(val) {
        fetch(`https://fakestoreapi.com/products/${val.target.id}`)
            .then(response => response.json())
            .then(data => {
                setItemCart(prevCart => {
                    const updatedCart = [...prevCart, data];
                    setCartCount(updatedCart.length);
                    return updatedCart;
                });
            });
    }
    function HandleHeaderClick(event) {
       
        const category=event.target.id;
        if (category === "products") {
            LoadProducts("https://fakestoreapi.com/products");
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${category}`);
        }
    }
    
    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between bg-black text-white p-3">
                <div className="fk btn text-white">Fakestore</div>
                <div>
                    <button   onClick={HandleHeaderClick} className="btn text-white"><span id="products" className="me-4">Home</span></button>
                    <button      onClick={HandleHeaderClick} className="btn text-white"><span id="electronics" className="me-4">Electronics</span></button>
                    <button        onClick={HandleHeaderClick} className="btn text-white"><span id="jewelery"   className="me-4">Jewelery</span></button>
                    <button  onClick={HandleHeaderClick} className="btn text-white"><span id="men's clothing"  className="me-4">Men's Fashion</span></button>
                    <button  onClick={HandleHeaderClick} className="btn text-white"><span id="women's clothing" className="me-4">Women's Fashion</span></button>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-3"></span>
                        <span className="badge bg-danger position-absolute">{cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Your Cart Items</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {itemCart.map((data) => (
                                                <tr key={data.id}>
                                                    <td>{data.title}</td>
                                                    <td><img src={data.image} alt=" Product image" style={{ width: '50px', objectFit: 'contain' }} /></td>
                                                    <td>${data.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="row me-3">
                <nav className="col-3 p-3">
                    <h2>Select Category</h2>
                    <select onChange={HandleCategory} className="form-select">
                        {categories.map((item) => (
                            <option key={item} value={item}>{item.toUpperCase()}</option>
                        ))}
                    </select>
                </nav>
                <main className="col-9 d-flex flex-wrap">
                    {products.map((item) => (
                        <div key={item.id} className="card m-2 p-2" style={{ width: '18rem' }}>
                            <img src={item.image} alt=" Product image" className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
                            <div className="card-header">
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Price: ${item.price}</p>
                                <button id={item.id} onClick={HandleCartClick} className="btn btn-primary">Add to Cart</button>
                            </div>
                            <div className="card-footer">
                                <span className="bi bi-star-fill"></span> Rating: {item.rating.rate}
                            </div>
                        </div>
                    ))}
                </main>
            </section>
        </div>
    );
}
