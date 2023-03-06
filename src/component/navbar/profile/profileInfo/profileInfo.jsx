import React, {useEffect, useRef, useState} from "react";
import style from './profileInfo.module.css'
import ProfileStatusHooks from "./profileStatus/ProfileStatusHooks.jsx";

const ProfileInfo = (props) => {
    const ref = useRef()
    const [positionInfo, setPositionInfo] = useState(true)
    const [toggleLeft, setToggleLeft] = useState(false)
    const [toggleRight, setToggleRight] = useState(false)
    const [blink, setBlink] = useState(false)
    const [blinkOnclick, setBlinkOnclick] = useState(false)
    const [isPhoto, setPhoto] = useState(null)

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

    //----------

    function setImg(e) {
        setPhoto(e.target.files[0]);
    }
    let connectBtnWithInput = () => {
        ref.current.click()
    }
    let MainPhoto = () => {
        return (
            <div>
                <img className={`${style.sameAvatarParams} ${style.eyesLookStraight}`}
                     src={require("../../../../img/people/injun/straight.webp")} alt="ava"/>
                {toggleLeft && <img className={`${style.eyesLookLeft} ${style.sameAvatarParams}`}
                                    src={require("../../../../img/people/injun/left.webp")}
                                    alt="ava"/>}
                {toggleRight &&
                    <img className={`${style.eyesLookRight} ${style.sameAvatarParams}`}
                         src={require("../../../../img/people/injun/right.webp")}
                         alt="ava"/>}
                {blink && <img className={`${style.eyesClose} ${style.sameAvatarParams}`}
                               src={require("../../../../img/people/injun/close.webp")}
                               alt="ava"/>}
            </div>

        )
    }

    //----------
    return (
        <div onMouseDown={blinkClick} className={style.profileInfoWrapper}>

            <MainPhoto/>

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
                {/*<div className={style.statusWrapper}>*/}
                {/*    <input ref={ref} type="file" onChange={setImg} style={{display: 'none'}}/>*/}
                {/*    <button className={`${style.avaBtn} ${"btnSameParams"}`} onClick={connectBtnWithInput}>choose ava</button>*/}
                    <ProfileStatusHooks status={props.status} setStatus={props.setStatus}/>
                {/*</div>*/}

            </div>
            <div onMouseOver={MouseRight} onMouseOut={MouseRight} className={style.rightHoverBlock}></div>
        </div>
    )
}
export default ProfileInfo