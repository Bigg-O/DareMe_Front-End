import React, { Component } from "react";
import "./css/SignUp.css";
import Logo from "../Images/DareMe_Logo.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export class SignUp extends Component {
  
  handleSubmission = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <Container className="signup-container">
        <Image className="login-logo" src={Logo} fluid />

        <h1 className="signup-desc">Create an Account!</h1>

        <SignUpForm onSubmit={this.handleSubmission} />

        <p className="b2-login">
          Actually I have an account, back to{" "}
          <Link className="login-link" to="/login">
            Log-in
          </Link>
        </p>
      </Container>
    );
  }
}

export default SignUp;
