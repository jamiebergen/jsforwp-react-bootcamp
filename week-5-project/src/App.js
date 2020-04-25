import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SimpleStorage from "react-simple-storage";

import Login from "./components/Login";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Message from "./components/Message";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = {
    posts: [],
    message: null,
    isAuthenticated: false,
  };

  componentDidMount() {
    this.props.appService.subscribeToCallbacks((posts) =>
      this.setState({ posts })
    );
  }

  onLogin = (email, password) => {
    this.props.appService
      .login(email, password)
      .then((user) => this.setState({ isAuthenticated: true }))
      .catch((error) => console.error(error));
  };

  onLogout = () => {
    this.props.appService
      .logout()
      .then(() => this.setState({ isAuthenticated: false }))
      .catch((error) => console.error(error));
  };

  displayMessage = (type) => {
    this.setState({
      message: type,
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };

  addNewPost = (post) => {
    this.props.appService.savePost(post);
    this.displayMessage("saved");
  };

  updatePost = (post) => {
    this.props.appService.updatePost(post);
    this.displayMessage("updated");
  };

  deletePost = (post) => {
    if (window.confirm("Delete this post?")) {
      this.props.appService.deletePost(post);
      this.displayMessage("deleted");
    }
  };

  renderAuthRoute = (
    Component,
    props,
    renderComponentIfAuthenticated,
    redirectRoute
  ) =>
    (
      renderComponentIfAuthenticated
        ? this.state.isAuthenticated
        : !this.state.isAuthenticated
    ) ? (
      <Component {...props} />
    ) : (
      <Redirect to={redirectRoute} />
    );

  render() {
    return (
      <Router>
        <div className="App">
          <SimpleStorage parent={this} />
          <Header
            isAuthenticated={this.state.isAuthenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Posts
                  posts={this.state.posts}
                  deletePost={this.deletePost}
                  isAuthenticated={this.state.isAuthenticated}
                />
              )}
            />
            <Route
              path="/post/:postSlug"
              render={(props) => {
                const post = this.state.posts.find(
                  (post) => post.slug === props.match.params.postSlug
                );
                if (post) return <Post post={post} />;
                else return <NotFound />;
              }}
            />
            <Route
              exact
              path="/login"
              render={() =>
                this.renderAuthRoute(
                  Login,
                  { onLogin: this.onLogin },
                  false,
                  "/"
                )
              }
            />
            <Route
              exact
              path="/new"
              render={() =>
                this.renderAuthRoute(
                  PostForm,
                  {
                    post: {
                      key: null,
                      slug: "",
                      title: "",
                      content: "",
                    },
                    addNewPost: this.addNewPost,
                  },
                  true,
                  "/"
                )
              }
            />
            <Route
              path="/edit/:postSlug"
              render={(props) => {
                const post = this.state.posts.find(
                  (post) => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return this.renderAuthRoute(
                    PostForm,
                    {
                      post,
                      updatePost: this.updatePost,
                    },
                    true,
                    "/login"
                  );
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
