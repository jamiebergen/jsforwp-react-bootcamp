import React from "react";

const PostList = ({ posts, postsLoaded, postClick }) => {
  return postsLoaded ? (
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
  ) : (
    <>
      <h1>Posts</h1>
      <p>Loading...</p>
    </>
  );
};

export default PostList;
