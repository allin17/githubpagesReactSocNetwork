
const SEND_MESSAGE='SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Zahar'},
        {id: 2, name: 'Mersedes'},
        {id: 3, name: 'BMW'}
    ],
    messages: [
        {mes: 'Its mem wow!'},
        {mes: 'You can buy a brand new G63 AMG'},
        {mes: 'Omg kak react'}
    ],
}
const dialogsReducer = (state=initialState, action) => {

    let stateCopy = {
        ...state,
       // messages: [...state.messages]
    }
    switch(action.type){
        case SEND_MESSAGE:
            let body=action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id:4, message: body}]
            }
    }
    return state;
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;