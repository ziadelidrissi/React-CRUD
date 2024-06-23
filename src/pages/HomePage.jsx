import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products";
import { Link } from "react-router-dom";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true);
            
            const response = await axios.get('https://node-api-gngl.onrender.com/products');
            console.log(response.data);

            setProducts(response.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <div className="w-full">
            <div className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 cursor-pointer">
                <Link to={'/create'}>
                    Create a product
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? (
                    'Loading'
                ) : (
                    <>
                    {products.length > 0 ? (
                        <>
                        {
                            products.map((product, index) => {
                                return(
                                    <Product key={index} product={product}/>
                                )
                            })
                        }
                        </>
                    ) : (
                        <div>
                            There is no products
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    )
}

export default HomePage;