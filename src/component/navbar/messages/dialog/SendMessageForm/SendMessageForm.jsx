import React from 'react'
import messages from "../../Messages.module.css";
import {Field, reduxForm} from "redux-form";

let SendMessageForm = (props) => {
    let deleteLastMessage = () => {
        props.DeleteLastMessage()
    }
    return (
        <div className={messages.messageFormWrapper}>
            <form className={messages.messageForm} onSubmit={props.handleSubmit}>
                <button className={messages.sendBtnStyle}>Send</button>
                <Field name='newMessageData' component='textarea' className={messages.addNewMessage}
                       placeholder={'your new message'}/>
            </form>
            <button onClick={deleteLastMessage} className={messages.deleteBtnStyle}>Delete last message</button>
        </div>
    )
}
SendMessageForm = reduxForm({form: 'newMessageData'})(SendMessageForm)
export default SendMessageForm;


