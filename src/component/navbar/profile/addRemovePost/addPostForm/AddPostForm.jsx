import React from 'react'
import {Field, reduxForm} from "redux-form";
import AddRemoveBtn from "../AddRemovePost.module.css";
import Textarea from "./addPostFormControl/AddPostFormControl"
import {maxLength, required} from "../../../../../utilit/validation/formsValidate";

let AddPostForm = (props) => {
    let deletePost = () => {
        props.DeleteLastPost()
    }

    let maxPostLength = maxLength(20)
    return (
        <div className={AddRemoveBtn.postFormWrapper}>
            <form className={AddRemoveBtn.postForm} onSubmit={props.handleSubmit}>
                <button name='addPost' className={AddRemoveBtn.btnStyle}>Add new post</button>
                <Field name='postForm'
                       component={Textarea}
                       validate={[required, maxPostLength]}
                />
            </form>
            <button onClick={deletePost} className={AddRemoveBtn.btnStyle}>Delete last post</button>
        </div>
    )
}

AddPostForm = reduxForm({form: 'Post form'})(AddPostForm)

export default AddPostForm;