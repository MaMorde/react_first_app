import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Content = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt=''></img>
      </div>
      <div>cc</div>
      <MyPosts />
    </div>

  )
}
export default Content;