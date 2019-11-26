import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom"


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div >
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Emil' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Sona' },
        { id: 4, name: 'Sergay' },
        { id: 5, name: 'Tolik' },
        { id: 6, name: 'Artem' },
    ]
    let messagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'gf' },
        { id: 3, message: 'gg' },
        { id: 4, message: 'wg' },
        { id: 5, message: 'ww' },
        { id: 6, message: 'ww' },
    ]
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogs;