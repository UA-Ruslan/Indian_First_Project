import React from "react";
import {connect} from "react-redux";
import {setProfileUserInfo} from "../../../../redux/FriendsReducer";
import FriendsInfo from "./FriendsInfo";
import {apiMethods} from "../../../../api/api";

class FriendsInfoApiContainer extends React.Component {
    componentDidMount() {
        apiMethods.apiSetProfileUserInfo2(this.props.id)
            .then(data => {
            this.props.setProfileUserInfo(data)
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
        friendsProfileInfo: state.friendsPage.setProfileUserInfo
    }
}

export default connect(mapStateToProps, {setProfileUserInfo})(FriendsInfoApiContainer);