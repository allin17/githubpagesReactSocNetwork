import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../../common/FormControls/FormControl.module.css'

const LoginForm =({handleSubmit, error, captchaUrl})=> {
    return (
    <form onSubmit={handleSubmit}>
        <div><Field placeholder={'Email'} name={'email'}
                    component={Input}
                    validate={[required]}
        /></div>

        <div><Field placeholder={'Password'} name={'password'}
                    type={'password'}
                    validate={[required]}
                    component={Input}/></div>

        <div><Field component={Input} type={'checkbox'}/> remember me </div>

        {captchaUrl && <img src={captchaUrl} />}

        <div className={s.formSummaryError}>
            {error}
        </div>
        <div><button>LOGIN</button></div>
    </form>
)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login, logout})(Login);