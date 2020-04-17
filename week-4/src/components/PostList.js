import React from "react";

class PostList extends React.Component {
  componentDidMount() {
    this.refreshTimer = setInterval(() => {
      this.props.refreshPosts();
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTimer);
  }

  render() {
    const { posts, postsLoaded, postClick } = this.props;
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
  }
}

export default PostList;
