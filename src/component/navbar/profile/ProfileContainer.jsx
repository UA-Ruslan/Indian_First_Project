import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileUserInfo} from '../../../redux/FriendsReducer';
import {apiMethods} from "../../../api/api";


class ProfileApiContainer extends React.Component {
    componentDidMount() {
        apiMethods.apiSetProfileUserInfo().then(data => {
            this.props.setProfileUserInfo(data)
        })
    }

    render() {
        return (
            <Profile store={this.props.store} profileInfo={this.props.profileInfo}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profileInfo: state.friendsPage.isProfileUserInfo
    }

}


export default  connect (mapStateToProps, {setProfileUserInfo})(ProfileApiContainer);

