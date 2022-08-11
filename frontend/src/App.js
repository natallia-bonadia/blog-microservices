import './App.css';
import React from 'react';
import PostBox from './components/PostBox';
import PostCreate from './components/PostCreate';

export default function App() {

  return (
    <div className="App">
      
      <h1>Stories &amp; News</h1>

      <PostCreate/>

      <PostBox/>

    </div>
  );
}

