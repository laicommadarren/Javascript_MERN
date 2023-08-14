import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import UpdateForm from '../components/UpdateForm';
    
const Update = (props) => {
    
    return (
        <div>
            <h1>Update a Product</h1>
            <UpdateForm />
        </div>
    )
}
    
export default Update;

