import React from 'react';
import loginModuleCSS from './login.module.css'
const Login = () => {
    return (
        <div className={loginModuleCSS.loginWrapper}>
            <h1>YOU NEED TO LOGIN</h1>
            <h2>HERE</h2>
            <a className={loginModuleCSS.loginLink} href='https://social-network.samuraijs.com/login'><h2>Login link</h2></a>
        </div>
    );
};

export default Login;