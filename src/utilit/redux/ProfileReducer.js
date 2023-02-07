import {apiMethods} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_LAST_POST = 'DELETE-LAST-POST'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It`s my first post', likesCount: '6'},
        {id: 3, message: 'Aloha', likesCount: '2'},
        {id: 4, message: 'Conitiva', likesCount: '0'},
    ],
    status: '',
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost ={id: 5, message: action.newPostText, likesCount: 3}
            return {
                ...state,
                postsData: [newPost, ...state.postsData ]
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

export const AddPost = (newPostText) => ({type: ADD_POST, newPostText});
export const DeleteLastPost = () => ({type: DELETE_LAST_POST});
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