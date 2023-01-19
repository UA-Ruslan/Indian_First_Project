import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import FriendsReducer from "./FriendsReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    postPage: profileReducer,
    messagePage: messageReducer,
    friendsPage: FriendsReducer,
    authUserData: authReducer,
})

let store = createStore(reducers);

window.store = store

export default store