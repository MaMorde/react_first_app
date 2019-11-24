import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (

    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'></img>
      post 1
      <div>
        <span>Like</span>
      </div>

    </div>


  )
}
export default Post;