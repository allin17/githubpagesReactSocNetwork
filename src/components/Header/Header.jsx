import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://www.dusterauto.ru/wp-content/uploads/2018/11/VAG-logo.jpg' />

    <div className={s.loginBlock}>
        { props.isAuth
            ? <div className={s.log}>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
  </header>
}

export default Header;