import React from 'react'
import { useNavigate, Link} from 'react-router-dom'

export default () => {

    const navigate = useNavigate();

    return (
        <>
        {<button onClick={() => navigate('/products/new')}>
            Edit
        </button>}
        
        </>
    )
}