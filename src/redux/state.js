import { reRenderEntireTree } from "../render";

let state = {
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
        ]
    }



}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    reRenderEntireTree(state);
}

export let UpdateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state);
}

export default state;