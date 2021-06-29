import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";



function ProductList() {
    const [state, dispatch] = useStoreContext();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);


    useEffect(() => {
        if(data) {
            dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products
        });
        data.products.forEach((product) => {
            idbPromise('products', 'put', product);
        });
    } else if (!loading) {
        idbPromise('products', 'get').then((products) => {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: products
            });
        });
    }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
        return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div className="my-2">
            <h2>Our Wallpapers:</h2>
                {state.products.length ? (
                    <div className="flex-row">
                        {filterProducts().map(product => (
                            <ProductItem
                                key= {product._id}
                                _id={product._id}
                                image={product.image}
                                name={product.name}
                            />
                        ))}
                    </div>
                ) : (
                    <h3>Find us on Social!</h3>
                )}
                
                <ul className="Social" style={{listStyle: "none"}}>
                        <li>
                            <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                        </li>
                    
                </ul>
            </div>
        );
}

export default ProductList;
