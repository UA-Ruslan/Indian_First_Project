import Friends from "./Friends"
import {connect} from "react-redux";
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setDisabledOnBtn, thunkGetUsers, thunkGetTotalUsersCount,
    thunkPageChangeOnClick,
} from "../../../utilit/redux/FriendsReducer";
import React from "react";
import Preloader from "../../preloader/Preloader";
import {
    getCurrentPage,
    getTotalUsersCount,
    getUsers,
    getUsersOnPage,
    getPreloader,
    setToggleDisabled
} from "../../../utilit/redux/FriendsSelectors";



class FriendsApiContainer extends React.Component {
    componentDidMount() {
        this.props.thunkGetUsers(this.props.usersOnPage, this.props.currentPage)
        this.props.thunkGetTotalUsersCount()
    }

    pageChangeOnClick = (el) => {
        this.props.thunkPageChangeOnClick(el, this.props.usersOnPage)
    }

    render() {
        return (
            <>
                {this.props.setPreloader === true ? <Preloader/> : null}
                <Friends
                    unfollowOnClick={this.props.unfollowOnClick}
                    totalUsersCount={this.props.totalUsersCount}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageChangeOnClick={this.pageChangeOnClick}
                    toggleDisabled={this.props.toggleDisabled}
                    setDisabledOnBtn={this.props.setDisabledOnBtn}
                />
            </>
        )
    }
}

let mapPropsToState = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        usersOnPage: getUsersOnPage(state),
        currentPage: getCurrentPage(state),
        setPreloader: getPreloader(state),
        toggleDisabled: setToggleDisabled(state),
    }
}

const FriendsContainer = connect(mapPropsToState, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setDisabledOnBtn,
    thunkGetUsers,
    thunkGetTotalUsersCount,
    thunkPageChangeOnClick
})
(FriendsApiContainer);

export default FriendsContainer