import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const { authors, deleteAndRemove } = props;


    return (
        <>
            <table>
                <tr>
                    <th>Author Name</th>
                    <th>Actions Available</th>
                </tr>
                {authors.map((author, i) => {
                    return (
                        <tr key={i}>
                            <th>{author.name}</th>
                            <th>
                                <Link to={`./${author._id}/edit`}>Edit</Link>
                                <DeleteButton successCallback={() => deleteAndRemove(author._id)} />
                            </th>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default AuthorList;

