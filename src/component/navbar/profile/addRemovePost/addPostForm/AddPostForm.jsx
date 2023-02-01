import React from 'react'
import {Field, reduxForm} from "redux-form";
import AddRemoveBtn from "../AddRemovePost.module.css";

let AddPostForm = (props) => {
    let deletePost = () => {
        props.DeleteLastPost()
    }
    return (
        <div className={AddRemoveBtn.postFormWrapper}>
            <form className={AddRemoveBtn.postForm} onSubmit={props.handleSubmit}>
                <button name='addPost' className={AddRemoveBtn.btnStyle}>Add new post</button>
                <Field name='postForm' component='textarea' className={AddRemoveBtn.textareaStyle}
                       placeholder='Write your post here'/>
            </form>
            <button onClick={deletePost} className={AddRemoveBtn.btnStyle}>Delete last post</button>
        </div>
    )
}

AddPostForm = reduxForm({form: 'Post form'})(AddPostForm)

export default AddPostForm;