import React from "react";
import style from "../profileInfo.module.css"

const DefaultAvatar = (props) => {
    return (
        <div>
            <img className={`${style.sameAvatarParams} ${style.eyesLookStraight}`}
                 src={require("../../../../../img/people/injun/straight.webp")} alt="ava"/>
            {props.toggleLeft && <img className={`${style.eyesLookLeft} ${style.sameAvatarParams}`}
                                src={require("../../../../../img/people/injun/left.webp")}
                                alt="ava"/>}
            {props.toggleRight &&
                <img className={`${style.eyesLookRight} ${style.sameAvatarParams}`}
                     src={require("../../../../../img/people/injun/right.webp")}
                     alt="ava"/>}
            {props.blink && <img className={`${style.eyesClose} ${style.sameAvatarParams}`}
                           src={require("../../../../../img/people/injun/close.webp")}
                           alt="ava"/>}
        </div>
    )
}


export default DefaultAvatar;