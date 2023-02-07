// import React, {useState} from "react";
// import profileReducer from "./ProfileReducer";
// import messageReducer from "./MessageReducer";
//
// let store = {
//
//     _state: {
//         postPage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: '15'},
//                 {id: 2, message: 'It`s my first post', likesCount: '6'},
//                 {id: 2, message: 'Aloha', likesCount: '2'},
//                 {id: 2, message: 'Conitiva', likesCount: '0'},
//             ],
//             newPostText: '',
//         },
//         messagePage: {
//             dialogsInfo: [
//                 {id: 1, name: 'White Fang'},
//                 {id: 2, name: 'Cunning Fox'},
//                 {id: 3, name: 'The Devils Bite'},
//                 {id: 4, name: 'Ash'},
//                 {id: 5, name: 'Horse Fucker'},
//                 {id: 6, name: 'Wind Voice'},
//             ],
//
//             messages: [
//                 {id: 1, messagesData: "Hallo, how are you?"},
//                 {id: 2, messagesData: "Wtf?"},
//                 {id: 3, messagesData: "Whats up?"},
//                 {id: 4, messagesData: "VaffaNapoli!"},
//                 {id: 5, messagesData: "I am bat to the bone!"},
//                 {id: 6, messagesData: "My name is Regina Falangi."},
//             ],
//             newMessageData: '',
//         },
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.postPage = profileReducer(this._state.postPage, action)
//         this._state.messagePage = messageReducer(this._state.messagePage, action)
//         this._callSubscriber(this._state)
//     },
// };
//
// export default store;