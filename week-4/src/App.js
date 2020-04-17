import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";

class App extends React.Component {
  state = {
    posts: [],
    displayingPostList: true,
    selectedPostID: 0,
  };

  apiUrl = `https://ma.tt/wp-json/wp/v2/posts`;

  componentDidMount() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts: posts });
      })
      .catch((error) => console.error(error));
  }

  postClick = (e) => {
    const selectedPostID = e.target.parentNode.dataset.id;
    this.setState({
      displayingPostList: false,
      selectedPostID,
    });
  };

  returnClick = () => {
    this.setState({
      displayingPostList: true,
      selectedPostID: 0,
    });
  };

  getSelectedPost = () => {
    return this.state.posts.find(
      ({ id }) => id === parseInt(this.state.selectedPostID)
    );
  };

  render() {
    return this.state.displayingPostList ? (
      <PostList posts={this.state.posts} postClick={this.postClick} />
    ) : (
      <SinglePost
        selectedPost={this.getSelectedPost()}
        returnClick={this.returnClick}
      />
    );
  }
}

export default App;
