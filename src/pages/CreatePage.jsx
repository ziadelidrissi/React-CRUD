import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreatePage() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        if (name === '' || quantity === '' || price === '' || image === '') {
            alert('Fill out all inputs')
            return;
        }

        try {
            setIsLoading(true);

            const response = await axios.post('https://node-api-gngl.onrender.com/product', {name: name, quantity: quantity, price: price, image: image});
            toast.success(`Saved ${response.data.name} successfully`)
            setIsLoading(false);

            navigate('/');
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    }

    return(
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Create a product
            </h2>

            <form onSubmit={saveProduct}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:border-blue-200 placeholder-gray-400" placeholder="Enter name"/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:border-blue-200 placeholder-gray-400" placeholder="Enter quantity"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:border-blue-200 placeholder-gray-400" placeholder="Enter price"/>
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:border-blue-200 placeholder-gray-400" placeholder="Enter image URL"/>
                    </div>
                    <div>
                        { !isLoading && (
                            <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 cursor-pointer">Save</button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePage;