const { useQuery } = require("@apollo/react-hooks");
const { useState, useEffect } = require("react");
const { UPDATE_PRODUCTS } = require("../utils/actions");
const { useStoreContext } = require("../utils/GlobalState");
const { QUERY_PRODUCTS } = require("../utils/queries");

const [state, dispatch] = useStoreContext();
const {id} = useParams();
const [currentProduct, setCurrentProduct] = useState({})

const {loading, data} = useQuery(QUERY_PRODUCTS);
const {products} = state;

useEffect(() => {
    if (products.length) {
        setCurrentProduct(products.find(product => product._id === id));
    } else if (data){
        dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products
        });
    }
}, [products, data, dispatch, id]);