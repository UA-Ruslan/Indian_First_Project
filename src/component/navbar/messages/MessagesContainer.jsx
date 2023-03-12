import {AddNewMessage, DeleteLastMessage} from "../../../utilit/redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from '../../../utilit/hok/withAuthRedirect'
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsInfo: state.messagePage.dialogsInfo,
        messages: state.messagePage.messages,
        newMessageData: state.messagePage.newMessageData,
    };
};

export default compose (
    connect(mapStateToProps, {AddNewMessage, DeleteLastMessage}), WithAuthRedirect)(Messages)