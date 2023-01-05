import React from "react";

import {
    UpdateNewPostTextActionCreator,
    AddPostActionCreator,
    DeleteLastPostActionCreator
} from "../../../../redux/ProfileReducer";
import AddRemovePost from "./AddRemovePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.postPage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
            addNewPost: () => {
                dispatch(AddPostActionCreator());
            },
            deletePost: () => {
                dispatch(DeleteLastPostActionCreator());
            },
            onPostChange: (text) => {
                dispatch(UpdateNewPostTextActionCreator(text));
            }
        }
}
const AddRemovePostContainer = connect(mapStateToProps, mapDispatchToProps)(AddRemovePost);


export default AddRemovePostContainer