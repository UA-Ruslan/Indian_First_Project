import React from "react";
import messages from './Messages.module.css';
import Dialog from "./dialog/Dialog";
import Message from "./dialog/message/Message";

const Messages = (props) => {

    let dialogsInfoMap = props.dialogsInfo.map((dialog, pos) => <Dialog userName={dialog.name}
                                                                        userId={dialog.id}
                                                                        key={pos}/>)
    let messagesMap = props.messages.map((message, pos) => <Message txt={message.messagesData}
                                                                    key={pos}/>)

    let ref = React.createRef();
    let sendMessage = () => {
        props.sendMessage()
    }
    let deleteLastMessage = () => {
        props.deleteLastMessage()
    }
    let updateMessageTxt = () => {
        let valueMessage = ref.current.value
        props.updateMessageTxt(valueMessage)
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