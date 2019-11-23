import React from 'react';
import s from './Content.module.css';

const Content = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt=''></img>
      </div>
      <div>cc</div>
      <div>
        My posts
        <div>
          New posts
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>

  )
}
export default Content;