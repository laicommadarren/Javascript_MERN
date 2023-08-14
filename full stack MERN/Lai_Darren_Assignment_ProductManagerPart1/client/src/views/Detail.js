import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
        console.log(product);
    }, [id]);

    const deleteProduct = (deleteId) => {
        axios.delete('http://localhost:8000/api/products/' + deleteId)
            .then(res => {
                navigate('/products');

            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick = {() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default Detail;

