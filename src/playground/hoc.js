// Higher order component: a regular react component (HOC) 
// that renders another (regular) component 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// 1. Create a regular function that is NOT a react component

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Warning! This is confidential information! Do not share with unauthorized parties.</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>You must log in to view the details!</p> 
            )}
        </div>
    );
};

// requireAuthentication

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Julio is pregnant" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Julio is pregnant" />, document.getElementById('app'));