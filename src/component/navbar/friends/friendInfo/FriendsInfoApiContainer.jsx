import React from "react";
import {connect} from "react-redux";
import {setProfileUserInfo, setPreloader, thunkUserProfileInfo} from "../../../../redux/FriendsReducer";
import FriendsInfo from "./FriendsInfo";
import Preloader from "../../../preloader/Preloader";

class FriendsInfoApiContainer extends React.Component {
    componentDidMount() {
        this.props.thunkUserProfileInfo(this.props.id)
    }

    render() {
        return (
            <>
                {this.props.preloader === true ? <Preloader/> : null}
                <FriendsInfo friendsProfileInfo={this.props.friendsProfileInfo}/>
            </>
        )
    }


}

let mapStateToProps = (state) => {
    return {
        friendsProfileInfo: state.friendsPage.setProfileUserInfo,
        preloader: state.friendsPage.preloader,
    }
}

export default connect(mapStateToProps, {setProfileUserInfo, setPreloader, thunkUserProfileInfo})(FriendsInfoApiContainer);