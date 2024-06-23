import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products";

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
        <div>
            <div className="mt-5">
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