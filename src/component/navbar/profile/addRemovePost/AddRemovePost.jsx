import React from "react";
import AddRemoveBtn from '../addRemovePost/AddRemovePost.module.css'
import Posts from "./post/Posts";
import AddPostForm from "./addPostForm/AddPostForm";

const AddRemovePost = (props) => {


    let postDataMap = props.postsData.map((el, index) => <Posts message={el.message}
                                                                likes={el.likesCount}
                                                                key={index}/>)
    let onFormSubmit = (value) => {
        props.AddPost(value.postForm)
    }

    return (
        <div className={AddRemoveBtn.myPostsWrapper}>
            <div className={AddRemoveBtn.btnWrapper}>
                <AddPostForm onSubmit={onFormSubmit} DeleteLastPost={props.DeleteLastPost}/>
            </div>
            <div className={AddRemoveBtn.postsArea}>
                {postDataMap}
            </div>
        </div>
    )
}
export default AddRemovePost