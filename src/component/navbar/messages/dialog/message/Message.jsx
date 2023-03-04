import React from "react";
import message from "./Message.module.css";


const Message = (props) => {
    return (
        <div>
            <p className={message.message}>{props.txt}</p>
        </div>
    )
}
export default Message