import React from "react";

const Login = (props) => (
  <form>
    <label>
      Name:
      <input type="text" name="name" onChange={props.updateUserName} />
    </label>
    <input onClick={props.handleLoginClick} type="submit" value="Login" />
  </form>
);

export default Login;
