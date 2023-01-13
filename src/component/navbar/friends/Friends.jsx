import React from "react";
import friendsModuleCss from "./Friends.module.css"
import defaultAva from "../../../img/people/defaultAva.png"
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.usersOnPage)

    let arrPageCount = []
    for (let i = 1; i <= pageCount; i++) {
        arrPageCount.push(i)
    }
    return (
        <div className={friendsModuleCss.friends}>
            <div className={friendsModuleCss.usersPageNumberArea}>
                {arrPageCount.map((el, index) => <span
                    onClick={() => {
                        props.pageChangeOnClick(el)
                    }}
                    key={index}
                    className={props.currentPage === el
                        ? friendsModuleCss.activeUsersPageNumberDec
                        : friendsModuleCss.usersPageNumberDec}>{el}</span>)}
            </div>
            {props.users.map((user) => <div key={user.id} className={friendsModuleCss.userWrapper}>
                <div className={friendsModuleCss.imgWrapper}>
                    <NavLink to={'/' + user.id}>
                        <img className={friendsModuleCss.userImg} src={user.imgUrl != null ? user.imgUrl : defaultAva}
                             alt='Photo'/>
                    </NavLink>
                </div>
                <div className={friendsModuleCss.userInfoWrapper}>
                    <div>
                        Nickname:{user.name}
                    </div>
                    <div>
                        From:{user.location}
                    </div>
                    <div>
                        id:{user.id}
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