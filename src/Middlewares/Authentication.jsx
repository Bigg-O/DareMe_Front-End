import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: true
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      //GET request to backend using JWT key to log in
      // fetch(url, {
      //   headers: {
      //     Authentication: `Bearer ${jwt}`
      //   }
      // })
      //   .then(result =>
      //     this.setState({
      //       currentUser: result.data
      //     })
      //   )
      //   // if failed loging in going back to login page
      //   .catch(err => {
      //     localStorage.removeItem("JWT");
      //     this.props.histoy.push("/login");
      //   });
    }
  }

  render() {
    if (this.state.currentUser)
      return this.props.children;
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
