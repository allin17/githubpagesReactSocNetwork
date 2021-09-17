import {getUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth:false,
};

const appReducer = (state=initialState, action)=> {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
        }
        default:
            return state;
    }

}

export const initializedSuccess = () => ({type: SET_INITIALIZED})
export const initializeApp = () => (dispatch) =>{
    let promise=dispatch(getUserData())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}

export default appReducer;