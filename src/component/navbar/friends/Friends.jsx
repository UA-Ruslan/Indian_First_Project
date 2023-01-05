import React from "react";
import friendsModuleCss from "./Friends.module.css"
import axios from "axios";
import defaultAva from "../../../img/people/defaultAva.png"

const Friends = (props) => {
    if (props.users.length === 0) {
        axios.get("http://localhost:4000/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div className={friendsModuleCss.friends}>
            {props.users.map((user) => <div key={user.id} className={friendsModuleCss.userWrapper}>
                <div className={friendsModuleCss.imgWrapper}>
                    <img className={friendsModuleCss.userImg} src={user.imgUrl != null ? user.imgUrl : defaultAva} alt='Photo'/>
                </div>
                <div className={friendsModuleCss.userInfoWrapper}>
                    <div>
                        Nickname:{user.name}
                    </div>
                    <div>
                        From:{user.location}
                    </div>
                </div>
                <div className={friendsModuleCss.userBtnWrapper}>
                    {user.following
                        ? <button className={friendsModuleCss.userBtn} onClick={() => {
                            props.unfollow(user.id)
                        }}>unfollow</button>
                        : <button className={friendsModuleCss.userBtn} onClick={() => {
                            props.follow(user.id)
                        }}>follow</button>
                    }
                </div>
            </div>)}
        </div>
    )
}
export default Friends;