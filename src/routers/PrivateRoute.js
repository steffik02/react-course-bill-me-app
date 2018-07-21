import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component, 
    //rest operator ...rest gets variable called rest with things we didn't destructure
    ...rest
}) => (
    <Route {...rest} component={(props) => 
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props } />
            </div>
        ) : (
            <Redirect to="/" />
        )
    } />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);