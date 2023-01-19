import React from 'react';
import headerModuleCSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {


    const handleClick = () => {
        props.setIsBolt(true);
    }
    return (

        <header className={headerModuleCSS.header}>
            <div className={headerModuleCSS.headerArea}>
            </div>
            <img onClick={handleClick} src={require("../../img/logos/bird_logo.png")} alt="logo"/>
                <div className={headerModuleCSS.eye}>
                </div>
                <div className={headerModuleCSS.smoke1}>
                </div>
                <div className={headerModuleCSS.smoke2}>
                </div>
                <div className={headerModuleCSS.smoke3}>
                </div>
                <div className={headerModuleCSS.smoke4}>
                </div>
                <div className={headerModuleCSS.smoke5}>
                </div>
                <div className={headerModuleCSS.smoke6}>
                </div>
                <div className={headerModuleCSS.smoke7}>
                </div>
            <div className={headerModuleCSS.authWrapper}>
                {props.isAuth ? props.login : <NavLink className={headerModuleCSS.authNavLink} to="/login">Login</NavLink>}
            </div>
        </header>)
}

export default Header;