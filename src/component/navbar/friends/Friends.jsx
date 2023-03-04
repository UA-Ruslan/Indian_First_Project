import React, {useState} from "react";
import style from "./Friends.module.css"
import defaultAva from "../../../img/people/defaultAva.webp"
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    const [portionNumber, setPortionNumber] = useState(1);
    let portionSize = 5;
    let pageCount = Math.ceil(props.totalUsersCount / props.usersOnPage);
    let portionCount = Math.ceil(pageCount / portionSize);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    let arrPageCount = [];

    for (let i = 1; i <= pageCount; i++) {
        arrPageCount.push(i)
    }
    let prevPortionPages = () => {
        setPortionNumber(portionNumber - 1)
    }
    let nextPortionPages = () => {
        setPortionNumber(portionNumber + 1)
    }
    return (
        <div className={style.friendsWrapper}>
            <div className={style.usersPageNumberArea}>
                <div>
                    <h2 className={style.friendsTitle}>Friends</h2>
                </div>
                <span className={style.paginationSpan}>
                     <button onClick={prevPortionPages} disabled={portionNumber == 1}
                             className={`${style.paginationBtn} btnSameParams`}>{"<"}</button>
                    {arrPageCount.filter((el) => el >= leftPortionNumber && el <= rightPortionNumber).map((el, id) =>
                        <div
                            onClick={() => {
                                props.pageChangeOnClick(el)
                            }}
                            key={id}
                            className={props.currentPage === el
                                ? style.activeUsersPageNumberDec
                                : style.usersPageNumberDec}>{el}</div>)}
                    <button onClick={nextPortionPages} disabled={portionNumber == portionCount}
                            className={`${style.paginationBtn} btnSameParams`}>{">"}</button>
                </span>
            </div>
            <div className={style.friendsList}>

                {props.users.map((user, index) =>
                    <NavLink key={index} className={style.navLink} to={"/friends/" + user.id}>
                        <div className={style.userWrapper}>
                            <div className={style.userImgWrapper}>
                                <img className={style.userImg} src={user.imgUrl != null ? user.imgUrl : defaultAva}
                                     alt='UserImg'/>
                            </div>
                            <div className={style.userInfoWrapper}>
                                <div>
                                    <p>Name: {user.name}</p>
                                </div>
                                <div>
                                    <p>City: {user.location} </p>
                                </div>
                                <div>
                                    <p>Id: {user.id} </p>
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