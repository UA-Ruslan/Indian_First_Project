import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import AddRemovePostContainer from "./addRemovePost/AddRemovePostContainer";
import style from "./Profile.module.css"

const Profile = (props) => {

    return (
        <div className={style.profileWrapper}>
            <ProfileInfo status={props.status}  setStatus={props.setStatus}/>
            <AddRemovePostContainer />
        </div>
    )
}
export default Profile