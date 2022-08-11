import axios from "axios";
import React, { useState } from 'react';

export default function PostCreate() {
  
  const [title, setTitle] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title
    })
    setTitle('')
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <input className="input" name="title" type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
        <button className="btn">Criar</button>
      </form>
    </>
  )
}