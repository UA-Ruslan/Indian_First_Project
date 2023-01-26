const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const DELETE_LAST_MESSAGE = 'DELETE-LAST-MESSAGE'
const UPDATE_NEW_MESSAGE_TXT = 'UPDATE-NEW-MESSAGE-TXT'

let initialState = {
    dialogsInfo: [
        {id: 1, name: 'White Fang'},
        {id: 2, name: 'Cunning Fox'},
        {id: 3, name: 'The Devils Bite'},
        {id: 4, name: 'Ash'},
        {id: 5, name: 'Horse Fucker'},
        {id: 6, name: 'Wind Voice'},
    ],

    messages: [
        {id: 1, messagesData: "Hallo, how are you?"},
        {id: 2, messagesData: "Wtf?"},
        {id: 3, messagesData: "Whats up?"},
        {id: 4, messagesData: "VaffaNapoli!"},
        {id: 5, messagesData: "I am bat to the bone!"},
        {id: 6, messagesData: "My name is Regina Falangi."},
    ],
    newMessageData: '',
}

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                newMessageData: '',
                messages: [...state.messages, {id: 7, messagesData: state.newMessageData}]
            }
        }
        case DELETE_LAST_MESSAGE: {
            let stateCopy = {
                ...state,
                messages: [...state.messages],
                ...state.messages.pop()
            }
            stateCopy.messages.pop();
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TXT: {
            return {
                ...state,
                newMessageData: action.newMessageTxt
            }
        }
        default:
            return state;
    }
}

export const AddNewMessage = () => ({type: ADD_NEW_MESSAGE})
export const DeleteLastMessage = () => ({type: DELETE_LAST_MESSAGE})
export const UpdateNewMessageTxt = (newMessageTxt) => ({type: UPDATE_NEW_MESSAGE_TXT, newMessageTxt: newMessageTxt
})

export default messageReducer;