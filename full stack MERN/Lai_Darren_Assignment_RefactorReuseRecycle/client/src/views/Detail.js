import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams(); // id comes from the url

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
        console.log(product);
    }, []);

    const removeFromDom = () => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data)
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
            <DeleteButton successCallback={removeFromDom}/>
        </div>
    )
}

export default Detail;

