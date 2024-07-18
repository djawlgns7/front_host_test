import {useEffect, useState} from "react";
import {BACK_URL} from "../../../constants.js"
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(BACK_URL + "/bit/product")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProducts(res);
            });
    }, []);

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}><a href={`/detail/${product.id}`}>{product.productName}</a></li>
                ))}
            </ul>
        </>
    )
}

export default Home