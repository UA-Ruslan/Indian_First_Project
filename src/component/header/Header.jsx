import React from 'react';
import style from './Header.module.css';
import {useNavigate} from "react-router-dom";

const Header = (props) => {
    let navigate = useNavigate()

    const handleClick = () => {
        props.setIsBolt(true);
    }
    const logoutBtn = () => {
        return (
            props.thunkLogout(),
                window.location.reload(false)
        )
    }
    const loginBtn = () => {
        return (
            navigate('/login')
        )
    }

    return (
        <header className={style.header}>
            <div className={style.headerArea}>
            </div>
            <img onClick={handleClick} src={require("../../img/logos/bird_logo.png")} alt="logo"/>
            <div className={style.eye}>
            </div>
            <div className={style.smoke1}>
            </div>
            <div className={style.smoke2}>
            </div>
            <div className={style.smoke3}>
            </div>
            <div className={style.smoke4}>
            </div>
            <div className={style.smoke5}>
            </div>
            <div className={style.smoke6}>
            </div>
            <div className={style.smoke7}>
            </div>
            {props.isAuth
                ?
                <div className={style.authWrapper}>
                    <div>
                        <button onClick={logoutBtn} className={style.logoutBtn}>logout</button>
                    </div>
                    <div>
                        {props.login}
                    </div>
                </div>
                :
                <div className={style.authWrapper}>
                    <button className={style.logoutBtn} onClick={loginBtn}>login</button>
                </div>}
        </header>)
}

export default Header;