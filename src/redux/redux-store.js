import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import FriendsReducer from "./FriendsReducer";
import authReducer from "./AuthReducer";
import thunk from 'redux-thunk'

let reducers = combineReducers({
    postPage: profileReducer,
    messagePage: messageReducer,
    friendsPage: FriendsReducer,
    authUserData: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store