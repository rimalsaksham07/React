import React, { useState } from 'react';

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;
    
    const currentTime = new Date().toLocaleString();
    setPosts([{ text: newPost, time: currentTime }, ...posts]);
    setNewPost('');
  };

  return (
    <div className="post-container">
      <h1 className="post-heading">Simple Posting Website</h1>
      
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="post-textarea"
          rows={4}
        />
        <button type="submit" className="post-button">Post</button>
      </form>
      
      <div className="posts-container">
        <h2>Recent Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              <p className="post-text">{post.text}</p>
              <small className="post-time">{post.time}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PostApp;