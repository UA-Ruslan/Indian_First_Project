import React from "react";
import postsModuleCss from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={postsModuleCss.item}>
            <div>
                <img src={require("../../../../../img/people/injun_ava_1.png")} alt="ava"/>
                <div>
                    <span>Likes : {props.likes}</span>
                </div>
            </div>
            <div className={postsModuleCss.postMessage}>
                {props.message}
            </div>

        </div>
    )
}
export default Posts