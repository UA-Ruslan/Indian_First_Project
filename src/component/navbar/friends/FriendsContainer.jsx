import Friends from "./Friends"
import {connect} from "react-redux";
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setToggleOnFetch, setToggleInProgress
} from "../../../redux/FriendsReducer";
import React from "react";
import Preloader from "../../preloader/Preloader";
import {apiMethods} from "../../../api/api";


class FriendsApiContainer extends React.Component {
    componentDidMount() {
        this.props.setToggleOnFetch(true)
        apiMethods.apiSetToggleOnFetch(this.props.usersOnPage, this.props.currentPage)
            .then(data => {
                this.props.setToggleOnFetch(false)
                this.props.setUsers(data)
            })
        apiMethods.apiSetTotalUsersCount()
            .then(data => {
                this.props.setTotalUsersCount(data.totalUsersCount)
            })
    }

    pageChangeOnClick = (el) => {
        this.props.setCurrentPage(el)
        this.props.setToggleOnFetch(true)
        apiMethods.apiPageChangeOnClick(this.props.usersOnPage, el)
            .then(data => {
                this.props.setToggleOnFetch(false)
                this.props.setUsers(data)
            })
    }

    render() {
        return (
            <>
                {this.props.setIsFetching === true ? <Preloader/> : null}
                <Friends
                    unfollowOnClick={this.props.unfollowOnClick}
                    totalUsersCount={this.props.totalUsersCount}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageChangeOnClick={this.pageChangeOnClick}
                    setToggleInProgress={this.props.setToggleInProgress}
                    toggleInProgress={this.props.toggleInProgress}
                />
            </>
        )
    }
}

let mapPropsToState = (state) => {
    return {
        users: state.friendsPage.users,
        totalUsersCount: state.friendsPage.totalUsersCount,
        usersOnPage: state.friendsPage.usersOnPage,
        currentPage: state.friendsPage.currentPage,
        setIsFetching: state.friendsPage.setIsFetching,
        toggleInProgress: state.friendsPage.toggleInProgress,
    }
}

const FriendsContainer = connect(mapPropsToState, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleOnFetch,
    setToggleInProgress,
})
(FriendsApiContainer);

export default FriendsContainer