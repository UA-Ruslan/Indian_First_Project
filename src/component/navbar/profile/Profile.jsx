import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import AddRemovePostContainer from "./addRemovePost/AddRemovePostContainer";
import {Navigate} from "react-router-dom";
const Profile = (props) => {

    if(!props.store.getState().authUserData.isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div>
            <ProfileInfo name='Night Woolf' age='36'/>
            <AddRemovePostContainer />
        </div>
    )
}
export default Profile