import {
    AddNewMessage,
    UpdateNewMessageTxt,
    DeleteLastMessage
} from "../../../redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from '../../hok/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogsInfo: state.messagePage.dialogsInfo,
        messages: state.messagePage.messages,
        newMessageData: state.messagePage.newMessageData,
        isAuth: state.authUserData.isAuth
    };
};

let withRedirect = WithAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, {
    AddNewMessage,
    UpdateNewMessageTxt,
    DeleteLastMessage
})(withRedirect);
export default MessagesContainer;