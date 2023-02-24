import Friends from "./Friends"
import {connect} from "react-redux";
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    thunkGetUsers,
    thunkGetTotalUsersCount,
    thunkPageChangeOnClick,
    thunkSetUnfollow,
    thunkSetFollow,
} from "../../../utilit/redux/FriendsReducer";
import React from "react";
import Preloader from "../../../utilit/preloader/Preloader";
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
                <Friends {...this.props}
                    pageChangeOnClick={this.pageChangeOnClick}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        usersOnPage: getUsersOnPage(state),
        currentPage: getCurrentPage(state),
        setPreloader: getPreloader(state),
        toggleDisabled: setToggleDisabled(state),
    }
}

const FriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    thunkGetUsers,
    thunkGetTotalUsersCount,
    thunkPageChangeOnClick,
    thunkSetUnfollow,
    thunkSetFollow
})
(FriendsApiContainer);

export default FriendsContainer