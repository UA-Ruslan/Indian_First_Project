import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../hok/withAuthRedirect";
import {compose} from "redux";
import {thunkGetStatus, thunkSetStatus} from "../../../redux/ProfileReducer";

class ProfileApiContainer extends React.Component {
    componentDidMount() {
        this.props.thunkGetStatus()
    }
    render () {
        return(
            <Profile status={this.props.status} setStatus={this.props.thunkSetStatus}/>
        )
    }
}





let mapStateToProps = (state) => ({
    status: state.postPage.status
})

export const ProfileContainer = compose(connect(mapStateToProps,{thunkGetStatus, thunkSetStatus}), WithAuthRedirect)(ProfileApiContainer);
