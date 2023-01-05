const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [],
}

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                users: state.users.map(user => {
                if(user.id === action.userId) {
                    return {...user, following: true}
                }
                return user
            })
            }
        }
        case UNFOLLOW: {
            return {
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, following: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.setUsers]}
        }
        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (setUsers) => ({type: SET_USERS, setUsers})

export default friendsReducer;