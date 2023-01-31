import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import AddRemovePostContainer from "./addRemovePost/AddRemovePostContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo status={props.status}  setStatus={props.setStatus}/>
            <AddRemovePostContainer />
        </div>
    )
}
export default Profile