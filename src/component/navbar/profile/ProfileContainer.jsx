import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUserInfo} from '../../../redux/FriendsReducer';


class ProfileApiContainer extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:4000/profileInfo').then(response => {
            this.props.setProfileUserInfo(response.data)
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

