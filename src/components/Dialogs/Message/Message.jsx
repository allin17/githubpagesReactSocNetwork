import React from 'react';
import s from './../Dialogs.module.css'


const Message = (props) => {
    let newMessage= React.createRef();

   /* let sendMessage= () => {
        let text=newMessage.current.value;/!*
        props.dispatch( sendMessageActionCreator() )*!/;
    }*/
    return <div className={s.dialog}>
        {props.mes}
    </div>
}

export default Message;
