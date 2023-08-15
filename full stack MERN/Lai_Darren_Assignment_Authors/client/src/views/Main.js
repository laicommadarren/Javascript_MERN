import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AddAuthorLink from '../components/AddAuthorLink';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            const currentList = res.data.sort((a, b) => a.name.localeCompare(b.name));
            console.log(currentList);
            setAuthors(currentList);
        })
    }, [])

    const deleteAndRemoveFromDom = authorId => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => {
            setAuthors(authors.filter(author => author._id !== authorId));
        })
    }

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
        .then(res => {
            setAuthors([...authors, res.data])
        })
    }

    const editAuthor = authorId => {
        axios.patch(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => {
            
        })
    }

    return (
        <div>
            <h2>Favorite Authors</h2>
            <AddAuthorLink />
            <p>We have quotes by:</p>
            <AuthorList authors={authors} deleteAndRemove={deleteAndRemoveFromDom} />
        </div>
    )
}