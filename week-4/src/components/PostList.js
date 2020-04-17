import React from "react";

const PostList = ({ posts, postClick }) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.id} data-id={post.id}>
          <button
            onClick={postClick}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></button>
        </li>
      ))}
    </>
  );
};

export default PostList;
