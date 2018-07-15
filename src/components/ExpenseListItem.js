import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

//connect component to access dispatch
//import correct delete functin
//wire up onClick

export default ({id, description, amount, createdAt}) => (
    <div>
        <Link to={'/edit/' + id}>
            <h3>Description: {description}</h3>
        </Link>
        <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <p>Date Due: {moment(createdAt).format('MMMM D, YYYY')}</p>
    </div>
);