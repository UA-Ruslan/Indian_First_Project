import React, {useState} from 'react';
import style from './Header.module.css';
import {useNavigate} from "react-router-dom";

const Header = (props) => {
    let [isActive, setActive] = useState(false)
    let navigate = useNavigate()
    const active = () => {
        setActive(true)
    }
    const inactive = () => {
        setActive(false)
    }
    const handleClick = () => {
        props.setIsBolt(true);
    }
    const logoutBtn = () => {
        return (
            props.thunkLogout(null, null)
            // props.thunkLogout()
        )
    }
    const loginBtn = () => {
        return (
            navigate('/login')
        )
    }

    return (
        <header className={style.header}>
            <div className={style.logoWrapper}>
                <img className={isActive ? style.logoActive : style.logoImg} onClick={handleClick} src={require("../../img/logos/bird_logo.png")}
                     alt="logo"/>
                <div className={style.eye}></div>
                <div className={style.eyeActive}></div>
                <div className={style.eyeActive1}></div>
            </div>
            <div onMouseOver={active} onMouseOut={inactive} className={style.activeArea}></div>
            {props.isAuth
                ?
                <button onClick={logoutBtn} className={`${style.logBtn} ${"btnSameParams"}`}>Logout</button>
                :
                <button className={`${style.logBtn} ${"btnSameParams"}`} onClick={loginBtn}>Login</button>
            }
        </header>)
}

export default Header;