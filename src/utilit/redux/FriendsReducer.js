import {apiMethods} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_TOGGLE_ON_FETCH = 'SET_TOGGLE_ON_FETCH'
const SET_PROFILE_USER_INFO = 'SET_PROFILE_USER_INFO'
const SET_TOGGLE_IN_PROGRESS = 'SET_TOGGLE_IN_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: null,
    usersOnPage: 4,
    currentPage: 1,
    setPreloader: false,
    setProfileUserInfo: [],
    toggleDisabled: []
}

let friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
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
            return {...state, setPreloader: action.setPreloader}
        }
        case SET_PROFILE_USER_INFO: {
            return {...state, setProfileUserInfo: action.setProfileUserInfo}
        }
        case SET_TOGGLE_IN_PROGRESS: {
            return {
                ...state, toggleDisabled: action.isDisabled
                    ? [...state.toggleDisabled, action.userId]
                    : state.toggleDisabled.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (setUsers) => ({type: SET_USERS, setUsers});
export const setCurrentPage = (setPageNum) => ({type: SET_CURRENT_PAGE, setPageNum});
export const setTotalUsersCount = (setTotalUsersCount) => ({type: SET_TOTAL_USER_COUNT, setTotalUsersCount});
export const setPreloader = (setPreloader) => ({type: SET_TOGGLE_ON_FETCH, setPreloader});
export const setProfileUserInfo = (setProfileUserInfo) => ({type: SET_PROFILE_USER_INFO, setProfileUserInfo});
export const setDisabledOnBtn = (isDisabled, userId) => ({type: SET_TOGGLE_IN_PROGRESS, isDisabled, userId});

//-----------------------------------------------------------------------------------//
export const thunkGetUsers = (usersOnPage, currentPage) => async (dispatch) => {
    dispatch(setPreloader(true));
    let data = await apiMethods.apiSetTogglePreloader(usersOnPage, currentPage)
    dispatch(setPreloader(false));
    dispatch(setUsers(data));
};
export const thunkGetTotalUsersCount = () => async (dispatch) => {
    let data = await apiMethods.apiSetTotalUsersCount()
    dispatch(setTotalUsersCount(data.totalUsersCount));
};

export const thunkPageChangeOnClick = (el, usersOnPage) => async (dispatch) => {
    dispatch(setCurrentPage(el));
    dispatch(setPreloader(true));
    let data = await apiMethods.apiPageChangeOnClick(usersOnPage, el)
    dispatch(setPreloader(false));
    dispatch(setUsers(data));
};
export const thunkUserProfileInfo = (id) => async (dispatch) => {
    dispatch(setPreloader(true));
    let data = await apiMethods.apiSetProfileUserInfo2(id)
    dispatch(setPreloader(false));
    dispatch(setProfileUserInfo(data));
}
//-----------------------------------------------------------------------------------//
let followUnfollowGeneral = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setDisabledOnBtn(true, userId))
    await apiMethod(userId)
    dispatch(actionCreator(userId))
    dispatch(setDisabledOnBtn(false, userId))
}

export const thunkSetUnfollow = (userId) => async (dispatch) => {
    await followUnfollowGeneral(dispatch, userId, apiMethods.apiSetUnfollow, unfollow)
};

export const thunkSetFollow = (userId) => async (dispatch) => {
    await followUnfollowGeneral(dispatch, userId, apiMethods.apiSetFollow, follow)
};
//-----------------------------------------------------------------------------------//
export default friendsReducer;