import React from "react";
import "./App.css";

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

  getSelectedPostContent = () => {
    return this.getSelectedPost().content.rendered;
  };

  getSelectedPostTitle = () => {
    console.log("test");
    return this.getSelectedPost().title.rendered;
  };

  render() {
    return this.state.displayingPostList ? (
      <>
        <h1>Posts</h1>
        {this.state.posts.map((post) => (
          <li key={post.id} data-id={post.id} className="list-item">
            <button onClick={this.postClick}>{post.title.rendered}</button>
          </li>
        ))}
      </>
    ) : (
      <>
        <button onClick={this.returnClick}>Back to Post List</button>
        <h1>{this.getSelectedPostTitle()}</h1>
        <p>Selected Post ID: {this.state.selectedPostID}</p>
        {this.getSelectedPostContent()}
      </>
    );
  }
}

export default App;
