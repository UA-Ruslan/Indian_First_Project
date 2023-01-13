import React from "react";
import AddRemoveBtn from '../addRemovePost/AddRemovePost.module.css'
import Posts from "./post/Posts";

const AddRemovePost = (props) => {


    let postDataMap = props.postsData.map((el, index) => <Posts message={el.message}
                                                                likes={el.likesCount}
                                                                key={index}/>)

    let newPostElement = React.createRef();
    let addNewPost = () => {
        props.AddPost()
    }
    let deletePost = () => {
        props.DeleteLastPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.UpdateNewPostText(text)
    }
    return (
        <div className={AddRemoveBtn.myPostsWrapper}>
            <div className={AddRemoveBtn.btnWrapper}>
                <button onClick={addNewPost} className={AddRemoveBtn.btnStyle}>Add new post</button>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                          className={AddRemoveBtn.textareaStyle} placeholder="Write your post here">
                </textarea>
                <button onClick={deletePost} className={AddRemoveBtn.btnStyle}>Delete last post</button>
            </div>

            <div className={AddRemoveBtn.postsArea}>
                {postDataMap}
            </div>

        </div>
    )
}
export default AddRemovePost