import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DIalogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {

    let dialogElement = props.messagesPage.dialogs
        .map( d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    let message = props.messagesPage.messages
        .map( m => <Message mes={m.mes} key={m.id}/> )

    let addNewMessage =(value)=>{
        props.sendMessage(value.newMessageBody);
    }


    if(!props.isAuth) return <Redirect to={'/login'}/>

        return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div  className={s.messages}>
                <div>{message}</div>
                <div>
                    <MessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>

            </div>
            )
            }
            const maxLength50=maxLengthCreator(50)
            const MessageForm = (props) => {
                return <form onSubmit={props.handleSubmit}>
                    <Field component={'textarea'}
                           name={'newMessageBody'}
                           placeholder='Enter your message'
                           validate={[required, maxLength50]}
                    />
                    <div>
                        <button>
                            Send
                        </button>
                    </div>
                </form>
            }
                const MessageFormRedux = reduxForm({form:'messageForm'})(MessageForm)

            export default Dialogs;