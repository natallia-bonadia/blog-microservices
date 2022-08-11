import React from "react";

export default function CommentList({ comments }) {
  
  return (
    <>
      <h4>Comentários</h4>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.id}>{comment.content}</li>
          )
        })}
      </ul>
    </>
  )
}