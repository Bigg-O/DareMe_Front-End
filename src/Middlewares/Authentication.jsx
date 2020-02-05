import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

export class Authentication extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      // GET request to backend using JWT key to retrieve data
      axios
        .get("http://localhost:3000/dares", {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        })
        .then(response => {
          this.props.onDataLoad(response.data.dares);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { currentUser, children } = this.props;
    if (currentUser !== null) return children;
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
