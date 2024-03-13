import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
  }, []);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }

  return (
    <div className="container">
      <h2>Мировые новости</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            {/* Убираем отображение содержимого новости */}
            <Link to={`/post/${post.id}`} className="read-more-link">Читать далее</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
