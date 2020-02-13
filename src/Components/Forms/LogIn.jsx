import React, { Component } from "react";
import { Image, Container, Alert } from "react-bootstrap";
import Logo from "../../Images/DareMe_Logo.png";
import "../css/LogIn.css";
import { Link, Redirect } from "react-router-dom";
import LogInForm from "./LogInForm";

export class LogIn extends Component {
  render() {
    if (localStorage.getItem("JWT")) {
      return <Redirect to="/" />;
    } else
      return (
        <Container fluid className="login-container">
          <Alert variant="secondary">
            Username: Test-Man
            <br />
            PW: Test1234
          </Alert>

          <Image className="login-logo" src={Logo} fluid />

          <LogInForm onSubmit={this.props.onUserDataLoad} />

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
