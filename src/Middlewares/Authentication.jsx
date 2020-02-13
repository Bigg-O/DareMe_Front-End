import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Authentication extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else this.props.onDareDataLoad();
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
