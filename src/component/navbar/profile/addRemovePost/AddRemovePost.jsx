import React from "react";
import style from '../addRemovePost/AddRemovePost.module.css'
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
        <div className={style.addRemovePost}>
            <div>
                <AddPostForm onSubmit={onFormSubmit} DeleteLastPost={props.DeleteLastPost}/>
            </div>
            <div className={style.post}>
                {postDataMap}
            </div>
        </div>
    )
}
export default AddRemovePost