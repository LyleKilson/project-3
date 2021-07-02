import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);
console.log(data, loading, "hello")

    useEffect(() => {
        if(data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
            data.products.forEach((product) => { 
                console.log(product, "string")
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
console.log(currentCategory);
    
    return (
        <div className="text-center m-10">
            <h1 className="text-2xl mb-10">Our Wallpapers</h1>
                {state.products.length ? (
                    <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-10 ">
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
                    <h3></h3>
                )}
                
            </div>
        );
}

export default ProductList;
