const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'sssss', likesCount: 12 },
                { id: 2, message: 'its my first post', likesCount: 11 },
                { id: 3, message: 'its my first post', likesCount: 11 },
                { id: 4, message: 'its my first post', likesCount: 11 },
                { id: 5, message: 'its my first post', likesCount: 11 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Emil' },
                { id: 2, name: 'Tanya' },
                { id: 3, name: 'Sonia' },
                { id: 4, name: 'Sergei' },
                { id: 5, name: 'Tolik' },
                { id: 6, name: 'Artem' },
            ],


            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'gf' },
                { id: 3, message: 'gg' },
                { id: 4, message: 'wg' },
                { id: 5, message: 'ww' },
                { id: 6, message: 'ww' },
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log('sss')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }

    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default store;
window.store = store;