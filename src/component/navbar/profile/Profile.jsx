import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import AddRemovePostContainer from "./addRemovePost/AddRemovePostContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name='Night Woolf' age='36' profileInfo={props.profileInfo}/>
            <AddRemovePostContainer />
        </div>
    )
}
export default Profile