import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
        <div>
        New posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div className={s.posts}>
          <Post message='sssss' likesCount='0' />
          <Post message='its my first post' likesCount='2' />

        </div>
      </div>
    </div>

  )
}
export default MyPosts;