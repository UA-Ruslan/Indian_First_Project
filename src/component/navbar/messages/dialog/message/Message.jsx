import React from 'react';
import message from "./Message.module.css";


const Message = (props) => {
    return (
        <div>
            <div className={message.message}>{props.txt}</div>
        </div>
    )
}
export default Message