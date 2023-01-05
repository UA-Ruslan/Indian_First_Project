import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import AddRemovePostContainer from "./addRemovePost/AddRemovePostContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name='Night Woolf' age='36'/>
            <AddRemovePostContainer />
            <MyPosts store={props.store}/>
        </div>
    )
}
export default Profile