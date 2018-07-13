import React from 'react';
import { Link } from "react-router-dom";

//connect component to access dispatch
//import correct delete functin
//wire up onClick

export default ({id, description, amount, createdAt}) => (
    <div>
        <Link to={'/edit/' + id}>
            <h3>Description: {description}</h3>
        </Link>
        <p>Amount: ${amount/100}</p>
        <p>Date Created: {createdAt}</p>
    </div>
);