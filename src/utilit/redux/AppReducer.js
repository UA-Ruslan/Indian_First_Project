import {thunkAuthUserData} from "./AuthReducer";

const SET_APP_INIT = "SET_APP_INIT"

let initialState = {
    appInit: false
}

let AppReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_APP_INIT: {
            return {
                ...state,
                appInit: true
            }
        }
        default:
            return state
    }
}

export const initApp = () => ({type: SET_APP_INIT})

export const thunkSetAppInit = () => (dispatch) => {
        let promise = dispatch(thunkAuthUserData());
        promise.then(() => {
            dispatch(initApp())
        })
}

export default AppReducer;