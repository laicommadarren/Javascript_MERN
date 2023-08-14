import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm2 from '../components/ProductForm2';
import DeleteButton from '../components/DeleteButton';


const Update = () => {
    const { id } = useParams(); // id from url
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        console.log('http://localhost:8000/api/products/' + id);
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.patch('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res));
            navigate('/products')
    }


    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <ProductForm2
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price} initialDescription={product.description}
            />
            )}
        </div>
    )
}

export default Update;

