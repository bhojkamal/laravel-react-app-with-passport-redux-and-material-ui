import React from 'react';
import { Route, Navigate } from 'react-router-dom';
export const Guard = ({ component: Component, token: Token, routeNavigate, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem(Token) ?
            <Component {...props} /> :
            <Navigate to={{ pathname: routeNavigate, state: { from: props.location } }} />
    )} />
);