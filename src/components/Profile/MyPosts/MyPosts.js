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
          <Post message='sssss' />
          <Post message='its my first post' />

        </div>
      </div>
    </div>

  )
}
export default MyPosts;