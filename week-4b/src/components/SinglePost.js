import React from "react";

const SinglePost = ({ selectedPost, returnClick }) => {
  return (
    <>
      <button onClick={returnClick}>Back to Post List</button>
      <h1
        dangerouslySetInnerHTML={{ __html: selectedPost.title.rendered }}
      ></h1>
      <div
        dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
      />
    </>
  );
};

export default SinglePost;
