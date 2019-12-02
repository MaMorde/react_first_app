import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { NavLink } from "react-router-dom"


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;