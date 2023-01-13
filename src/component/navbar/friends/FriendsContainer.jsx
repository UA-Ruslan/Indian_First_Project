import Friends from "./Friends"
import {connect} from "react-redux";
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setToggleOnFetch
} from "../../../redux/FriendsReducer";
import React from "react";
import axios from "axios";
import Preloader from "../../../preloader/Preloader";


class FriendsApiContainer extends React.Component {
    componentDidMount() {

        this.props.setToggleOnFetch(true)
        axios.get(`http://localhost:4000/users?_limit=${this.props.usersOnPage}&_page=${this.props.currentPage}`).then(response => {
            this.props.setToggleOnFetch(false)
            this.props.setUsers(response.data)
        })
        axios.get("http://localhost:4000/totalUsersCount").then(response => {
            this.props.setTotalUsersCount(response.data.totalUsersCount)
        })
    }

    pageChangeOnClick = (el) => {
        this.props.setCurrentPage(el)
        this.props.setToggleOnFetch(true)
        axios.get(`http://localhost:4000/users?_page=${el}&_limit=${this.props.usersOnPage}`).then(response => {
            this.props.setToggleOnFetch(false)
            this.props.setUsers(response.data)
        })
    }

    render() {
        return (
            <>
                {this.props.setIsFetching === true ? <Preloader /> : null}
                <Friends
                    totalUsersCount={this.props.totalUsersCount}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageChangeOnClick={this.pageChangeOnClick}
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
    }
}

const FriendsContainer = connect(mapPropsToState, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleOnFetch,
})
(FriendsApiContainer);

export default FriendsContainer