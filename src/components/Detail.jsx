import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {BACK_URL} from "../constants.js"

const Detail = () => {

    const productId = useParams().productId;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(BACK_URL + "/bit/product/" + productId)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProduct(res);
            });
    }, []);

    const modifyProduct = () => {

    }

    const deleteProduct = () => {

    }

    return (
        <>
            <h1>상세보기</h1>
            <ul>
                <li>productName: {product.productName}</li>
                <li>productCompany: {product.productCompany}</li>
            </ul>
            <Button onClick={modifyProduct} className={"btn btn-secondary"}>수정</Button>
            <Button onClick={deleteProduct} className={"btn btn-danger"}>삭제</Button>
        </>
    )
}

export default Detail