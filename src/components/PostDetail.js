import React from 'react';

function PostDetail({ post }) {
  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Add comments and other post details here */}
    </div>
  );
}

export default PostDetail;
