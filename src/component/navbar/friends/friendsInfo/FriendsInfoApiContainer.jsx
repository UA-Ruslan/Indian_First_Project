import React from "react";
import {connect} from "react-redux";
import {setProfileUserInfo} from "../../../../redux/FriendsReducer";
import axios from "axios";
import FriendsInfo from "./FriendsInfo";

class FriendsInfoApiContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/users?_page=${this.props.id}&_limit=1&_embed=profileInfo`).then(response => {
            this.props.setProfileUserInfo(response.data)
        })
    }

    render() {
        return (
            <FriendsInfo friendsProfileInfo={this.props.friendsProfileInfo}/>
        )
    }


}

let mapStateToProps = (state) => {
    return {
        friendsProfileInfo: state.friendsPage.isProfileUserInfo
    }
}

export default connect(mapStateToProps, {setProfileUserInfo})(FriendsInfoApiContainer);