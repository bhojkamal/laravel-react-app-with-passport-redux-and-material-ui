import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/HomeComponent";
import Login from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
import PrivateRoute from './PrivateRoute';
import { Guard } from './Guard';
import Header from './components/layouts/Header';
function Navigates() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" render={props => (
                    <Navigate to={{ pathname: '/home' }} />
                )} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/register" element={<Register />} />
                {/*Redirect if not authenticated */}
                <Route path="/user" token="user-token" routeNavigate="/user/login" element={[<Guard />, <PrivateRoute />]} />
            </Routes>
        </>
    );
}
export default Navigates;