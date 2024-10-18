import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailView.css';

function DetailView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="detailview-container">
      <Link to="/list" className="back-button">Back to Posts</Link>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailView;
