import React from 'react';

import Comment from './Comment';

import '../styles/Post.css';

import profilePic from '../assets/profile_pic_1.png'

function Post({ author, date, content, comments }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={profilePic}/>
        <div className="header-content">
          <strong>{author}</strong>
          <small>{date}</small>
          {/* <h1>{comments[0]}</h1> */}
        </div>
      </div>

      <div className="post-content">
        <p>{content}</p>
      </div>

      <section className="comments-section">
        {
          comments.map(comment => (
            <Comment key={comment.id} name={comment.name} content={comment.content}/>
          ))
        }
      </section>
    </div>
  )
}

export default Post;
