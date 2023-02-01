import {AddPost, DeleteLastPost} from "../../../../redux/ProfileReducer";
import AddRemovePost from "./AddRemovePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.postPage.postsData
    }
};

const AddRemovePostContainer = connect(mapStateToProps, {AddPost, DeleteLastPost})(AddRemovePost);


export default AddRemovePostContainer