import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [displayingPostList, setDisplayingPostList] = useState(true);
  const [selectedPostID, setSelectedPostID] = useState(0);
  const [postsLoaded, setPostsLoaded] = useState(false);

  const apiUrl = `https://ma.tt/wp-json/wp/v2/posts`;

  const fetchPosts = () => {
    setPostsLoaded(false);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setPostsLoaded(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => fetchPosts(), []);

  const postClick = (e) => {
    const selectedPostID = e.target.parentNode.dataset.id;
    setDisplayingPostList(false);
    setSelectedPostID(selectedPostID);
  };

  const returnClick = () => {
    setDisplayingPostList(true);
    setSelectedPostID(0);
  };

  const getSelectedPost = () => {
    return posts.find(({ id }) => id === parseInt(selectedPostID));
  };

  return displayingPostList ? (
    <PostList
      posts={posts}
      postClick={postClick}
      postsLoaded={postsLoaded}
      refreshPosts={fetchPosts}
    />
  ) : (
    <SinglePost selectedPost={getSelectedPost()} returnClick={returnClick} />
  );
};

export default App;
