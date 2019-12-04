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
            newPostText: 'Example'
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
            newMessageText: 'Example',
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
}

export const UpdateNewMessageText = (newText) => {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
}

export default store;
window.store = store;