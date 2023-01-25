import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hok/withAuthRedirect";
class ProfileContainer extends React.Component {
render() {
    return (
        <Profile {...this.props}/>
    )
}
}
let withRedirect = WithAuthRedirect(ProfileContainer)
export default ProfileContainer = connect () (withRedirect);