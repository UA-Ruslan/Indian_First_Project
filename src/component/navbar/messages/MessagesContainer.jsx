import {
    AddNewMessage,
    UpdateNewMessageTxt,
    DeleteLastMessage
} from "../../../redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsInfo: state.messagePage.dialogsInfo,
        messages: state.messagePage.messages,
        newMessageData: state.messagePage.newMessageData,
        isAuth: state.authUserData.isAuth
    };
};

const MessagesContainer = connect(mapStateToProps, {
    AddNewMessage,
    UpdateNewMessageTxt,
    DeleteLastMessage
})(Messages);
export default MessagesContainer;