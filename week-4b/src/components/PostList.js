import React, { useEffect } from "react";

const PostList = ({ posts, postsLoaded, postClick, refreshPosts }) => {
  useEffect(() => {
    const refreshTimer = setInterval(() => {
      refreshPosts();
    }, 60000);
    return () => clearInterval(refreshTimer);
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {postsLoaded ? (
        <>
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
          <p>Loading...</p>
        </>
      )}
    </>
  );
};

export default PostList;
