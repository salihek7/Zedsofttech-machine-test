import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';

function ListView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="listview-container">
      <h2>Posts</h2>
      <Link to="/" className="back-to-login">Back to Login</Link> {/* Back to Login Button */}
      <div className="card-container">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/detail/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
