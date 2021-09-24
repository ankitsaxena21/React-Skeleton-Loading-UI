import { useState, useEffect } from "react";
import SkeletonProductLib from "../skeleton/SkeletonProductLib";
const ProductsLib = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        setTimeout(async () => {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
            const data = await response.json();
            setLoader(false);
            setProducts(data);
        }, 4000);
    }, []);

    return (
        <div className="container">
            <div className="row">
                {!loader ? products.map(product => (
                    <div className="col-3" key={product.id}>
                        <div className="product">
                            <div className="product-image">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="product-body">
                                <div className="product-title">{product.title.slice(0, 30)}</div>
                                <div className="product-price">$ {product.price}</div>
                                <div className="product-button"><a href="www.youtube.com">buy now</a></div>
                            </div>
                        </div>
                    </div>
                )) : [1, 2, 3, 4, 5, 6].map(loading => (
                    <div className="col-3" key={loading}>
                        <SkeletonProductLib />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsLib;