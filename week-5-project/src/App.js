import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Hello React",
        content: "Lorem.",
      },
      {
        id: 2,
        title: "Hola Project",
        content: "Tothe.",
      },
      {
        id: 3,
        title: "Hola Blog",
        content: "Ipsum.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
