import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, UpdateNewPostText } from './redux/state'
import { BrowserRouter } from "react-router-dom";

export let reRenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} UpdateNewPostText={UpdateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}
