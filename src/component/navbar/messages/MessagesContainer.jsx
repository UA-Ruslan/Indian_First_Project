import {
    AddNewMessage,
    UpdateNewMessageTxt,
    DeleteLastMessage
} from "../../../redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from '../../../hok/withAuthRedirect'
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsInfo: state.messagePage.dialogsInfo,
        messages: state.messagePage.messages,
        newMessageData: state.messagePage.newMessageData,
    };
};

export default compose (
    connect(mapStateToProps, {
        AddNewMessage,
        UpdateNewMessageTxt,
        DeleteLastMessage
    }),
    WithAuthRedirect
)
(Messages)