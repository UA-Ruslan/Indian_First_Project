import React from 'react';
import style from './loginForm/loginFormControl/LoginFormControl.module.css'
import LoginForm from "./loginForm/LoginForm";
import {connect} from "react-redux";
import {thunkLogin, thunkLogout} from "../../../utilit/redux/AuthReducer";
import {Navigate} from "react-router-dom";
const Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData)
        props.thunkLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return (<Navigate to="/"/>)
    }
    return (
        <div className={style.loginWrapper}>
            <h1>YOU NEED TO LOGIN</h1>
            <h2>HERE</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.authUserData.isAuth
})

export default connect (mapStateToProps, {thunkLogin})(Login);