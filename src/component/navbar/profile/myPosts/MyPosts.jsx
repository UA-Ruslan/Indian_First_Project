import React from "react";
import myPosts from './MyPosts.module.css'
import Posts from "./post/Posts";
const MyPosts = (props) => {
    let postDataMap = props.store.getState().postPage.postsData.map((posts, index) =><Posts message={posts.message} likes={posts.likesCount} key={index}/>)
    return (
        <div>
            <div className={myPosts.postsArea}>
                {postDataMap}
            </div>
        </div>
    )
}
export default MyPosts