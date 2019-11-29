import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let posts = [
    { id: 1, message: 'sssss', likesCount: 12 },
    { id: 2, message: 'its my first post', likesCount: 11 },
    { id: 3, message: 'its my first post', likesCount: 11 },
    { id: 4, message: 'its my first post', likesCount: 11 },
    { id: 5, message: 'its my first post', likesCount: 11 },
]

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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
