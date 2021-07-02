import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id } = item;

  const { download } = state;

  const addDownload = () => {
    const fileDownloading = download.find(
      (downloadItem) => downloadItem._id === _id
    );
    if (fileDownloading) {
      dispatch({
        _id: _id,
        downloadQuantity: parseInt(fileDownloading.downloadQuantity) + 1,
      });
      idbPromise("download", "put", {
        ...fileDownloading,
        downloadQuantity: parseInt(fileDownloading.downloadQuantity) + 1,
      });
    }
  };

  return (
    <div className="text-center justify-around justify-items-center ">
      <Link to={`/products/${_id}`}>
        <img className="rounded shadow" alt={name} src={`/images/${image}`} />
        <p className="m-5">{name}</p>
      </Link>
      <button
        className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={addDownload}
      >
        Add Download
      </button>
    </div>
  );
}

export default ProductItem;
