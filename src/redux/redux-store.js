import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import FriendsReducer from "./FriendsReducer";

let reducers = combineReducers({
    postPage: profileReducer,
    messagePage: messageReducer,
    friendsPage: FriendsReducer
})

let store = createStore(reducers);

export default store