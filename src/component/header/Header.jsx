import React, {useEffect, useState} from "react";
import style from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

const Header = (props) => {
    let [isActive, setActive] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        AOS.init();
    }, [])

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
            props.thunkLogout(null, null)      //for local server
            // props.thunkLogout()             //for remote server
        )
    }
    const loginBtn = () => {
        return (
            navigate('/login')
        )
    }

    return (
        <header className={style.header} data-aos="fade-down">
            <div className={style.logoWrapper}>
                <img className={isActive ? style.logoActive : style.logoImg} onClick={handleClick} src={require("../../img/logos/bird_logo.webp")}
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
                <button onClick={loginBtn} className={`${style.logBtn} ${"btnSameParams"}`} >Login</button>
            }
        </header>)
}

export default Header;