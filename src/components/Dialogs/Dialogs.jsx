import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Emil' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Sonia' },
        { id: 4, name: 'Sergei' },
        { id: 5, name: 'Tolik' },
        { id: 6, name: 'Artem' },
    ]

    let messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'gf' },
        { id: 3, message: 'gg' },
        { id: 4, message: 'wg' },
        { id: 5, message: 'ww' },
        { id: 6, message: 'ww' },
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;