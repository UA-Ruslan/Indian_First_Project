import React, {useEffect, useState} from "react";
import profileInfo from './profileInfo.module.css'

const ProfileInfo = (props) => {
    const [switchToggled, setSwitchToggled] = useState("false");

    useEffect(() => {
        if (!switchToggled) {
            setTimeout(() => setSwitchToggled(!switchToggled), 500)
        }

    }, [switchToggled, setSwitchToggled])

    const oldClass = () => {
        setSwitchToggled(!switchToggled);
    }

    const eyeMove = (event) => {
        let x = event.clientX;
        // let y = event.clientY;
        // console.log(x, y)
        if (x < 700) {
            profileInfo.leftEyeMiddle = profileInfo.leftEyeMiddle1
            profileInfo.rightEyeMiddle = profileInfo.rightEyeMiddle1
        } else if (x > 700 && x < 900) {
            profileInfo.leftEyeMiddle = profileInfo.leftEyeMiddle3
            profileInfo.rightEyeMiddle = profileInfo.rightEyeMiddle3
        } else if (x > 900) {
            profileInfo.leftEyeMiddle = profileInfo.leftEyeMiddle2
            profileInfo.rightEyeMiddle = profileInfo.rightEyeMiddle2
        }
    }
    let mouseOut = (event) => {
        profileInfo.leftEyeMiddle = profileInfo.leftEyeMiddle3
        profileInfo.rightEyeMiddle = profileInfo.rightEyeMiddle3
    }

    return (
        <div onMouseMove={eyeMove} onClick={oldClass} onMouseOver={oldClass} onMouseOut={mouseOut}
             className={profileInfo.avatar}>
            <img className={profileInfo.injun} src={require("../../../../img/people/injun_1.png")} alt="ava"/>
            <div>
                <div className={switchToggled ? profileInfo.leftEyeTop : profileInfo.leftTop}>
                </div>
                <div className={switchToggled ? profileInfo.leftEyeBottom : profileInfo.leftBottom}>
                </div>
                <div className={switchToggled ? profileInfo.rightEyeTop : profileInfo.rightTop}>
                </div>
                <div className={switchToggled ? profileInfo.rightEyeBottom : profileInfo.rightBottom}>
                </div>
                <div className={switchToggled ? profileInfo.leftEyeLine : profileInfo.leftLine}>
                </div>
                <div className={switchToggled ? profileInfo.rightEyeLine : profileInfo.rightLine}>
                </div>
                <div className={profileInfo.leftEyeArea}>
                    <div className={profileInfo.leftEyeMiddle}>
                    </div>
                </div>
                <div className={profileInfo.rightEyeArea}>
                    <div className={profileInfo.rightEyeMiddle}>
                    </div>
                </div>
            </div>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>

        </div>
    )
}
export default ProfileInfo