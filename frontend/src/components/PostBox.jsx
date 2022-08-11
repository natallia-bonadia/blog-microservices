import axios from 'axios';
import React, { useState, useEffect } from 'react';

import CommentList from './CommentList';
import CommentCreate from './CommentCreate';

export default function PostBox() {
  
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')

    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderizandoPosts = Object.values(posts).map(post => {
    return (
      <>
        <div className="postBox">
          <h2>{post.title}</h2>
          <h4>{post.id}</h4>
          <CommentCreate postId={post.id}/>
          <CommentList comments={post.comments} />
        </div>
      </>


    );
  })

  return (
    <>
      {renderizandoPosts}
    </>
  )
}