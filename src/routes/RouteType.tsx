import React from 'react';
import { Navigate } from 'react-router-dom';

//will update on authentication
const userToken = null

interface RoutePropsType {
    children: React.ReactElement;
    redirectTo?: string;
}



export const PrivateRoute: React.FC<RoutePropsType> = ({
    children,
    redirectTo = '/',
}) => {

    return userToken ?
        children : (
            <Navigate to={redirectTo} />
        );
};

export const NoMatch: React.FC = () => {

    return userToken ?
        <Navigate to="/home" /> : (
            <Navigate to="/" />
        );
};

export const PublicRoute: React.FC<RoutePropsType> = ({
    children,
    redirectTo = '/home',
}) => {

    return userToken ?
        <Navigate to={redirectTo} /> : (
            children
        );
};
