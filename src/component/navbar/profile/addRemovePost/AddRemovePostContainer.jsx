import {
    UpdateNewPostText,
    AddPost,
    DeleteLastPost
} from "../../../../redux/ProfileReducer";
import AddRemovePost from "./AddRemovePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.postPage.newPostText,
        postsData: state.postPage.postsData
    }
};

const AddRemovePostContainer = connect(mapStateToProps, {UpdateNewPostText, AddPost, DeleteLastPost})(AddRemovePost);


export default AddRemovePostContainer