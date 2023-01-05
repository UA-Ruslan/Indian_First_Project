import React from "react";
import AddRemoveBtn from '../addRemovePost/AddRemovePost.module.css'


const AddRemovePost = (props) => {

    let newPostElement = React.createRef();
    let addNewPost = () => {
        props.addNewPost()
    }
    let deletePost = () => {
        props.deletePost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }
    return (
        <div className={AddRemoveBtn.feedbackBox}>
            <button onClick={addNewPost} className={AddRemoveBtn.btnStyle}>Add new post</button>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                      className={AddRemoveBtn.textareaStyle} placeholder="Write your post here">
            </textarea>
            <button onClick={deletePost} className={AddRemoveBtn.btnStyle}>Delete last post</button>
        </div>
    )
}
export default AddRemovePost