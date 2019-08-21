import React from 'react';

import '../styles/Comment.css';

import profilePic from '../assets/profile_pic_1.png'

function Comment({ name, content }) {
  return (
    <div className="comment-container">
      <img src={profilePic} />
      <div className="comment-content">
        <p>
          <span className="publisher">{name}</span> {content}
        </p>
      </div>
    </div>
  )
}

export default Comment;