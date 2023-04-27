import {apiMethods} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {email, login, isAuth}})


export const thunkAuthUserData = () => async (dispatch) => {
    let data = await apiMethods.apiAuthUserData()
    if (data.email === "test" && data.login === "test") {
        dispatch(setAuthUserData(data.email, data.login, true));
    }
}


export const thunkLogin = (email, password) => async (dispatch) => {
    let data = await apiMethods.apiLogin(email, password)
    if (data.email === "test" && data.login === "test") {
        dispatch(thunkAuthUserData())
    } else {
        let message = "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}


export const thunkLogout = () => async (dispatch) => {
    let data = await apiMethods.apiLogout()
    if (data.email === "test" && data.login === "test") {
        dispatch(setAuthUserData(null, null, false));
    }
    return window.location.reload(false);
}

export default authReducer;