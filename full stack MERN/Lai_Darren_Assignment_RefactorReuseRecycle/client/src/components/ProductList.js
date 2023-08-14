import React from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { products, removeFromDom } = props;


    return (
        <div>
            {products.map((product, i) => {
                return (
                    <div>
                        <p key={i}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                            <Link to={`/products/${product._id}/edit`}>
                                Edit
                            </Link>
                            <DeleteButton successCallback={() => removeFromDom(product._id)} />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;

