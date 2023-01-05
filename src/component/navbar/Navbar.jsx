import React from "react";
import navStyle from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={navStyle.navArea}>
            <div className={navStyle.item}>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Profile</NavLink>
            </div >
            <div className={navStyle.item}>
                <NavLink to="/friends" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Friends</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/messages" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Messages</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>News</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/music" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Music</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? 'white' : 'black' })}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default NavBar