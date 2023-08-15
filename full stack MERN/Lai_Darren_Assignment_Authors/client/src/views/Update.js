import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';


const Update = () => {
    const { id } = useParams(); // id from url
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.patch('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                navigate('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
            });
            
    }


    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to="/authors">Home</Link><br />
            Edit this author:
            {loaded && (
                <AuthorForm onSubmitProp={updateAuthor}
                        initialName={author.name} errors={errors}
            />
            )}

        </div>
    )
}

export default Update;

