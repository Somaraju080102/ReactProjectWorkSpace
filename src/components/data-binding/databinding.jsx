

export function ProductInfo(){
//   var product={   "id":301,
//      "Pname":"Iphone 14 Pro Max",
//      "price":200000,
//      "available":true
//   }
var product=[
    { Category:"Cars",list:["Indica","Swift","Innova","Baleno"]},
    
    { Category:"Bikes",list:["RTR","Unicorn","Pulsar","Classic-350"]
    }
];


    return(

        <div className="container-fluid">

    
            {/* <h2>Bio Data</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Choice</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((prd)=>(
                            <tr key={prd.Category}>
                                <td>{prd.Category}</td>
                                <td><select>
                                    {
                                        prd.list.map((j)=>(
                                            <option key={j}>{j}</option>
                                        ))
                                    }</select></td>
                                <td>
                                    <button className="btn btn-danger">
                                    <span className="bi bi-trash-fill"></span>
                                    </button>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}


{/* 
            <div>
                {
                    product.map((i)=>(
                        <button className="btn btn-danger m-2 d-grid">{i}</button>
                    ))
                }
            </div>
            
            <h2>Products</h2>
            <ol>
                {
                    product.map((i)=>(
                        <li>
                            {i}
                        </li>
                                        ))
                }
            </ol>

            <select>
                {
                    product.map((i)=>(
                        <option>{i}</option>
                    ))
                }
            </select> */}
            {/* <dl>

            <h2>Product Details</h2>

                <dt>Product Id</dt>
                <dd>{product.id}</dd>
                <dt>Product Name</dt>
                <dd>{product.Pname}</dd>
                <dt>Product Price</dt>
                <dd>{product.price}</dd>
                <dt>Product Availability</dt>
                <dd>{(product.available==true)?"Available":"Out of Stock"}</dd>
            </dl> */}
        </div>
    )
}