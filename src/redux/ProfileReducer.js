const ADD_POST = 'ADD-POST';
const DELETE_LAST_POST = 'DELETE-LAST-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It`s my first post', likesCount: '6'},
        {id: 3, message: 'Aloha', likesCount: '2'},
        {id: 4, message: 'Conitiva', likesCount: '0'},
    ],
    newPostText: '',
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText,
            }

        }
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                postsData: [{id: 5, message: state.newPostText, likesCount: 3}, ...state.postsData],
            }
        }
        case DELETE_LAST_POST: {
            let stateCopy = {
                ...state,
                postsData: [...state.postsData,],
            }
            stateCopy.postsData.shift();
            return stateCopy;
        }
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST});
export const DeleteLastPostActionCreator = () => ({type: DELETE_LAST_POST});
export const UpdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;