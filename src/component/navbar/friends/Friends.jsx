import React from "react";
import style from "./Friends.module.css"
import defaultAva from "../../../img/people/defaultAva.png"
import {NavLink} from "react-router-dom";


const Friends = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.usersOnPage)

    let arrPageCount = []
    for (let i = 1; i <= pageCount; i++) {
        arrPageCount.push(i)
    }

    return (
        <div>
            <div className={style.usersPageNumberArea}>
                <div>
                    <h2 className={style.friendsTitle}>Friends</h2>
                </div>
                <span style={{display: "flex"}}>
                    {arrPageCount.map((el, id) => <div
                        onClick={() => {
                            props.pageChangeOnClick(el)
                        }}
                        key={id}
                        className={props.currentPage === el
                            ? style.activeUsersPageNumberDec
                            : style.usersPageNumberDec}>{el}</div>)}
                </span>
            </div>
            <div className={style.friends}>

                {props.users.map((user, index) =>
                    <NavLink key={index} className={style.navLink} to={'/friends/' + user.id}>
                        <div className={style.userWrapper}>
                            <div className={style.imgInfoWrapper}>
                                <div className={style.imgWrapper}>
                                    <img className={style.userImg} src={user.imgUrl != null ? user.imgUrl : defaultAva}
                                         alt='UserImg'/>
                                </div>
                                <div className={style.userInfoWrapper}>
                                    <div>
                                        <p className={style.pDec}>Name: {user.name}</p>
                                    </div>
                                    <div>
                                        <p className={style.pDec}>City: {user.location} </p>
                                    </div>
                                    <div>
                                        <p className={style.pDec}>Id: {user.id} </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.userBtnWrapper}>
                                {user.following
                                    ? <button disabled={props.toggleDisabled.some(id => id === user.id)}
                                              className={`${style.userBtn} ${"btnSameParams"}`} onClick={(event) => {
                                        props.thunkSetUnfollow(user.id)
                                        event.preventDefault()
                                    }}>Unfollow</button>
                                    : <button disabled={props.toggleDisabled.some(id => id === user.id)}
                                              className={`${style.userBtn} ${"btnSameParams"}`} onClick={(event) => {
                                        props.thunkSetFollow(user.id)
                                        event.preventDefault()
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default Friends;