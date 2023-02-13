import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import friendsReducer from "./FriendsReducer";
import authReducer from "./AuthReducer";
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./AppReducer";

let reducers = combineReducers({
    postPage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
    authUserData: authReducer,
    appInit: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store