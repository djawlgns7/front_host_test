import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {BACK_URL} from "../constants.js"
import {useNavigate} from "react-router-dom";

const InsertForm = () => {

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: '',
        productCompany: '',
    });

    const changeValue = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    }

    const submitProduct = (e) => {
        e.preventDefault();
        fetch(BACK_URL + "/bit/product", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((res) => {
            if (res.status === 201) {
                navigate("/");
            } else {
                alert("등록 실패");
            }
        });
    }

    return (
        <>
            <Form onSubmit={submitProduct}>
                <Form.Group className="mb-3">
                    <Form.Label>productName</Form.Label>
                    <Form.Control type="text" name="productName" onChange={changeValue} placeholder="productName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>productCompany</Form.Label>
                    <Form.Control type="text" name="productCompany" onChange={changeValue}
                                  placeholder="productCompany"/>
                </Form.Group>
                <Button type="submit" className="btn btn-primary">상품 등록</Button>
            </Form>
        </>
    )
}

export default InsertForm