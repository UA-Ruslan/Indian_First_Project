import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {


    return (
        <nav className={style.navArea}>
            <div className={style.item}>
                <NavLink
                    to="/"
                    style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}

                >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/friends"
                         style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}
                >Friends</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/messages"
                         style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news"
                         style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music"
                         style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings"
                         style={({isActive}) => ({color: isActive ? 'rgb(57, 90, 119)' : 'black'})}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default NavBar