import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, []);

    const appendNewProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <ProductForm onCreate = {appendNewProduct}/>
            <hr/>
            <h2> All Products </h2>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}

        </div>
    )
}

export default Main;