import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    userName: "Name",
  };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <Header userName={this.state.userName} />
          <Content />
          <Footer />
        </>
      );
    } else {
      return (
        <Login
          handleLoginClick={this.handleLoginClick}
          updateUserName={this.updateUserName}
        />
      );
    }
  }
}

export default App;
