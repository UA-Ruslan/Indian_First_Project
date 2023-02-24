import React from 'react'
import messages from "../../Messages.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../../utilit/validation/formsValidate";
import TextArea from "./sendMessageFormControl/SendMessageFormControl"

let SendMessageForm = (props) => {
    let deleteLastMessage = () => {
        props.DeleteLastMessage()
    }
    let maxPostLength = maxLength(20)
    return (
        <div className={messages.messageFormWrapper}>
            <form className={messages.messageForm} onSubmit={props.handleSubmit}>
                <button className={`${messages.sendBtnStyle} ${"btnSameParams"}`}>Send</button>
                <Field name='newMessageData'
                       component={TextArea}
                       validate={[required, maxPostLength]}
                />
            </form>
            <button onClick={deleteLastMessage} className={`${messages.deleteBtnStyle} ${"btnSameParams"}`}>Delete message</button>
        </div>
    )
}
SendMessageForm = reduxForm({form: 'newMessageData'})(SendMessageForm)
export default SendMessageForm;


