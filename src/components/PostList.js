import React, { Component } from 'react';

import Post from './Post';

// styles
import '../styles/PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        author: 'Danilo Miranda',
        date: '04 Jun 2019',
        content: 'Hi people! Does anyone know if Rocketseat is hiring?',
        comments: [
          {
            id: Math.random(),
            name: 'Nalcides Miranda',
            content: 'Rocketseat is always looking for new great developers. We usually look first at our community, for those developers who stand out. If no one is found, then we start lookingat the market'
          }
        ]
      },
      {
        id: Math.random(),
        author: 'Daniel Miranda',
        date: '04 Jun 2019',
        content: 'Hellooooo everyone! I am here just to tell that I love React',
        comments: [
          {
            id: Math.random(),
            name: 'Danilo Miranda',
            content: 'Niiiice words my dear brother!'
          }
        ]
      }
    ]
  }
  
  render () {
    return(
      <div className="posts-wrapper">
        {
          this.state.posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              date={post.date}
              content={post.content}
              comments={post.comments}
            />
          ))
        }
      </div>
    )
  }
}

export default PostList;
