import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

function ProductItem( item ) {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        name,
        _id,
    } = item;

    const { download } = state

    const addDownload = () => {
        const fileDownloading = download.find((downloadItem) => downloadItem._id === _id)
        if (fileDownloading) {
            dispatch({
                _id: _id,
                downloadQuantity: parseInt(fileDownloading.downloadQuantity) + 1
            });
            idbPromise('download', 'put', {
                ...fileDownloading,
                downloadQuantity: parseInt(fileDownloading.downloadQuantity) + 1
            });
        } 
    }

    return (
        <div className="card px-1 py-1">
            <Link to={`/products/${_id}`}>
                <img
                    alt={name}
                    src={`/images/${image}`}
                />
                <p>{name}</p>
            </Link>
            <button onClick={addDownload}>Add Download</button>
        </div>
    );
}

export default ProductItem;