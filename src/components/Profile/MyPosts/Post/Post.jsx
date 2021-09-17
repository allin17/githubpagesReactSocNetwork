import React from 'react';
import s from './Post.module.css';
const Post = (props) => {

    return (
        <div className={s.item}>
          <img src='https://ratatum.com/wp-content/uploads/2017/09/%D0%9A%D1%82%D0%BE-%D1%81%D1%82%D0%B0%D0%BD%D0%B5%D1%82-%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%BE%D0%BC-%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8-%D0%B2-2018-%D0%B3%D0%BE%D0%B4%D1%83.jpg' alt="avatar "/>
          {props.message}
          <div>
          <span>like {props.likesCount}</span>
          </div>
          </div>
    ) 
  }
export default Post;