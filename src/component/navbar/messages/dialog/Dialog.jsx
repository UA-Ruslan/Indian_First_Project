import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Dialog.module.css";

const Dialog = (props) => {

    return (
        <div>
            <div className={style.userDialog}>
                <NavLink to={"/messages/" + props.userId} className={style.linkStyle}><p className={style.pStyle}>{props.userName}</p></NavLink>
            </div>
        </div>

    )
}
export default Dialog;