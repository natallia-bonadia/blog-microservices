import axios from "axios";
import React, { useState } from "react";

export default function CommentCreate({ postId }) {
  
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`,
    {
      content
    })
    setContent('')
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <textarea className="input" name="comment" type="text" cols="30" placeholder="Escreva seu comentário" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button className="btn">Enviar</button>
      </form>
    </>
  )
}