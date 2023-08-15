import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';


const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/', author)
            .then(res => {
                console.log(res);
                navigate('/authors');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
            })
            ;

    }


    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to="/authors">Home</Link><br />
            Add a new author:
            <AuthorForm
                onSubmitProp={createAuthor}
                initialName=""
                errors={errors}
            />
        </div>
    )
}

export default Create;

