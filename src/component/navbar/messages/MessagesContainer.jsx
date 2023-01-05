import {
    AddNewMessageActionCreator,
    UpdateNewMessageTxtActionCreator,
    DeleteLastMessageActionCreator
} from "../../../redux/MessageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsInfo: state.messagePage.dialogsInfo,
        messages: state.messagePage.messages,
        newMessageData: state.messagePage.newMessageData,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(AddNewMessageActionCreator());
        },

        deleteLastMessage: () => {
            dispatch(DeleteLastMessageActionCreator());
        },

        updateMessageTxt: (valueMessage) => {
            dispatch(UpdateNewMessageTxtActionCreator(valueMessage));
        },
    };
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;