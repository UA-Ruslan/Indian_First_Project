import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from "../AddRemovePost.module.css";
import Textarea from "./addPostFormControl/AddPostFormControl"
import {maxLength, required} from "../../../../../utilit/validation/formsValidate";

let AddPostForm = (props) => {
    let deletePost = () => {
        props.DeleteLastPost()
    }

    let maxPostLength = maxLength(20)
    return (
        <div className={`${style.postFormWrapper} ${style.form}`}>
            <form className={style.postForm} onSubmit={props.handleSubmit}>
                <button name='addPost' className={`${style.btnStyle} ${"btnSameParams"}`}>Add new post</button>
                <Field name='postForm'
                       component={Textarea}
                       validate={[required, maxPostLength]}
                />
            </form>
            <button onClick={deletePost} className={`${style.btnStyle} ${"btnSameParams"}`}>Delete last post</button>
        </div>
    )
}

AddPostForm = reduxForm({form: 'Post form'})(AddPostForm)

export default AddPostForm;