import friends from "./Friends"
import {connect} from "react-redux";
import {setUsersAC, followAC, unfollowAC} from "../../../redux/FriendsReducer";

let mapPropsToState = (state) => {
    return {
      users: state.friendsPage.users
    }
}
let mapDispatchToState = (dispatch) => {
    return {
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (setUser) => {
        dispatch(setUsersAC(setUser))
    }
    }
}

const FriendsContainer = connect (mapPropsToState, mapDispatchToState) (friends);

export default FriendsContainer