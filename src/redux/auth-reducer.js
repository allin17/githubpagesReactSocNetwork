import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: 2,
    email: null,
    login: null,
    isAuth:false,
    captchaUrl: null,
};

const authReducer = (state=initialState, action)=> {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
        }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data,
        }
        default:
            return state;
    }

}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}})
export const getUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) =>{

    let response = await authAPI.login(email, password, rememberMe)
            if(response.data.resultCode===0) {
                dispatch(getUserData())
            }
            else {
                if(response.data.resultCode===10){
                    dispatch(getCaptchaUrl())
                }
                let message=response.data.messages.length>0 ? response.data.messages[0] : 'Error'
                dispatch(stopSubmit('login',{_error: message}))
            }
}

export const getCaptchaUrl = () => async (dispatch) =>{

    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logout(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer;