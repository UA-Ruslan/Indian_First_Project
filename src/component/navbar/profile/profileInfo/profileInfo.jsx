import React, {useEffect, useState} from "react";
import style from './profileInfo.module.css'
import ProfileStatusHooks from "./profileStatus/ProfileStatusHooks.jsx";

const ProfileInfo = (props) => {
    let [positionInfo, setPositionInfo] = useState(true)
    let [toggleLeft, setToggleLeft] = useState(false)
    let [toggleRight, setToggleRight] = useState(false)
    let [blink, setBlink] = useState(false)
    let [blinkOnclick, setBlinkOnclick] = useState(false)

    useEffect(() => {
        setTimeout(() => setBlink(true), 0)
        setTimeout(() => setBlink(false), 100)
    }, [toggleLeft, toggleRight, blinkOnclick])

    let MouseLeft = () => {
        setToggleLeft(!toggleLeft)
    }
    let MouseRight = () => {
        setToggleRight(!toggleRight)
    }
    let blinkClick = () => {
        setBlinkOnclick(!blinkOnclick)
        setPositionInfo(true)
    }

    let positionInactive = () => {
        setPositionInfo(false)
    }
    return (
        <div onMouseDown={blinkClick} className={style.profileInfoWrapper}>
            <img className={`${style.sameAvatarParams} ${style.eyesLookStraight}`}
                 src={require("../../../../img/people/injun/straight.png")} alt="ava"/>
            {toggleLeft && <img className={`${style.eyesLookLeft} ${style.sameAvatarParams}`}
                                src={require("../../../../img/people/injun/left.png")}
                                alt="ava"/>}
            {toggleRight &&
                <img className={`${style.eyesLookRight} ${style.sameAvatarParams}`}
                     src={require("../../../../img/people/injun/right.png")}
                     alt="ava"/>}
            {blink && <img className={`${style.eyesClose} ${style.sameAvatarParams}`}
                           src={require("../../../../img/people/injun/close.png")}
                           alt="ava"/>}


            <div onMouseOver={MouseLeft} onMouseOut={MouseLeft} className={style.leftHoverBlock}></div>
            <div className={style.status}>
                <h2>Profile</h2>
                <div className={positionInfo ? style.spanWrapper : style.spanWrapper1}>
                    <div className={style.closeBtnPosition}>
                        <h4 onClick={positionInactive}
                            className={`${positionInfo ? style.closeBtnActive : style.closeBtnInactive}`}>+</h4>


                        <p>Name: Night Woolf</p>
                        <p>Age: 36</p>
                        <p>City: Zimbabwe</p>
                    </div>
                </div>
                <ProfileStatusHooks status={props.status} setStatus={props.setStatus}/>
            </div>
            <div onMouseOver={MouseRight} onMouseOut={MouseRight} className={style.rightHoverBlock}></div>
        </div>
    )
}
export default ProfileInfo