import React from "react";
import messages from './Messages.module.css';
import Dialog from "./dialog/Dialog";
import Message from "./dialog/message/Message";
import {Navigate} from "react-router-dom";

const Messages = (props) => {

    let dialogsInfoMap = props.dialogsInfo.map((dialog, pos) => <Dialog userName={dialog.name}
                                                                        userId={dialog.id}
                                                                        key={pos}/>)
    let messagesMap = props.messages.map((message, pos) => <Message txt={message.messagesData}
                                                                    key={pos}/>)

    let ref = React.createRef();
    let sendMessage = () => {
        props.AddNewMessage()
    }
    let deleteLastMessage = () => {
        props.DeleteLastMessage()
    }
    let updateMessageTxt = () => {
        let valueMessage = ref.current.value
        props.UpdateNewMessageTxt(valueMessage)
    }
    if (!props.isAuth) return <Navigate to='/login'/>
    return (
        <div>

            <div className={messages.allDialogs}>
                <div className={messages.dialogsArea}>
                    {dialogsInfoMap}
                </div>
                <div className={messages.messageArea}>
                    {messagesMap}
                </div>
            </div>
            <div className={messages.txtAreaBtn}>
                <button onClick={sendMessage} className={messages.btnStyle}>Send</button>
                <textarea onChange={updateMessageTxt}
                          ref={ref}
                          value={props.newMessageData}
                          className={messages.addNewMessage}
                          placeholder={'your new message'}/>
                <button onClick={deleteLastMessage} className={messages.btnStyle}>Delete last message</button>

            </div>
        </div>
    );
};
export default Messages;