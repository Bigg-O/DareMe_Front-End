import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";

export class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      //GET request to backend using JWT key to log in
      // fetch(url, {
      //   headers: {
      //     Authorization: `Bearer ${jwt}`
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
    if (!this.state.currentUser) return <h1>Loading...</h1>;
    else return this.props.children;
  }
}

export default withRouter(Authorization);
