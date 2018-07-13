import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        Oh no! You must be lost! Drop and give me 404 pushups, then check your URL again! 
        Or just <Link to="/">return to the home page</Link> :)
    </div>
);

export default NotFound;