import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Product({product}) {
    return(
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-80 h-60 object-cover" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{product.name}</h2>
                <div className="text-sm"> Quantity : {product.quantity} </div> 
                <div className="text-sm"> Price : {product.price}$ </div> 
            
                <div className="mt-2 flex gap-4">
                    <Link to={'/edit'} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 cursor-pointer">Edit</Link>
                </div>

                <div className="mt-2 flex gap-4">
                    <Link to={'/delete'} className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 cursor-pointer">Delete</Link>
                </div>
            </div>

        </div>
    )
}

export default Product;