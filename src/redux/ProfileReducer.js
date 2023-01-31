import {apiMethods} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_LAST_POST = 'DELETE-LAST-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It`s my first post', likesCount: '6'},
        {id: 3, message: 'Aloha', likesCount: '2'},
        {id: 4, message: 'Conitiva', likesCount: '0'},
    ],
    newPostText: '',
    status: '',
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                postsData: [{id: 5, message: state.newPostText, likesCount: 3}, ...state.postsData ]
            }
        }
        case DELETE_LAST_POST: {
            let stateCopy = {
                ...state,
                postsData: [...state.postsData],
            }
            stateCopy.postsData.shift();
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }

        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.setStatus
            }
        }
        default:
            return state;
    }
}

export const AddPost = () => ({type: ADD_POST});
export const DeleteLastPost = () => ({type: DELETE_LAST_POST});
export const UpdateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const SetStatus = (setStatus)=> ({type: SET_STATUS, setStatus});


export const thunkGetStatus = () => {
    return (dispatch) => {
        apiMethods.apiGetStatus()
            .then(data =>{
                dispatch(SetStatus(data.myStatus))
            })
    }
}
export const thunkSetStatus = (status) => {
    return (dispatch) => {
        apiMethods.apiSetStatus(status)
            .then(data => {
                dispatch(SetStatus(status));
            })
    }
}

export default profileReducer;