import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import Logo from "../../Images/DareMe_Logo.png";
import "../css/LogIn.css";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";

export class LogIn extends Component {
  handleSubmission = e => {
    e.preventDefault();
    console.log(e);

    // Make Post request to backend and store JWT key to local storage
    // fetch(url, {
    //   username: e.target,
    //   password: e.target
    // }).then(result => {
    //   localStorage.setItem("JWT", result.data);
    //   this.props.history.push('AuthComp')
    // });
  };

  render() {
    return (
      <Container fluid className="login-container">
        <Image className="login-logo" src={Logo} fluid />

        <LogInForm onSubmit={this.handleSubmission} />

        <p className="sign-up">
          Sign up for free!{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </Container>
    );
  }
}

export default LogIn;
