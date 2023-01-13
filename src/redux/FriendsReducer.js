const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_TOGGLE_ON_FETCH = 'SET_TOGGLE_ON_FETCH'
const SET_PROFILE_USER_INFO = 'SET_PROFILE_USER_INFO'

let initialState = {
    users: [],
    totalUsersCount: null,
    usersOnPage: 4,
    currentPage: 1,
    setIsFetching: false,
    isProfileUserInfo: []
}

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(user => {
                if(user.id === action.userId) {
                    return {...user, following: true}
                }
                return user
            })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(user => {
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.setPageNum}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.setTotalUsersCount}
        }
        case SET_TOGGLE_ON_FETCH: {
            return {...state, setIsFetching: action.setToggleFetching}
        }
        case SET_PROFILE_USER_INFO: {
            return {...state, isProfileUserInfo: action.setProfileUserInfo}
        }
        default:
            return state
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (setUsers) => ({type: SET_USERS, setUsers})
export const setCurrentPage = (setPageNum) => ({type: SET_CURRENT_PAGE, setPageNum})
export const setTotalUsersCount = (setTotalUsersCount) => ({type: SET_TOTAL_USER_COUNT, setTotalUsersCount})
export const setToggleOnFetch = (setToggleFetching) => ({type: SET_TOGGLE_ON_FETCH, setToggleFetching})
export const setProfileUserInfo = (setProfileUserInfo) => ({type: SET_PROFILE_USER_INFO, setProfileUserInfo})

export default friendsReducer;