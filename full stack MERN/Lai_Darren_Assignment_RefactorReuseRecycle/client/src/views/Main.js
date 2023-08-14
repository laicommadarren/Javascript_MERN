import React, { useEffect, useState } from 'react';
import ProductForm2 from '../components/ProductForm2';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
            });
    }, [])

    // delete from api and remove from display
    const removeFromDom = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            setProducts(products.filter(product => product._id !== productId));
        })
        
    }
    // add to api and add to display
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res => {
            setProducts([...products, res.data])
        })
    }
    
    return (
        <div>
            <ProductForm2 onSubmitProp={createProduct} 
            initalTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            <ProductList products={products} removeFromDom={removeFromDom}/>
        </div>
    )
}