/* eslint-disable react/prop-types */
import React from 'react';
import { Login } from 'react-admin';
import LoginForm from './LoginForm';

function Authentication () {
    return (
        <Login>
            <LoginForm/>
        </Login>
    );
}

export default Authentication;
