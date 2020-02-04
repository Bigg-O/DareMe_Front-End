import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

export class Authentication extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      // GET request to backend using JWT key to log in
      axios
        .get("http://localhost:3000/dares", {
          headers: {
            authentication: `Bearer ${jwt}`
          }
        })
        .then(result => {
          console.log(result);
        })
        // if failed loging in, going back to login page
        // .catch(err => {
        //   localStorage.removeItem("JWT");
        //   this.props.histoy.push("/login");
        // });
    }
  }

  render() {
    const { currentUser, children } = this.props;
    if (currentUser) return children;
    else
      return (
        <div>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
          <h1>LOADING</h1>
        </div>
      );
  }
}

export default withRouter(Authentication);
