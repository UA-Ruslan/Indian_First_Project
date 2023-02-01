import React from "react";
import messages from './Messages.module.css';
import Dialog from "./dialog/Dialog";
import Message from "./dialog/message/Message";
import SendMessageForm from "./dialog/SendMessageForm/SendMessageForm";

const Messages = (props) => {

    let dialogsInfoMap = props.dialogsInfo.map((dialog, pos) => <Dialog userName={dialog.name}
                                                                        userId={dialog.id}
                                                                        key={pos}/>)
    let messagesMap = props.messages.map((message, pos) => <Message txt={message.messagesData}
                                                                    key={pos}/>)

    let onSubmitNewMessage = (value) => {
        return (
            !value.newMessageData ? alert('Your message is to short') : props.AddNewMessage(value.newMessageData)
        )
    }

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
                <SendMessageForm onSubmit={onSubmitNewMessage} DeleteLastMessage={props.DeleteLastMessage}/>
            </div>
        </div>
    );
};
export default Messages;