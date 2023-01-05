import React from "react";
import {NavLink} from "react-router-dom";
import dialog from "./Dialog.module.css";

const Dialog = (props) => {

    return (
        <div>
            <div className={dialog.userDialog}>
                <NavLink to={'/messages/' + props.userId} className={dialog.linkStyle}>{props.userName}</NavLink>
            </div>
        </div>

    )
}
export default Dialog;