import { useParams } from "react-router-dom"

export function ShopDetails(){

    const params=useParams();

    return(
        <div className="container-fluid">
            <dl>
                <dt>Product Category</dt>
                <dd>{params.catName}</dd>
                <dt>Product ID</dt>
                <dd>{params.id}</dd>
                <dt>Product Name</dt>
                <dd>{params.name}</dd>
                <dt>Product Price</dt>
                <dd>{params.price}</dd>
            </dl>
        </div>
    )
}